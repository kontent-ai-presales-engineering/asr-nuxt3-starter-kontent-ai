
import { IDeliveryClient } from "@kontent-ai/delivery-sdk";
import { defineStore } from "pinia";
import { Category } from "~~/models/category";
import { projectModel } from "~~/models/_project";

interface CategoryState {
    categories: Category[],
    dataLoaded: boolean
}

export const useCategory = defineStore('category', {
    state: (): CategoryState => ({
        categories: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: IDeliveryClient) {
            if (!this.dataLoaded){
                this.categories = (await kontent
                    .items<Category>()
                    .type(projectModel.contentTypes.category.codename)
                    .toPromise()).data.items
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: IDeliveryClient): Promise<Category> {
            await this.getData(kontent);
            return this.categories.find(c => c.elements.slug.value == slug) as Category;
        }
    }
})