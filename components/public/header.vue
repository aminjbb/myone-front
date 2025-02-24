<template>
  <div class="position-relative z-1000">
    <div class="top-header px-14 d-md-flex d-none">
      <div class="top-header--search position-relative">
        <span class="text-Graylighten3 t14 w400" @click="openSearch()">جستجو</span>
        <span><img src="~/assets/images/icones/searchGray.svg" alt="" width="16" height="16" class="ma-1 mt-4"></span>
        <div class="search" id="search" >
          <v-text-field @keyup="searchMethod()" v-model="searchText" density="compact" class="search-text" clearable clear-icon="mdi-close"></v-text-field>
          <div class="search-box" >
            <div>
              <span class="text-white">
                نتایج برتر
              </span>
              <p class="text-Graylighten2">
                شاید عبارت مورد نظرت رو اینجا پیدا کنی
              </p>
            </div>
            <div class="d-flex flex-wrap ga-3 mt-3">
              <div class="search-badge" v-for="item in search">
                <span class="text-white t14 w400">اتوبوس آرتا</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <img src="~/assets/images/logo.png" alt="">
      </div>
      <div class="top-header--search">
        <span class="t12 w300 text-Graylighten3">فارسی</span>
        <span class="t12 w300 text-Graylighten3">
          <div class="px-3 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
            <path d="M1 1V21" stroke="#85868E" stroke-width="0.5" stroke-linecap="round"/>
          </svg>
          </div>
        </span>
        <span class="t12 w300 text-Graylighten3">انگلیسی</span>
      </div>
    </div>
    <div class="header-menu px-10 d-md-flex d-none">

      <div class="d-flex align-center " @mouseover="showMenu = true" >
        <span class="t16 w500 text-Graylighten5">
          ماشین‌ها
        </span>
        <div class="pt-2">
          <img src="~/assets/images/icones/downChevron.svg" alt="">
        </div>
      </div>
      <div @mouseover="showMenu = false" >
        <span class="t16 w500 text-Graylighten5">
          اخبار
        </span>
      </div>
      <div @mouseover="showMenu = false">
        <span class="t16 w500 text-Graylighten5">
          تیم ما
        </span>
      </div>
      <div @mouseover="showMenu = false">
        <span class="t16 w500 text-Graylighten5">
          ارتباط با ما
        </span>
      </div>
      <div @mouseover="showMenu = false">
        <span class="t16 w500 text-Graylighten5">
          درباره ما
        </span>
      </div>
    </div>
    <div class="header-menu-mobile px-10 d-md-none d-flex">
      <div class="mt-2 " @click="drawer=true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 7H17M1 1H17M1 13H17" stroke="#BCBACC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="mt-2">
        <div>
          <img src="~/assets/images/logo.png" alt="" width="30" height="30">
        </div>
      </div>
      <div>
        <img src="~/assets/images/icones/searchGray.svg" alt="" width="20" height="20" class="ma-1 mt-4">
      </div>
    </div>
    <div class="mega-menu" :class="showMenu ? 'd-block' : 'd-none'" @mouseleave="showMenu = false">
      <div class="mega-menu--items">
        <div class="mega-menu--items--select">

          <div class="mt-9 mr-8 ml-3">
            <div class="mega-menu--items--select--item " :class="activeMenu === index ? 'mega-menu--items--select--active' : ''"
            @mouseover="activeMenu = index" v-for="(item ,index) in menu">
              <span>{{ item?.name }}</span>
              <img src="~/assets/images/icones/leftChevronWhite.svg" alt="" v-if="activeMenu === 1 ">
            </div>
          </div>
        </div>
        <div>
          <div v-for="(item ,index) in menu">
            <div class="mega-menu--items--selected px-8 py-5" v-if="activeMenu == index" >
              <div v-for="(car , carIndex) in item?.products?.slice(0,6)" >
                <div class="d-flex justify-center">
                  <img width="286" height="190" :src="car?.cover?.path" class="flip-img">

                </div>
                <div class="text-center mt-5">
                <span class="t20 w700 text-SecondaryDarken1">
                  {{car?.title}}
                </span>
                </div>
                <div class="d-flex justify-space-between mt-5 px-10">
                  <nuxt-link :to="`/car/${car?.unique_key}`">
                    <span class="t14 w400 text-SecondaryDarken1 text-decoration-underline">
                     اطلاعات بیشتر
                    </span>
                  </nuxt-link>

                  <nuxt-link :to="`/car/${car?.unique_key}`">
                   <span class="t14 w400 text-SecondaryDarken1 text-decoration-underline">
                        خرید
                   </span>
                  </nuxt-link>
                </div>
              </div>

            </div>

          </div>

        </div>


      </div>
    </div>
    <v-layout>
      <v-navigation-drawer
          v-model="drawer"
          temporary>
        <div>
          <div class="text-center my-5">
            <div class="d-flex justify-center" @click="activeMenuMobile =!activeMenuMobile">
               <span class="text-white t16 w500">
                ماشین‌ها
              </span>
              <div class="">
                <img src="~/assets/images/icones/downChevron.svg" alt="">
              </div>
            </div>
            <div v-if="activeMenuMobile" class="sub-mobile">
              <div class="pa-5 text-right " v-for="(item , index) in menu">
                  <div class="d-flex align-center" @click="activeMenuItemMobile=index">
                    <span>{{item?.name}}</span>
                    <span class="pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74399 6.07748C7.90026 5.92126 8.11219 5.8335 8.33316 5.8335C8.55413 5.8335 8.76605 5.92126 8.92232 6.07748L12.2557 9.41082C12.4119 9.56709 12.4996 9.77901 12.4996 9.99998C12.4996 10.221 12.4119 10.4329 12.2557 10.5892L8.92232 13.9225C8.76515 14.0743 8.55465 14.1583 8.33615 14.1564C8.11766 14.1545 7.90865 14.0668 7.75414 13.9123C7.59963 13.7578 7.51199 13.5488 7.51009 13.3303C7.5082 13.1118 7.59219 12.9013 7.74399 12.7442L10.4882 9.99998L7.74399 7.25582C7.58776 7.09954 7.5 6.88762 7.5 6.66665C7.5 6.44568 7.58776 6.23376 7.74399 6.07748Z" fill="#060511"/>
                    </svg>
                  </span>
                  </div>
                  <div class="car-mobie" v-if="activeMenuItemMobile == index">
                  <div v-for="(car , carIndex) in item?.products?.slice(0,6)" >
                    <div class="d-flex justify-center">
                      <img width="164" height="109" :src="car?.cover?.path" class="flip-img">

                    </div>
                    <div class="text-center mt-5">
                <span class="t16 w600 text-SecondaryDarken1">
                  {{car?.title}}
                </span>
                    </div>
                    <div class="d-flex justify-space-between mt-5 px-2">
                      <nuxt-link :to="`/car/${car?.unique_key}`">
                    <span class="t12 w400 text-SecondaryDarken1 text-decoration-underline">
                     اطلاعات بیشتر
                    </span>
                      </nuxt-link>

                      <nuxt-link :to="`/car/${car?.unique_key}`">
                   <span class="t12 w400 text-SecondaryDarken1 text-decoration-underline">
                        خرید
                   </span>
                      </nuxt-link>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
          <div class="text-center my-5">
            <span class="text-white t16 w500">
              اخبار
            </span>
          </div>
          <div class="text-center my-5">
            <span class="text-white t16 w500">
              تیم
            </span>
          </div>
          <div class="text-center my-5">
            <span class="text-white t16 w500">
              ارتباط با ما
            </span>
          </div>
          <div class="text-center my-5">
            <span class="text-white t16 w500">
             درباره ما
            </span>
          </div>
        </div>
      </v-navigation-drawer>

    </v-layout>
  </div>
</template>

<script>
 import axios from "axios";
  import Menu from '~/composables/Menu.js'
 export default {
   setup(){
     const {menu , getMenu} = Menu()
     return {menu , getMenu}
     const runtimeConfig = useRuntimeConfig()
     return {runtimeConfig}
   },
  data(){
    return {
      showMenu: false,
      activeMenu:0,
      search:[],
      searchText:"",
      searchTime:null,
      isSearch:false,
      drawer:false,
      activeMenuMobile:false,
      activeMenuItemMobile:null
    }
  },
   methods:{
    searchMethod(){
      axios
          .get(`${this.runtimeConfig.public.apiBase}v3/content/search?q=${this.searchText}`
          )
          .then((response) => {
            this.search = response?.data?.data?.product;
          })
          .catch((err) => {
          })
    },
     openSearch(){

      const searchModal = document.getElementById("search");
       if(searchModal.style.display === 'none'){
         searchModal.style.display="block";

       }
       else {
         searchModal.style.display="none";

       }

     },
     closeModal(){
      const searchModal = document.getElementById("search");
      searchModal.style.display="none";

     },
   },
   mounted(){
     this.getMenu()
   }


 }
</script>