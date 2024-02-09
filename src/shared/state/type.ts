export interface Hook {
    hero: HeroAtom;
    ourMasterChefs: OurMasterChefsAtom;
}

export interface Hero {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    img: string;
}

export interface HeroAtom {
    data: Hero[] | null;
    error: boolean;
    loading: boolean;
}

export interface OurMasterChefsSocials {
    facebook: string;
    twitter: string;
    youtube: string;
    linkedin: string;
}

export interface OurMasterChefs {
    id: number;
    name: string;
    slug: string;
    position: string;
    img: string;
    socials: OurMasterChefsSocials;
}

export interface OurMasterChefsAtom {
    data: OurMasterChefs[] | null;
    error: boolean;
    loading: boolean;
}

