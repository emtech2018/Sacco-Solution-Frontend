import { BusinessInformation } from "./business-information";
import { Collaterals } from "./collaterals";
import { ContactInfos } from "./contact-infos";
import { Guarantors } from "./guarantors";
import { Kins } from "./kins";
import { Referees } from "./referees";
import { AccountRegistration } from "./account-registration";

export interface CustomerRegistration {
    sn?: number;
    customerCode?: string,
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    dob?: Date;
    gender?: string;
    maritalStatus?: string;
    residential?: string;
    identificationNo?: string;
    solCode?: string;
    guarantors?: Guarantors[];
    collaterals?: Collaterals[];
    contactInfos?: ContactInfos[];
    kins?: Kins[];
    referees?: Referees[];
    accounts?: AccountRegistration[];
    businessInformation?: BusinessInformation;
    postedFlag?: string;
    postedTime?: Date;
    verifiedFlag?: string;
    verifiedTime?: Date;
    deleteFlag?: string;
    customerImage?: string;
    signatureImage?: string;
}
