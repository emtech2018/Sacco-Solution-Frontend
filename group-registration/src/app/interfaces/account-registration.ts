export interface AccountRegistration {
    sn?: number;
    accountReference?: string;
    accountOwnership?: string;
    description?: string;
    accountManager?: string;
    balance?: number;
    schemeCode?: string;
    glSubHead?: string;
    customerCode?: string;
    solCode?: string;
    postedFlag?: string;
    postedTime?: Date;
    verifiedFlag?: string;
    verifiedTime?: Date;
    deleteFlag?: string;
    postedBy?: string
    modifiedBy?: string
    verifiedBy?: string 
    deletedBy?: string
}
