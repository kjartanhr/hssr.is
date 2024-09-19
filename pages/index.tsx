import Image from "next/image";
import {
    IconArrowRight,
    IconArrowUpRight,
    IconChevronRight,
    IconMenu,
    IconSwipeUp,
    IconX,
} from "@tabler/icons-react";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BACKGROUNDS = [
    "toppmyndir-2021-82.jpg",
    "toppmyndir-2021-11.jpg",
    "toppmyndir-2021-72.jpg",
];

export default function Home() {
    const [menu, set_menu] = useState<boolean>(false);
    const [is_scrolled, set_is_scrolled] = useState<boolean>(false);
    const [banner_src, set_banner_src] = useState<string>();

    useEffect(() => {
        const handle_scroll = () => set_is_scrolled(window.scrollY !== 0);

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handle_scroll);
        }

        return () => {
            window.removeEventListener("scroll", handle_scroll);
        };
    }, []);

    const has_set_bg = useRef<boolean>(false);
    useEffect(() => {
        if (typeof window === "undefined" || has_set_bg.current === true) {
            return;
        }

        const fallback = () => {
            set_banner_src(BACKGROUNDS[0]);
            window.localStorage.setItem("hssr-last-bg-slide", "0");
            has_set_bg.current = true;
        };

        const last = window.localStorage.getItem("hssr-last-bg-slide");
        if (!last) {
            return fallback();
        }

        const last_index = Number(last);
        if (isNaN(last_index) || last_index > BACKGROUNDS.length - 1) {
            return fallback();
        }

        if (last_index + 1 <= BACKGROUNDS.length - 1) {
            set_banner_src(BACKGROUNDS[last_index + 1]);
            window.localStorage.setItem(
                "hssr-last-bg-slide",
                (last_index + 1).toString()
            );
        } else {
            return fallback();
        }

        has_set_bg.current = true;
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="flex justify-between items-center">
                        <Link
                            className={cn(
                                "bg-[#FFCD3C] p-3 pt-6",
                                !menu && "shadow"
                            )}
                            href="/"
                        >
                            <Image
                                src="/logos/hssr.png"
                                alt="Merki Hjálparsveitar skáta í Reykjavík"
                                unoptimized
                                height={80}
                                width={80}
                            />
                        </Link>
                        <div>
                            <button
                                onClick={() => set_menu(!menu)}
                                className={cn(
                                    "rounded-full transition duration-300 p-3",
                                    is_scrolled
                                        ? menu
                                            ? "hover:bg-white/10"
                                            : "hover:bg-secondary/75 bg-secondary-dark/75"
                                        : "hover:bg-white/10"
                                )}
                            >
                                {menu ? (
                                    <IconX className="h-6 w-6 text-white" />
                                ) : (
                                    <IconMenu className="h-6 w-6 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Transition show={menu}>
                <div
                    className={cn(
                        "fixed top-0 left-0 w-full h-full bg-black/85 backdrop-blur-sm z-[45] transition pt-48 flex flex-col",
                        "data-[closed]:opacity-0",
                        "data-[enter]:duration-300",
                        "data-[leave]:duration-300"
                    )}
                >
                    <div className="w-full">
                        <div className="max-w-screen-2xl mx-auto px-8">
                            <div className="flex flex-col gap-10 big-nav">
                                <a href="#">
                                    Fréttir
                                    <IconArrowUpRight className="h-16 w-16 text-gray-800 transition duration-300" />
                                </a>
                                <a href="#">
                                    Um HSSR
                                    <IconChevronRight className="h-16 w-16 text-gray-800 transition duration-300" />
                                </a>
                                <a href="#">
                                    Viltu styrkja okkur?
                                    <IconArrowUpRight className="h-16 w-16 text-gray-800 transition duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex items-end">
                        <div className="w-full">
                            <div className="max-w-screen-2xl mx-auto px-8 pb-12">
                                <div className="flex justify-between">
                                    <p className="font-medium text-gray-300">
                                        &copy; {new Date().getUTCFullYear()}{" "}
                                        Hjálparsveit skáta í Reykjavík.
                                    </p>

                                    <Link
                                        href="#"
                                        className="flex gap-1.5 items-center font-medium text-gray-300 hover:opacity-80 transition duration-300"
                                    >
                                        English
                                        <Image
                                            src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                                            alt="Bretlandsfáni"
                                            height={22}
                                            width={22}
                                            className="-mb-[1px]"
                                            unoptimized
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <div className="min-h-screen relative bg-black">
                <div className="absolute bottom-0 left-0 w-full flex justify-center pb-12 z-[25]">
                    <IconSwipeUp className="h-12 w-12 text-white opacity-20 animate-bounce" />
                </div>
                <div className="absolute top-0 left-0 h-full w-full flex items-center z-[20]">
                    <div className="w-full">
                        <div className="max-w-screen-2xl mx-auto px-8">
                            <div className="pb-12 flex">
                                <div className="py-1.5 pl-2 pr-3.5 rounded-full flex items-center gap-2.5 text-sm font-semibold text-white border border-primary bg-primary/15">
                                    <div className="bg-primary py-1 px-3 rounded-full text-black">
                                        Fréttir
                                    </div>
                                    <p>
                                        HSSR hefur nýliðakynningar fyrir
                                        starfsárið 2024-2025.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-6xl font-bold text-white">
                                    Skátar viðbúnir &mdash; ávalt viðbúnir!
                                </h1>
                                <p className="mt-6 text-xl font-semibold text-gray-300">
                                    Hjálparsveit skáta í Reykjavík &mdash;
                                    stofnuð 1932 &mdash; er næst-elsta og ein
                                    fjölmennasta björgunarsveit Íslands.
                                </p>
                            </div>
                            <div className="pt-12">
                                <a
                                    href="#"
                                    className="bg-primary text-black font-medium shadow py-2 px-4 rounded-full hover:bg-primary-light transition duration-300"
                                >
                                    Fáðu að kynnast okkur
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-full bg-black/80 z-[15] backdrop-blur-[1px]" />
                {banner_src && (
                    <Image
                        src={"/banner/" + banner_src}
                        alt="Snjóflóðabjörgun"
                        fill
                        className="object-cover object-center"
                    />
                )}
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-screen-2xl mx-auto px-8 py-16">
                    <div className="flex gap-24">
                        <div className="flex-grow">
                            <h1 className="text-4xl font-bold text-black">
                                Öflugt björgunarstarf í 90+ ár!
                            </h1>

                            <p className="text-xl font-semibold text-gray-700 mt-6 leading-8">
                                Hjálparsveit skáta í Reykjavík var stofnuð árið
                                1932 og er því ein elsta björgunarsveit Íslands.
                                Aðeins Björgunarsveitin Sigurvon hefur starfað
                                lengur en HSSR.
                            </p>

                            <p className="text-xl font-semibold text-gray-700 mt-6 leading-8">
                                Í dag er björgunarsveitin ein stærsta
                                björgunarsveit Íslands með um 300 félaga í
                                heild. Sveitin er landbjörgunarsveit og miðast
                                þjálfun og búnaður við það. Félagar skiptast í
                                hópa eftir áhugamálum hvers og eins.
                            </p>

                            <p className="text-xl font-semibold text-gray-700 mt-6 leading-8">
                                Sjö manna stjórn er yfir starfsemi HSSR, en
                                mikil áhersla er lögð á sjálfstæði og frumkvæði
                                útkallshópa og félaganna sjálfra. Sveitin er að
                                mestu rekin fyrir sjálfsaflafé og er fjáröflun
                                því stór hluti af starfi félaga og nýliða.
                            </p>
                        </div>
                        <div className="relative w-[40%] rounded-xl overflow-hidden shadow flex-shrink-0">
                            <Image
                                src="/banner/toppmyndir-2021-50.jpg"
                                alt="toppmyndir-2021-50.jpg"
                                fill
                                className="object-cover object-left"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 py-16">
                    <div className="flex justify-between items-center gap-8">
                        <Image
                            src="/logos/landsbjorg.png"
                            alt="Slysavarnarfélagið Landsbjörg"
                            height={64}
                            width={128}
                            unoptimized
                        />
                        <Image
                            src="/logos/origo.svg"
                            alt="Origo hf."
                            height={64}
                            width={128}
                            unoptimized
                        />
                        <Image
                            src="/logos/icelandair.svg"
                            alt="Icelandair Group hf."
                            height={64}
                            width={256}
                            unoptimized
                        />
                        <Image
                            src="/logos/vodafone.svg"
                            alt="Vodafone"
                            height={64}
                            width={192}
                            unoptimized
                        />
                        <Image
                            src="/logos/flugeldasala.png"
                            alt="Flugeldamarkaður björgunarsveitanna"
                            height={64}
                            width={128}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 py-16">
                    <div className="grid grid-cols-2 gap-16">
                        <Post
                            cover={{
                                src: "/post-imgs/DSC03504.png",
                                alt: "Áttaviti í notkun",
                            }}
                            title="Nýliðakynningar HSSR"
                            date={new Date("16 sep 2024")}
                            abstract={[
                                "Fátt er meira gefandi en að koma öðrum til hjálpar; sumar, vetur, dag, nótt, leit og björgun. Það munar alltaf um hvern félaga sem mætir og leggur sitt lóð á vogarskálarnar.",
                                "Hjálparsveit skáta í Reykjavík býður áhugasömu fólki upp á þjálfun svo það geti orðið fullgilt björgunarfólk. Ef þú hefur áhuga á að kynna þér málið getur þú mætt á kynningarfund og fengið þar allar upplýsingar...",
                            ]}
                            href="#"
                        />
                        <Post
                            cover={{
                                src: "/post-imgs/nystjorn-2024-1024x768.jpg",
                                alt: "Ný stjórn HSSR",
                            }}
                            title="Ný stjórn kosin"
                            date={new Date("16 may 2024")}
                            abstract={[
                                "Það er gaman að segja frá því að í fyrsta skipti í sögu sveitarinnar í 92 ár er það kona sem kosin var sveitarforingi en það er Ásta Rut Hjartardóttir sem er Jarðeðlisfræðingur að mennt og byrjaði hún nýliðaferilinn sinn í HSSR árið 2012. ",
                                "Sömuleiðis er það eflaust í fyrsta skipti sem meirihluti stjórnar eru konur.",
                                "Á sama aðalfundi var einnig samþykkt að breyta lögum sveitarinnar en ein...",
                            ]}
                            href="#"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Post(props: {
    cover: { src: string; alt: string };
    title: string;
    date: Date;
    abstract: string[];
    href: string;
}) {
    return (
        <div>
            <div className="h-[16rem] w-full relative overflow-hidden rounded-xl">
                <Image
                    src={props.cover.src}
                    alt={props.cover.alt}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="pt-8">
                <div className="flex justify-between gap-4 items-center">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-2xl font-bold text-secondary-dark group hover:text-secondary transition duration-300"
                    >
                        {props.title}
                        <IconArrowRight className="h-6 w-6 -mb-1 text-secondary-dark group-hover:translate-x-0.5 transition duration-300" />
                    </Link>

                    <p className="font-semibold text-gray-500">
                        {props.date.getUTCFullYear()}/
                        {props.date.getUTCMonth().toString().padStart(2, "0")}/
                        {props.date.getUTCDate().toString().padStart(2, "0")}
                    </p>
                </div>

                {props.abstract.map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-lg font-semibold text-gray-700 mt-6 leading-8"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
