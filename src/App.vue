<template>
  <div>
    <GuildEmblem />
    <h1>The Fish and Bread Trick</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildEmblem from './components/guild-emblem/guild-emblem.vue';

export default defineComponent({
  components: {
    GuildEmblem
  }
})


</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
