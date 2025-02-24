<template>
  <div>
    <v-row class="px-mx-0 px-2">
      <v-col cols="12" md="9">
        <div class="mt-md-11 mb-3">
        <span class=" review-title text-Primarydarken3">
          بررسی کلی
        </span>
        </div>
        <div class="review-box">
          <div class="tab-box">
            <div class="tab-box--tab-item">
              مشخصات اصلی
            </div>
            <div class="tab-box--tab-item tab-box--tab-active">
              نمای داخلی
            </div>
            <div class="tab-box--tab-item">
              نمای خارجی
            </div>
            <div class="tab-box--tab-item">
              مشخصات جانبی
            </div>
          </div>
          <div class="tab-active">
            <div class="tab-active-general d-none">
              <div class="tab-active-general--pricing">
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span>
                      قیمت
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      3100
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span>
                      سال
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      2024
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span>
                      مسافر
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      20
                    </span>
                  </div>
                </div>
                <div>
                  <div class="tab-active-general--pricing--item">
                    <span>
                      ابعاد
                    </span>
                  </div>
                  <div class="tab-active-general--pricing--value">
                    <span>
                      12,75 * 2,45 متر
                    </span>
                  </div>
                </div>
              </div>
              <div class="tab-active-general--detail">
                <v-row>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">ساخت:</span>
                    <span class="tab-active-general--detail--value w500">
                      ونهول
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">انتقال:</span>
                    <span class="tab-active-general--detail--value w500">
                      بهادری
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">مدل:</span>
                    <span class="tab-active-general--detail--value w500">
                     Cx45
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">موقعیت ویلچر:</span>
                    <span class="tab-active-general--detail--value w500">
                     ندارد
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">بدنه:</span>
                    <span class="tab-active-general--detail--value w500">
                     فولاد
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <span class="tab-active-general--detail--item w400">موتورها:</span>
                    <span class="tab-active-general--detail--value w500">
                     کامینز
                    </span>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div class="tab-active-detail">
              <div class="mt-5 mx-4 mb-1">
                <span class="tab-item-title text-Graylighten1">
                  چینش صندلی‌ها
                </span>
              </div>
              <div class="tab-active-detail--box">
                <div class="mb-2">
                  <span class="text-Graylighten3 tab-active-detail--box--title">
                    نوع صندلی:
                  </span>
                  <span class="text-Textmain tab-active-detail--box--value">
                    صندلی اقتصادی
                  </span>
                </div>
                <div >
                  <span class="text-Graylighten3 tab-active-detail--box--title">
                    نوع صندلی:
                  </span>
                  <span class="tab-active-detail--box--value text-Textmain">
                    صندلی اقتصادی
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </v-col>
      <v-col cols="12" md="3">
        <div class="mt-md-11 mb-3">
          <span class="car-contact--title text-Primarydarken3">
           ارتباط با ما
          </span>
        </div>
        <div class="contact-us-box">
          <p class=" car-contact--main-title text-Graylighten1 text-justify">
            اگر به اتوبوس آرتا+ علاقه‌مند هستید و تمایل به دریافت اطلاعات بیشتر دارید، لطفاً فرم زیر را تکمیل کنید تا همکاران ما با شما در تماس باشند.
          </p>
          <div class="mt-3">
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <v-text-field placeholder="نام *" variant="outlined" density="compact"/>
            <div class="mt-14">
              <v-btn block color="PrimaryMain" class="br--8" height="48">
                  <span class="t16 w600">ثبت</span>
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>

</script>