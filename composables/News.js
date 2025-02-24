/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const detail = ref(null);
    const loading = ref(true)
    const route = useRoute()

    const runtimeConfig = useRuntimeConfig()
    useAsyncData(async ()=>
        await    axios
            .get(`${runtimeConfig.public.apiBase}v4/content/blogs/list?count=100&full=true`
            )
            .then((response) => {
                detail.value = response?.data?.data;
            })
            .catch((err) => {
            })
    )


    return { detail}
}