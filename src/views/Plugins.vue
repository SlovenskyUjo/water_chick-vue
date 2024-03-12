
<template>
  <main>
    <article class="p-5 pb-[10rem] pt-9 sm:pt-[6rem]">
        <section>
          <figure>
            <img src="../assets/reward(1).png" alt="" class="mx-auto rounded pt-10">
          </figure>
          
          <div class="plugin">
            <h1 class="font-bold text-[8vw] text-blue-400 sm:text-5xl">CReward</h1>
            <h3 class="text-white font-semibold text-[10vw] sm:text-6xl">Multi-reward GUI plugin</h3>
            <p class="text-white pt-5 sm:block">Multi-reward GUI plugin is an intriguing Minecraft <br>plugin that allows players on servers to earn rewards for various achievements. 🌟</p>
            <a href="https://www.spigotmc.org/resources/creward-reborn-1-8-1-20-x.100822/" target="_blank">
              <ButtonComponent btnTitle="View More" />
            </a>
          </div>
        </section>
        
        <section class="pt-[5rem]">
          <figure>
            <img src="../assets/hover(1).png" alt="" class="mx-auto rounded pt-10">
          </figure>

          <div class="plugin">
            <h1 class="font-bold text-[8vw]  text-blue-400 sm:text-5xl">UnlimitedChats</h1>
            <h3 class="text-white font-semibold text-[10vw] sm:text-6xl">Private chat system</h3>
            <p class="text-white pt-5">Create as many chat groups as you wish.</p>
            <a href="https://builtbybit.com/resources/40414/" target="_blank">
              <ButtonComponent btnTitle="View More" />
            </a>
          </div>
        </section>
    </article>

    
  </main>
</template>

<script setup>
  import ButtonComponent from '../components/ButtonComponent.vue';
</script>