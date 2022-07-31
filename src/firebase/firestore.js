import {
  db,
  collection,
  addDoc,
  serverTimestamp
} from './firebase';

// Declaracion db para guardar coleccion
const dbDesperdicios = collection(db, 'desperdicios');

// Crear 
export const createTracking = (cantidad, categoria, uid) => {
  addDoc(dbDesperdicios, {
    cantidad,
    uid,
    categoria,
    fecha: serverTimestamp(),
  });
}

