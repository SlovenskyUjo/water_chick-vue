<template>
  <nav class="flex fixed top-0 left-0 w-full z-20 justify-around p-4 bg-[#24272B] sm:bg-[#24272B] text-blue-300 font-bold text-lg ">
    <span class="text-white text-4xl sm:hidden">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']" @click="menuOpen"></i>
    </span>
    
      <ul class="flex flex-col sm:flex sm:flex-row gap-5 sm:bg-transparent sm:py-0 py-5 bg-[#24272B] items-center sm:static absolute w-full sm:w-auto sm:pb-0 px-6 md:px-0 sm:mt-0 mt-[3.5rem] duration-500"  :class="[open ? 'left-0' : 'left-[-100%]']">
      <router-link v-on:click="closeNavbar" to="/">
        <span class="hover:text-blue-500 transition duration-100">Home</span>
      </router-link>

      <router-link v-on:click="closeNavbar" to="/plugins">
        <span class="hover:text-blue-500 transition duration-100">Plugins</span>
      </router-link>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const open = ref(false)

const menuOpen = () => {
  open.value = !open.value
}

const closeNavbar = () =>{
  open.value = false;
}



</script>
