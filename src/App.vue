<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import NavBar from './components/nav-bar/NavBar.vue';
export default {
  components: { NavBar }

}

</script>



<style scoped></style>
