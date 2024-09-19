import { GetStaticPropsContext } from "next";

export default function Stuff({ post }: { post: T_WordPress_Post }) {
    return (
        <pre className="p-8 whitespace-pre-wrap">
            {JSON.stringify(post, null, 2)}
        </pre>
    );
}

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

export async function getStaticPaths() {
    const res = await fetch("https://hssr.is/wp-json/wp/v2/posts");
    if (!res.ok) {
        throw Error(`Received ${res.statusText} from API.`);
    }

    const data = await res.json();

    return {
        paths: data.map((post: { slug: string }) => ({
            params: { slug: post.slug },
        })),
        fallback: true,
    };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    if (!ctx.params || !ctx.params.slug) {
        throw new Error("No params passed to getStaticProps context.");
    }

    const res = await fetch(
        "https://hssr.is/wp-json/wp/v2/posts?slug=" + ctx.params.slug
    );
    if (!res.ok) {
        if (res.status === 404) {
            return { props: {}, notFound: true };
        }

        throw Error(`Received ${res.statusText} from API.`);
    }

    const data = await res.json();

    return { props: { post: data } };
}
