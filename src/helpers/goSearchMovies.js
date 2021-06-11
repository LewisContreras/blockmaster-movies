import { db } from "../firebase/firebase-config";

export const goSearchMovies = async (category) =>{
    const movies = []
        if(category === "Todas"){
            let ref = await db.collection("movies").limit(6).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        ...hijo.data()
                    })
                });
                
            })
        }else if(category === "Más valoradas"){
            let ref = await db.collection("movies").where("calification", ">=",7).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        ...hijo.data()
                    })
                });
                
            })

        }else if(category === "Menos valoradas"){
            let ref = await db.collection("movies").where("calification", "<=",7).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        ...hijo.data()
                    })
                });
                
            })
        }else{
            let nameMovie = category.toUpperCase()
            let ref = await db.collection("movies").where("nameMovie", "==",nameMovie).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        ...hijo.data()
                    })
                });
                
            }).catch(err =>
                console.log(err))
        }
        return movies
}