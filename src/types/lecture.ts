export type FamilyContactProps = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type LectureProps = {
  id: string;
  name: string;
  avatar: string;
  subjectGroupId: string;
  subjectMainId: string;
  subjectSubId: string[];
  birthday: string;
  gender: string;
  ethic: string;
  joinDay: string;
  nationality: string;
  religion: string;
  nickname: string;
  status: number;
  contact: {
    city: string;
    district: string;
    subdistrict: string;
    address: string;
    email: string;
    phoneNumber: string;
  };
  cid: {
    value: string;
    verifyDay: string;
    verifyPlace: string;
  };
  inParty?: {
    joinDay: string;
    joinPlace: string;
  };
  inGroup?: {
    joinDay: string;
    joinPlace: string;
  };
  relate: FamilyContactProps[];
};
