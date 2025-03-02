<template>
  <div class="know-us-more " ref="animatedElement">
    <div class="know-us-more-description">
      <div class=" know-us-more-description--box">
        <div>
          <p class="know-us-more-description--title text-PrimaryMain" v-if="lang === 'fa'">ما را بیشتر بشناسید</p>
          <p class="know-us-more-description--title text-PrimaryMain" v-else>Who We Are?</p>
          <p class="know-us-more-description--description text-PrimaryMain mt-6" v-if="lang === 'fa'">
            در سبلان خودرو، تولید بی‌نقص فقط یک هدف نیست، بلکه وعده ماست. با بکارگیری نوآوری و دقت، ما به ساخت خودروهایی متعهدیم که استانداردهای جدیدی از برتری در طراح و عملکرد ارائه می‌دهند. تیم ما متشکل از ایده‌پردازان، مهندسان و صنعتگران است که با تعهدی بی‌وقفه خودروهایی تولید می‌کنند که اعتماد را در هر جاده‌ای به ارمغان می‌آورد. از اولین ایده تا آخرین جزئیات، ما تضمین می‌کنیم که هر خودرو تجسم شعار ما باشد: خوب تولید کنیم...
          </p>
          <p class="know-us-more-description--description text-PrimaryMain mt-6" v-else>
            At Sabalan khodro, perfection isn’t just a goal—it’s our promise. With a legacy of innovation and precision, we are dedicated to crafting vehicles that redefine excellence in design, performance, and reliability. Our team of visionaries, engineers, and artisans share a relentless commitment to producing cars that inspire confidence and excitement on every road. From the first concept to the final detail, we ensure that every vehicle embodies our motto: We Produce Perfect          </p>
          <div class="mt-3 mt-md-8">
            <div class="btn-more-PrimaryMain">
              <span v-if="lang==='fa'" >مشاهده اعضای تیم </span>
              <span v-else>See Our Team </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
defineProps({
  lang:'fa'

});
gsap.registerPlugin(ScrollTrigger);

const animatedElement = ref(null);

onMounted(() => {
  if ( window.innerWidth > 769){
    gsap.from(animatedElement.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: animatedElement.value,
        start: 'top 10%',
        toggleActions: 'play none none reverse',
      },
    });
  }

});
</script>
