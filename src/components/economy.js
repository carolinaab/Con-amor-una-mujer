import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase/app';

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

const Economia = () => {
    const post = usePost()
    return ( 
      
       <div>
           <Blog/>
           {
               post
               .filter(e => e.type === "economia")
               .map(element => {
                   return (
                   <p>{element.information}</p>
                   )
               })
           }
         
       </div>

     );
}
 
export default Economia;