<script lang="ts" setup>
defineProps({
  frontmatter: {
    type: Object,
    default: () => [],
  },
})
</script>
<template>
  <div class="main">
    <div class="top-info">
      <h1 v-if="frontmatter.title" class="top-info-title">{{ frontmatter.title }}</h1>
      <p v-if="frontmatter.tagline" class="top-info-desc">{{ frontmatter.tagline }}</p>
    </div>
    <div class="cards" v-if="frontmatter.cards">
      <!--  -->
      <div class="card" v-for="card in frontmatter.cards" :key="card">
        <div class="card-head">
          <h4 v-if="card.package">{{ card.package }}</h4>
          <div class="price-badge">
            <h1 v-if="card.price">{{ card.price }}</h1>
            <span v-if="card.badge" class="badge-price">{{ card.badge }}</span>
          </div>
          <p v-if="card.tagline" class="text-c-lightest">{{ card.tagline }}</p>
        </div>
        <div class="card-body">
          <ul>
            <li v-for="list in card.features" :key="list"><p class="text-c-lighter">{{ list }}</p></li>
          </ul>
        </div>
        <div class="card-footer">
          <p v-if="card.footertagline">{{ card.footertagline }}</p>
          <button class="button-small" v-if="card.link">
            <a :href="card.link">{{ card.buttonText }}</a>
          </button>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
  <!-- <footer>
    <div class="links">
      <div class="social">
        <a
          href="https://github.com/framely/community"
          target="_blank"
          rel="noopener noreferrer"
          ><svg>
            <path
              fill="var(--c-text-lighter)"
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <p>Framely, Inc &copy; 2022 All rights reserved</p>
    </div>
    <div class="links">
      <a href="#">What is framely?</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Sitemap</a>
    </div>
  </footer> -->
</template>
<style lang="scss" scoped>
footer{
    width: var(--homepage-width);
    margin: auto;
}
.main {
  max-width: var(--homepage-width);
  position: relative;
  margin-top: 30px;
  display: flex;
  margin: auto;
  flex-direction: column;

  .text-c-lightest{
    color: var(--c-text-lightest);
  }
  .text-c-lighter{
    color: var(--c-text-lighter);
  }

  .cards {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 2rem 2rem 2rem;

    .card {
      border: 1px solid var(--c-border);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      padding: 1em;

      .price-badge {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .badge-price {
          background: var(--c-icon);
          padding: 2px 5px;
          color: var(--c-brand) !important;
          border-radius: 2px;
          height: 20px;
          margin-left: 5px;
        }
      }
      .card-head {
        padding: 0 10px 20px 10px;
        border-bottom: 1px solid var(--c-border);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .card-body {
        height: 100%;
        padding: 10px;

        ul {
          list-style: none;
          padding-left: 0;
          //height: 100%;
          min-height: fit-content;
        }
      }
      .card-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        padding-top: 1rem;
        padding-bottom: 1rem;

        p {
          font-weight: bold;
        }
        button {
          width: 90%;
          a {
            color: var(--c-bg);
          }
        }
      }
    }
  }
}
@media (max-width: 719px) {
  .main {
    //width: 100%;
    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      //width: 90%;
      .card {
        //width: 90%;
        min-width: fit-content;
      }
    }
  }
}
</style>