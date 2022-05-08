import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { ClassTypeProps } from "@types";

const COLLECTION = "ClassType";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getClassTypes = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: ClassTypeProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as ClassTypeProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getClassType = async (id: string) => {
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

export const addClassType = async (classType: ClassTypeProps) => {
  try {
    await setDoc(getRef(classType.id), {
      ...classType,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeClassType = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateClassType = async (id: string, ...rest: any) => {
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
