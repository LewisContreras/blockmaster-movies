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
    const watchLater = snapshot.docs.map((doc) => ({
      watchLaterId: doc.id,
      movieId: doc.data().movieId,
    }));

    if (watchLater.length === 0) return [];
    const movieIds = watchLater.map((item) => item.movieId);
    const moviesSnapshot = await db
      .collection("movies")
      .where(firebase.firestore.FieldPath.documentId(), "in", movieIds)
      .get();

    const movies = moviesSnapshot.docs.map((doc) => {
      const match = watchLater.find((item) => item.movieId === doc.id);
      return {
        id: doc.id,
        watchLaterId: match?.watchLaterId,
        ...doc.data(),
      };
    });

    return movies;
  } catch (err) {
    console.error("Error fetching 'Ver después' movies:", err);
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

export const deleteMovie = async (id) => {
  await db.doc(`movies/${id}`).delete();
};

export const addMovie = async (movie) => {
  await db.collection("movies").add(movie);
};

export const updateMovie = async (id, movie) => {
  await db.doc(`movies/${id}`).update(movie);
};