<template>
  <div>
    <div class="team-banner">
      <div class="d-flex align-end box">
        <div class="team-banner--human">
            <span class=" text-Nuetralmain" v-if="lang==='fa'">
              نیروی انسانی
            </span>
            <span class=" text-Nuetralmain" v-else>
              People
              </span>
        </div>
        <div class="team-banner--team">
          <div>
              <p class=" text-Primarydarken3" v-if="lang==='fa'" >
                تیم ما
              </p>
            <p class=" text-Primarydarken3" v-else>
              Our Team
              </p>
          </div>
          <div>
              <span class=" text-Primarylighten2" v-if="lang==='fa'">
                قدرت ما...
              </span>
            <span class=" text-Primarylighten2" v-else>
                Our Strength...
              </span>
          </div>
        </div>
      </div>
      <div class="box">
        <img src="~/assets/images/teambanner.png">
      </div>

    </div>
    <div class="text-center team-description mt-15 pt-10" >
      <span class="text-Primarydarken3 team-description--title" v-if="lang === 'fa'">
        آشنایی با ذهن‌های پشت ماشین‌ها
      </span>
      <span class="text-Primarydarken3 team-description--title" v-else>
        Meet the Minds Behind the Machines
      </span>

      <div class="mt-4">
        <p class="text-TextMain px-md-15 mx-md-15 text-center team-description--desc" v-if="lang==='fa'">
          در مایوان، تیم، نیروی محرکه اصلی پشت هر نوآوری است. از مهندسان خلاق گرفته تا صنعتگران ماهر، هر عضو با تخصص، تعهد و اشتیاق خود به ما می‌پیوندد. با هم، خودروهایی در سطح جهانی طراحی و تولید می‌کنیم که استانداردهای جدیدی در عملکرد، قابلیت اطمینان و دقت تعریف می‌کنند. با افراد بااستعدادی آشنا شوید که ایده‌ها را به واقعیت تبدیل می‌کنند و ما را به جلو پیش می‌برند.
        </p>
        <p class="text-TextMain px-md-15 mx-md-15 text-center team-description--desc" v-else>
          At MyOne, our team is the driving force behind every innovation. From visionary engineers to skilled craftsmen, each member brings expertise, dedication, and passion to the table. Together, we design and build world-class vehicles that set new standards in performance, reliability, and precision. Meet the talented individuals who turn ideas into reality and keep us moving forward.
        </p>
      </div>
    </div>

  </div>
</template>
<script >
export default {
  props: {
    lang:'fa'
  }
}
</script>