import {
  db,
  collection,
  addDoc,
  serverTimestamp
} from './firebase';

// Declaracion db para guardar coleccion
const dbDesperdicios = collection(db, 'desperdicios');

// Crear 
export const createTracking = (uid, cantidad, categoria) => {
  addDoc(dbDesperdicios, {
    cantidad,
    uid,
    categoria,
    fecha: serverTimestamp(),
  });
}
