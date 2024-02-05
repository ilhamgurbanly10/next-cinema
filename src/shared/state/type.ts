export interface Hook {
    info: InfoAtom;
}

export interface Info {
    title: string;
    images: string[];
}

export interface InfoAtom {
    data: Info | null;
    error: boolean;
    loading: boolean;
}

