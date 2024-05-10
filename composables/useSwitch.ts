export default function foo () {

    const baseURL = ref(true ?  "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app" : "http://localhost:3001")  ;
    
    return baseURL ;
}