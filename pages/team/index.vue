<template>
  <div>
    <headerPage/>

    <banner/>
    <teamPerson :memebers="memebers"/>
    <footerPage/>

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
    const {memebers } = new Team()
    return {memebers}
  },
  components: {
    footerPage,
    headerPage,
    banner,
    teamPerson
  }
}
</script>