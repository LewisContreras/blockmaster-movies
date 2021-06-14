import { db } from "../firebase/firebase-config";

export const goSearchMovies = async (category,selected,last) =>{
    
        let movies = [...selected]
        if(category === "Todas"){
            console.log("primer condi");
                if(!last){
                    movies = []
                }
                let ref = await db.collection("movies").orderBy("nameMovie").startAfter(last).limit(9).get().then(snap =>{
                    console.log(snap.docs)
                    snap.forEach(hijo => {
                        movies.push({
                            id:hijo.id,
                            ...hijo.data()
                        })
                    });
                    
                }).catch(err =>console.log(err))

            
        }else if(category === "Más valoradas"){
            console.log("segundo condi");
            movies = []
            let ref = await db.collection("movies").where("calification", ">=",7).orderBy("calification","desc").get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        id:hijo.id,
                        ...hijo.data()
                    })
                });
                
            })

        }else if(category === "Menos valoradas"){
            console.log("tercer condi");
            movies = []
            let ref = await db.collection("movies").where("calification", "<=",7).orderBy("calification","desc").get().then(snap =>{
            
                snap.forEach(hijo => {
                    movies.push({
                        id:hijo.id,
                        ...hijo.data()
                    })
                });
                
            })
        }else{
            console.log("ultimo condi");
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