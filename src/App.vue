<template>
  <nav>
    <Navbar />

    <router-view />
  </nav>

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<style scooped>
article {
  background: #101314;
}
</style>