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
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col md="3" cols="6">-->
<!--          <div class="team-person&#45;&#45;card">-->
<!--            <div>-->
<!--              <img src="~/assets/images/person.png">-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;name">-->
<!--              <span class="text-TextMain">-->
<!--                دکتر سعید خادمی-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="px-2 mt-2">-->
<!--              <v-divider></v-divider>-->
<!--            </div>-->
<!--            <div class="team-person&#45;&#45;card&#45;&#45;info">-->
<!--              <span class="text-Graylighten1">-->
<!--                رئیس هیئت مدیره و مدیر عامل-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-col>-->

      </v-row>
    </div>
    <div class="mt-15">
      <div class="text-center my-one">
        <span class="text-Primarydarken3 my-one--title">قلب موفقیت مایوان</span>
      </div>
      <div class="text-center px-5 px-md-16 mx-md-15 mt-6">
        <span class=" my-one--desc text-TextMain">
          از خطوط تولید تا میزهای اداری، تیم پرتلاش ما اطمینان حاصل می‌کند که هر جزئیات بی‌نقص باشد، هر فرآیند به‌درستی اجرا شود و هر وسیله نقلیه با بالاترین استانداردهای کیفیت مطابقت داشته باشد. ما با هم چیزی فراتر از ماشین تولید کنیم؛ ما اعتماد می‌سازیم.
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
    memebers:[]
  }
}
</script>