<template>
  <div>
    <v-row class="px-mx-0 px-2">
      <v-col cols="12" md="9">
        <div class="mt-md-11 mb-3">
        <span class=" review-title text-Primarydarken3" v-if="lang === 'fa'">
          بررسی کلی
        </span>
          <span class=" review-title text-Primarydarken3" v-else>
          Overview
        </span>

        </div>
        <div class="review-box">
          <div class="tab-box">
            <div class="tab-box--tab-item" v-for="(item , index) in detail?.tabs" @click="activeTab(index)" :class="tab === index ?'tab-box--tab-active':''">
              {{item?.title }}
            </div>
          </div>
          <div  v-for="(item , index) in detail?.tabs"  >
            <div class="tab-active-general" v-if="tab === index && tab ===0" >
              <div class="tab-active-general--pricing" >
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span v-if="lang==='fa'">
                      قیمت
                    </span>
                    <span v-else>
                      Price
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      {{detail?.data?.price}}
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span v-if="lang==='fa'">
                      سال
                    </span>
                    <span v-else>
                      Year
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      {{ detail?.data?.build_year }}
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span v-if="lang==='fa'">
                      مسافر
                    </span>
                    <span v-else>
                      Passenger
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      {{detail?.data?.passenger}}
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span  v-if="lang==='fa'" >
                      ابعاد
                    </span>
                    <span v-else>
                      Dimension
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      {{ detail?.data?.dimension }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="tab-active-general--detail">
                <v-row>
                  <v-col cols="6" v-for="detailItem in item?.head_details[0]?.main_details">
                    <span class="tab-active-general--detail--item w400">{{ detailItem?.key }}:</span>
                    <span class="tab-active-general--detail--value w500">
                      {{ detailItem?.value }}
                    </span>
                  </v-col>

                </v-row>
              </div>
            </div>
            <div class="tab-active-detail" v-else-if="tab > 0 && tab == index  && item.type !=2" >
              <div v-for="detailItem in item?.head_details">
                <div class="mt-5 mx-4 mb-1">
                <span class="tab-item-title text-Graylighten1">
                 {{ detailItem?.key  }}
                </span>
                </div>
                <div class="tab-active-detail--box">
                  <div class="mb-2" v-for="mainDetail in detailItem?.main_details">
                    <span class="text-Graylighten3 tab-active-detail--box--title">
                      {{ mainDetail?.key }}:
                    </span>
                      <span class="text-Textmain tab-active-detail--box--value">
                        {{ mainDetail?.value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </v-col>
      <v-col cols="12" md="3">
        <div class="mt-md-11 mb-3">
          <span class="car-contact--title text-Primarydarken3" v-if="lang === 'fa'">
           ارتباط با ما
          </span>
          <span class="car-contact--title text-Primarydarken3" v-else>
           Contact Us
          </span>
        </div>
        <div class="contact-us-box">
          <p class=" car-contact--main-title text-Graylighten1 text-justify" v-if="lang === 'fa'">
            اگر به اتوبوس آرتا+ علاقه‌مند هستید و تمایل به دریافت اطلاعات بیشتر دارید، لطفاً فرم زیر را تکمیل کنید تا همکاران ما با شما در تماس باشند.
          </p>
          <p class=" car-contact--main-title text-Graylighten1 text-justify" v-else>
            If you're interested in the CRRC 12-Meter Electric Bus and would like someone to contact you, please complete the form below.
          </p>
          <div class="mt-3">
            <v-text-field :placeholder="lang ==='fa' ? 'نام *' :'First name *'" variant="outlined" density="compact"/>
            <v-text-field :placeholder="lang ==='fa' ? 'نام خانوادگی *' :'Last name *'" variant="outlined" density="compact"/>
            <v-text-field :placeholder="lang ==='fa' ? 'شماره تماس *' :'Phone number *'" variant="outlined" density="compact"/>
            <v-text-field :placeholder="lang ==='fa' ? 'استان/شهر *' :'Province / City *'" variant="outlined" density="compact"/>
            <v-text-field :placeholder="lang ==='fa' ? 'صنعت ' :'Industry'" variant="outlined" density="compact"/>
            <v-text-field :placeholder="lang ==='fa' ? 'شغل ' :'Occupation'" variant="outlined" density="compact"/>
            <div class="mt-14">
              <v-btn block color="PrimaryMain" class="br--8" height="48">
                  <span class="t16 w600" v-if="lang === 'fa'">ثبت</span>
                  <span class="t16 w600" v-else>Submit</span>
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props:{
    detail:null,
    lang:'fa'

  },
  data(){
    return{
      tab:0
    }
  },
  methods:{
    activeTab(index){
      this.tab = index;
    }
  }
}
</script>