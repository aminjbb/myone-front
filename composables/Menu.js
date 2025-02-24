/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const menu = ref([]);
    const loading = ref(true)
    const route = useRoute()

    const runtimeConfig = useRuntimeConfig()

    async function getMenu() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/category/content/list`
            )
            .then((response) => {
                menu.value = response?.data?.data;
            })
            .catch((err) => {
            })
    };


    return { menu , getMenu }
}