import { subGroup } from "src/app/interfaces/subgroup";
export interface Group {
  allowedMembers?: number;
  chairperson?: string;
  firstMeeting?: Date;
  formationDate?: Date;
  groupAddress?: string;
  groupCode?: string;
  groupEMail?: string;
  groupName?: string;
  groupStatus?: string;
  maxAllowedSubGroups?: number;
  meetingPlace?: string;
  secretary?: string;
  subGroups?: subGroup[];
  treasurer?: string;

  sn?: number;
  rcre?: Date;
  verifiedBy?: string;
  verifiedFlag?: string;
  verifiedTime?: Date
  deletedBy?: string;
  deletedFlag?: string;
  deletedTime?: Date;
  modifiedBy?: string;
  modifiedTime?: Date;
  postedBy?: string;
  postedFlag?: string;
  postedTime?: Date;
}