import { defineNuxtPlugin } from '#app'
import { projectModel } from '~/models'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.provide('projectModel', projectModel)

})