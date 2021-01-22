import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        // submitted: false
    }
    componentDidMount(){
        console.log(this.props);
        // if unAuth => this.props.history.replace('/posts');
    }

    postDataHandler = () => {
        const postContent = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post("/posts", postContent)
            .then(res => {
                console.log(res);
                this.props.history.push('/posts');  // it's another wat to redirect 
                // [can use this.props.history."replace"('/posts')]
                // [the diff is if you go back a page, push will go back to new post and replace just stay at posts]
                // this.setState({submitted:true});
            })
    }
    render () {
        // let redirect = null;
        // if(this.state.submitted){
        //     redirect = <Redirect to='/posts' />
        // }
        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;