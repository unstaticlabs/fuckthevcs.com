<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ScrollerPageView from './ScrollerPageView.vue'
</script>

<template>
  <ScrollerPageView>
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="2">
        <h1><span class="highlighted">Maximizing&nbsp;</span>utility.</h1>
        <p>
          <b>Investors are curators.</b>
        </p>
        <p>The process of projects selection and promotion is what creates value.</p>
        <p>Curators bet on projects with the <b>fastest innovation</b> speed.</p>
      </div>
      <div class="col centered rellax" data-rellax-speed="5">
        <div class="btns-center">
          <RouterLink to="/fund" class="btn secondary">Explore projects</RouterLink>
        </div>
      </div>
    </div>

    <div class="row rellax" data-rellax-speed="1">
      <div class="col col-text col-md">
        <h1 class="handwritten">Value = Effort x Hype</h1>
      </div>
    </div>

    <div class="row rellax" data-rellax-speed="0">
      <div class="col col-text col-md">
        <h2>Everyone is an investor.</h2>
        <p>
          The "Fuck the VCs" movement is about building
          <b>the first open&nbsp;source investment&nbsp;community</b>. <b>Users</b> are
          <b>investors</b>, <b>contributors</b> are <b>investors</b>, and <b>investors</b> are
          <b>curators</b>.
        </p>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="0">
      <div
        class="col col-media btns-right rellax"
        data-rellax-speed="-1"
        data-rellax-mobile-speed="0"
      >
        <a target="_blank" href="https://openmarketfoundation.org/" class="btn primary large">
          Read the Open Market paper
        </a>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped></style>
