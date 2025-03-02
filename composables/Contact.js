/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const agent = ref([]);
    const loading = ref(true)
    const route = useRoute()
    const lang = route.query.lang === 'en'? 'en' :'fa';

    const runtimeConfig = useRuntimeConfig()
    useAsyncData(async ()=>
        await    axios
            .get(`${runtimeConfig.public.apiBase}v4/member/agent/list?count=100`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                agent.value = response?.data?.data;
            })
            .catch((err) => {
            })
    )


    return { agent , lang}
}