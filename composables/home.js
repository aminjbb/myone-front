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
            "name": "شاواز",
            "url": "https://shavaz.com/",
            "id":"https://shavaz.com",
            "alternateName":["شاواز","shavaz"],
            "legalName":"سلامت آوران یزدان نفیس",
            "email":"Info@shavaz.com",
            "sameAs":[
                "https://twitter.com/ShavazCom",
                "https://www.linkedin.com/company/shavaz/about",
                "https://t.me/shavazcomm",
                "https://www.youtube.com/channel/UCh1GzMPHJXoIvTP9DtUli4",
                "https://www.instagram.com/shavazcom"
            ],
            "logo":{
                "@type":"ImageObject",
                "inLanguage":"fa-IR",
                "url":`${runtimeConfig.public.siteUrl}/Sign192.png`,
                "contentUrl":`${runtimeConfig.public.siteUrl}/Sign192.png`,
                "width":192,
                "height":192,
                "caption":"فروشگاه اینترنتی شاواز"
            },
            "contactPoint":{
                "@type":"ContactPoint",
                "telephone":"021-91552343",
                "contactType":"customer service",
                "areaServed":"IR",
                "availableLanguage":"Persian",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "No. 18, corner of Shahid Akbar Asgharzadeh alley, Shahid Mohsen Yaqoubi St.",
                    "addressLocality": "Tehran",
                    "addressRegion": "Tehran",
                    "postalCode": "1484633439",
                    "addressCountry": "Iran, Islamic Republic of",
                    "areaServed":{
                        "@context":"https://schema.org",
                        "@type":"Place",
                        "geo": {"@type":"GeoCoordinates","latitude":"35.72814946987037","longitude":"51.290000176638316"},
                        "hasMap":'https://maps.app.goo.gl/jPviUNqahqmVHpY96',
                        "addressCountry":{"@type":"Country","name":"Iran"}
                    }
                },
            },
        },
        {
            "@context":"https://schema.org",
            "@type":"WebSite",
            "url": "https://shavaz.com/",
            "id":"https://shavaz.com",
            "name": "شاواز",
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
                "id":"https://shavaz.com/",
                "name":"شاواز"
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