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