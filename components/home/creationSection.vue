<template>
  <div>
    <div class="text-center my-15">
      <p class="creation--title" v-if="lang==='fa'">
        “خودروهای ما با دقت مهندسی و طراحی شده‌اند تا استانداردهای کیفیت در سطح جهانی را برآورده کنند”
      </p>
      <p class="creation--title" v-else>
        “Our cars are meticulously engineered and crafted to meet world-class quality standardy”
      </p>
    </div>

    <div class="creation-section">
      <div class="creation-section--title">
        <div class="px-3 px-md-11">
          <div>
            <span class=" text-white" v-if="lang==='fa'">
              خلق بهترین‌ها
            </span>
            <span class=" text-white" v-else>
             Crafting Excellence
            </span>
          </div>
          <div>
            <p class=" l34 text-white" v-if="lang==='fa'">
              در سبلان خودرو، 'خلق بهترین‌ها ’ انگیزه تمام فعالیت‌های ماست. با بهره‌گیری از فناوری پیشرفته و استانداردهای سخت‌گیرانه، ما اتوبوس‌ها، کامیون‌ها و خودروهای سنگینی را تولید می‌کنیم که برای اطمینان، دوام و عملکرد برتر طراحی شده‌اند.
            </p>
            <p class=" l34 text-white" v-else>
              At Sabalan Khodro, "Crafting Excellence" drives everything we do. With advanced technology and strict quality standards, we build world-class buses, trucks, and heavy vehicles designed for reliability, durability, and top performance.            </p>
          </div>
        </div>
      </div>

      <div class="creation-section--image">
        <div class="px-1 px-md-11">
          <img src="~/assets/images/creation.svg" alt="">

        </div>
      </div>
    </div>
  </div>

</template>

<script >
export default {
  props:{
    lang:'fa'
  }
}

</script>