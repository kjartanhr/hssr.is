/**
 * Type definitions for data from WordPress JSON REST API.
 *
 * Probably best to replace this with something auto-generated from https://wordpress.org/plugins/wp-openapi/ or similar, in the future.
 */

export type T_WordPress_Post = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: false;
    };
    excerpt: {
        rendered: string;
        protected: false;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    jetpack_sharing_enabled: boolean;
    jetpack_featured_media_url: string;
    uagb_featured_image_src: {
        full: boolean;
        thumbnail: boolean;
        medium: boolean;
        medium_large: boolean;
        large: boolean;
        "1536x1536": boolean;
        "2048x2048": boolean;
        "post-thumbnail": boolean;
    };
    uagb_author_info: {
        display_name: string;
        author_link: string;
    };
    uagb_comment_info: number;
    uagb_excerpt: string;
    _links: {
        self: [
            {
                href: string;
            }
        ];
        collection: [
            {
                href: string;
            }
        ];
        about: [
            {
                href: string;
            }
        ];
        author: [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        replies: [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        "version-history": [
            {
                count: number;
                href: string;
            }
        ];
        "predecessor-version": [
            {
                id: number;
                href: string;
            }
        ];
        "wp:attachment": [
            {
                href: string;
            }
        ];
        "wp:term": [
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            },
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            }
        ];
        curies: [
            {
                name: string;
                href: string;
                templated: boolean;
            }
        ];
    };
};
