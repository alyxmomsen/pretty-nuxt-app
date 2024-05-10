import axios, { AxiosError } from "axios";

interface ResponseData {
  status: boolean;
  message: string;
  payload: null | {
    error_subject: string | null;
    content: { type: string; data: any };
  };
}

/**
 *
 * @param port
 * @returns
 */
export default function useAxiosssss(port: string | number) {
  //   const url_to_vercel =
  // "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app";

  const PRODUCTION_MODE = process.env.PRODUCTION_MODE;

  const url = "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app" ;
    // PRODUCTION_MODE && PRODUCTION_MODE === "true"
    //   ? "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app"
    //   : `http://localhost:${port}`;

  console.log("PRODUCTION_MODE", PRODUCTION_MODE, url);

  const responsedData = ref<ResponseData | null>(null);
  const errorSubject = ref<string | null>(null);
  const responseMessage = ref<string | null>(null);
  const custom_response_status = ref<boolean | null>(null);

  async function checkNotifycations() {
    axios.post(url + "/api/notifycations", {
      headers: {
        Authorization: null,
      },
    });
  }

  async function send_post_request(
    endpoint: string,
    data: { username?: string; email: string; password: string },
  ) {
    errorSubject.value = null;
    responsedData.value = null;
    responseMessage.value = null;

    const options = {};

    try {
      const response = await axios.post<ResponseData>(
        url + endpoint,
        data,
        options,
      );
      //   console.log(response);

      responsedData.value = response.data;
      responseMessage.value = response.data.message;
      custom_response_status.value = response.data.status;
    } catch (err) {
      const error = err as AxiosError;

      //   console.log("it s error" , err);

      if (error.response) {
        // console.log('error.response' ,error.response);
        const data = error.response.data as {
          status: boolean;
          message: string;
          payload: null | {
            subject: string | null;
            content: { type: string; data: any };
          };
        };

        // console.log('data' , data);

        if (data) {
          const payload = data.payload;

          if (payload) {
            console.log("error subject sat");
            errorSubject.value = payload.subject;
          }

          responsedData.value = {
            message: data.message,
            status: data.status,
            payload: data.payload
              ? {
                  content: data.payload.content,
                  error_subject: data.payload.subject,
                }
              : null,
          };
          responseMessage.value = data.message;
          custom_response_status.value = data.status;
        }
      }
    }

    // if response contain the jwt token, then save this into LocalStorage

    if (responsedData.value) {
      const respnsed_data = responsedData.value;

      if (respnsed_data) {
        if (respnsed_data.status) {
          if (respnsed_data.payload) {
            if (respnsed_data.payload.content.type === "access_token") {
              localStorage.setItem(
                "my_access_token",
                respnsed_data.payload.content.data,
              );

              // console.log("local storage", localStorage);
            }
          }
        }
      }
    }
  }

  return {
    data: responsedData,
    errorSubject,
    responseMessage,
    custom_response_status,
    send_post_request,
  };
}
