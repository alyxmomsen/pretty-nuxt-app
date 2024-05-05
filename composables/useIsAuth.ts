import axios, { type AxiosError, type AxiosResponse } from "axios"

interface ResponseData {
    status:boolean ,
    message:string ,
    payload:null|{subject:string , content:{
        type:string ,
        data:any ,
    }}
}

export default function f () {
    // const a = Array(100).fill(0).map(elem => Math.floor(Math.random() * 2))
    const random = () => Math.floor(Math.random() * 2) ;
    const ifAuth = ref(random()); 




    const axiosResponse = ref<null|AxiosResponse>(null);
        
    

    async function isAuth () {

        const response = ref<null|AxiosResponse>(null);

        try {

            response.value = await axios.get<ResponseData>('http://localhost:3001/api/auth-chek');

            // console.log({data}); 

            axiosResponse.value = response.value ;
    
        }
        catch (err) {
    
            const { response:r } = err as AxiosError ;
    
            if(r) {
                response.value = r ;
                axiosResponse.value = r ;
            }
        }

        if(response.value) {

            console.log(response.value);
            // alert();
        }

    }


    return {
        ifAuth ,
        isAuth , 
        axiosResponse,
    }
}