import { defineNuxtPlugin } from '#app'
import { projectModel } from '../models/_project.js'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.provide('projectModel', projectModel)

})