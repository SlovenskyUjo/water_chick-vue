<template>
  <nav>
    <Navbar />

    <router-view />
  </nav>

</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Discord from './components/Discord.vue';

</script>

<style scooped>
article {
  background: #101314;
}
</style>