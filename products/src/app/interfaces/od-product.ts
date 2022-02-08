export interface odProduct{
    deletedBy?: string,
    deletedFlag?: string,
    deletedTime?: Date,
    dormantFee?: number,
    drBalanceLimit?: number,
    inactiveFee?: number,
    inactiveToDormantDuration?: number,
    interestCode?: string,
    ledgerFee?: number,
    maxPenalInterest?: number,
    maxSanctionLimit?: number,
    modifiedBy?: string,
    modifiedTime?: Date,
    postedBy?: string,
    postedFlag?: string,
    postedTime?: Date,
    schemeCode?: string,
    sn?: number,
    solCode?: string,
    toInactiveDuration?: number,
    verifiedBy?: string,
    verifiedFlag?: string,
    verifiedTime?: Date
    productDescription?: string,
  }