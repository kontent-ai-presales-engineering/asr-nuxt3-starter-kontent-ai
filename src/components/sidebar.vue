<template>
    <div class="sidebar">
      <div class="sidebar__inner" :data-kontent-item-id="author.system.id">
        <div class="sidebar__author">
          <div>
            <nuxt-link to="/">
              <img
                src="/radek.jpg"
                class="sidebar__author-photo"
                width="120"
                height="120"
                :alt="author.elements.name.value"
                :data-kontent-element-codename="$projectModel.contentTypes.author.elements.avatar_image.codename"
              />
            </nuxt-link>
            <h1 v-if="isHomePage" class="sidebar__author-title" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.name.codename">
                <nuxt-link class="sidebar__author-title-link" to="/">
                    {{author.elements.name.value}}
                </nuxt-link>
            </h1>
            <h2 v-else class="sidebar__author-title" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.name.codename">
                <nuxt-link class="sidebar__author-title-link" to="/">
                    {{author.elements.name.value}}
                </nuxt-link>
            </h2>
            <p class="sidebar__author-subtitle" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.bio.codename">
                {{author.elements.bio.value}}
            </p>
          </div>
        </div>
        <div>
          <Menu />
          <Links :data="author" />
          <p class="sidebar__copyright">{{metadata.elements.copyright.value}}</p>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { useMetadata } from "../store/metadata"
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const store = useMetadata();
        
        await store.getData(kontent);
        const { author, metadata } = storeToRefs(store)
        return {
            author,
            metadata
        }
    },
    props: ['isHomePage']
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.sidebar {
    width: 100%;
    background: #f8f8f8;
    min-height: 100vh;
    flex-shrink: 0;
    &__inner {
        position: relative;
        padding: 40px 30px;
        text-align: center;
    }
    
    // Fixed width for larger screens
    @media (min-width: 685px) {
        width: 320px;
    }
    &__author {
        margin-bottom: 30px;
        &-photo {
            display: inline-block;
            margin-bottom: 20px;
            border-radius: 50%;
            background-clip: padding-box;
            width: 120px;
            height: 120px;
            border: 5px solid #ffffff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        &-title {
            font-size: 24px;
            font-weight: 600;
            @include line-height(1.2);
            @include margin(.5, 0, .5, 0);
            &-link {
                color: $color-base;
                text-decoration: none;
                &:hover,
                &:focus {
                    color: $color-primary;
                }
            }
        }
        &-subtitle {
            color: #888;
            @include line-height(1.4);
            @include margin-bottom(1);
            font-size: 14px;
        }
    }
    &__copyright {
        color: #aaa;
        font-size: 12px;
        margin-top: 30px;
    }
}

@include breakpoint-sm {
    .sidebar {
        width: 320px;
        &__inner {
            padding: 50px 30px;
            &:after {
                display: none;
            }
        }
    }
}

@include breakpoint-md {
    .sidebar {
        width: 360px;
        &__inner {
            padding: 60px 40px;
        }
    }
}
</style>