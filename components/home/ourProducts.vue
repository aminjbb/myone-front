<template>
  <div class="mt-16 " ref="animatedElement">
    <div class="px-12 mb-4 text-right our-product-title">
      <span class="animate__animated animate__bounce animate__delay-2s">
        تولیدات ما
      </span>
    </div>
    <div class="our-product">
      <div class="image-box" v-for="product in productList">
        <div class="image-box--image">
<!--          @/assets/images/devoo.png-->
          <img :src="product?.cover?.path ? product?.cover?.path :''" alt="" class="image-box--image">
        </div>
        <div class="back-color px-5 pt-8">
            <span class="text-white t26 w600 ">
              {{ product?.title }}
            </span>
          <span class="more-icon">
              <img width="32" height="32" src="@/assets/images/icones/more-white.svg" alt="" >
            </span>
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
const props = defineProps({
  productList: {
    type: Array,
    required: true,
  },
});
const animatedElement = ref(null);

onMounted(() => {
  if ( window.innerWidth > 769){
    gsap.from(animatedElement.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: animatedElement.value,
        start: 'top 0%',
        toggleActions: 'play none none reverse',
      },
    });
  }

});
</script>
