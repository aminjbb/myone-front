<template>
  <div class="mt-15 " data-aos="fade-down">
    <div>
      <div class="text-center our-services--title">
      <span class="text-Primarydarken3" v-if="lang ==='fa'">
        خدمات ما
      </span>
        <span class="text-Primarydarken3" v-else>
         Our Services
        </span>
      </div>
      <div class="text-center mt-2 mb-8 text-center our-services--second-title">
        <p class=" text-Primarydarken3" v-if="lang==='fa'">
          راهکارهایی بی‌رقیب برای هر مسیر، طراحی شده بادقت و ظرافت
        </p>
        <p class=" text-Primarydarken3" v-else>
          Exceptional Solutions for Every Drive, Crafted with Precision and Care
        </p>
      </div>
    </div>
    <div>

      <div class="our-services--news-section">
        <div :class="serviceClassList[index]" v-for="(item , index) in servicesList">
          <img :src="item?.file?.path" alt="">
          <div class="our-services--title-section-big pa-6">
            <span class="text-white">
              {{ item?.title }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import seviceCard from '@/components/home/seviceCard.vue'

export default {
  data() {
    return {
      serviceClassList: [
        'our-services--news-item1',
        'our-services--news-item2',
        'our-services--news-item3',
        'our-services--news-item4',
        'our-services--news-item5',
        'our-services--news-item6',
        'our-services--news-item7',
        'our-services--news-item8',
        'our-services--news-item9',

      ]
    }
  },
  props: {
    servicesList: [],
    lang:'fa'
  },
  components: {
    seviceCard
  },

}
</script>