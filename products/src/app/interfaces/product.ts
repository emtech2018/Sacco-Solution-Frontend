export interface Product {
  sn?: number;
  schemeCode?: string;
  productDescription?: string;
  interestBase?: string;
  repaymentBasis?: string;
  processingFee?: number;
  lateRepaymentFee?: number;
  calculationBase?: string;
  interestRepaymentAccount?: string;
  interestCode?: string;
  intakeFee?: number;
  solCode?: string;
  deletedFlag?: string;
  postedFlag?: string;
  deletedTime?: Date;
  modifiedBy?: string;
  modifiedTime?: Date;
  postedBy?: string;
  postedTime?: Date;
  verifiedBy?: string;
  verifiedTime?: Date;
  verifiedFlag?: string;

  gracePeriod?: number;
  maxAmount?: number;
  maximumLoanPeriod?: number;
  minimumAmount?: number;
  minimumLoanPeriod?: number;
  multipleFactor?: number;
  gracePeriodBase?: string;
}
