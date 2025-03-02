<template>
  <div>
    <div class="team-person">
      <v-row justify="center" align="center" class="px-5 px-md-15 mx-md-16">

        <v-col md="3" :cols="index == 0 ?'12' : '6'" v-for="(item , index) in memebers" :key="`member-${index}`">
          <div class="team-person--card">
            <div>
              <img :src="item?.avatar.path">
            </div>
            <div class="team-person--card--name">
              <span class="text-TextMain">
                 {{item?.name }}
              </span>
            </div>
            <div class="px-2 mt-2">
              <v-divider></v-divider>
            </div>
            <div class="team-person--card--info">
              <span class="text-Graylighten1">
               {{item?.data?.role }}
              </span>
            </div>
          </div>
        </v-col>

      </v-row>
    </div>
    <div class="mt-15">
      <div class="text-center my-one">
        <span class="text-Primarydarken3 my-one--title" v-if="lang==='fa'">قلب موفقیت مایوان</span>
        <span class="text-Primarydarken3 my-one--title" v-else>The Heart of Our Success</span>
      </div>
      <div class="text-center px-5 px-md-16 mx-md-15 mt-6">
        <span class=" my-one--desc text-TextMain" v-if="lang==='fa'">
          از خطوط تولید تا میزهای اداری، تیم پرتلاش ما اطمینان حاصل می‌کند که هر جزئیات بی‌نقص باشد، هر فرآیند به‌درستی اجرا شود و هر وسیله نقلیه با بالاترین استانداردهای کیفیت مطابقت داشته باشد. ما با هم چیزی فراتر از ماشین تولید کنیم؛ ما اعتماد می‌سازیم.
        </span>
        <span class=" my-one--desc text-TextMain" v-else>
From the factory floor to the office desks, our hardworking crew ensures every detail is perfect, every process runs smoothly, and every vehicle meets the highest standards of quality. Together, we build more than just machines, “we build trust”.
        </span>
      </div>
      <div class="d-flex justify-center px-5 px-md-16 mx-md-15 mt-6 my-one--cover">
        <img src="~/assets/images/myOneTeam.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    memebers:[],
    lang:'fa'
  }
}
</script>