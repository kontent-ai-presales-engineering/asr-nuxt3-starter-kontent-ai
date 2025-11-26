
import { defineStore } from "pinia";
import { MenuItem } from "~~/models/menu_item";
import { Menu } from "~~/models/menu";
import { projectModel } from "~~/models/_project";
import { IDeliveryClient } from "@kontent-ai/delivery-sdk";

interface MenuState {
    menuItems: MenuItem[],
    dataLoaded: boolean
}

export const useMenu = defineStore('menu', {
    state: (): MenuState => ({
        menuItems: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: IDeliveryClient) {
            if (!this.dataLoaded){
                this.menuItems = (await kontent
                    .items<Menu>()
                    .type(projectModel.contentTypes.menu.codename)
                    .limitParameter(1)
                    .depthParameter(2)
                    .toPromise()).data.items[0].elements.menu_items.linkedItems as MenuItem[];
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: IDeliveryClient): Promise<MenuItem>{
            await this.getData(kontent)
            return this.menuItems.find(i => i.elements.slug.value == slug) as MenuItem
        }
    }
})