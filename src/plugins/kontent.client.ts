import { defineNuxtPlugin } from '#app'
import { DeliveryClient } from '@kentico/kontent-delivery'

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public.kontent

  const deliveryClient = new DeliveryClient({
    projectId: config.projectId,
    previewApiKey: config.previewApiKey,
    defaultQueryConfig: {
      usePreviewMode: !!config.previewApiKey,
    },
  })

  return {
    provide: {
      kontent: deliveryClient
    }
  }
})
