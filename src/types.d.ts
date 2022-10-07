export interface ProductInfo {
    id: number;
    name: string;
    availability: number;
    price: number;
    image: string;
    status: boolean;
    category: string;
    description: string;
    relatedProducts: any[];
}

export interface ReviewInfo {
    id: number;
    description: string;
    buyer: string;
    buyerUsername: string | null;
    location: string;
    time: string;
    from: string
}

export interface FaqInfo {
    id: number;
    question: string;
    answer: string;
}

export interface PlantCategory {
    id: string;
    name: string
}

export interface SortOption {
    option: string;
    value: string;
}