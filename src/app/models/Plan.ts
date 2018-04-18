export class Plan {

    constructor(){
        this.annualFeeDisAcount = 0.85;
        this.isPopular = false;
        this.features = [];
    }
    _id: string;
    title: string;
    fee: number;
    currentFee: number;
    annualFeeDisAcount: number;
    features: string[];
    category: number;
    subTitle: string;
    isPopular: boolean;
}