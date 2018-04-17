export class Plan {
    _id: string;
    title: string;
    fee: number;
    currentFee: number;
    annualFeeDisAcount: 0.85;
    features: string[];
    category: number;
    subTitle: string;
    isPopular = false;
}