<template>
  <div>
    <headerPage/>
    <homeBanner/>
    <ourProducts/>
    <knowUsMore/>
    <ourServices/>
    <creationSection/>
    <ourPartners/>
    <newsSection/>
    <footerPage/>
  </div>
</template>
<script setup >
import headerPage from '~/components/public/header.vue'
import footerPage from '~/components/public/footer.vue'
import homeBanner from "~/components/home/homeBanner.vue";
import ourProducts from "~/components/home/ourProducts.vue";
import knowUsMore from "~/components/home/knowUsMore.vue";
import ourServices from "~/components/home/ourServices.vue";
import creationSection from "~/components/home/creationSection.vue";
import ourPartners from "~/components/home/ourPartners.vue";
import newsSection from "~/components/home/newsSection.vue";
</script>