<template>
  <div>
    <div class="d-flex justify-center align-center pr-15">
      <div class="about-us-banner">
        <v-row justify="center" align="center">
          <v-col cols="4">
            <p class="t40 w700 text-Primarydarken3 ">
              ما تیم

            </p>
            <p class="t40 w700 text-Primarydarken3">
              مای‌وان هستیم

            </p>
          </v-col>
          <v-col cols="8">
            <div class="d-flex align-center ">
              <p class="t26 w600 text-Primarylighten2 ">{{ aboutUsSection?.title }}</p>
              <div class="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="2" viewBox="0 0 120 2" fill="none">
                  <path d="M1 1H119.5" stroke="#797699" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="mt-3 pl-10">
              <p class="t16 w400 text-Graylighten1 pl-16 ml-16 text-justify" v-html="aboutUsSection?.description">
              </p>
            </div>
          </v-col>
        </v-row>
      </div>

    </div>
    <div class=" mt-15 d-flex justify-center align-center" >
      <img src="~/assets/images/about-us-banner.png">
    </div>

    <div >
      <div class="px-15 mx-10 mt-9" >
        <span class="t24 w700 text-Primarydarken3 ">
          {{ aboutProductSection?.title }}
        </span>
        <p class="mt-4 t14 w400 l26 text-Graylighten1 text-justify" v-html="aboutProductSection?.description">
        </p>
      </div>
    </div>

    <div >
      <div class="px-15 mx-10 mt-9 text-center" >
        <span class="t36 w700 text-Primarydarken3 ">
          {{ aboutMakeSection?.title }}
        </span>

      </div>
    </div>
    <div >
      <div class="px-15 mx-10 mt-9" >
        <div class="d-flex justify-center">
          <p class="t16 w400 text-Graydarken1" v-html="aboutMakeSection.description">
          </p>
        </div>
        <div class="d-flex justify-center mt-8">
          <img src="~/assets/images/about2.png" alt="">
        </div>
      </div>
    </div>

    <div >
      <div class="px-15 mx-10 mt-9 text-center" >
        <span class="t36 w700 text-Primarydarken3 ">
         آینده و اهداف ما
        </span>

      </div>
      <div>
        <v-row justify="center" class="px-15 mx-10 mt-15" v-for="(item , index) in goals" :key="`goals-${index}`">
          <template v-if="index == 0">
            <v-col cols="6">
              <div class="about-us-image-box">
                <img :src="item?.file?.path" alt="">
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-right pr-10 pt-10">
              <span class="t20 w600 text-Graylighten1">
                {{ item?.title }}
              </span>
                <p class="t14 w400 text-Graylighten1 mt-2" v-html="item?.description">
                </p>
              </div>
            </v-col>
          </template>
          <template v-if="index==1">
            <v-col cols="6">
              <div class="text-right pl-10 pt-10">
              <span class="t20 w600 text-Graylighten1">
                {{ item?.title }}
              </span>
                <p class="t14 w400 text-Graylighten1 mt-2" v-html="item?.description">
                </p>
              </div>
            </v-col>
            <v-col cols="6">
              <img :src="item?.file?.path" alt="">
            </v-col>
          </template>



        </v-row>
      </div>
    </div>
    <div >
      <div class="px-15 mx-10 mt-15 text-center" >
        <span class="t36 w700 text-Primarydarken3 ">
        استراتژی سازمانی
        </span>

      </div>
      
      <div class="sterategy-box mt-8">
        <div class="sterategy-box--items">

          <div class="sterategy-box--item" v-for="(item , index ) in strategy" :key="`strategy-${index}`">
            <div class="sterategy-box--item--icon">
              <img :src="item?.file?.path" alt="">
            </div>

            <div class="sterategy-box--item--description w-50 ">
             {{item?.title}}
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="mt-15 pt-10">
      <div class="text-center ">
        <span class="t36 w700 text-Primarydarken3">برندهای ما</span>
      </div>
      <div class="my-9 about-brand">
        <div class="" v-for="(item , index ) in brands" :key="`brand-${index}`">
          <div class="about-brand--logo">
            <img :src="item?.logo?.path" alt="">
          </div>
          <div class="text-center mt-4">
            <span class="t28 w600 text-Primarydarken3 ">{{ item?.name }}</span>
          </div>
        </div>

      </div>
    </div>


    <div class="mt-15 pt-10 px-15 mx-10">
      <div>
        <span class="t24 w600 text-Primarydarken3">
          مسئولیت اجتماعی
        </span>
        {{}}
        <div v-for="(item , index) in socialResponsibility " :key="`socialResponsibility-${index}`">
          <p class="t20 w400 text-Primarydarken2">
            {{ item?.title }}
          </p>
          <p class="t14 w400 text-Graylighten1 mt-2 text-justify" v-html="item?.description">
          </p>
        </div>


      </div>
    </div>


    <div class="mt-15">
      <div class="text-center">
        <span class="t28 w600 text-Primarydarken3 ">
          برخی از مشتریان سبلان خودرو
        </span>
      </div>

      <div class="suppliers-sections">
        <img :src="item?.avatar?.path" alt="" v-for="(item ,index) in customer" :key="`customer-${index}`">

      </div>
    </div>
  </div>
</template>

<script>
import About from '~/composables/About.js'
export default {
  setup(){
    const {detail , goals , strategy , brands ,socialResponsibility ,customer} = new About()
    return {detail , goals , strategy , brands ,socialResponsibility ,customer}
  },
  computed:{
    aboutUsSection(){
      try {
        return this.detail[0];
      }
      catch(e){
        return ''
      }
    },
    aboutProductSection(){
      try {
        return this.detail[1];
      }
      catch(e){
        return ''
      }
    },
    aboutMakeSection(){
      try {
        return this.detail[2];
      }
      catch(e){
        return ''
      }
    },
  }
}
</script>