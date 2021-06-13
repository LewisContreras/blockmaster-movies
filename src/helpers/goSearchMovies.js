import { db } from "../firebase/firebase-config";

export const goSearchMovies = async (category,selected,last) =>{
        let movies = [...selected]
        if(category === "Todas"){
                if(!last){
                    movies = []
                }
                let ref = await db.collection("movies").orderBy("nameMovie").startAfter(last).limit(9).get().then(snap =>{
            
                    snap.forEach(hijo => {
                        movies.push({
                            id:hijo.id,
                            ...hijo.data()
                        })
                    });
                    
                }).catch(err =>console.log(err))

            
        }else if(category === "Más valoradas"){
            movies = []
            let ref = await db.collection("movies").where("calification", ">=",7).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        id:hijo.id,
                        ...hijo.data()
                    })
                });
                
            })

        }else if(category === "Menos valoradas"){
            movies = []
            let ref = await db.collection("movies").where("calification", "<=",7).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        id:hijo.id,
                        ...hijo.data()
                    })
                });
                
            })
        }else{
            movies = []
            let nameMovie = category.toUpperCase()
            let ref = await db.collection("movies").where("nameMovie", "==",nameMovie).get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        id:hijo.id,
                        ...hijo.data()
                    })
                });
                
            }).catch(err =>
                console.log(err))
        }
        return movies
}