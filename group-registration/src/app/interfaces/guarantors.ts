import { Collaterals } from "./collaterals";
import { ContactInfos } from "./contact-infos";

export interface Guarantors {
    id?: number;
    guarantorId?: string;
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    dob?: Date;
    gender?: string;
    maritalStatus?: string;
    residential?: string;
    identificationNo?: string;
    occupation?: string;
    contactInfos?: ContactInfos[];
    collaterals?: Collaterals[];

}
