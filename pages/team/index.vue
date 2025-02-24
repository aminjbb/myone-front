<template>
  <div>
    <banner/>
    <teamPerson :memebers="memebers"/>
  </div>
</template>

<script>
import banner from '~/components/team/banner.vue'
import teamPerson from '~/components/team/teamPerson.vue'
import Team from '~/composables/Team.js'
export default {
  setup(){
    const {memebers } = new Team()
    return {memebers}
  },
  components: {
    banner,
    teamPerson
  }
}
</script>