import axios, { type AxiosError, type AxiosResponse } from "axios";

interface ResponseData {
  status: boolean;
  message: string;
  payload: null | {
    subject: string;
    content: {
      type: string;
      data: any;
    };
  };
}

const url = "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app" ;

export default function foo() {
  const isAuth = ref<boolean>(false);

  async function checkIfAuth() {
    // isAuth.value = false ;

    let response: AxiosResponse | null = null;

    const token = localStorage.getItem("my_access_token");

    // if(!token) return response ;

    const m = "hello from axios";

    console.log(m, token);

    try {
      response = await axios.get<ResponseData>(
        `${url}/api/auth-check`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      isAuth.value = true;
    } catch (err) {
      const { response: r } = err as AxiosError<ResponseData>;

      if (r) {
        const data = r.data;

        console.log({ data });

        response = r;

        if (data.status) {
          isAuth.value = true;
        } else {
          isAuth.value = false;
        }
      } else {
        isAuth.value = false;
      }
    }

    // console.log({response});

    return isAuth.value;
  }

  return {
    checkIfAuth,
    isAuth,
  };
}
