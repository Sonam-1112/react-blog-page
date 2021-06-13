import React,{useEffect,useState} from 'react'
import './Sidebar.css'
import Card from '../UI/Card/Card'
import { img_2, img_5 } from '../../images'
import blogPost from '../../data/blog.json'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },[posts])

    return (
        <div className="sidebarContainer" style={{width:props.width}}>
            <Card style={{ marginBottom: "20px" }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="cardImageContainer">
                    <img src={img_2} alt="cardImage" />
                </div>
                <div className="cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid ipsa quisquam, quam fuga rerum recusandae perferendis fugit exercitationem, beatae numquam iusto quibusdam rem eum consectetur. Provident cupiditate nostrum magnam!
                </div>
            </Card>
            <Card style={{ marginBottom: "20px" }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
                <div className="cardImageContainer">
                    <img src={img_5} alt="cardImage" />
                </div>
                <div className="cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid ipsa quisquam, quam fuga rerum recusandae perferendis fugit exercitationem, beatae numquam iusto quibusdam rem eum consectetur. Provident cupiditate nostrum magnam!
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                        {
                            posts.map(post=>{
                                return(
                                <Link key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                <h4 className="postTitle">{post.blogTitle}</h4>
                                <i className="fas fa-clock"></i><span>{post.postedOn}</span>
                                </div>
                                </Link>
                                );
                            })
                        }
                </div>
            </Card>
        </div>

    )
}

export default Sidebar
