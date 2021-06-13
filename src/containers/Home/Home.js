import React from 'react'
import './Home.css'
import '../../components/BlogPost/BlogPost.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/UI/Card/Card'
import { img_1, img_2, img_3, img_4, img_5 } from '../../images'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Card>
                <div className="galleyPost">
                    <section>
                        <div className="mostPopImg">
                            <img src={img_1} alt="most" />
                        </div>
                        <div className="lessPopImg">
                            <img src={img_2} alt="" />
                            <img src={img_3} alt="" />
                            <img src={img_4} alt="" />
                        </div>
                    </section>
                </div>
            </Card>
            <section className="homeContainer">
                <div style={{ width: "70%" }}>
                    <Card style={{ marginBottom: "20px" }}>
                        <div className="postImageWrapper">
                            <Link to="/post/2"><img src={img_5} alt="post" /></Link>
                        </div>
                        <div className="blogHeader">
                            <span className="blogCategory">Featured</span>
                            <h1 className="blogTitle">Beauty lies in Nature</h1>
                            <span className="blogPostedBy">Posted on 21 June,2021 by Faiz Khan</span>
                        </div>
                        <div className="blogText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, corrupti saepe beatae deleniti ratione quibusdam voluptate ea accusamus debitis dolorum at animi esse ut, perspiciatis quo itaque! Doloremque, unde culpa.
                        </div>
                        <div className="readmorebtn">
                            <Link to="/post/2">Read more</Link>
                        </div>
                    </Card>
                    <Card style={{ marginBottom: "20px" }}>
                        <div className="postImageWrapper">
                            <Link to="/post/1"><img src={img_1} alt="post" /></Link>
                        </div>
                        <div className="blogHeader">
                            <span className="blogCategory">Featured</span>
                            <h1 className="blogTitle">Beauty lies in Nature</h1>
                            <span className="blogPostedBy">Posted on 21 June,2021 by Faiz Khan</span>
                        </div>
                        <div className="blogText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, corrupti saepe beatae deleniti ratione quibusdam voluptate ea accusamus debitis dolorum at animi esse ut, perspiciatis quo itaque! Doloremque, unde culpa.
                        </div>
                        <div className="readmorebtn">
                            <Link to="/post/1">Read more</Link>
                        </div>
                    </Card>
                </div>
                <Sidebar />
            </section>
        </>
    )
}

export default Home
