import axios from "axios";
import useAxiosV2 from "~/composables/useAxiosV2";

export default defineEventHandler(async (event) => {

    // axios.post('');

    const { isProduction } = useRuntimeConfig();

    

    return {
        foo:'hello world' + isProduction ,
    }
});