<template>
  <div>

      <gallary :detail="detail"/>
      <review/>
  </div>
</template>

<script >
  import gallary from '~/components/car/gallary.vue'
  import review from '~/components/car/review.vue'
  import Car from '~/composables/Car.js'
  export default {
    setup(){
      const { detail } = new Car()
      return {detail}
    },
    components: {
      gallary,
      review
    }
  }
</script>