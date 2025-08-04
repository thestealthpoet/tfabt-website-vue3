<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-links">
        <router-link to="/" exact-active-class="active-link">{{ homeText }}</router-link>
        <router-link to="/faqs" exact-active-class="active-link">{{ faqsText }}</router-link>
        <router-link to="/application" exact-active-class="active-link">{{ guildApplicationText }}</router-link>
      </div>
    </div>
    <GuildEmblem />
  </nav>
</template>

<script lang="ts">
import GuildEmblem from '../home-page/guild-emblem/GuildEmblem.vue';
export default {
  components: { GuildEmblem },

  data() {
    return {
      faqsText: "FAQs",
      homeText: "Home",
      guildApplicationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdD4K9geGi6xl5NzT7hn-W7YkZcQk5O340SRf52pr5a5xv8vg/viewform",
      guildApplicationText: "Guild Application"

    }
  }

}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nav-container {
    max-width: 1100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;

    a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #f4e3b2;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }

    .active-link {
      text-decoration: underline;
      color: #fff;
    }
  }
}
</style>