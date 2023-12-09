<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ScrollerPageView from './ScrollerPageView.vue'
</script>

<template>
  <ScrollerPageView>
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="3">
        <h1>
          Yes&nbsp;to&nbsp;<span class="highlighted">innovation</span>.
          <span class="highlighted">No&nbsp;to&nbsp;</span>consumerism.
        </h1>
        <p>
          <b>Farm-to-table tech solutions</b>. Locally grown, serving your needs, without
          intermediaries.
        </p>
        <p>Don't just use technology. <b>Fund what you believe in.</b></p>
      </div>
      <div class="col centered rellax" data-rellax-speed="5">
        <div class="btns-center">
          <RouterLink to="/fund" class="btn accent">Explore projects</RouterLink>
        </div>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="4">
      <div class="col col-text col-md">
        <p>
          The "Fuck the VCs" movement is about building
          <b>the first open&nbsp;source investment&nbsp;community</b>. <b>Users</b> are
          <b>investors</b>, <b>contributors</b> are <b>investors</b>, and <b>investors</b> are
          <b>curators</b>.
        </p>
      </div>
    </div>

    <div class="row rellax" data-rellax-speed="3">
      <div class="col col-text col-md">
        <h2>Reclaim your digital autonomy.</h2>
        <p>
          <b>The customer is king.</b>
          Gain access to user-funded products that respect your privacy and autonomy. <b>You</b> can
          decide to fund projects that respect your values. <b>You</b> can decide to fund the
          initiatives and features that you need and want.
        </p>
        <p>
          <b>From passive consumers to active creators of value.</b>
          With the FTVCs crowd-investment platform, you have the control. You invest your time,
          attention, and money however you decide it.
        </p>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="2">
      <div class="col col-text col-md">
        <h2>You—We—are not the product.</h2>
        <p>
          <b>Free services come at a hidden cost.</b>
          Funding transparent, open alternatives is our way out. Let's make open-source a default.
        </p>
        <p>
          <b>Stop paying, start investing.</b>
        </p>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="1">
      <div class="col col-text col-md">
        <h2>Building sustainable, user-focused tech.</h2>
        <p>
          Growth is not progress. Our mission is finding the
          <b>most efficient way for our society to innovate sustainably</b>.
        </p>
        <p>Our ambition is to build <b>Earth's biggest innovation marketplace</b>.</p>
      </div>
    </div>

    <div class="row content centered">
      <div class="col centered">
        <RouterLink to="/join" class="btn large">Start curating projects</RouterLink>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped></style>
