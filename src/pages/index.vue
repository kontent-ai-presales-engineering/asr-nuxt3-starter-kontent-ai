<template>
    <div class="page-wrapper">
        <Head>
        </Head>

        <Sidebar :isHomePage="true"/>
        <div class="content">
            <div class="content__inner">
                <Article v-for="article in articles" :data="article" :key="article.system.id" />
            </div>
        </div>
    </div>
</template>

<script>
import { useArticle } from "~~/store/article"
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

export default {
    async setup() {
        const nuxtApp = useNuxtApp()
        const kontent = nuxtApp.$kontent
        
        if (!kontent) {
            console.error('Kontent client is not available')
            return {
                articles: []
            }
        }
        
        const store = useArticle();
        await store.getData(kontent);
        const { topThree } = storeToRefs(store)
        
        return {
            articles: topThree
        }
    }
}
</script>