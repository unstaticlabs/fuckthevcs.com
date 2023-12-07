<script setup lang="ts">
import ScrollerPageView from './ScrollerPageView.vue'
</script>

<template>
  <ScrollerPageView>
    <div class="row main">
      <div class="col col-text col-sm">
        <h1>Join the waitlist.</h1>
        <p>
          We will be live soon with the FTVCs crowd-investment platform. Make sure to be one of the
          first investors, contributors, or users to join.
        </p>
      </div>
    </div>
    <div class="row main">
      <div class="col">
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/appZNaTxdi7chbdYQ/pagLOde3F9zjIYSgi/form"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1500"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped></style>
