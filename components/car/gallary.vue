<template>
  <div class="px-2">
    <div class="mt-4 ">
      <div>
        <span class=" car-title text-Primarydarken3">
          {{ detail?.title }}
        </span>
      </div>
      <div class="mt-2 mb-6">
        <span class=" car-price text-Graylighten1 ">
          {{detail?.data?.price}}
        </span>
      </div>
    </div>
    <div class="car-gallary">
      <v-row justify="center" class="px-md-0 px-1">
        <v-col cols="12" md="7" class=" px-md-0">
          <div class="car-gallary--main-image">
            <img :src="detail?.cover?.path" alt="">
          </div>

        </v-col>
        <v-col cols="12" md="5" clas>
          <div>
            <div class="car-gallary--images">
              <div>
                <img src="~/assets/images/pdpcar2.png" alt="">
              </div>
              <div>
                <img src="~/assets/images/pdpcar2.png" alt="">
              </div>
              <div>
                <img src="~/assets/images/pdpcar2.png" alt="">
              </div>
              <div>
                <img src="~/assets/images/pdpcar2.png" alt="">
              </div>
              <div>
                <img src="~/assets/images/pdpcar2.png" alt="">
              </div>
            </div>
          </div>

        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detail:null
    }
  }
</script>