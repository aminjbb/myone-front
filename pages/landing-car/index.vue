<template>
  <div :class="lang === 'en' ? 'd-ltr' :''">
    <headerPage/>

    <div class="landing-car-banner">
      <img src="~/assets/images/landing-car-banner.png">
    </div>

    <div class="mt-15">
      <v-row justify="center" align="center" class="px-15 mx-1">
        <v-col cols="6">
          <p class="t32 w600 text-TextMain w-75 pl-15">
            رانندگی با دینامیک بهبود یافته و معرفی تاریخچه خودروی
            'نام خودرو'
          </p>
        </v-col>
        <v-col cols="6">
          <p class="t20 w400 text-Graylighten1">
            دینامیک‌ و قطعات بهبود یافته اتوبوس دوو، تولید شده توسط گروه MYone، ترکیبی بی‌نقص از مهندسی پیشرفته و طراحی مدرن را به نمایش می‌گذارد.
            این وسیله نقلیه پیشرفته عملکرد برتری ارائه می‌دهد و شامل سیستم‌های تعلیق پیشرفته برای سفری نرم‌تر، کارایی بهینه موتور برای کاهش آلایندگی و صرفه‌جویی در مصرف سوخت است.
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="mt-15">
      <v-row justify="center" align="center" class="px-15 mx-1">
        <v-col cols="6">
          <img src="~/assets/images/landing-car-1.png" class="w-100" height="284">
        </v-col>
        <v-col cols="6">
          <img src="~/assets/images/landing-car-2.png" class="w-100" height="284">

        </v-col>
      </v-row>
    </div>

    <div class="mt-10 px-15 mx-1">
      <div>
        <span class="t40 w600 text-TextMain">
          بررسی مشخصات و عملکرد محصول
        </span>
      </div>
      <div class="my-6">
        <v-divider/>
        <div class="my-6">
          <span class="t28 w600 text-Graylighten1">
            بهینه‌سازی ظرفیت مسافر
          </span>
        </div>
        <div>
          <p class="t20 w600 text-Graylighten2">
            فضای داخلی گسترده با چیدمان صندلی آماده به همراه قابلیت تنظیم برای جابجایی حجم بالای مسافر در ساعات اوج ترافیک
          </p>
        </div>
      </div>
    </div>
    <div class="mt-10 px-15 mx-1">
      <v-row justify="center" align="center" >
        <v-col md="5">
          <div class="landing-data-box">
            <div>
              <span class="text-white">
                بدنه اتوبوس با فناوری پیشرفته
              </span>
            </div>
            <div class="mt-4">
              <p class="text-white">
                طراحی شده با مواد سبک و با استحکام بالا، بدنه اتوبوس شامل طراحی آیرودینامیکی پیشرفته و ویژگی‌های هوشمندی مانند حسگرهای یکپارچه برای نظارت بر بار، عایق‌بندی بهبود یافته برای محموله‌های حساس به دما، و قطعات مدولار برای سفارشی‌سازی و نگهداری آسان است.
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="7">
          <div class="landing-data-image">
            <img src="~/assets/images/landing-img1.png" alt="">
          </div>
        </v-col>
        <v-col md="7">
          <div class="landing-data-image">
            <img src="~/assets/images/landing-img1.png" alt="">
          </div>
        </v-col>
        <v-col md="5">
          <div class="landing-data-box">
            <div>
              <span class="text-white">
                بدنه اتوبوس با فناوری پیشرفته
              </span>
            </div>
            <div class="mt-4">
              <p class="text-white">
                طراحی شده با مواد سبک و با استحکام بالا، بدنه اتوبوس شامل طراحی آیرودینامیکی پیشرفته و ویژگی‌های هوشمندی مانند حسگرهای یکپارچه برای نظارت بر بار، عایق‌بندی بهبود یافته برای محموله‌های حساس به دما، و قطعات مدولار برای سفارشی‌سازی و نگهداری آسان است.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-10 px-15 mx-1">
      <v-row justify="center" align="start" >
        <v-col md="4">
          <div class="landing-steper-title">
            <span class="text-TextMain">
              .1
            </span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
              <path d="M1 1H413" stroke="#ADAFB3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="landing-steper-description">
            <div class="mt-4">
              <span class="text-Graylighten2">
                خدمات حمل و نقل کارکنان
              </span>
            </div>
            <p class="text-Graylighten2 text-justify mt-2">
              با ارائه یک راه‌حل حمل‌ونقل مطمئن و راحت با اتوبوس‌های شهری دوو، بهره‌وری نیروی کار را افزایش دهید. فضای داخلی گسترده و ویژگی‌های ایمنی پیشرفته آن‌ها سواری نرم و بدون استرس را برای کارکنان تضمین می‌کند.</p>
          </div>
        </v-col>
        <v-col md="4">
          <div class="landing-steper-title">
            <span class="text-TextMain">
             .۲
            </span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
              <path d="M1 1H413" stroke="#ADAFB3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="landing-steper-description">
            <div class="mt-4">
              <span class="text-Graylighten2">
               حمل‌ونقل برای رویدادهای شرکتی
              </span>
            </div>
            <p class="text-Graylighten2 text-justify mt-2">
              با استفاده از اتوبوس‌های شهری دوو، لجستیک رویدادهای شرکتی را ساده کنید. با ظرفیت بالای صندلی و امکانات مدرن، این اتوبوس‌ها یک راه‌حل کارآمد و حرفه‌ای برای حمل‌ونقل مهمانان و کارکنان ارائه می‌دهند.
            </p>
          </div>
        </v-col>
        <v-col md="4">
          <div class="landing-steper-title">
            <span class="text-TextMain">
              .۳
            </span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
              <path d="M1 1H413" stroke="#ADAFB3" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="landing-steper-description">
            <div class="mt-4">
              <span class="text-Graylighten2">
                راه‌حل حمل‌ونقل عمومی پایدار
              </span>
            </div>
            <p class="text-Graylighten2 text-justify mt-2">
              اتوبوس‌های شهری دوو یک گزینه دوستدار محیط زیست و کارآمد برای سازمان‌های دولتی جهت بهبود حمل‌ونقل عمومی فراهم می‌آورند. با کاهش آلایندگی، هزینه‌های عملیاتی پایین و سواری راحت، این اتوبوس‌ها از حمل‌ونقل پایدار شهری پشتیبانی می‌کنند.
            </p>
          </div>
        </v-col>

      </v-row>
    </div>
    <div class="mt-10 px-15 mx-1">
      <div class="landing-main-image">
        <img src="~/assets/images/landing-main.png" alt="">
      </div>
    </div>
    <div class="mt-10 px-15 mx-1">
      <v-row justify="center" align="start" >
        <v-col md="4">
            <div class="landing-card">
              <div>
                <span class="text-Graylighten1">
                  داستان ما را بخوانید
                </span>
              </div>
              <div class="mt-3">
                <p class="text-Graylighten1 text-justify">
                  درباره اینکه ما کی هستیم، سفر ما و ارزش‌هایی که ما را به سوی برتری هدایت می‌کنند، بیاموزید. برای کاوش در اشتیاق و تعهد پشت هر آنچه انجام می‌دهیم، صفحه "درباره ما" را مشاهده کنید.
                </p>
              </div>
              <div class="mt-3 d-flex align-center">
                <p class="landing-card--link text-Nuetral2 ">
                  مشاهده درباره ما

                </p>
                <div class="mt-1 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path d="M7.99967 3.16675L8.93967 4.10675L5.21968 7.83341L13.333 7.83341V9.16675L5.21968 9.16675L8.93967 12.8934L7.99967 13.8334L2.66634 8.50008L7.99967 3.16675Z" fill="#7C8177"/>
                    </svg>
                  </div>
              </div>
            </div>
        </v-col>
        <v-col md="4">
            <div class="landing-card">
              <div>
                <span class="text-Graylighten1">
                 پشتیبانی اختصاصی برای شما
                </span>
              </div>
              <div class="mt-3">
                <p class="text-Graylighten1 text-justify ">
                  ما در کنار شما هستیم تا به هر سوال شما پاسخ دهیم و تجربه‌ای روان و رضایت‌بخش برایتان فراهم کنیم. تیم پشتیبانی ما آماده است تا پاسخ‌های مورد نیاز شما را ارائه دهد. برای ارتباز با ما به صفحه "تماس با ما" مراجعه کرده و فرم را پر کنید.
                </p>
              </div>
              <div class="mt-3 d-flex align-center">
                <p class="landing-card--link text-Nuetral2">
                  مشاهده تماس با ما

                </p>
                <div class="mt-1 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path d="M7.99967 3.16675L8.93967 4.10675L5.21968 7.83341L13.333 7.83341V9.16675L5.21968 9.16675L8.93967 12.8934L7.99967 13.8334L2.66634 8.50008L7.99967 3.16675Z" fill="#7C8177"/>
                    </svg>
                  </div>
              </div>
            </div>
        </v-col>
        <v-col md="4">
            <div class="landing-card">
              <div>
                <span class="text-Graylighten1">
                 از آخرین اخبار مای‌وان مطلع شوید
                </span>
              </div>
              <div class="mt-3">
                <p class="text-Graylighten1 text-justify">
                  آخرین اخبار، دستاوردها و نوآوری‌های گروه MYone را دنبال کنید. از پروژه‌های پیشگامانه تا دیدگاه‌های صنعت، داستان‌هایی را که سفر ما را شکل می‌دهند، کشف کنید. برای اطلاعات بیشتر روی هر مقاله خبری کلیک کنید.
                </p>
              </div>
              <div class="mt-3 d-flex align-center">
                <p class="landing-card--link text-Nuetral2">
                  مشاهده آخرین اخبار

                </p>
                <div class="mt-1 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path d="M7.99967 3.16675L8.93967 4.10675L5.21968 7.83341L13.333 7.83341V9.16675L5.21968 9.16675L8.93967 12.8934L7.99967 13.8334L2.66634 8.50008L7.99967 3.16675Z" fill="#7C8177"/>
                    </svg>
                  </div>
              </div>
            </div>
        </v-col>


      </v-row>
    </div>
    <footerPage/>

  </div>
</template>

<script>
import footerPage from "~/components/public/footer.vue";
import headerPage from "~/components/public/header.vue";
import {useRoute} from "#vue-router";

export default {
  setup(){
    const route = useRoute()
    const lang = route.query.lang === 'en'? 'en' :'fa';
    return {lang}

  },
  components: {headerPage, footerPage}
}
</script>