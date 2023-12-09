<script setup lang="ts">
import ScrollerPageView from './ScrollerPageView.vue'
import SocialsComponent from '../components/SocialsComponent.vue'

import { RouterLink } from 'vue-router'
</script>

<template>
  <ScrollerPageView>
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="1">
        <h1>
          <span class="highlighted">The&nbsp;future&nbsp;</span>of innovation&nbsp;<span
            class="highlighted"
            >is&nbsp;ours</span
          >
        </h1>
        <p>
          <strong>We deserve better.</strong>
          Tech innovation is dominated by monopolistic platforms. We deserve better products and
          services, serving our interests. Don't let our knowledge become their new capital.
          <strong
            >Knowledge should always be free. Read&nbsp;our&nbsp;<RouterLink to="/manifesto"
              >Manifesto</RouterLink
            >.</strong
          >
        </p>
        <SocialsComponent />
      </div>
      <div
        class="col col-media rocket-container rellax"
        data-rellax-speed="3"
        data-rellax-mobile-speed="5"
      >
        <img class="rocket" src="../assets/rocket.png" />
      </div>
    </div>

    <div class="row content">
      <div class="col col-text col-md">
        <h2>Our future is collective</h2>
        <h3>Invest in communities with purpose</h3>
        <p>
          Traditional investors are middle-men to value creation. We all have the right to invest in
          and get returns from technology. We are redefining the economic system with a new
          investment model. Everyone can be an&nbsp;<strong>investor</strong>,
          a&nbsp;<strong>consumer</strong>, a&nbsp;<strong>contributor</strong>, and
          a&nbsp;<strong>project&nbsp;leader</strong>.
        </p>
        <p>
          Not all problems are worth solving:<br />
          <strong>Invest in communities today to curate tomorrow.</strong>
        </p>
        <div class="btns-right">
          <RouterLink to="/fund" class="btn accent">Start curating projects</RouterLink>
        </div>
      </div>
    </div>

    <div class="row content">
      <div class="col col-text">
        <h2>Reinventing organizations</h2>
        <h3>Why do we work? What is value?</h3>
        <p>
          The future of innovation is open, collaborative, and decentralized.
          <strong>Let's&nbsp;reinvent&nbsp;the&nbsp;game.</strong>
        </p>
        <p>
          Our movement redefines value creation. We propose a decentralized investment platform.
          Investing time and money in purpose-led communities.
        </p>
        <p>
          <strong>We aim to enable each and every human to live from their craft.</strong>
        </p>
        <p><strong>Join the "Fuck The VCs" movement as a...</strong></p>
        <div class="btns-center">
          <RouterLink to="/contributors" class="btn"
            >Contributor<br />(I've got skills!)</RouterLink
          >
          <RouterLink to="/users" class="btn">User<br />(I've got needs!)</RouterLink>
          <RouterLink to="/investors" class="btn">Curator<br />(I've got ideas!)</RouterLink>
        </div>
      </div>
    </div>

    <div class="row content">
      <div class="col col-md col-text">
        <h2>Closing the loop</h2>
        <h3>Direct-to-consumer innovation</h3>
        <p><strong>Stop</strong> consuming. <strong>Start</strong> investing.</p>
        <p>
          Deploy your resources on communities with a purpose.<br />
          Benefit from better open-source products, at low to no cost.
        </p>
        <p>Buy shares in free projects today (and thank us later).</p>
        <p></p>
        <h3 class="inline-heading">Transparent, direct, accessible incentives</h3>
        <p>
          Misaligned and hidden incentives encourage counterproductive rent-seeking solutions
          <a
            target="_blank"
            href="https://pluralistic.net/2023/11/03/subprime-attention-rent-crisis/#euthanize-rentiers"
            >making things worse</a
          >
          for everyone involved. We believe in the profit motive and the free markets. We propose an
          economic model with clear, causal, easy-to-understand incentives.
        </p>
      </div>
      <div class="col col-media rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0">
        <img src="../assets/curation.png" />
      </div>
    </div>

    <div class="row content">
      <div class="col col-sm col-text">
        <h2>
          We&nbsp;are&nbsp;the&nbsp;finance&nbsp;arm of the&nbsp;free&nbsp;software&nbsp;movement
        </h2>
        <p class="strong">
          "The paradigm of competition is a race: by rewarding the winner, we encourage everyone to
          run faster. When capitalism really works this way, it does a good job; but its defenders
          are wrong in assuming it always works this way. If the runners forget why the reward is
          offered and become intent on winning, no matter how, they may find other strategies—such
          as, attacking other runners. If the runners get into a fist fight, they will all finish
          late." <i>Richard Stallman,&nbsp;GNU Manifesto,&nbsp;1985</i>
        </p>
        <p>We now have the technology to decentralize both the race and the reward.</p>
      </div>
    </div>
    <div class="row content">
      <div class="col col-md col-text">
        <h2>We are building an open market</h2>
        <h3>for purpose-driven communities</h3>
        <p>
          Innovation is currently inefficient, secretive, and not at the service of the consumers.
          We propose to invest directly in the communities and purposes that are serving us. Stop
          paying for expensive products, expensive in both time and money. Instead invest in free,
          open innovation and get cheap, high quality, respectful, transparent products designed and
          built for your interests by inclusive and open communities.
        </p>
      </div>
      <div class="col col-media rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0">
        <a target="_blank" href="https://openmarketfoundation.org/" class="btn primary large">
          Read the paper
        </a>
      </div>
    </div>
    <div class="row content">
      <div class="col col-md col-text">
        <p><strong> Let's invest in our tomorrow, today. </strong></p>
      </div>
    </div>
    <div class="row content">
      <div class="col col-md col-text">
        <h2>The future of work is open, collaborative, and decentralized</h2>
        <p>
          We advocate for open-source collaboration as a means to drive genuine innovation and
          inclusivity. We redefine 'investment' as active participation in innovation, ensuring
          benefits are shared among all contributors. We adopt a decentralized approach to empower
          individuals and communities, moving away from centralized control.
        </p>
        <h3 class="inline-heading">Never pay anymore. Invest.</h3>
        <p>
          Buying products generate margins, margins generate profits, profits generate (hopefully)
          investment, investment (hopefully) generates better products.
        </p>
        <p>
          <strong
            >Why not pay the right price and chose to invest in what you believe directly?</strong
          >
        </p>
        <h3 class="inline-heading">Never work anymore. Invest.</h3>
        <p>
          Working is an investment of your time. Time is the ultimate and most valuable currency.
          There is no right exchange value for your labor, only you can decide what's fair.
        </p>
        <p><strong>Why not invest your time and get a share of what you built?</strong></p>
      </div>
      <div class="col col-media rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0">
        <h2 class="handwritten">Value = Effort x Hype</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text">
        <h2>Free users. Free workers. Free knowledge. Free innovation.</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text">
        <h2>We are building the first open source investment community.</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col col-text">
        <h2>Become an investor.</h2>
      </div>
    </div>
    <div class="row content centered">
      <div class="col centered">
        <RouterLink to="/fund" class="btn accent large">Start curating projects</RouterLink>
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
    width: 22rem;
  }
}
</style>
