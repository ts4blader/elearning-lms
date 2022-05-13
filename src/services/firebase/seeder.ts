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
import classData from "@seeds/class.json";
import student from "@seeds/student.json";
import lecture from "@seeds/lecture.json";

import { randomize, randomArrayItem, getArrayItem } from "@utils/methods";
import { ClassProps, StudentProps, LectureProps } from "@types";

export const seedAll = async () => {
  try {
    //* === base data ===
    // seedData(classType, COLLECTION.classType);
    // seedData(subjectType, COLLECTION.subjectType);
    // seedData(educationLevel, COLLECTION.educationLevel);
    //* === subject & scoretype ===
    // let mappedSubject = subject.map((item) => {
    //   let randomNum = randomize(0, subjectType.length);
    //   return {
    //     ...item,
    //     subjectTypeId: subjectType[randomNum].id,
    //   };
    // });
    // seedData(mappedSubject, COLLECTION.subject);
    // seedData(scoreType, COLLECTION.scoreType);
    //* === schoolYear ===
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
    //* === subjecGroup ===
    // let mappedSubjectGroup = subjectGroup.map((item) => ({
    //   ...item,
    //   subjectsId: [...Array(randomize(3, 5))].map(
    //     (item) => subject[randomize(0, subject.length)].id
    //     ),
    //   }));
    //   seedData(mappedSubjectGroup, COLLECTION.subjectGroup);
    //* === grade ===
    // seedData(grade, COLLECTION.grade);
    //* === class ===
    // let mappedClass: any[] = [];
    // classData.forEach((el) => {
    //   let schoolYearId = randomArrayItem(schoolYear).id;
    //   let gradeId = randomArrayItem(grade).id;
    //   let classTypeId = randomArrayItem(classType).id;
    //   let leaderId = "gv-1000";
    //   let subjectSet = new Set<string>();
    //   [...Array(randomize(3, 6))].forEach(() => {
    //     subjectSet.add(randomArrayItem(subject).id);
    //   });
    //   let subjectsId: string[] = [];
    //   subjectSet.forEach((item) => subjectsId.push(item));
    //   mappedClass.push({
    //     ...el,
    //     schoolYearId,
    //     gradeId,
    //     classTypeId,
    //     leaderId,
    //     subjectsId,
    //   });
    // });
    // seedData(mappedClass, COLLECTION.class);
    //* === student ===
    // let mappedStudent: StudentProps[] = student.map((item) => {
    //   let schoolYearId = randomArrayItem(schoolYear).id;
    //   let gradeId = randomArrayItem(grade).id;
    //   let classId = randomArrayItem(classData).id;
    //   return {
    //     ...item,
    //     schoolYearId,
    //     gradeId,
    //     classId,
    //   };
    // });
    // seedData(mappedStudent, COLLECTION.student);
    //* === lecture ===
    // let mappedLecture = lecture.map((item) => {
    //   let subjectGroupId = randomArrayItem(subjectGroup).id;
    //   let subjectMainId = randomArrayItem(subject).id;
    //   let subjectSubId = [...Array(randomize(0, 4))].map((_) => {
    //     let result = randomArrayItem(subject).id;
    //     return result;
    //   });
    //   subjectSubId.unshift(subjectMainId);
    //   return {
    //     ...item,
    //     subjectGroupId,
    //     subjectMainId,
    //     subjectSubId,
    //   };
    // });
    // seedData(mappedLecture, COLLECTION.lecture);
  } catch (error) {
    console.log("Seed all data failed!");
    console.error(error);
  }
};
