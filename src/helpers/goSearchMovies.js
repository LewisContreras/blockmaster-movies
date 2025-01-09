import { db } from "../firebase/firebase-config";

export const goSearchMovies = async (category, selected, last, uid) => {
  let movies = [...selected];
  let newLast = last;

  if (category === "Todas") {
    await db
      .collection("movies")
      .orderBy("nameMovie")
      .startAfter(last || 0) // Start after the last document
      .limit(10) // Fetch only 10 movies
      .get()
      .then((snap) => {
        if (!snap.empty) {
          newLast = snap.docs[snap.docs.length - 1]; // Update the last document reference
          snap.forEach((doc) => {
            movies.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        }
      })
      .catch((err) => console.log(err));
  } else if (category === "Más valoradas") {
    movies = [];
    await db
      .collection("movies")
      .where("calification", ">=", 7)
      .orderBy("calification", "desc")
      .get()
      .then((snap) => {
        snap.forEach((hijo) => {
          movies.push({
            id: hijo.id,
            ...hijo.data(),
          });
        });
      });
  } else if (category === "Ver después") {
    movies = [];
    await db
      .collection(`${uid}/movies/verdespues`)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          movies.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      })
      .catch((err) => console.log("Error fetching 'Ver después' movies:", err));
  } else {
    movies = [];
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
  }
  return {
    movies: movies,
    last: newLast,
  };
};
