import { db } from "@services/firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { ScoreTypeProps } from "@types";

const COLLECTION = "ScoreType";
const getRef = (id: string) => doc(db, COLLECTION, id);

export const getScoreTypes = async () => {
  try {
    const data = await getDocs(collection(db, COLLECTION));
    const result: ScoreTypeProps[] = [];

    if (!data.empty) {
      data.forEach((item) => {
        result.push(item.data() as ScoreTypeProps);
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getScoreType = async (id: string) => {
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

export const addScoreType = async (ScoreType: ScoreTypeProps) => {
  try {
    await setDoc(getRef(ScoreType.id), {
      ...ScoreType,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeScoreType = async (id: string) => {
  try {
    await deleteDoc(getRef(id));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateScoreType = async (id: string, ...rest: any) => {
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
