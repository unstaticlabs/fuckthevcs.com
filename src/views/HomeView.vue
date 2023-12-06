<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import Rellax from 'rellax'

import FooterComponent from '@/components/FooterComponent.vue'

const scrolled = ref(false)

const updateScroll = () => {
  scrolled.value = window.scrollY >= window.innerHeight / 4
}

onMounted(() => {
  new Rellax('.rellax', {
    breakpoints: [0, 800, 1201]
  })
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <div class="container" :class="{ scrolled }">
    <div class="row main">
      <div class="col col-text col-sm rellax" data-rellax-speed="1">
        <h1>
          <span class="highlighted">The&nbsp;future</span>&nbsp;of innovation&nbsp;<span
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
        <p><strong>Join the Fcku The VCs project as a...</strong></p>
        <div class="btns-center">
          <RouterLink to="/contributors" class="btn secondary"
            >Contributor<br />(I've got skills!)</RouterLink
          >
          <RouterLink to="/users" class="btn secondary">User<br />(I've got needs!)</RouterLink>
          <RouterLink to="/curators" class="btn secondary"
            >Curator<br />(I've got ideas!)</RouterLink
          >
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
  </div>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.highlighted {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 16px;
    padding: 0 16px;
    margin-top: 32px;
    width: 105%;
    height: 24px;
    background-color: var(--color-accent);
    z-index: -1;
    transition: 0.2s all;
  }
}
.btns-right {
  display: flex;
  justify-content: end;
}
.btns-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem;
  text-align: center;
  text-decoration: none;
  font-family: var(--font-headings);
  padding: 1rem 3rem;
  border-radius: 2rem;
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow:
    8px 8px 8px 4px rgba(255, 252, 252, 0.1) inset,
    -8px -8px 4px 4px rgba(0, 0, 0, 0.1) inset,
    4px 8px 16px 0px rgba(0, 0, 0, 0.1);
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  height: 6rem;
  width: auto;
  min-width: 16rem;
  max-width: 16rem;
  cursor: pointer;
  background: rgba(var(--color-primary-rgb), 0.79);
  &.accent {
    background: rgba(var(--color-accent-rgb), 0.79);
  }
  &.secondary {
    background: rgba(var(--color-primary-rgb), 0.79);
  }
  &.large {
    max-width: 30rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

img {
  min-width: 300px;
  max-width: 80%;
}

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

h1 {
  min-width: 29rem;
}

div.container {
  display: flex;
  flex-direction: column;
  padding: 1rem 6rem;
  align-items: stretch;

  & > div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem 0;

    & > div.col {
      flex-grow: 2;
      flex-shrink: 2;
      flex-basis: 35vw;
      z-index: 1;

      &.col-sm {
        flex-grow: 0;
        flex-shrink: 3;
      }
      &.col-md {
        flex-grow: 0;
        flex-shrink: 2;
        flex-basis: 50vw;
      }

      &.col-media {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
      }
      &.col-text {
        z-index: 2;
        padding: 2rem 0;
      }

      &*:last-child {
        margin-bottom: 1rem;
      }
    }

    div {
      p {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      h2 {
        margin-top: 1rem;
        margin-bottom: 0rem;
      }
      h3 {
        margin-top: 0rem;
      }
      .inline-heading {
        margin-top: 2rem;
      }
    }

    &.main {
      flex-basis: 50vh;
      & > .col-text {
        padding-top: 6rem;
      }
    }

    &.content {
      & > div.col.col-text {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: -3rem;
          right: -4rem;
          top: -0.5rem;
          bottom: -0.5rem;
          z-index: -1;
          background-color: var(--color-secondary);
          border-radius: 2rem;
          box-shadow:
            8px 8px 8px 4px rgba(255, 252, 252, 0.25) inset,
            -8px -8px 4px 4px rgba(0, 0, 0, 0.25) inset,
            4px 8px 16px 0px rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.2s ease-in-out;
          transition: background-color 0.5s ease-in-out;
        }
      }
    }

    &:last-child {
      padding-bottom: 6rem;
    }
  }

  &::after {
    content: '';
    transition: background-color 0.5s ease-in-out;
    background-color: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1000;
  }
  &.scrolled {
    & > div.row.content {
      & > div.col.col-text::after {
        box-shadow: none;
        background: none;
      }
    }
    &::after {
      background-color: var(--color-secondary);
    }
  }

  .centered {
    justify-content: center;
    align-self: center;
  }
}

@media (max-width: 800px) {
  div.container {
    padding: 0 2rem;

    div.row {
      flex-direction: column;
    }
  }

  h1 {
    min-width: auto;
  }

  .col.col-media.rocket-container {
    z-index: 0;
  }
  div.btns-center {
    flex-direction: column;
  }
  div.btns-right {
    justify-content: center;
  }

  div.col {
    flex-basis: auto !important;
  }

  .highlighted::before {
    margin-top: 16px;
  }
}
</style>
