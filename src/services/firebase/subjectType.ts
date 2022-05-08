import { db } from "@services/firebase/index";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

type SubjectTypeProps = {
  id: string;
  name: string;
  disabled: boolean;
  description: string;
};

const COLLECTION = "SubjectType";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getSubjectTypes = async () => {
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

export const getSubjectType = async (id: string) => {
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

export const addSubjectType = async (SubjectType: SubjectTypeProps) => {
  try {
    await setDoc(getRef(SubjectType.id), {
      ...SubjectType,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeSubjectType = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateSubjectType = async (id: string, ...rest: any) => {
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
