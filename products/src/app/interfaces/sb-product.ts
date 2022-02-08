export interface sbProduct{
    acctStatementFrequency?: Date,
    deletedBy?:string
    deletedFlag?:string
    deletedTime?: Date,
    dormantFeeCharge?: number,
    drBalanceLimit?: number,
    durationFromDormancyToInactivity?: number,
    durationToInactivity?: number,
    extraWithdrawalFee?: number,
    inactiveFeeCharge?: number,
    interestCode?: string,
    interestMethod?: string,
    ledgerFee?: number,
    minimumBalanceWithCheque?: number,
    modifiedBy?: string,
    modifiedTime?: Date,
    noOfWithdrawals?: number,
    postedBy?: string,
    postedFlag?: string,
    postedTime?: Date,
    schemeCode?: string,
    sn?: number,
    solCode?: string,
    verifiedBy?: string,
    verifiedFlag?: string,
    verifiedTime?: Date
    productDescription?: string,
  }