import { T_WordPress_Post } from "@/types/wordpress";
import { GetStaticPropsContext } from "next";

export default function Stuff({ post }: { post: T_WordPress_Post }) {
    return (
        <pre className="p-8 whitespace-pre-wrap">
            {JSON.stringify(post, null, 2)}
        </pre>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://hssr.is/wp-json/wp/v2/posts");
    if (!res.ok) {
        throw Error(`Received ${res.statusText} from API.`);
    }

    const data = await res.json();

    return {
        paths: data.map((post: T_WordPress_Post) => ({
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
