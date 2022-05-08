import { db } from "@services/firebase/index";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

type EducationLevelProps = {
  id: string;
  name: string;
  disabled: boolean;
  description: string;
};

const COLLECTION = "EducationLevel";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getEducationLevels = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data());
      });
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getEducationLevel = async (id: string) => {
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

export const addEducationLevel = async (
  EducationLevel: EducationLevelProps
) => {
  try {
    await setDoc(getRef(EducationLevel.id), {
      ...EducationLevel,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeEducationLevel = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateEducationLevel = async (id: string, ...rest: any) => {
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
