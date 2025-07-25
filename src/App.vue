<template>
  <div class="landing-page-container">
    <div class="guild-emblem-header">
      <GuildEmblem />
    </div>
    <div class="guild-discord-button-container">
      <GuildDiscordButton />
    </div>
    <div class="about-guild-container">
      <AboutGuild />
    </div>
    <div class="guild-history-container">
      <GuildHistory />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildEmblem from './components/guild-emblem/guild-emblem.vue';
import AboutGuild from './components/about-guild/about-guild.vue';
import GuildDiscordButton from './components/discord-button/guild-discord-button.vue';
import GuildHistory from './components/guild-history/guild-history.vue';

export default defineComponent({
  components: {
    GuildEmblem,
    AboutGuild,
    GuildHistory,
    GuildDiscordButton
  }
})


</script>



<style scoped></style>
