<template>
  <div>
    <div class="text-center our-partner--title my-8 my-md-15">
        <p class=" text-Primarydarken3" v-if="lang==='fa'">
          شرکای ما
        </p>
        <p class=" text-Primarydarken3" v-else>
          Our Partners
        </p>
    </div>
    <div class="slider-container">
      <div class="slider-wrapper">
        <!-- اسلاید ۱ -->
        <div class="slider-slide">
          <div class="slider-card" v-for="(item , index) in partnerList?.slice(0,8)">
            <div>
              <div class=" w-100 d-flex justify-center">
                <div class="our-partner--card" >
                  <img :src="item?.avatar?.path" alt="">
                </div>
              </div>

              <div class="text-center mt-2">
              <span class="t20 w500 text-Primarydarken3">
                  {{item?.name}}
                </span>
              </div>
              <div class="text-center">
<!--             <span class="t20 w500 text-Primarydarken3">-->
<!--              CUMMINS-->
<!--            </span>-->
              </div>
            </div>
          </div>



        </div>
        <!-- اسلاید ۲ -->
        <div class="slider-slide" v-if="partnerList?.length > 8">
          <div class="slider-card" v-for="(item , index) in partnerList?.slice(8,16)">
            <div>
              <div class="our-partner--card">
                <img src="~/assets/images/partner1.png" alt="">
              </div>
              <div class="text-center mt-1">
              <span class="t20 w500 text-Primarydarken3">
                  شرکت
                </span>
              </div>
              <div class="text-center">
             <span class="t20 w500 text-Primarydarken3">
              CUMMINS
            </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- دکمه‌های کنترل -->
      <button class="slider-btn prev-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3C8.832 3 3 8.832 3 16ZM5 16C5 9.913 9.913 5 16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16ZM11.094 16L11.781 16.72L17.781 22.72L19.221 21.28L13.937 16L19.217 10.72L17.78 9.28L11.78 15.28L11.094 16Z" fill="#7C8177"/>
        </svg>
      </button>
      <button class="slider-btn next-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M29 16C29 8.832 23.168 3 16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16ZM27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5C22.087 5 27 9.913 27 16ZM20.906 16L20.219 15.28L14.219 9.28L12.779 10.72L18.063 16L12.783 21.28L14.22 22.72L20.22 16.72L20.906 16Z" fill="#7C8177"/>
        </svg>
      </button>
    </div>

  </div>
</template>
<script>
export default {
  props:{
    partnerList:[],
    lang:'fa'
  },
mounted() {

  const sliderWrapper = document.querySelector('.slider-wrapper');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slider-slide').length;

// تابع برای حرکت به اسلاید بعدی
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // بازگشت به اسلاید اول
    }
    updateSlider();
  });

// تابع برای حرکت به اسلاید قبلی
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1; // رفتن به اسلاید آخر
    }
    updateSlider();
  });

// تابع برای به‌روزرسانی اسلایدر
  function updateSlider() {
    const offset = currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }
}
}

</script>