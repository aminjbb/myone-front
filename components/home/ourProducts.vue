<template>
  <div class="mt-16 " ref="animatedElement">
    <div class="px-12 mb-4  our-product-title">
      <span v-if="lang === 'fa'">
        تولیدات ما
      </span>
      <span v-else>
       Products
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

const props = defineProps({
  productList: {
    type: Array,
  },
  lang:'fa'

});

</script>
