import React, { useState ,useEffect} from 'react';

import db from '../Firebase';
import {doc,getDoc} from "firebase/firestore";
import {useParams} from "react-router-dom";
import './blog.css'

function Blog() {
    const {id} = useParams();
    const [blog,setBlog] = useState({});
    const [tags,setTags] = useState([]);
    const [date,setDate] = useState({});

 //q: how to disable refreshing firestore data when the page is refreshed?
    // a: use useEffect
    useEffect(()=>{
        if (blog.title === undefined) {
            getDoc(doc(db, "blogs", id)).then((doc) => {
                if (doc.exists()) {
                    console.log("Document data:", doc.data());
                    setBlog(doc.data());
                    setTags(doc.data().tags);
                    setDate(doc.data().date);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    },[])

    function secondsToStringDate(seconds) {
        const d = new Date(0);
        d.setUTCSeconds(seconds);
        return d;
    }

    return (
        <div className="container">
        <a className="blog-goBack" href="/">
          <span className>←</span>
          <span className>Go Back</span>
        </a>
        <div className="blog-wrap">
          <div className>
            <p className="blog-date">
               Published on {secondsToStringDate(date.seconds).toDateString()}
            </p>
            <h1 className="blog-title">
                {blog.title}
            </h1>
            <div className="blog-subCategory">
                 {tags.map((tag) => {
                    return(
                       <div className>
                          <p className="chip">
                            {tag}
                          </p>
                       </div>
                       )})}
            </div>
          </div>
          <img src={blog.image} className="snipcss0-2-5-16" />
            <p className="blog-desc">
               {blog.content}
            </p>
        </div>
    </div>

    );
}
export default Blog;