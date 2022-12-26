import React, { useState ,useEffect} from 'react';
import { List} from 'antd';
import db from '../Firebase';
import {getDocs,collection,orderBy,query} from "firebase/firestore";





function Blogs() {
    const [blogs,setBlogs] = useState([]);

       useEffect(()=>{
           const q = query(collection(db, "blogs"), orderBy("date", "desc"));
           getDocs(q).then((querySnapshot) => {
               const data = querySnapshot.docs.map(doc => doc.data());
               setBlogs(data);
           });
       })


    return (
        <section id="portfolio" style={{ background:'#fafffc' }}>
            <div className="row">
                <div className="twelve columns" >
                    <h1>Blog Posts</h1>
                    <List
                        itemLayout="vertical"
                        size="default"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={blogs}
                        // footer={<div><b>ant design</b> footer part</div>}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                extra={<img id='newportfolio_' width={400} alt="logo" src={item.image} />}
                                style={{ textAlign: "justify" }}
                            >
                                <List.Item.Meta
                                    // avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.url}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </section>
    );
}
export default Blogs;