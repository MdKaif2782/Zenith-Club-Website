import React from "react";
import { useParams } from "react-router-dom";
import db from "../Firebase";
import {getDocs, collection, query, orderBy} from "firebase/firestore";

function Blog() {
    const { id } = parseInt(useParams());
    const [blog, setBlog] = React.useState(null);
    getDocs(query(collection(db, "blogs"),orderBy("date","desc"))).then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        setBlog(data[id]);
    });
    return (
        <div>
            <h1>{blog}</h1>
        </div>
    );
}
export default Blog;