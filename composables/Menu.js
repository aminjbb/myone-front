/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const menu = ref([]);
    const publicContent = ref(null);
    const loading = ref(true)
    const route = useRoute()
    const lang = route.query.lang === 'en'? 'en' :'fa';

    const runtimeConfig = useRuntimeConfig()

    async function getMenu() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/category/content/list`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                menu.value = response?.data?.data;
            })
            .catch((err) => {
            })
    };
    async function getPublic() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/main/information`,{
                    headers: {
                        "Accept-Language": lang
                    }
                }
            )
            .then((response) => {
                publicContent.value = response?.data?.data;
            })
            .catch((err) => {
            })
    };



    return { menu , getMenu , lang , publicContent , getPublic }
}