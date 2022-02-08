export  interface Collateral{
    chargeEventForLodging?: string,
    chargeEventForWithdrawal?: string,
    collateralCode?: string,
    collateralType?: string,
    companyCode?: string,
    companyDetails?: string,
    contactDetails?: string,
    customerCode?: string,
    deletedBy?: string,
    deletedFlag?: string,
    deletedTime?: Date,
    description?: string,
    faceValue?: number,
    margin?: number,
    marketValue?: number,
    modifiedBy?: string,
    modifiedTime?: Date,
    otherDetails?: string,
    percentageDrawingPower?: number,
    percentageLoanToTake?: number,
    postedBy?: string,
    postedFlag?: string,
    postedTime?: Date,
    shareCapital?: number,
    sharesIssued?: number,
    sn?: number,
    verifiedBy?: string,
    verifiedFlag?: string,
    verifiedTime?: Date
  }