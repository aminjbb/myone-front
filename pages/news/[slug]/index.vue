<template>
  <div :class="lang === 'en' ? 'd-ltr' :''">
    <headerPage/>

    <div class="d-flex justify-center mt-12">
      <div class="news-title">
        <p class="w700">
          {{ detail?.title }}
        </p>
      </div>
    </div>
    <div class="d-flex justify-center mt-6">
      <div class="news-second-title">
        <p class="w400">
          {{ detail?.title }}
        </p>
        <div class="news-second-title--time d-flex align-center justify-center mt-5">
          <span class="w400" v-if="lang === 'fa'">
            {{ detail?.created_at_fa }}
          </span>
          <span class="w400" v-else>
            {{ dateTime}}
          </span>
          <span class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
              <path d="M1 1V16.5" stroke="#70A9A1" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="mx-2">
            {{detail?.data?.time_reading}}
          </span>
          <span class="w400" v-if="lang === 'fa'">
            دقیقه زمان مطالعه
          </span>    <span class="w400" v-else>
           minutes read
          </span>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center mt-6">
      <div class="news-container">
        <div class="news-banner-image">
          <img src="~/assets/images/news-banner-pdp.png">
        </div>

        <div v-html="detail?.description">

        </div>
      </div>
    </div>
    <footerPage/>

  </div>
</template>

<script>
import headerPage from "~/components/public/header.vue";
import footerPage from "~/components/public/footer.vue";
import NewsDetail from "~/composables/NewsDetail.js"
export default {
  setup(){
    const {detail , lang} = new NewsDetail()
    return {detail,lang}
  },
  components: {footerPage, headerPage},

  computed:{
    dateTime(){
      try {
        const temp =this.detail?.created_at?.split(':')
        return `${temp[0]}`
      }
      catch(err){
        return ''
      }
    }
  }
}
</script>