import React, { useState ,useEffect} from 'react';
import { List} from 'antd';
import db from '../Firebase';
import {getDocs,collection,orderBy,query,doc,getDoc} from "firebase/firestore";
import {Link, useParams} from "react-router-dom";
import './blog.css'






function Blog() {
    const {id} = useParams();
    const intId = parseInt(id);
    const [blog,setBlog] = useState({});
    const [tags,setTags] = useState([]);
    const [date,setDate] = useState({});

    // format date from nano to timestamp
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth()+1;
        const dt = d.getDate();
        return `${dt}/${month}/${year}`;
    }


    useEffect(()=>{
        getDoc(doc(db, "blogs", id)).then((doc) => {
            if (doc.exists()) {
                setBlog(doc.data());
                setTags(doc.data().tags);
                setDate(doc.data().date);
            } else {
                // doc.data() will be undefined in this case
            }
        }).catch((error) => {

        });
    })
    function secondsToStringDate(seconds) {
        const d = new Date(0);
        d.setUTCSeconds(seconds);
        return d;
    }



    return (


                <div className="container">
                    <a className="blog-goBack" href="/">
          <span className>
            ←
          </span>
                        <span className>
            Go Back
          </span>
                    </a>
                    <div className="blog-wrap">
                        <div className>
                            <p className="blog-date">
                                {secondsToStringDate(date.seconds).toDateString()}
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
                                    )
                                })}
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