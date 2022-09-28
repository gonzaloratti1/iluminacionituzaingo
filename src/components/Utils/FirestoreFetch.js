import { query, where, collection, getDocs } from "@firebase/firestore";
import db from "./FirebaseConfig"
import { doc, getDoc } from "firebase/firestore";



export const firestoreFetch = async (idCategory) => {

    let q;
    if (idCategory){
        q = query(collection(db, "products"), where('categoryId','==', idCategory))
    } else {
        q = query(collection(db, "products"));
    }

    const querySnapshot = await getDocs(q)
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
    console.log(dataFromFirestore)
    return dataFromFirestore;

}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id );
    const docSnap = await getDoc(docRef);
    
    console.log(docSnap.firestore) 
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else { 
      console.log("No se encontro documento");
    }
}

