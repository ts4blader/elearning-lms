import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { SubjectGroupProps } from "@types";

const COLLECTION = "SubjectGroup";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getSubjectGroups = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: SubjectGroupProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as SubjectGroupProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSubjectGroup = async (id: string) => {
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

export const addSubjectGroup = async (SubjectGroup: SubjectGroupProps) => {
  try {
    await setDoc(getRef(SubjectGroup.id), {
      ...SubjectGroup,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeSubjectGroup = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateSubjectGroup = async (id: string, ...rest: any) => {
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
