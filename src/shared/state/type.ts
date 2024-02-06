export interface Hook {
    hero: HeroAtom;
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

