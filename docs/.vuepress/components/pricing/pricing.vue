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
      <p class="pricing" v-if="frontmatter.topsubtitle">{{frontmatter.topsubtitle}}</p>
      <h1 v-if="frontmatter.title">{{frontmatter.title}}</h1>
      <p v-if="frontmatter.tagline">{{frontmatter.tagline}}</p>
    </div>
    <div class="cards" v-if="frontmatter.cards">
      <!--  -->
      <div class="card" v-for="card in frontmatter.cards" :key="card">
        <div class="head">
          <h2 v-if="card.package">{{card.package}}</h2>
          <div class="price-badge">
            <h1 v-if="card.price">{{card.price}}</h1>
            <span v-if="card.badge" class="badge-price">{{card.badge}}</span>
          </div>
          <p v-if="card.tagline">{{card.tagline}}</p>
        </div>
        <div class="body">
          <ul >
            <li v-for="list in card.features" :key="list">{{list}}</li>
      
          </ul>
        </div>
        <div class="footer">
          <p v-if="card.footertagline">{{card.footertagline}}</p>
          <button class="button-small" v-if="card.link"><a :href="card.link">{{card.buttonText}}</a></button>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>
<style lang="scss">
.main {
  width: 100%;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  .top-info {
    margin: auto;
    text-align: center;
    // width: 70%;

  }

  .cards {
  margin: auto;

    display: grid;
    // margin-left: 10px;
    // margin-right: 10px;
    // width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    padding: 2em;

    .card {
      border: 1px solid var(--c-border);
    //       margin-left: 10px;
    // margin-right: 10px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      padding: 1em;
      min-width: 350px;
      .price-badge {
        display: flex;
        align-items: center;
        .badge-price {
          background: var(--c-icon);
          padding: 2px 5px;
          color: var(--c-brand) !important;
          border-radius: 2px;
          height: 20px;
          margin-left: 5px;
        }
      }
      .head {
        width: 90%;
        margin: auto;
        border-bottom: 1px solid var(--c-border);
        h2 {
          border: none;
        }
      }
      .footer {
        width: 90%;
        margin: auto;
        height: 12em;

        p {
          font-weight: bold;
        }
        button {
          width: 90%;
          cursor: pointer;
          a{
              color: var(--c-bg);
          }
        }
      }
      .body {
        height: 100%;
        padding-top: 12px;

        ul {
          list-style: none;
          height: 100%;
          min-height: fit-content;

          li {
            height: 30px;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
          }
        }
      }
    }
  }
}
@media (max-width: 959px) {
  .main {
    width: 100%;
    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      padding: 0;
      .card {
        width: 90%;
        min-width: fit-content;
        ul {
          li {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
@media(max-width:1024px){
    .main{
        width: 100%;

    }
}
</style>