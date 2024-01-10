import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "@firebase/firestore"
import { currentDatos } from "./datoSlice"
import { db } from "../firebase/firebase"

export function getDatos() {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'sitios'))
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            dispatch(currentDatos(docs))
        } catch (error) {
            console.log(error)
        }
    }
}
// 
// export function getImg(id) {
//     // console.log(id)
//     return async (dispatch) => {
//         try {
//             const data = await getDoc(doc(db, 'crudImg', id))
//             let img = data.data()
//             // console.log(img)
//             dispatch(detailImg({ img, id }))

//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
// export function addFavorite({ id, category, color, description, favorite, idUser, like, photo, subCategory, type, email }) {

//     return async (dispatch) => {
//         try {
//             console.log('original:', favorite)

//             if (!favorite?.includes(email)) {
//                 favorite += `,${email}`
//                 //   console.log('add:', favorite)
//             } else {
//                 favorite = favorite.replace(`,${email}`, '')
//                 //   console.log('rest:', favorite)
//             }

//             const res = setDoc(doc(db, 'crudImg', id), { category, color, description, favorite, idUser, like, photo, subCategory, type })
//             console.log(res)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
export function addDato({ title, description, url, category }) {

    return async (dispatch) => {
        try {
            addDoc(collection(db, 'sitios'), { title, description, url, category })
        } catch (error) {
            console.log(error)
        }
    }
}
// export function deleteImgs({ id }) {

//     return async (dispatch) => {
//         try {
//             deleteDoc(doc(db,  'crudImg', id))
//             dispatch(deleteImages(id))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }      