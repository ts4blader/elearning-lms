import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

export type Document = {
  id: string;
} & Object;

const getRef = (id: string, collection: string) => doc(db, collection, id);

export const getDocuments = async <T extends Document>(
  collectionName: string
) => {
  try {
    const data = await getDocs(collection(db, collectionName));
    const result: T[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as T);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getDocument = async <T extends Document>(
  id: string,
  collectionName: string
) => {
  try {
    const result = await getDoc(getRef(id, collectionName));
    if (result.exists()) return result.data() as T;
    else {
      console.log("No document!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addDocument = async <T extends Document>(
  item: T,
  collectionName: string
) => {
  try {
    await setDoc(getRef(item.id, collectionName), {
      ...item,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeDocument = async (id: string, collectionName: string) => {
  try {
    await deleteDoc(getRef(id, collectionName));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateDocument = async (
  id: string,
  collectionName: string,
  item: any
) => {
  try {
    await setDoc(
      getRef(id, collectionName),
      {
        ...item,
      },
      { merge: true }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const seedData = async <T extends Document>(
  data: T[],
  collectionName: string
) => {
  try {
    data.forEach((item) => {
      addDocument<T>(item, collectionName);
    });
  } catch (error) {
    console.log("Seed data failed!");
    console.error(error);
  }
};
