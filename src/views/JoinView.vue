<script setup lang="ts">
import ScrollerPageView from './ScrollerPageView.vue'

import SocialsComponent from '../components/SocialsComponent.vue'
</script>

<template>
  <ScrollerPageView forceScrolled="true">
    <div class="row main">
      <div class="col col-text col-sm">
        <h1>Join the waitlist.</h1>
        <p>
          We will be live soon with the FTVCs ("Fuck the VCs") crowd-investment platform. Make sure to be one of the
          first investors, contributors, or users to join.
        </p>
        <SocialsComponent />
        <div class="btns-center">
          <a
            href="https://airtable.com/embed/appZNaTxdi7chbdYQ/pagLOde3F9zjIYSgi/form"
            class="btn accent large"
          >
            Sign-up form (on Airtable.com)
          </a>
        </div>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped></style>
