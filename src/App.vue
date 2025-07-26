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
    <div class="guild-application-container">
      <GuildApplication />
    </div>
    <div class="guild-links-container">
      <GuildLinks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildEmblem from './components/home-page/guild-emblem/guild-emblem.vue';
import AboutGuild from './components/home-page/about-guild/about-guild.vue';
import GuildDiscordButton from './components/home-page/discord-button/guild-discord-button.vue';
import GuildHistory from './components/home-page/guild-history/guild-history.vue';
import GuildApplication from './components/home-page/guild-application/guild-application.vue';
import GuildLinks from './components/home-page/guild-links/guild-links.vue';

export default defineComponent({
  components: {
    GuildEmblem,
    AboutGuild,
    GuildHistory,
    GuildDiscordButton,
    GuildApplication,
    GuildLinks
  }
})


</script>



<style scoped></style>
