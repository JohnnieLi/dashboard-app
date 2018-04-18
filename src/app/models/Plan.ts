export class Plan {

    constructor(){
        this.annualFeeDiscount = 0.85;
        this.isPopular = false;
        this.features = [];
    }
    _id: string;
    title: string;
    fee: number;
    currentFee: number;
    annualFeeDiscount: number;
    features: string[];
    grade: number;
    subTitle: string;
    isPopular: boolean;
}