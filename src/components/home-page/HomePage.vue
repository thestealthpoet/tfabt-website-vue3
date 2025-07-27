<template>
  <div class="landing-page-container">
    <div class="guild-discord-button-container">
      <DiscordButton />
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
import AboutGuild from '../home-page/about-guild/AboutGuild.vue';
import DiscordButton from '../home-page/discord-button/DiscordButton.vue';
import GuildHistory from '../home-page/guild-history/GuildHistory.vue';
import GuildApplication from '../home-page/guild-application/GuildApplication.vue';
import GuildLinks from '../home-page/guild-links/GuildLinks.vue';

export default {
  components: {
    AboutGuild,
    DiscordButton,
    GuildHistory,
    GuildApplication,
    GuildLinks
  }
}


</script>



<style scoped></style>