import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { SubjectProps } from "@types";

const COLLECTION = "Subject";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getSubjects = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: SubjectProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as SubjectProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSubject = async (id: string) => {
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

export const addSubject = async (Subject: SubjectProps) => {
  try {
    await setDoc(getRef(Subject.id), {
      ...Subject,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeSubject = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateSubject = async (id: string, ...rest: any) => {
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
