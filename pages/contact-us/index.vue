<template>
<div>
  <div>
    <headerPage/>

    <v-row justify="center" align="center">
      <v-col md="5" cols="12" class="">
        <div class="contact-us-banner">
          <div class="contact-us-banner--info">
            <div class="pt-6 px-8">
              <span class=" text-TextDarken2 contact-us-banner--info--title">اطلاعات تماس</span>
            </div>
            <div class="px-8 pl-15 mt-3 d-flex justify-start align-center">
              <span><img src="~/assets/images/icones/mapGray.svg"></span>
              <span class=" text-TextMain mr-3 contact-us-banner--info--address">
                تهران، جاده کرج، کیلومتر ۱۷، خیابان داروپخش، خیابان اردیبهشت ۲، شماره ۳
              </span>
            </div>
            <div class="px-8 pl-15 mt-3 d-flex justify-start align-center">
              <span><img src="~/assets/images/icones/mailGray.svg"></span>
              <span class="contact-us-banner--info--address text-TextMain mr-3">
                info@myoneholding.com
              </span>
            </div>
            <div class="px-8 pl-15 mt-3 d-flex justify-start align-center">
              <span><img src="~/assets/images/icones/phoneGray.svg"></span>
              <span class="contact-us-banner--info--address text-TextMain mr-3">
                021-44985257-8
              </span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="7" cols="12">
        <div class="d-flex justify-center align-center">
          <div class="contact-us px-2 px-md-0">
            <span class="text-Primarydarken3  contact-us--title">
              با تکمیل فرم زیر، با کارشناسان ما ارتباط بگیرید
            </span>
            <div class="contact-us--box" >
              <p class="text-Graylighten1 contact-us--desc pa-5">
                سوالی دارید یا به کمک نیاز دارید؟ فرم زیر را پر کنید و تیم ما در اسرع وقت با شما تماس خواهد گرفت.
              </p>

              <div class="mt-6 px-5">
                <v-row>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="name" variant="outlined" density="compact" placeholder="نام"> </v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="family" variant="outlined" density="compact" placeholder="نام خانوادگی * *"> </v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="mobile" variant="outlined" density="compact" placeholder="شماره تماس *"> </v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="email" variant="outlined" density="compact" placeholder="ایمیل *"> </v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="sanat" variant="outlined" density="compact" placeholder="صنعت"> </v-text-field>
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field v-model="job" variant="outlined" density="compact" placeholder="شغل"> </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="sub" variant="outlined" density="compact" placeholder="موضوع *"> </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="content" rows="8" variant="outlined" density="compact" placeholder="متن پیام"> </v-textarea>
                  </v-col>
                  <v-col cols="12" class="mt-n5 pb-5">
                    <v-btn color="PrimaryMain" block @click="contactUs()" :loading="loading">
                      <span>
                        ثبت
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4L13.41 5.41L7.83 11H20V13H7.83L13.41 18.59L12 20L4 12L12 4Z" fill="white"/>
                      </svg>
                      </span>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>

  <div class="representation-box d-none d-md-block">
    <div class="px-8 pt-7">
      <span class=" text-Primarydarken3 representation-box--title">
        لیست نمایندگی‌ها
      </span>
    </div>
    <div class="px-8 pt-3">
      <span class="t14 w400 text-Graylighten1">
        نمایندگان متعهد ما برای کمک به شما در پاسخ به هر سوال یا نگرانی در دسترس هستند. اگر با مشکلی مواجه شدید، می‌توانید برای دریافت پشتیبانی با آن‌ها تماس بگیرید.
      </span>
    </div>
    <div class=" representation-box--tabel">
      <div>
        <span class="t14 w700 text-Graylighten1">
          شعبه
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          کد نمایندگی
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          شهر
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          آدرس
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          شماره تماس
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          ساعت کاری
        </span>
      </div>
      <div>
         <span class="t14 w700 text-Graylighten1">
          مسیریابی
        </span>
      </div>
    </div>
    <div :class="(index %2 ==0 || index==0)?'representation-box--tabel--row1' :'representation-box--tabel--row2'" v-for="(item , index) in agent">
      <div>
        <span class="t14 w400">
          {{ item?.name }}
        </span>
      </div>
      <div>
         <span class="t14 w400 ">
          {{ item.data.agency_code }}
        </span>
      </div>
      <div>
         <span class="t14 w400 ">
          شهر
        </span>
      </div>
      <div>
         <span class="t14 w400 ">
          {{ item?.data?.address }}
        </span>
      </div>
      <div>
         <span class="t14 w400 ">
          {{ item?.data?.tel }}
        </span>
      </div>
      <div>
         <span class="t14 w400 ">
         {{item.data?.work?.start }} الی {{item.data?.work?.end}}
        </span>
      </div>
      <div>
         <span class="t14 w400">
          مسیریابی
        </span>
      </div>
    </div>
  </div>

  <div class="d-block d-md-none">
    <div class="px-8 pt-7">
      <span class=" text-Primarydarken3 representation-box--title">
        لیست نمایندگی‌ها
      </span>
    </div>
    <div class="px-8 pt-3">
      <span class="t14 w400 text-Graylighten1">
        نمایندگان متعهد ما برای کمک به شما در پاسخ به هر سوال یا نگرانی در دسترس هستند. اگر با مشکلی مواجه شدید، می‌توانید برای دریافت پشتیبانی با آن‌ها تماس بگیرید.
      </span>
    </div>

    <div class="mt-4">
      <v-row justify="center">
        <v-col cols="11" v-for="(item , index) in agent">
          <div class="pa-3" :class="(index %2 ==0 || index==0)?'representation-box--mobile ' :'representation-box--mobile1'">
            <div class="d-flex align-center">
              <div :class="(index %2 ==0 || index==0)?'representation-box--avatar-box ' :'representation-box--avatar-box1'">
                <img src="~/assets/images/icones/group.svg" alt="">
              </div>
              <div class="mr-3" >
                <div>
                  <span class="t12 w400 text-Graylighten2">اردبیل</span>
                </div>
                <div class="mt-n2">
                  <span class="t14 w400 text-TextMain">          {{ item?.name }}</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-TextMain t14 w400">
                {{ item?.data?.address }}
              </p>
            </div>
            <div class="mt-3">
              <p class="text-TextMain t14 w400">
                {{ item?.data?.tel }}
              </p>
            </div>
            <div class="mt-3">
              <p class="text-TextMain t14 w400">
                {{item.data?.work?.start }} الی {{item.data?.work?.end}}
              </p>
            </div>
          </div>

        </v-col>
      </v-row>
    </div>
  </div>
  <footerPage/>
</div>

</template>

<script>
import Contact from '~/composables/Contact.js'
import axios from "axios";
import headerPage from "~/components/public/header.vue";
import footerPage from "~/components/public/footer.vue";
export default {
  components: {footerPage, headerPage},
  setup(){
    const runtimeConfig = useRuntimeConfig()

    const {agent} = new Contact()
    return {agent, runtimeConfig}
  },
  data(){
    return{
      name:'',
      family:'',
      mobile:'',
      email:'',
      sanat:'',
      job:'',
      sub:'',
      content:'',
      loading:false
    }
  },
  methods:{
    contactUs(){
      this.loading=true
      axios
          .post(`${this.runtimeConfig.public.apiBase}v4/communication/contact/add`,{
                name:this.name,
                family:this.family,
                email:this.email,
                mobile:this.mobile,
                job:this.job,
                title:this.sub,
                description:this.content,
              }
          )
          .then((response) => {
            this.loading=false
          })
          .catch((err) => {
            this.loading=false
          })
    }
  }
}
</script>