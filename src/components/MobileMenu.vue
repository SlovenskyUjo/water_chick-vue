
<template>
  <nav class="flex fixed top-0 left-0 w-full z-20 justify-around p-4 bg-black bg-opacity-50 text-blue-300 font-bold text-lg ">
    <div class="mobile-toggle sm:hidden flex items-center mx-auto ">
      <svg class="fill-current w-6 h-6" viewBox="0 0 20 20">
				<path 
          d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
						c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
						s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
						c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
			</svg>
    </div>
    
      <ul class="hidden sm:flex sm:gap-x-6">
      <router-link to="/">
        <span class="hover:text-blue-500 transition duration-100">Home</span>
      </router-link>

      <router-link to="/plugins">
        <span class="hover:text-blue-500 transition duration-100">Plugins</span>
      </router-link>
    </ul>
  </nav>
</template>



<template>
  <div class="bg-gray-900 text-white p-4 md:flex md:items-center justify-between px-4">
    <div class="text-2xl font-bold text-white cursor-pointer">
      <h1>Water_Chick</h1>
      <span class="text-white text-4xl absolute right-6 top-3.5 cursor-pointer sm:hidden" v-on:click="menuOpen">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"> </i>
      </span>
      <ul class="md:flex gap-5 items-center absolute md:static bg-gray-900 w-full md:w-auto md:pb-0 px-6 md:px-0 top-14 duration-500" :class="[open ? 'left-0' : 'left-[-100%]']" >
        <li class="my-4 md:my-0 hover:text-green-400 duration-300 text-xl flex ">
          <router-link to="/">
            <span>Home</span>
          </router-link>
          <router-link to="/plugins">
            <span>Plugins</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false)

const menuOpen = () => {
  open.value = !open.value
}

</script>