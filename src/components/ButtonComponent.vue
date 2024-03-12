<template>
  <button class="py-1 px-2 border-0 mt-4 text-[20px] rounded-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold text-shadow">{{ btnTitle }}</button>
</template>

<script setup>
const props = defineProps({
  btnTitle: String
})
</script>