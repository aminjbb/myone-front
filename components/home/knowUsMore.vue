<template>
  <div class="know-us-more " ref="animatedElement">
    <div class="know-us-more-description">
      <div class=" know-us-more-description--box">
        <div>
          <p class="know-us-more-description--title text-PrimaryMain">ما را بیشتر بشناسید</p>
          <p class="know-us-more-description--description text-PrimaryMain mt-6">
            در سبلان خودرو، تولید بی‌نقص فقط یک هدف نیست، بلکه وعده ماست. با بکارگیری نوآوری و دقت، ما به ساخت خودروهایی متعهدیم که استانداردهای جدیدی از برتری در طراح و عملکرد ارائه می‌دهند. تیم ما متشکل از ایده‌پردازان، مهندسان و صنعتگران است که با تعهدی بی‌وقفه خودروهایی تولید می‌کنند که اعتماد را در هر جاده‌ای به ارمغان می‌آورد. از اولین ایده تا آخرین جزئیات، ما تضمین می‌کنیم که هر خودرو تجسم شعار ما باشد: خوب تولید کنیم...
          </p>
          <div class="mt-3 mt-md-8">
            <div class="btn-more-PrimaryMain">
              <span >مشاهده اعضای تیم </span>
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

gsap.registerPlugin(ScrollTrigger);

const animatedElement = ref(null);

onMounted(() => {
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
});
</script>
