import { IDeliveryClient } from "@kontent-ai/delivery-sdk";
import { defineStore } from "pinia";
import type { TagType as Tag } from "~~/models/types/tag-type.generated";
import { projectModel } from "~~/models/_project";

interface TagState {
    tags: Tag[],
    dataLoaded: boolean
}

export const useTag = defineStore('tag', {
    state: (): TagState => ({
        tags: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: IDeliveryClient) {
            if (!this.dataLoaded){
                this.tags = (await kontent
                    .items<Tag>()
                    .type(projectModel.contentTypes.tag.codename)
                    .toPromise()).data.items
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: IDeliveryClient) {
            await this.getData(kontent);
            return this.tags.find(c => c.elements.slug.value == slug) as Tag;
        }
    }
})