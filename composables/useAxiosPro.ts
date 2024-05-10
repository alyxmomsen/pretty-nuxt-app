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

    return new AxiosPro (baseURL.value , axios) ;
}

type paramsString = [string , string]; 


class AxiosPro {

    private baseURL:string ;
    private axios:Axios ;

    responsedData = ref<ResponsedData|null>(null) ;
    ifInProcess = ref(false) ;
    ifError = ref(false) ;
    ifFinite = ref(false) ;

    async post(endPoint:string , body:any) {

        this.ifInProcess.value = true ;
        this.ifFinite.value = false ;

        // const config:AxiosRequestConfig = {
    
        // }
    
        try {
    
            const response = await this.axios.post<ResponsedData>(`${this.baseURL}/${endPoint}` , body , {
                headers:{
                    Authorization:null ,
                }
            });
    
            const data = response.data ;
    
            this.responsedData.value = data ;
            
    
        }
        catch (e) {
    
            const err = e as AxiosError<ResponsedData>
    
            const response =  err.response ;
    
            console.log('dickhead' , response);
    
            if(response) {
    
                
                this.responsedData.value = response.data ;
            }
            else {
    
                this.responsedData.value = null ;
            }
    
            console.log(e);
        }
    
        this.ifFinite.value = true ;
        this.ifInProcess.value = false ;
        
    }

    

    async delete(endPoint:string , paramsString:paramsString[]) {



        try {
            const response = await axios.delete<ResponsedData>(`${this.baseURL}/${endPoint}` , {
                data:{
                    hell:'yeah' ,
                }
            });

            console.log(response.data) ;

            const data = response.data ;
            this.responsedData.value = data ;

        }
        catch (e) {
            const err = e as AxiosError<ResponsedData>

            if(err.response) {

                const response = err.response ;
                const data = response.data ;
                this.responsedData.value = data ;
            }
            else {

                console.log('no response');
                this.responsedData.value = null ;

            }

        }

        this.ifInProcess.value = false ;
        this.ifFinite.value = true ;



    }

    

    

    constructor (baseURL:string , axios:Axios) {

        this.baseURL = baseURL ;
        this.axios = axios ;

    }
}

