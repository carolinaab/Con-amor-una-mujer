import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase/app';
import { db } from '../firebase/firebase';
import Blog from '../views/blog'


const usePost = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
     firebase
     .firestore()
     .collection('post')
     .onSnapshot((snapshot) => {
        const newPost = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setPost(newPost)
     })
    }, [])

    return post
}



const Salud = () => {
    const post =  usePost()
    return ( 
      
        <div>
             <Blog/>
        {
            post
            .map(element => {
               if(element.type === "salud"){
                   return(
                   <p>{element.information}</p>
                   )
               } else {
                   return null
               }

            })
        }
    </div>
      );
}
 
export default Salud;