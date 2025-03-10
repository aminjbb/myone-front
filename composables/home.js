/**
 * Home composable
 */
import { ref} from 'vue';
import axios from "axios";
import {useStore} from 'vuex'
import {useRoute} from "vue-router";

export default function setup() {
    const HomeBannerList = ref([]);
    const HomeProductLists = ref([]);
    const servicesList = ref([]);
    const partnerList = ref([]);
    const newsList = ref([]);
    const route = useRoute();
    const loading = ref(true)
    const runtimeConfig = useRuntimeConfig()
    const lang = route.query.lang === 'en'? 'en' :'fa';
    const store = useStore()
    const structureData =[
        {
            "@context": "http://schema.org/",
            "@type": "Corporation",
            "name": "مای وان",
            "url": "https://sabalankhodro.com",
            "id":"https://sabalankhodro.com",
            "alternateName":["مای وان","Sabalan Khodro Mayvan"],
            "legalName":"Sabalan Khodro Mayvan",
            "email":"info@sabalankhodro.com",
            "sameAs":[
               
            ],
            "logo":{
                "@type":"",
                "inLanguage":"fa-IR",
                "url":`https://sabalankhodro.com/Sign192.png`,
                "contentUrl":`https://sabalankhodro.com/Sign192.png`,
                "width":192,
                "height":192,
                "caption":"فروشگاه مای وان"
            },
            "contactPoint":{
                "@type":"ContactPoint",
                "telephone":"021-44991780",
                "contactType":"customer service",
                "areaServed":"IR",
                "availableLanguage":"Persian",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Tehran, Kilometer 17 of the Special Road,Darou Pakhsh Boulevard, Ordibehesht 2nd Street  ",
                    "addressLocality": "Tehran",
                    "addressRegion": "Tehran",
                    "postalCode": "1397145118",
                    "addressCountry": "Iran, Islamic Republic of",
                    "areaServed":{
                        "@context":"https://schema.org",
                        "@type":"Place",
                        "geo": "",
                        "hasMap":'https://maps.app.goo.gl/jPviUNqahqmVHpY96',
                        "addressCountry":{"@type":"Country","name":"Iran"}
                    }
                },
            },
        },
        {
            "@context":"https://schema.org",
            "@type":"WebSite",
            "url": "https://sabalankhodro.com",
            "id":"https://sabalankhodro.com",
            "name": "مای وان",
            "potentialAction":{
                "@type":"SearchAction",
                "target":"https://shavaz.com/search?needl={search_term_string}",
                "query-input":{
                    "@type":"PropertyValueSpecification",
                    "valueRequired":"http://schema.org/True",
                    "valueName":"search_term_string",
                }
            },
            "copyrightHolder":{
                "@type":"Corporation",
                "id":"https://sabalankhodro.com",
                "name":"مای وان"
            }
        }

    ]
    useHead({
        script:[
            {
                type: 'application/ld+json',
                children: JSON.stringify(structureData)
            } ,
        ]
    })
    async function getBanners() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/slider/list`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                HomeBannerList.value = response?.data?.data;
            })
            .catch((err) => {
            });
    };
    async function productList() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/content/products/list?full=false&count=6`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                HomeProductLists.value = response?.data?.data;
            })
            .catch((err) => {
            });
    };
    async function getServicesList() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/entities/service/list?count=6`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
               servicesList.value = response?.data?.data;
            })
            .catch((err) => {
            });
    };
    async function getPartnerList() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/member/partner/list?count=6`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                partnerList.value = response?.data?.data;
            })
            .catch((err) => {
            });
    };
    async function getNewsList() {
        axios
            .get(`${runtimeConfig.public.apiBase}v4/content/blogs/list?count=6`,{
                headers: {
                    "Accept-Language": lang
                }
                }
            )
            .then((response) => {
                newsList.value = response?.data?.data;
            })
            .catch((err) => {
            });
    };

    return { HomeBannerList  , getBanners , HomeProductLists,  productList, getServicesList , servicesList
            , partnerList , getPartnerList , getNewsList , newsList , lang }
}
