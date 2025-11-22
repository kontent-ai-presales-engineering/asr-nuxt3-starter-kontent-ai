
import { defineStore } from "pinia";
import { Article } from "~~/models/article";
import { projectModel } from "~~/models/_project";
import { DeliveryClient } from "@kentico/kontent-delivery";

interface ArticleState {
    articles: Article[],
    dataLoaded: boolean
}

export const useArticle = defineStore('article', {
    state: (): ArticleState => ({
        articles: [],
        dataLoaded: false
    }),
    getters: {
        topThree: (state) => state.articles.slice(0, 3)
    },
    actions: {
        async getData(kontent: DeliveryClient | null) {
            if (!kontent) {
                console.error('Kontent client is not available')
                this.articles = []
                this.dataLoaded = true
                return
            }
            
            if (!this.dataLoaded){
                try {
                    const response = await kontent
                        .items<Article>()
                        .type(projectModel.contentTypes.article.codename)
                        .orderByDescending(`elements.${projectModel.contentTypes.article.elements.date.codename}`)
                        .toPromise()
                    
                    // Check if response has data property
                    if (response && response.data && response.data.items) {
                        this.articles = response.data.items
                    } else if (response && response.items) {
                        // Fallback: response might not have .data wrapper
                        this.articles = response.items
                    } else {
                        console.error('Unexpected response structure:', response)
                        this.articles = []
                    }
                    this.dataLoaded = true
                } catch (error) {
                    console.error('Error fetching articles:', error)
                    this.articles = []
                    this.dataLoaded = true // Set to true to prevent infinite retries
                }
            }
        },
        async getBySlug(slug: string, kontent: DeliveryClient | null): Promise<Article | undefined> {
            await this.getData(kontent)
            return this.articles.find(a => a.elements.slug.value == slug) as Article | undefined
        },
        async getByCategory(categoryCodename: string, kontent: DeliveryClient | null): Promise<Article[]>{
            await this.getData(kontent)
            return this.articles.filter(a => a.elements.category.value.some(c => c == categoryCodename))
        },
        async getByTag(tagCodename: string, kontent: DeliveryClient | null): Promise<Article[]>{
            await this.getData(kontent)
            return this.articles.filter(a => a.elements.tags.value.some(t => t == tagCodename))
        }
    }
})