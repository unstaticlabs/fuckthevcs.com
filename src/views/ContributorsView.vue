<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ScrollerPageView from './ScrollerPageView.vue'
</script>

<template>
  <ScrollerPageView>
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="1">
        <h1>
          Meaningful&nbsp;<span class="highlighted">work</span>. Paid&nbsp;in&nbsp;<span
            class="highlighted"
            >shares.</span
          >
        </h1>
        <p>
          <b>Your time is your most valuable investment.</b>
          Contribute your skills and talent to purpose-led communities and get paid in shares.
        </p>
        <p>
          We are the finance arm of the free software movement. Our mission: to
          <b>free innovation</b> and <b>democratize access to technology and finance</b>.
        </p>
      </div>
      <div class="col centered rellax" data-rellax-speed="3" data-rellax-mobile-speed="5">
        <div class="btns-right">
          <RouterLink to="/fund" class="btn secondary">Explore projects</RouterLink>
        </div>
      </div>
    </div>

    <!--
    <div class="row content">
      <div class="col col-text col-md">
        <h2>Are you happy in your current work situation?</h2>
      </div>
    </div>
    -->

    <div class="row">
      <div class="col col-text col-md">
        <h2>The future of innovation</h2>
        <p>
          The future of innovation will be open or won't be. Open innovation comes with security,
          massive collaboration, and transparency. Join us in creating
          <b>a world where every human can live from their craft</b>.
        </p>
      </div>
    </div>

    <div class="row content">
      <div class="col col-text col-md">
        <h2>Reinventing organizations</h2>
        <p>
          Your diverse skills are the engine driving community-led projects. Here, you're more than
          a worker; you're a stakeholder in innovation.
        </p>
        <p>Our goal is to build <b>Earth's biggest innovation marketplace</b>.</p>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text col-md">
        <h2>Impact. Sustainable innovation. Empowered communities.</h2>
        <p>
          Our quest is finding the
          <b>most efficient way for our society to innovate sustainably</b>. Growth is not progress.
          Working with purpose to build meaningful solutions is. We promote the greatest good for
          the greatest number.
        </p>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text col-md">
        <h2>Objective: Time To Open-Source Alternative &lt; 0</h2>
        <p>
          The
          <a target="_blank" href="https://staltz.com/time-till-open-source-alternative.html"
            >“Time Till Open Source Alternative”</a
          >
          (TTOSA) is currently measured in years. We are aiming to make it <b>negative</b>: meaning
          the open-source alternative will exist <b>first</b>. This is why we are solving the root
          cause: making open source an attractive <b>investment</b>.
        </p>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text col-md">
        <h2>The future of work. Yours?</h2>
        <p>You have the right to contribute <b>great, meaningful work</b>.</p>
        <p>
          If you don't agree with the destination, then you shouldn't have to be a part of the
          journey. Collectively, we deserve better a journey.
        </p>
      </div>
    </div>

    <div class="row content centered">
      <div class="col centered">
        <RouterLink to="/join" class="btn accent large">Apply now</RouterLink>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped></style>
