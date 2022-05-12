export type StudentProps = {
  id: string;
  name: string;
  gender: string;
  birthday: string;
  birthPlace: string;
  ethic: string;
  religion: string;
  schoolYearId: string;
  gradeId: string;
  classId: string;
  joinDay: string;
  joinForm: string;
  status: number;
  contact: {
    city: string;
    district: string;
    subdistrict: string;
    address: string;
    email: string;
    phoneNumber: string;
  };
  family: {
    father: {
      name: string;
      birthYear: number;
      job: string;
      phoneNumber: string;
    };
    mother: {
      name: string;
      birthYear: number;
      job: string;
      phoneNumber: string;
    };
    supervisor: {
      name: string;
      birthYear: number;
      job: string;
      phoneNumber: string;
    };
  };
};
