import React, { Component } from 'react';
// import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state = {
        selectedPostId: null,
        posts: [] ,
        error: false
    }

    componentDidMount(){
        axios.get("/posts")
            .then(response => {
                const po = response.data.slice(0,4);
                const updatedPosts = po.map(post => {
                    return{
                        ...post,
                        author: 'Kimi'
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(response.data)
            })
            .catch(error => {
                this.setState({error:true});
            })
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }


    render () {
        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>; 

        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key = {post.id} 
                    title = {post.title} 
                    author = {post.author}
                    clicked = {() => this.postSelectedHandler(post.id)}/>
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;