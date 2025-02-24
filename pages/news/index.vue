<template>
  <div>
    <div class="news-banner">
      <div class="text-center">
        <span class="news-banner--title text-white">
          آخرین اخبار در گروه سبلان
        </span>
      </div>

      <v-row justify="center" align="start" class="mt-8">
        <v-col md="6" cols="12">
          <v-row justify="center">
            <v-col cols="11" md="9">
              <div class="news-banner--desc">
                <img :src="firstNews?.cover?.path" />
                <div class="mt-4">
                <span class=" news-banner--desc--date text-Graylighten2">
                 {{firstNews?.created_at_fa }}
                </span>
                </div>
                <div class="mt-2">
                  <h2 class=" news-banner--desc--title text-Graylighten5" >
                    {{firstNews?.title }}
                  </h2>
                </div>
                <div class="mt-2">
                  <p class=" news-banner--desc--desc text-Graylighten4 text-justify" v-html="firstNews?.description" >
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>

        </v-col>
        <v-col md="6" cols="12">
          <div class="px-2 px-md-0" >
            <div class="d-flex justify-start align-center" v-for="(item , index) in detail?.slice(0, 2)">
              <div class="news-image2">
                <img :src="item?.cover?.path" />
              </div>
              <div class="mr-4 news-banner--desc2" >
                <div class="">
                <span class="news-banner--desc--date text-Graylighten2">
                 {{item?.created_at_fa }}
                </span>
                </div>
                <div class="mt-1 mt-md-3">
                  <h2 class="news-banner--desc--title2 text-Graylighten5" >
                    {{item?.title }}
                  </h2>
                </div>
                <div class="mt-1 mt-md-3">
                  <p class="news-banner--desc--desc text-Graylighten4 text-justify" v-html="item?.description" >
                                     </p>
                </div>
              </div>
            </div>
<!--            <div class="d-flex justify-start align-center mt-3 mt-md-8">-->
<!--              <div class="news-image2">-->
<!--                <img src="~/assets/images/news-banner-1.png" />-->
<!--              </div>-->
<!--              <div class="mr-4 news-banner&#45;&#45;desc2" >-->
<!--                <div class="">-->
<!--                <span class="news-banner&#45;&#45;desc&#45;&#45;date text-Graylighten2">-->
<!--                  ۹ دی ۱۴۰۳-->
<!--                </span>-->
<!--                </div>-->
<!--                <div class="mt-1 mt-md-3">-->
<!--                  <h2 class="news-banner&#45;&#45;desc&#45;&#45;title2 text-Graylighten5" >-->
<!--                    حضور قدرتمند شرکت سبلان خودرو در کنفرانس شهریاران-->
<!--                  </h2>-->
<!--                </div>-->
<!--                <div class="mt-1 mt-md-3">-->
<!--                  <p class="news-banner&#45;&#45;desc&#45;&#45;desc text-Graylighten4 text-justify" >-->
<!--                    نمایشگاه ملی شهریران نخستین بار به ابتکار وزارت کشور و سازمان شهرداری ها و دهیاری ...                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </v-col>
      </v-row>
    </div>

    <div class=" mt-9 px-md-15 mx-md-3 mb-4">
      <div>
        <span class="t24 w600 text-TextDarken2">
          اخبار و مقالات
        </span>
        <nuxt-link :to="`/news/${item?.unique_key}`" v-for="(item , index) in detail">
          <div class="news-list">
            <div class="news-card " >
              <div>
                <img :src="item?.cover?.path" />
              </div>
              <div class="px-2">
                <div class="mt-md-4">
              <span class=" news-card--date text-Graylighten2">
                                {{item?.created_at_fa }}

              </span>
                </div>
                <div class="mt-1 mt-md-2">
                  <h2 class="news-card--title text-TextMain">
                    {{item?.title }}
                  </h2>
                </div>
                <div class="mt-2 mt-md-3">
              <span class="t12 w400 news-card--desc text-TextMain" v-html="item?.title ">
              </span>
                </div>
              </div>
            </div>


          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import News from '~/composables/News.js'
export default {
  setup(){
    const {detail} = new News()
    return { detail}
  },

  computed:{
    firstNews(){
      try {
        return this.detail[0]
      }
      catch (error) {
        return '';
      }
    }
  }
}
</script>