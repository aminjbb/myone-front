
/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";
import {useRoute} from "vue-router";


export default function setup() {
    const detail = ref(null);
    const goals = ref([]);
    const strategy = ref([]);
    const brands = ref([]);
    const socialResponsibility = ref([]);
    const customer = ref([]);
    const loading = ref(true)
    const route = useRoute()

    const runtimeConfig = useRuntimeConfig()
    useAsyncData(
        async ()=>{
            const getItems = new Promise(async (resolve,reject)=>{
                            axios
                            .get(`${runtimeConfig.public.apiBase}v4/section/about/details`
                            )
                            .then((response) => {
                                resolve(response?.data?.data)
                                detail.value = response?.data?.data;
                            })
                            .catch((err) => {
                            })

                               axios
                                .get(`${runtimeConfig.public.apiBase}v4/entities/goals/list?count=2`
                                )
                                .then((response) => {
                                    resolve(response?.data?.data)
                                    goals.value = response?.data?.data;
                                })
                                .catch((err) => {
                                })
                                axios
                                .get(`${runtimeConfig.public.apiBase}v4/entities/strategy/list?count=6`
                                )
                                .then((response) => {
                                    resolve(response?.data?.data)
                                    strategy.value = response?.data?.data;
                                })
                                .catch((err) => {
                                })
                                axios
                                .get(`${runtimeConfig.public.apiBase}v4/brand/list?count=4`
                                )
                                .then((response) => {
                                    resolve(response?.data?.data?.data)
                                    brands.value = response?.data?.data?.data;
                                })
                                .catch((err) => {
                                })
                                axios
                                .get(`${runtimeConfig.public.apiBase}v4/entities/socialResponsibility/list?count=3`
                                )
                                .then((response) => {
                                    resolve(response?.data?.data)
                                    socialResponsibility.value = response?.data?.data;
                                })
                                .catch((err) => {
                                })
                                axios
                                .get(`${runtimeConfig.public.apiBase}v4/member/customer/list?count=6`
                                )
                                .then((response) => {
                                    resolve(response?.data?.data)
                                    customer.value = response?.data?.data;
                                })
                                .catch((err) => {
                                })
            })
        }
    )


    return { detail , goals , strategy , brands ,socialResponsibility , customer}
}