/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const memebers = ref(null);
    const loading = ref(true)
    const route = useRoute()

    const runtimeConfig = useRuntimeConfig()
    useAsyncData(async ()=>
        await    axios
            .get(`${runtimeConfig.public.apiBase}v4/member/staff/list?count=6`
            )
            .then((response) => {
                memebers.value = response?.data?.data;
            })
            .catch((err) => {
            })
    )


    return { memebers}
}