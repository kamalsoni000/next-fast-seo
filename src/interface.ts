
export interface SEOProps {
    type: string,
    title: string,
    description: string,
    image: string,
    keyword?: string
}

export interface socialTagsType extends SEOProps {
    createdAt?: string,
    updatedAt?: string,
}

export interface addJsonLdType {
    title: string,
    description: string,
    image: string,
    createdAt?: string
}

export interface defaultMetaType {
    meta: {
        title: string,
        keyword: string,
        description: string,
        author: string,
        social: {
            graphic: string,
            twitter: string
        }
    }
}