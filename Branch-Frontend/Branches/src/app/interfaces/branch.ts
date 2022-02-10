export interface Branch {
    sn ?: 0;
    solCode ?: string;
    branchDescription ?: string;
    phoneNumber ?: string;
    email ?: string;
    location ?: string;

    deletedBy ?: string;
    deletedTime ?: Date;
    deletedFlag ?: string;

    postedBy ?: string;
    postedTime ?: Date;
    postedFlag ?: string;

    modifiedBy ?: string;
    modifiedTime ?: Date;

    verifiedTime ?: Date;
    verifiedBy ?: string;
    verifiedFlag ?: string;
}
