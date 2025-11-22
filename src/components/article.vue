<template>
  <div class="article" :data-kontent-item-id="data.system.id">
    <div class="article__meta">
      <time
        class="article__meta-time"
        :dateTime="$dateFormat(data.elements.date.value, 'MMMM D, YYYY')"
        :data-kontent-element-codename="$projectModel.contentTypes.article.elements.date.codename"
      >
        {{$dateFormat(data.elements.date.value, "MMMM YYYY")}}
      </time>
      <span class="article__meta-divider" />
      <span
        class="article__meta-category"
        :key="data.elements.category.linkedItems[0].elements.slug.value"
        :data-kontent-element-codename="$projectModel.contentTypes.article.elements.category.codename"
      >
        <nuxt-link
          :to="`/category/${data.elements.category.linkedItems[0].elements.slug.value}/`"
          class="article__meta-category-link"
        >
          {{ data.elements.category.linkedItems[0].elements.title.value }}
        </nuxt-link>
      </span>
    </div>
    <h2 class="article__title" :data-kontent-element-codename="$projectModel.contentTypes.article.elements.title.codename">
      <nuxt-link class="article__title-link" :to="`/article/${data.elements.slug.value}`">
        {{ data.elements.title.value }}
      </nuxt-link>
    </h2>
    <p class="article__description" :data-kontent-element-codename="$projectModel.contentTypes.article.elements.content.codename" v-html="data.elements.content.value.substr(3, Math.min(200, data.elements.content.value.length - 6))"></p>
    <nuxt-link class="article__readmore" :to="`/article/${data.elements.slug.value}`">
      Read
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
    props: ["data"]
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.article {
    margin-bottom: 50px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    &__title {
        font-size: 28px;
        font-weight: 700;
        line-height: 1.3;
        margin: 20px 0 15px;
        &-link {
            color: $color-base;
            text-decoration: none;
            &:hover,
            &:focus {
                color: $color-base;
                text-decoration: none;
            }
        }
    }
    &__description {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
        margin-bottom: 15px;
    }
    &__meta {
        margin-bottom: 10px;
        font-size: 12px;
        &-time {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        &-divider {
            margin: 0 8px;
            color: #ddd;
        }
        &-category {
            &-link {
                font-size: 12px;
                color: #ff6b35;
                font-weight: 500;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 0.5px;
                &:hover,
                &:focus {
                    color: #e55a29;
                }
            }
        }
    }
    &__readmore {
        font-size: 14px;
        color: $color-primary;
        text-decoration: none;
        font-weight: 500;
        &:hover,
        &:focus {
            color: darken($color-primary, 10%);
            text-decoration: none;
        }
    }
}
</style>