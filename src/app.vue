<script lang="ts">
  export default {
    setup(){
      onMounted(() => {
        //@ts-ignore
        KontentSmartLink.initialize({ queryParam: "preview" });
      })
    },
    metaInfo: {
      title: "Nuxt 3 + Kontent.ai",
      titleTemplate: "&s | Kontent"
    },
  }
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
