import { db } from "../firebase/firebase-config";
import firebase from "firebase/app";

export const getAllMovies = async (selected, last) => {
  let movies = [...selected];
  let newLast = last;
  let hasEnded = false;
  await db
    .collection("movies")
    .orderBy("nameMovie")
    .startAfter(last || 0)
    .limit(10)
    .get()
    .then((snap) => {
      if (!snap.empty) {
        newLast = snap.docs[snap.docs.length - 1];
        snap.forEach((doc) => {
          movies.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } else {
        hasEnded = true;
      }
    })
    .catch((err) => console.log(err));
  return {
    movies: movies,
    last: newLast,
    isEnd: hasEnded,
  };
};

export const getWatchLater = async (uid) => {
  try {
    const snapshot = await db.collection(`${uid}/movies/verdespues`).get();
    const movieIds = snapshot.docs.map((doc) => doc.data().movieId);

    if (movieIds.length === 0) return [];

    const moviesSnapshot = await db
      .collection("movies")
      .where(firebase.firestore.FieldPath.documentId(), "in", movieIds)
      .get();

    const movies = moviesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return movies;
  } catch (err) {
    console.error("Error fetching 'Ver despues' movies:", err);
    return [];
  }
};


export const getMostValued = async () => {
  let movies = [];
  await db
    .collection("movies")
    .where("calification", ">=", 7)
    .orderBy("calification", "desc")
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        movies.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    })
    .catch((err) => console.log(err));
  return movies;
};

export const getMovie = async (category) => {
  let movies = [];
  let nameMovie = category.toUpperCase();
  await db
    .collection("movies")
    .where("nameMovie", "==", nameMovie)
    .get()
    .then((snap) => {
      snap.forEach((hijo) => {
        movies.push({
          id: hijo.id,
          ...hijo.data(),
        });
      });
    })
    .catch((err) => console.log(err));

  return movies;
};
