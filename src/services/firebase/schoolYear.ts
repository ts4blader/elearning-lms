import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { SchoolYearProps } from "@types";

const COLLECTION = "SchoolYear";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getSchoolYears = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: SchoolYearProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as SchoolYearProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSchoolYear = async (id: string) => {
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

export const addSchoolYear = async (SchoolYear: SchoolYearProps) => {
  try {
    await setDoc(getRef(SchoolYear.id), {
      ...SchoolYear,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeSchoolYear = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateSchoolYear = async (id: string, ...rest: any) => {
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
