<template>
  <div :class="lang === 'en' ? 'd-ltr' :''">
    <headerPage :lang="lang"/>

    <banner :lang="lang"/>
    <teamPerson :lang="lang" :memebers="memebers"/>
    <footerPage :lang="lang"/>

  </div>
</template>

<script>
import banner from '~/components/team/banner.vue'
import teamPerson from '~/components/team/teamPerson.vue'
import Team from '~/composables/Team.js'
import headerPage from "~/components/public/header.vue";
import footerPage from "~/components/public/footer.vue";
export default {
  setup(){
    const {memebers  , lang} = new Team()
    return {memebers , lang}
  },
  components: {
    footerPage,
    headerPage,
    banner,
    teamPerson
  }
}
</script>