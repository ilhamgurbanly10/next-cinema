export interface Props {
    className?: string;
    label: string;
    count: number | string;
    speed?: number;
    addedCount?: number;
    index: number;
}

export interface ModelReturnProps {
    quantity: number | string;
}