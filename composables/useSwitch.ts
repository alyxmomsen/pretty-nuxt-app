export default function foo () {

    const baseURL = ref(false ?  "https://epress-rest-server-ror-pretty-nuxt-app.vercel.app" : "http://localhost:3001")  ;

    return baseURL ;
}