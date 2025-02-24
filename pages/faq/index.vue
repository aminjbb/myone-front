<template>
  <div class="faq px-md-15 mx-md-10 py-md-15 my-8 px-5" >
    <div class="faq--head">
      <span class="text-Primarydarken3">
        سوالات متداول
      </span>
    </div>
    <div class="faq--desc mt-4">
      <span class="text-Graylighten1">
       به مشکل خورده‌اید؟ ما اینجا هستیم تا به تمامی سوالات شما پاسخ دهیم و همه چیز را برای شما ساده‌تر کنیم.
      </span>
    </div>
    <v-row justify="start" class="mt-10">

      <v-col cols="12" md="6" v-for="(item , index) in detail" :key="`faq-${index}`">
        <div class="d-flex">
          <div class="faq--avatar">
            <img :src="item?.file?.path" alt="">
          </div>
          <div class="mr-4">
            <p class="faq--title text-Graydarken1">
              {{ item?.title }}
            </p>
            <p class="faq--description text-Graylighten2 mt-3">
              {{item?.description}}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Faq from '~/composables/Faq.js'
export default {
  setup(){
    const {detail} = new Faq()
    return {detail}
  }
}
</script>