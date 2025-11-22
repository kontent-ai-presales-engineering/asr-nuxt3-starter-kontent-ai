// Type helper for IContentItem - defined directly to avoid runtime import issues
// This works around the named export issue when using CJS aliases in vite.config.ts

export interface IContentItemSystemAttributes {
    id: string;
    name: string;
    codename: string;
    type: string;
    lastModified: string;
    language: string;
    sitemapLocations: string[];
    collection: string;
    workflowStep: string | null;
}

export interface IContentItemElements {
    [key: string]: any;
}

export interface IContentItem<TElements extends IContentItemElements = IContentItemElements> {
    elements: TElements;
    system: IContentItemSystemAttributes;
}

