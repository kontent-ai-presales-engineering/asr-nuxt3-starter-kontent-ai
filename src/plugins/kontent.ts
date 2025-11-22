import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { DeliveryClient } from '@kentico/kontent-delivery'

export default defineNuxtPlugin((nuxtApp) => {
  // Prevent redefinition if already provided
  if (nuxtApp.$kontent) {
    return
  }

  const config = useRuntimeConfig()
  const kontentConfig = config.public?.kontent || config.kontent

  if (!kontentConfig || !kontentConfig.environmentId) {
    console.error('Kontent configuration is missing. Please set KONTENT_ENVIRONMENT_ID environment variable.')
    return {
      provide: {
        kontent: null
      }
    }
  }

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

