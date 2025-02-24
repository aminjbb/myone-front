<template>
  <div>
    <div class="text-center my-15">
      <span class="t32 w700">
        اخبار
      </span>
    </div>

    <div class="news-section">
      <div class=" news-item-center"
           :class="
                    [
                       `news-section--item${index+1}`
                    ]
           " v-for="(item, index) in newsList" >
        <img :src="item?.cover?.path" alt="">
        <div class="news-section--title pa-6">
          <div>
            <span class="t20 w600 text-white">
            {{ item?.title }}
          </span>
            <div>
              <v-btn variant="outlined" color="white" class="px-10 mt-3">
                <span class="t16 w500">
                  مطالعه بیشتر
                </span>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="news-section&#45;&#45;item2 news-item-right" @click="showItem('news-item-right')">-->
<!--        <img src="~/assets/images/newsfull.png" alt="">-->
<!--        <div class="news-section&#45;&#45;title pa-6">-->
<!--          <div>-->
<!--            <span class="t20 w600 text-white">-->
<!--            تضمین کیفیت در کلاس جهانی را در هر خودرو-->
<!--          </span>-->
<!--            <div>-->
<!--              <v-btn variant="outlined" color="white" class="px-10 mt-3">-->
<!--                <span class="t16 w500">-->
<!--                  مطالعه بیشتر-->
<!--                </span>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="news-section&#45;&#45;item3 news-item-left" @click="showItem('news-item-left')">-->
<!--        <img src="~/assets/images/news1.png" alt="">-->
<!--        <div class="news-section&#45;&#45;title pa-6">-->
<!--          <div>-->
<!--            <span class="t20 w600 text-white">-->
<!--            تضمین کیفیت در کلاس جهانی را در هر خودرو-->
<!--          </span>-->
<!--            <div>-->
<!--              <v-btn variant="outlined" color="white" class="px-10 mt-3">-->
<!--                <span class="t16 w500">-->
<!--                  مطالعه بیشتر-->
<!--                </span>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="news-section&#45;&#45;item4 news-item-other">-->
<!--        <img src="~/assets/images/news1.png" alt="">-->
<!--        <div class="news-section&#45;&#45;title pa-6">-->
<!--          <div>-->
<!--            <span class="t20 w600 text-white">-->
<!--            تضمین کیفیت در کلاس جهانی را در هر خودرو-->
<!--          </span>-->
<!--            <div>-->
<!--              <v-btn variant="outlined" color="white" class="px-10 mt-3">-->
<!--                <span class="t16 w500">-->
<!--                  مطالعه بیشتر-->
<!--                </span>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="news-section&#45;&#45;item5 news-item-other">-->
<!--        <img src="~/assets/images/news1.png" alt="">-->
<!--        <div class="news-section&#45;&#45;title pa-6">-->
<!--          <div>-->
<!--            <span class="t20 w600 text-white">-->
<!--            تضمین کیفیت در کلاس جهانی را در هر خودرو-->
<!--          </span>-->
<!--            <div>-->
<!--              <v-btn variant="outlined" color="white" class="px-10 mt-3">-->
<!--                <span class="t16 w500">-->
<!--                  مطالعه بیشتر-->
<!--                </span>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>


<script>
export default {
  props:{
    newsList:[]
  },
  methods: {
    showItem(className){
      let centeredItem = document.querySelector('.news-item-center')
      let centerItem = document.querySelector(`.${className}`)
      centeredItem.classList.remove('news-item-center')
      centeredItem.classList.add(`${className}`)
      // centeredItem.addEventListener('click', this.showItem(className))
      centerItem.classList.add('news-item-center')
      centerItem.classList.remove(`${className}`)
    }
  }
}
</script>