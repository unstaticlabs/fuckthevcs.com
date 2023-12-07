<script setup lang="ts">
import ScrollerPageView from './ScrollerPageView.vue'

import { RouterLink } from 'vue-router'
</script>

<template>
  <ScrollerPageView disabled="true">
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="1">
        <h1>
          <span class="highlighted">Fundraising</span> for your
          <span class="highlighted">open-source</span>&nbsp;projects
        </h1>
        <p>
          Crowdfunding with a new investment model: Trademarks valuation.
          Build&nbsp;<b>useful&nbsp;projects</b>. Build&nbsp;<b>communities</b>.
          Build&nbsp;<b>brands</b>.
        </p>
        <p><RouterLink to="/">> About the "Fuck The VCs" movement</RouterLink></p>
        <p>
          <a target="_blank" href="https://openmarketfoundation.org/"
            >> Read the Open Market paper</a
          >
        </p>
      </div>
      <div class="col centered align-end rellax" data-rellax-speed="-1">
        <div class="btns-right">
          <RouterLink to="/join" class="btn large secondary"> Join the waitlist </RouterLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col col-media rocket-container rellax"
        data-rellax-speed="3"
        data-rellax-mobile-speed="5"
      >
        <img class="rocket" src="../assets/rocket.png" />
      </div>
      <div class="col col-md">
        <h2>Only one constraint:</h2>
        <h3>You must use a free (libre) open source license</h3>
        <p>
          We believe in maximized utility. And we are deeply convinced that free and libre
          open-source innovation is the most efficient methodology to deliver the highest utility to
          market. You can find the list of approved licenses on the
          <a target="_blank" href="https://opensource.org/licenses/"
            >Open Source Initiative website.</a
          >
        </p>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="-1">
      <div class="col col-text col-md">
        <h2>Brand Equity Crowdfunding.</h2>
        <p>
          Raise funds for your project leveraging the value of your brand. Brands are the result of
          many intangibles: governance, quality, roadmap, utility. Brand Equity is a share into your
          Brand (often materialized with a Trademark).
        </p>
      </div>
    </div>

    <div class="row content align-end rellax" data-rellax-speed="-0.6">
      <div class="col col-text col-md">
        <h2>R&D Costs Recovery.</h2>
        <p>
          Open-source software is the perfect non-rivalrous good. Once produced, it can be
          reproduced for free forever. The biggest funding question mark is about the R&D costs:
          research, design, development. The crowd-investment approach aim to have these covered
          directly by your (target) end-consumers.
        </p>
      </div>
    </div>

    <div class="row content rellax" data-rellax-speed="-0.3">
      <div class="col col-text col-md">
        <h2>New Market Incentives.</h2>
        <p>
          Building on <a href="https://openmarketfoundation.org/">the Open Market</a>, we are
          creating new incentives for curators.<br />
          Curators are those who invested before a project got more popular. Contributors,
          consumers, investors: all are incentivized to build the most valuable brand.
        </p>
      </div>
    </div>

    <div class="row align-end rellax" data-rellax-speed="-0.7">
      <div class="col col-text col-md">
        <h2>Call for Projects (opening soon)</h2>
        <h3>End-user-facing, Privacy-first, Open-Source</h3>
        <p>
          Ready to build? Already have an existing project? Interested in crowdfunding or
          contributing time and money to other projects?
        </p>
        <p>
          <b>Get notified when the crowd-investment platform is live. Coming soon! </b>
        </p>
        <div class="btns-right">
          <RouterLink to="/join" class="btn accent">Sign-up for the waiting-list</RouterLink>
        </div>
      </div>
    </div>
  </ScrollerPageView>
</template>

<style lang="scss" scoped>
div.rocket-container {
  z-index: 3;
  overflow-y: visible;
  height: 3rem;
  img.rocket {
    height: auto;
    margin: 0;
    display: block;
    width: 3rem;
    min-width: 200px;
    transform: scaleX(-1);
  }
}

div.align-end {
  align-self: flex-end !important;
  justify-content: flex-end !important;
}
</style>
