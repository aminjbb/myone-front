<template>
  <div :class="lang === 'en' ? 'd-ltr' :''">
    <headerPage/>

      <gallary :lang="lang" :detail="detail"/>
      <review :lang="lang" :detail="detail"/>

    <footerPage/>

  </div>
</template>

<script >
  import gallary from '~/components/car/gallary.vue'
  import review from '~/components/car/review.vue'
  import Car from '~/composables/Car.js'
  import headerPage from "~/components/public/header.vue";
  import footerPage from "~/components/public/footer.vue";
  export default {
    setup(){
      const { detail , lang} = new Car()
      return {detail , lang}
    },

    components: {
      footerPage,
      headerPage,
      gallary,
      review
    }
  }
</script>