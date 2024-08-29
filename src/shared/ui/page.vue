<template>
    <div class="animated-gradient w-full h-full min-h-screen min-w-screen bg-black-900 !text-white">
        <div class="min-w-screen py-3 flex">
          <div class="mx-auto w-[410px] flex justify-between border border-black-800 p-2 rounded-3xl">
            <div v-for="(i,x) in opts" :key="x" class="border border-black-800 py-1  rounded-3xl hover:bg-black-800  w-[125px] text-center cursor-pointer">
            {{ i.label }}
          </div>
          </div>
        </div>
        <div class="p-10">
            <slot></slot>
        </div>

    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "page",
  setup(){

    const opts = [
      {label: "Home"},
      {label:"About"},
      {label:"Contact"}
    ]
    return {
      opts
    }
  }
})
</script>
