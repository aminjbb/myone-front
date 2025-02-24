<template>
  <div>
    <headerPage/>

      <gallary :detail="detail"/>
      <review/>

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
      const { detail } = new Car()
      return {detail}
    },
    components: {
      footerPage,
      headerPage,
      gallary,
      review
    }
  }
</script>