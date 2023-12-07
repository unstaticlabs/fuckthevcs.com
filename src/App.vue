<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contributors">Contributors</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/investors">Investors</RouterLink>
      <RouterLink to="/manifesto">Manifesto</RouterLink>
      <RouterLink to="/join">Join the movement!</RouterLink>
    </nav>
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style lang="scss" scoped>
nav {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2rem;

  & > a {
    text-decoration: none;
    margin-right: 32px;
    &.router-link-active {
      font-weight: 700;
    }
  }
}

/* @media (min-width: 1024px) { */
</style>
