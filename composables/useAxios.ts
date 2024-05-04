import axios, { AxiosError } from "axios"


interface ResponseData {
    status:boolean ,
    message:string ,
    payload:null|{subject:string}
}

/**
 * 
 * @param port
 * @returns 
 */
export default function useAxiosssss (port:string|number) {

    const url = `http://localhost:${port}` ;
    const responsedData = ref<ResponseData|null>(null);
    const errorSubject = ref<string|null>(null);
    const responseMessage = ref<string|null>(null);
    const custom_response_status = ref<boolean|null>(null);

    async function send_post_request (endpoint:string ,  data:{username:string , email:string , password:string}) {

        errorSubject.value = null ;
        responsedData.value = null ;
        responseMessage.value = null ; 

        const options = {
            
        }

        try {

            const response = await axios.post<ResponseData>(url + endpoint , data , options );
            console.log(response);

            responsedData.value = response.data;
            responseMessage.value = response.data.message ;
            custom_response_status.value = response.data.status ;

            
        }
        catch (err) {

            const error = err as AxiosError ; 

            console.log('it s error');

            if(error.response) {

                const data = error.response.data as {status:boolean , message:string , payload:null|{subject:string}}

                if(data){
                    const payload = data.payload ;

                    if(payload) {

                        console.log('error subject sat');
                        errorSubject.value = payload.subject  ;
                    }

                    responseMessage.value = data.message ;
                    custom_response_status.value = data.status ;               
                 }
            }


        }
    }

    return {
        data: responsedData ,
        errorSubject ,
        responseMessage ,
        custom_response_status ,
        send_post_request ,
    }
}