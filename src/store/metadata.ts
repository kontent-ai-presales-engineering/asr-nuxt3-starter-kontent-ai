
import { defineStore } from "pinia";
import type { AuthorType as Author } from "~~/models/types/author-type.generated";
import { projectModel } from "~~/models/_project";
import type { SiteMetadataType as SiteMetadata } from "~~/models/types/site-metadata-type.generated";
import { IDeliveryClient } from "@kontent-ai/delivery-sdk";

interface MetadataState {
    author: Author,
    metadata: SiteMetadata,
    dataLoaded: boolean,
}

export const useMetadata = defineStore('metadata', {
    state: (): MetadataState => ({
        author: {} as Author,
        metadata: {} as SiteMetadata,
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: IDeliveryClient) {
            if (!this.dataLoaded){

                this.author = (await kontent
                    .item<Author>(projectModel.contentTypes.author.codename)
                    .toPromise()).data.item

                this.metadata = (await kontent
                    .item<SiteMetadata>(projectModel.contentTypes.site_metadata.codename)
                    .toPromise()).data.item

                this.dataLoaded = true
            }
        }
    }
})