
export interface Socials {
    facebook: string;
    twitter: string;
    youtube: string;
    linkedin: string;
}

export interface Props {
    className?: string;
    src: string;
    label: string;
    href: string;
    position: string;
    socials: Socials;
}