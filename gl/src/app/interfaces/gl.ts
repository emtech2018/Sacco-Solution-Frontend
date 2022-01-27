import {Glsubheads} from 'src/app/interfaces/gl-subheads';
export interface Gl{
   
    sn ?: 0,
    glCode ?: string,
    glDescription ?: string,
    glsubheads ?: Glsubheads[],

    deleteFlag ?: string,
    deletedBy ?: string,
    deletedTime ?: Date,

    modifiedBy ?: string,
    modifiedTime  ?: Date,

    postedBy ?: string,
    postedFlag ?: string,
    postedTime ?:Date,

    verifiedBy ?: string,
    verifiedFlag ?: string,
    verifiedTime ?: Date
    

}