<template>
  <div class="mt-15">
    <div class="footer-box pt-15 px-15 d-none d-md-block">
      <div class="footer-box--footer-link">
        <div class="pr-5">
          <div>
          <span class="text-Graylighten5 t16 w500" v-if="lang==='fa'">
            دسترسی سریع
          </span>
            <span class="text-Graylighten5 t16 w500" v-else>
           Quick links
          </span>
          </div>
          <div class="mt-7">
            <nuxt-link :to="`/about-us{$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
               <p class="text-Graylighten3 t14 w400" v-if="lang==='fa'">درباره ما</p>
                          <p class="text-Graylighten3 t14 w400" v-else> About Us</p>

              </nuxt-link>
           <nuxt-link :to="`/news${$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
                <p class="text-Graylighten3 t14 w400 mt-4" v-if="lang==='fa'">اخبار</p>
                <p class="text-Graylighten3 t14 w400 mt-4" v-else>News</p>

            </nuxt-link>
             <nuxt-link :to="`/services${$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
               <p class="text-Graylighten3 t14 w400 mt-4" v-if="lang==='fa'">خدمات</p>
              <p class="text-Graylighten3 t14 w400 mt-4" v-else>News</p>

            </nuxt-link>
            <nuxt-link :to="`/faq${$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
            <p class="text-Graylighten3 t14 w400 mt-4" v-if="lang==='fa'">سوالات متداول</p>
            <p class="text-Graylighten3 t14 w400 mt-4" v-else> News</p>

            </nuxt-link>
            
          </div>
        </div>
        <div class="pr-5">
          <div>
          <span class="text-Graylighten5 t16 w500"  v-if="lang==='fa'">
           محصولات
          </span>
            <span class="text-Graylighten5 t16 w500" v-else>
           Products
          </span>
          </div>
          <div class="mt-7">
            <p class="text-Graylighten3 t14 w400" v-for="(product , index) in HomeProductLists" :key="`product-footer${index}`">
              {{ product?.name }}</p>
          </div>
        </div>
        <div class="pr-5">
          <div>
          <span class="text-Graylighten5 t16 w500" v-if="lang==='fa'">
           تماس با ما
          </span>
            <span class="text-Graylighten5 t16 w500" v-else>
           Contact Us
          </span>
          </div>
          <div class="mt-7">
            <div class="d-flex align-center" >
              <span><img src="~/assets/images/icones/phone.svg" alt="" class=" mx-2"></span>
              <p class="text-Graylighten3 t14 w400">021-45673</p>
            </div>
            <div class="d-flex align-center">
              <span><img src="~/assets/images/icones/mail.svg" alt="" class="mt-5 mx-2"></span>
              <p class="text-Graylighten3 t14 w400 mt-4">Info@sabalankhodro.com</p>
            </div>
            <div class="d-flex align-center">
              <span><img src="~/assets/images/icones/location.svg" alt="" class="mt-5 mx-2"></span>
              <p class="text-Graylighten3 t14 w400 mt-4" v-if="lang ==='fa'">ایران، تهران، خیابان بهشتی</p>
              <p class="text-Graylighten3 t14 w400 mt-4" v-else>Iran, Tehran, Beheshti St.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex align-center" >
            <a>
              <img src="~/assets/images/icones/aparat.svg" alt="" class=" ml-8">
            </a>
            <a>
              <img src="~/assets/images/icones/linkdin.svg" alt="" class=" ml-8">
            </a>
            <a>
              <img src="~/assets/images/icones/youtube.svg" alt="" class=" ml-8">
            </a>
            <a>
              <img src="~/assets/images/icones/insta.svg" alt="" class=" ml-8">
            </a>
          </div>
        </div>
      </div>
      <div><v-divider color="white" class="mt-12"/></div>
      <div class="d-flex justify-lg-space-between mt-3">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center ml-15">
            <img src="~/assets/images/icones/copyrigth.svg" alt="" class="mx-1">
            <span class="t10 w300 text-Graylighten3" v-if="lang === 'fa'">
              تمامی حقوق سایت متعلق به سبلان خودرو میباشد
            </span>
            <span class="t10 w300 text-Graylighten3" v-else>
             All rights reserved to Sabalan khodro
            </span>
          </div>
          <div class="d-flex align-center ml-15">
            <span class="t10 w300 text-Graylighten3" v-if="lang === 'fa'">
              سیاست کوکی‌ها
            </span>
            <span class="t10 w300 text-Graylighten3" v-else>
              Cookie Policy
            </span>
          </div>
          <div class="d-flex align-center ml-15">
            <span class="t10 w300 text-Graylighten3" v-if="lang === 'fa'">
              قوانین و مقررات
            </span>
            <span class="t10 w300 text-Graylighten3" v-else>
              Rules & Terms
            </span>
          </div>
          <div class="d-flex align-center mx-5">
            <span class="t10 w300 text-Graylighten3" v-if="lang === 'fa'">
              حریم شخصی
            </span>
            <span class="t10 w300 text-Graylighten3" v-else>
              Privacy policy
            </span>
          </div>
        </div>
        <div class="d-flex align-center">
          <img src="~/assets/images/icones/world.svg" alt="" class=" ml-1">
          <span class="t12 w400 text-Graylighten3">
            فارسی
          </span>
          <img src="~/assets/images/icones/downChevron.svg" alt="" class="ml-3">

        </div>
      </div>
    </div>
    <div class="footer-box pt-15 px-5 d-block d-md-none">
      <div class="d-flex align-center" >
        <a>
          <img src="~/assets/images/icones/aparat.svg" alt="" class=" ml-5" width="24" height="24">
        </a>
        <a>
          <img src="~/assets/images/icones/linkdin.svg" alt="" class=" ml-5" width="24" height="24">
        </a>
        <a>
          <img src="~/assets/images/icones/youtube.svg" alt="" class=" ml-5" width="24" height="24">
        </a>
        <a>
          <img src="~/assets/images/icones/insta.svg" alt="" class=" ml-5" width="24" height="24">
        </a>
      </div>
      <div class="footer-box--footer-link">
        <div class="pr-2">
          <div>
          <span class="text-Graylighten5 t12 w500"  v-if="lang==='fa'">
            دسترسی سریع
          </span>
            <span class="text-Graylighten5 t12 w500" v-else>
           Quick links
          </span>
          </div>
          <div class="mt-7">
             <nuxt-link :to="`/about-us{$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
                        <p class="text-Graylighten3 t10 w400" v-if="lang==='fa'">درباره ما</p>
            <p class="text-Graylighten3 t10 w400" v-else> About Us</p>

              </nuxt-link>
   <nuxt-link :to="`/news{$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
 <p class="text-Graylighten3 t10 w400 mt-4" v-if="lang==='fa'">اخبار</p>
            <p class="text-Graylighten3 t10 w400 mt-4" v-else>News</p>

              </nuxt-link>
              <nuxt-link :to="`/services{$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
 <p class="text-Graylighten3 t10 w400 mt-4" v-if="lang==='fa'">خدمات</p>
            <p class="text-Graylighten3 t10 w400 mt-4" v-else>News</p>

              </nuxt-link>
                         <nuxt-link :to="`/faq{$route.query.lang ? `?lang=${$route.query.lang}` :''}`">
 <p class="text-Graylighten3 t10 w400 mt-4" v-if="lang==='fa'">سوالات متداول</p>
            <p class="text-Graylighten3 t10 w400 mt-4" v-else> News</p>

              </nuxt-link>
           
          </div>
        </div>
        <div class="pr-2">
          <div>
          <span class="text-Graylighten5 t12 w500" v-if="lang==='fa'">
           محصولات
          </span>
            <span class="text-Graylighten5 t12 w500" v-else>
           Products
          </span>
          </div>
          <div class="mt-7">
            <p class="text-Graylighten3 t10 w400"
               v-for="(product , index) in HomeProductLists" :key="`product-footer${index}`"> {{ product?.name }}</p>

          </div>
        </div>
        <div class="pr-2">
          <div>

            <span class="text-Graylighten5 t12 w500" v-if="lang==='fa'">
           تماس با ما
          </span>
            <span class="text-Graylighten5 t12 w500" v-else>
           Contact Us
          </span>
          </div>
          <div class="mt-7">
            <div class="d-flex align-center" >
              <span><img src="~/assets/images/icones/phone.svg" alt="" class=" ml-2"></span>
              <p class="text-Graylighten3 t10 w400">021-45673</p>
            </div>
            <div class="d-flex align-center">
              <span><img src="~/assets/images/icones/mail.svg" alt="" class="mt-5 ml-2"></span>
              <p class="text-Graylighten3 t10 w400 mt-4">Info@sabalankhodro.com</p>
            </div>
            <div class="d-flex align-center">
              <span><img src="~/assets/images/icones/location.svg" alt="" class="mt-5 ml-2"></span>
              <p class="text-Graylighten3 t10 w400 mt-4" v-if="lang ==='fa'">ایران، تهران، خیابان بهشتی</p>
              <p class="text-Graylighten3 t10 w400 mt-4" v-else>Iran, Tehran, Beheshti St.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    lang:'fa',
    HomeProductLists:[]
  }
}
</script>
