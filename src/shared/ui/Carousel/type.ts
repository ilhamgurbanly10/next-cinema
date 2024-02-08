export interface Item {
    id?: number;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    img: string;
}

export interface Props {
    className?: string;
    data: Item[];
    speed?: number;
    overlay?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    autoplaySpeed?: number;
}

export interface ModelReturnProps {
    key: number;
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
    next: () => void;
    prev: () => void;
    nextDisabled: boolean;
    prevDisabled: boolean;
}