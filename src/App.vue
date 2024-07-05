<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav-component></nav-component>
    <router-view v-slot="{ Component, route }">
      <transition  :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>

</style>
