<template>
  <div>
    <headerPage/>
    <homeBanner :HomeBannerList="HomeBannerList"/>
    <ourProducts :productList="HomeProductLists"/>
    <knowUsMore/>
    <ourServices :servicesList="servicesList"/>
    <creationSection/>
    <ourPartners :partnerList="partnerList"/>
    <newsSection :newsList="newsList"/>
    <footerPage/>
  </div>
</template>
<script >
import headerPage from '~/components/public/header.vue'
import footerPage from '~/components/public/footer.vue'
import homeBanner from "~/components/home/homeBanner.vue";
import ourProducts from "~/components/home/ourProducts.vue";
import knowUsMore from "~/components/home/knowUsMore.vue";
import ourServices from "~/components/home/ourServices.vue";
import creationSection from "~/components/home/creationSection.vue";
import ourPartners from "~/components/home/ourPartners.vue";
import newsSection from "~/components/home/newsSection.vue";
import Home from "~/composables/home.js";
export default {
  components: {
    headerPage,
    footerPage,
    homeBanner,
    ourProducts,
    knowUsMore,
    ourServices,
    creationSection,
    ourPartners,
    newsSection
  },
  setup(){

    const { HomeBannerList  , getBanners , HomeProductLists,  productList ,
      getServicesList , servicesList , partnerList , getPartnerList , getNewsList , newsList } = new Home();
    return {HomeBannerList  , getBanners , HomeProductLists,  productList ,
      getServicesList , servicesList , partnerList , getPartnerList , getNewsList , newsList }
  },

  mounted(){
    this.getBanners()
    this.productList()
    this.getServicesList()
    this.getPartnerList()
    this.getNewsList()
  }
}
</script>