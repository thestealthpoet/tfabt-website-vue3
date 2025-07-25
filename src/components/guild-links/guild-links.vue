<template>
  <div class="guild-links-wrapper">
    <a :href="discordLink" class="guild-link-button" target="_blank" rel="noopener noreferrer">
      <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.078.037 13.31 13.31 0 00-.608 1.25c-1.845-.276-3.68-.276-5.487 0a12.715 12.715 0 00-.618-1.25.077.077 0 00-.078-.037A19.736 19.736 0 003.66 4.37a.07.07 0 00-.032.028C.533 9.046-.32 13.58.1 18.058a.082.082 0 00.031.056c2.053 1.508 4.042 2.423 5.993 3.03a.078.078 0 00.084-.028 13.447 13.447 0 001.226-1.994.076.076 0 00-.041-.106 12.3 12.3 0 01-1.872-.892.077.077 0 01-.007-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.1.246.198.372.292a.077.077 0 01-.007.127c-.58.343-1.201.645-1.872.892a.076.076 0 00-.041.106c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.029c1.961-.607 3.95-1.522 6.003-3.03a.077.077 0 00.031-.055c.5-5.177-.839-9.674-3.549-13.66a.061.061 0 00-.031-.029z"
          fill="currentColor" />
      </svg>
      {{ joinDiscordText }}
    </a>

    <a :href="guildLeaderTwitch" class="guild-link-button" target="_blank" rel="noopener noreferrer">
      <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M6.07 0L0 6.04v17.92h6.07V24l5.8-5.8h5.72l6.41-6.4V0H6.07zm14.4 10.81l-3.13 3.12h-5.73l-3.12 3.13v-3.13H4.54V2.22h15.93v8.59z"
          fill="currentColor" />
      </svg>
      {{ twitchText }}
    </a>

    <a :href="guildApplicationLink" class="guild-link-button" target="_blank" rel="noopener noreferrer">
      <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 0v5h5" fill="currentColor" />
      </svg>
      {{ guildApplicationText }}
    </a>
  </div>
</template>

<script lang="ts">

export default {

  data() {
    return {
      joinDiscordText: "Join Discord",
      twitchText: "Guild Leader Junataro's Twitch",
      guildApplicationText: "Guild Application",
      discordLink: "https://discord.gg/RrPYU8g439",
      guildLeaderTwitch: "https://www.twitch.tv/bryanthedrowzee",
      guildApplicationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdD4K9geGi6xl5NzT7hn-W7YkZcQk5O340SRf52pr5a5xv8vg/viewform"
    }
  }
}
</script>

<style scoped>
.guild-links-wrapper {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.guild-link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ffc857;
  color: #242424;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
}

.guild-link-button:hover {
  box-shadow: 0 6px 16px rgba(255, 180, 60, 0.2);
  transform: scale(1.02);
}

.button-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
</style>
