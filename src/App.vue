<template>
  <div class="landing-page-container">
    <div class="guild-emblem-header">
      <GuildEmblem />
    </div>
    <div class="about-guild-container">
      <AboutGuild />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildEmblem from './components/guild-emblem/guild-emblem.vue';
import AboutGuild from './components/about-guild/about-guild.vue';

export default defineComponent({
  components: {
    GuildEmblem,
    AboutGuild
  }
})


</script>



<style scoped>
.landing-page-container {
  border-style: dotted;
  padding: 15px;
}
</style>
