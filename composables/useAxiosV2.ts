
export default function useAxiosV2 () {
    
    const helloworld = ref('hello from axios v2');

    return () => helloworld.value ;
}