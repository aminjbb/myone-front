<template>
<div :class="lang === 'en' ? 'd-ltr' :''">
  <headerPage :lang="lang"/>

  <div class="service px-md-15 mx-md-10 py-md-15 my-8 px-5" >
    <div class="service--head">
      <span class="text-Primarydarken3">
خدمات گروه مای‌وان      </span>
    </div>
    <div class="service--desc mt-4">
      <span class="text-Graylighten1">
در گروه مای‌وان، ما خدمات جامع خودرویی را برای پاسخگویی به تمام نیازهای شما ارائه می‌دهیم. خدمات ما شامل اطلاعات دقیق خودرو، فهرستی شفاف از قیمت‌ها، و سیستمی آسان برای برنامه‌ریزی وقت ملاقات است. چه به دنبال بررسی گزینه‌های خودرو، مقایسه قیمت‌ها، یا رزرو وقت برای خدمات باشید، گروه MyOne تجربه‌ای روان و کارآمد را برای تمامی نیازهای خودرویی شما تضمین می‌کند.      </span>
    </div>
    <v-row class="mt-15">
      <v-col md="6" cols="12" v-for="(item , index) in detail">
        <div :class="`service--card${index+1}`" v-if="index <=4">
          <div class="pa-md-6 pa-3">
            <p :class="`service--card${index+1}--title text-PrimaryMain`">
              {{item?.title }}
            </p>
            <p :class="`service--card${index+1}--description text-Primarylighten2 mt-md-3`">
              {{item?.description}}
            </p>
          </div>
          <div :class="`service--card${index+1}--image`">
            <img :src="item?.file?.path">
          </div>
        </div>
        <div :class="`service--card1`" v-else>
          <div class="pa-md-6">
            <p :class="`service--card1--title text-PrimaryMain`">
              اطلاعات خودرو
            </p>
            <p :class="`service--card1--description text-Primarylighten2 mt-md-3`">
              ما اطلاعات دقیق و به‌روز درباره هر خودرو، از جمله مشخصات، امکانات، جزئیات عملکرد و گزینه‌های موجود را ارائه می‌دهیم. هدف ما این است که با ارائه تمامی جزئیات ضروری درباره خودروهای موجود، به شما کمک کنیم تصمیمی آگاهانه بگیرید.
            </p>
          </div>
          <div :class="`service--card1--image`">
            <img src="@/assets/images/servicepage.png">
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  <footerPage :lang="lang"/>
</div>

</template>

<script>
import Service from '~/composables/Service.js'
import footerPage from "~/components/public/footer.vue";
import headerPage from "~/components/public/header.vue";
export default {
  components: {headerPage, footerPage},
  setup(){
    const {detail , lang} = new Service();
    return {detail , lang}
  },
  data() {
    return {
      cardClass:[
          'service--card1',
          'service--card2',
          'service--card3',
          'service--card4',
          'service--card5',
      ]
    }
  }
}
</script>