import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { GradeProps } from "@types";

const COLLECTION = "Grade";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getGrades = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: GradeProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as GradeProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getGrade = async (id: string) => {
  try {
    const result = await getDoc(getRef(id));
    if (result.exists()) return result.data();
    else {
      console.log("No document!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addGrade = async (Grade: GradeProps) => {
  try {
    await setDoc(getRef(Grade.id), {
      ...Grade,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeGrade = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateGrade = async (id: string, ...rest: any) => {
  try {
    await setDoc(
      getRef(id),
      {
        ...rest,
      },
      { merge: true }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
