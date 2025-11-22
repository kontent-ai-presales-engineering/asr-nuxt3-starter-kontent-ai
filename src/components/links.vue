<template>
  <div class="links">
    <ul class="links__list">
      <li v-if="data.elements.twitter.value" class="links__list-item" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.twitter.codename">
        <a
          :href="`https://www.twitter.com/${data.elements.twitter.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-twitter" />
        </a>
      </li>
      <li v-if="data.elements.github.value" class="links__list-item" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.github.codename">
        <a
          :href="`https://www.github.com/${data.elements.github.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-github" />
        </a>
      </li>
      <li v-if="data.elements.vk.value" class="links__list-item" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.vk.codename">
        <a
          :href="`https://www.vk.com/${data.elements.vk.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-vkontakte" />
        </a>
      </li>
    </ul>
    <ul class="links__list">
      <li v-if="data.elements.email.value" class="links__list-item" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.email.codename">
        <a :href="`mailto:${data.elements.email.value}`">
          <i class="icon-mail" />
        </a>
      </li>
      <li v-if="data.elements.telegram.value" class="links__list-item" :data-kontent-element-codename="$projectModel.contentTypes.author.elements.telegram.codename">
        <a :href="`telegram:${data.elements.telegram.value}`">
          <i class="icon-paper-plane" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
    props: ['data']
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.links {
    margin-bottom: 20px;
    &__list {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 15px 0;
        &-item {
            padding: 0;
            margin: 0 8px;
            height: 32px;
            width: 32px;
            line-height: 32px;
            border-radius: 50%;
            text-align: center;
            background: #ffffff;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.2s;
            & a {
                border: 0;
                display: block;
                & i {
                    font-size: 16px;
                    color: #666;
                }
            }
            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                & a i {
                    color: #ff6b35;
                }
            }
        }
    }
}

</style>