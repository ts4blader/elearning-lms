import { COLLECTION } from "./collection";
import { seedData } from "./firestore";
import classType from "@seeds/classType.json";
import subjectType from "@seeds/subjectType.json";
import educationLevel from "@seeds/educationLevel.json";
import subject from "@seeds/subject.json";
import scoreType from "@seeds/scoreType.json";
import schoolYear from "@seeds/schoolYear.json";
import randomSemester from "@seeds/randomSemester.json";
import subjectGroup from "@seeds/subjectGroup.json";
import grade from "@seeds/grade.json";

import { randomize } from "@utils/methods";

export const seedAll = async () => {
  try {
    // === 1 ===
    // seedData(classType, COLLECTION.classType);
    // seedData(subjectType, COLLECTION.subjectType);
    // seedData(educationLevel, COLLECTION.educationLevel);
    // === 2 ===
    // let mappedSubject = subject.map((item) => {
    //   let randomNum = randomize(0, subjectType.length);
    //   return {
    //     ...item,
    //     subjectTypeId: subjectType[randomNum].id,
    //   };
    // });
    // seedData(mappedSubject, COLLECTION.subject);
    // seedData(scoreType, COLLECTION.scoreType);
    // === 3 ===
    // let mappedSchoolYear = schoolYear.map((item) => {
    //   return {
    //     ...item,
    //     semesters: [
    //       randomSemester[randomize(0, randomSemester.length)],
    //       randomSemester[randomize(0, randomSemester.length)],
    //     ],
    //   };
    // });
    // seedData(mappedSchoolYear, COLLECTION.schoolYear);
    // seedData(subjectGroup, COLLECTION.subjectGroup);
    // seedData(grade, COLLECTION.grade);
  } catch (error) {
    console.log("Seed all data failed!");
    console.error(error);
  }
};
