import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { DeliveryClient } from '@kentico/kontent-delivery'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const kontentConfig = config.public?.kontent || config.kontent

  const deliveryClient = new DeliveryClient({
    projectId: kontentConfig.environmentId,
    previewApiKey: kontentConfig.previewApiKey,
    defaultQueryConfig: {
      usePreviewMode: !!kontentConfig.previewApiKey,
    },
  })

  return {
    provide: {
      kontent: deliveryClient
    }
  }
})
