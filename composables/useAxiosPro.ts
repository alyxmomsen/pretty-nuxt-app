import axios, { Axios, AxiosError, AxiosHeaders, type AxiosInterceptorOptions, type AxiosRequestConfig } from "axios";

interface ResponsedData {
    status:boolean , 
    message:string ,
    payload:{
        subject:string ,
        data:{
            type:string ,
            content:any ,
        }
    }|null
}

export default function useaxiospro () {

    const baseURL = useSwitch();

    const url = "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app" ;
    
    return new AxiosPro (baseURL.value , axios) ;
}

class AxiosPro {

    private baseURL:string ;
    private axios:Axios ;

    responsedData = ref<ResponsedData|null>(null) ;
    ifInProcess = ref(false) ;
    ifError = ref(false) ;
    ifResposed = ref(false) ;

    async post(endPoint:string , body:any) {

        this.ifInProcess.value = true ;
        this.ifResposed.value = false ;
        // const config:AxiosRequestConfig = {

        // }

        try {

            const response = await this.axios.post<ResponsedData>(`${this.baseURL}/${endPoint}` , body , {
                headers:{
                    Authorization:null ,
                }
            });

            const data = response.data ;

            console.log('u tried' , data.message);
            this.ifInProcess.value = false ;

            this.responsedData.value = data ;
            

        }
        catch (e) {

            const err = e as AxiosError<ResponsedData>

            this.ifInProcess.value = false ;

            const response =  err.response ;

            console.log('zalupa' , response);

            if(response) {
                this.responsedData.value = response.data ;
            } 

            console.log(e);
        }

        this.ifResposed.value = true ;
        
        
    }

    constructor (baseURL:string , axios:Axios) {

        this.baseURL = baseURL ;
        this.axios = axios ;

    }
}