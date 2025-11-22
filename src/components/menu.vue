<template>
    <nav class="menu">
      <ul class="menu__list">
        <li v-for="item in menuItems" class="menu__list-item" :key="item.system.id">
          <nuxt-link 
            :to="`${item.elements.slug.value.startsWith('/') ? '' : '/'}${item.elements.slug.value}`"
            class="menu__list-item-link"
          >
            {{item.elements.label.value}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { useMenu } from "../store/menu";
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app';

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const store = useMenu()

        await store.getData(kontent);

        const { menuItems } = storeToRefs(store)
        return {
            menuItems
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.menu {
    margin-bottom: 30px;
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        &-item {
            padding: 0;
            margin: 0;
            &-link {
                display: block;
                padding: 12px 0;
                font-size: 14px;
                color: #333;
                font-weight: 500;
                text-decoration: none;
                transition: color 0.2s;
                &:hover,
                &:focus {
                    color: #ff6b35;
                }
                &--active {
                    color: #ff6b35;
                }
            }
        }
    }
}

</style>