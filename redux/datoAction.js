import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, onSnapshot, updateDoc } from "@firebase/firestore"
import { currentDatos, deletedatos } from "./datoSlice"
import { db } from "../firebase/firebase"


export function getDatos() {
    return async (dispatch) => {
        try {
            const unsubscribe = onSnapshot(collection(db, 'sitios'), (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                dispatch(currentDatos(docs));
            });

            // Si necesitas el unsubscribe para dejar de recibir actualizaciones
            // puedes devolverlo desde la función para usarlo más tarde si es necesario
            return unsubscribe;
        } catch (error) {
            console.log(error);
        }
    };
}
export function updateDato({ id, title, description, url, category }) {
    return async (dispatch) => {
        try {
            const docRef = doc(db, 'sitios', id);
            await updateDoc(docRef, { title, description, url, category });
            // Si es necesario, puedes despachar una acción para actualizar el estado en Redux
            // Ejemplo: dispatch(updateDatos({ id, title, description, url, category }))
        } catch (error) {
            console.log(error);
        }
    };
}
export function addDato({ title, description, url, category }) {

    return async (dispatch) => {
        try {
            addDoc(collection(db, 'sitios'), { title, description, url, category })
        } catch (error) {
            console.log(error)
        }
    }
}
export function deletedato({ id }) {

    return async (dispatch) => {
        try {
            deleteDoc(doc(db, 'sitios', id))
            dispatch(deletedatos(id))
        } catch (error) {
            console.log(error)
        }
    }
}      