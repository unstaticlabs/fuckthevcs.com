<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Rellax from 'rellax'

const props = defineProps(['disabled', 'forceScrolled'])
const scrolled = ref(!!props.forceScrolled)

const updateScroll = () => {
  scrolled.value = window.scrollY >= window.innerHeight / 4
}

onMounted(() => {
  new Rellax('.rellax', {
    breakpoints: [0, 800, 1201]
  })
  if (!props.disabled && !props.forceScrolled) {
    window.addEventListener('scroll', updateScroll)
  }
  window.scrollTo(0, 0)
  scrolled.value = !!props.forceScrolled
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <div class="container" :class="{ scrolled }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
div.container {
  display: flex;
  flex-direction: column;
  padding: 1rem 6rem;
  align-items: stretch;
  overflow: hidden;

  .highlighted {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, var(--color-accent) 50%);
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
      background: rgba(var(--color-secondary-rgb), 0.79);
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

  & > div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem 0;

    &.reversed {
      flex-direction: row-reverse;
    }

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

    &.main {
      flex-basis: 50vh;

      & > .col-text {
        padding-top: 6rem;
      }

      h1 {
        min-width: 29rem;
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

    .btns-center {
      flex-direction: column;
    }
    .btns-right {
      justify-content: center;
    }

    .col {
      flex-basis: auto !important;
    }

    .highlighted::before {
      margin-top: 16px;
    }

    div.row, div.row.reversed {
      flex-direction: column;

      &.main {
        h1 {
          min-width: auto;
        }
      }
    }
  }
}
</style>
