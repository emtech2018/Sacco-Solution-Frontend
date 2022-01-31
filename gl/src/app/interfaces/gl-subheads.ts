export interface Glsubheads{
    sn ?: number;
    glCode ?: string;
    glSubheadCode ?: string;
    glSubheadDescription ?: string;
    
    deleteFlag ?: string;
    deletedBy ?: string;
    deletedTime ?: Date;
   
    modifiedBy ?: string;
    modifiedTime ?: Date;

    postedBy ?: string;
    postedFlag ?: string;
    postedTime ?: Date;

   
    verifiedBy ?: string;
    verifiedFlag ?: string;
    verifiedTime  ?: Date;
}