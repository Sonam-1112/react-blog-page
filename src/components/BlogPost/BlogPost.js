import React,{useState,useEffect} from 'react'
import './BlogPost.css'
import Card from '../UI/Card/Card'; 
import { img_1 } from '../../images';
import blogPost from '../../data/blog.json'


const BlogPost = (props) => {

    const [post,setPost] = useState({});
    const [postId,setPostId] = useState('')

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=>post.id==postId);
        setPost(post);
        setPostId(postId);
    },[post,props.match.params.postId])



    return (
        <div className="blogPostContainer">
            <Card style={{marginBottom:"20px"}}>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="blogTitle">{post.blogTitle}</h1>
                    <span className="blogPostedBy">Posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className="blogImageContainer">
                    <img src={img_1} alt="post" />
                </div>
                <div className="blogText">
                     {post.blogText}
                </div>
            </Card>
        </div>
    )
}

export default BlogPost
