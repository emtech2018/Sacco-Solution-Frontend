import {kin} from 'src/app/interfaces/kins'
import {nominee} from 'src/app/interfaces/nominees'
import {contactInfo} from 'src/app/interfaces/contactInfo'
import {image} from 'src/app/interfaces/images'
export interface retailKyc{
    birthCertificateNo?: string,
    citizen?: string,
    contactInformationList?: contactInfo[],
    customerCode?: string,
    customerImageList?: image[],
    deletedBy?: string,
    deletedFlag?: string,
    deletedTime?: Date,
    dob?: Date,
    employerCode?: string,
    firstName?: string,
    gender?: string,
    identificationNo?: string,
    joiningDate?: Date,
    kins?: kin[],
    kraPin?: string,
    middleName?: string,
    minor?: string,
    modifiedBy?: string,
    modifiedOn?: Date,
    nominees?: nominee[],
    occupation?: string,
    passportNo?: string,
    postedBy?: string,
    postedFlag?: string,
    postedTime?: Date,
    signatureImage?: any,
    sn?: number,
    solCode?: string,
    subGroupCode?: string,
    surname?: string,
    verifiedFlag?: string,
    verifiedTime?: Date
  }