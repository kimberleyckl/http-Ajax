import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
// import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost  = asyncComponent(() => {
    return  import('./NewPost/NewPost')
})
class Blog extends Component {
    state = {
        auth: true
    }
    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' 
                                exact
                                activeClassName='my-active' // for the purpose of my own css active name!
                                activeStyle={{color:'#fa923f' , textDecoration: 'underline'}}//just like inline style
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = '/' exact render = {() => <h1>hone</h1>} */}
                <Switch>
                    {this.state.auth? <Route path = '/new-post' component={AsyncNewPost} /> : null}
                    <Route path = '/posts'  component={Posts} />
                    <Route render={()=> <h1>Not Found!</h1>} />   
                    {/* <Redirect from = '/' to = '/posts' /> */}
                    {/* the last two will conflict each other, but <Route/> without specify path is useful fro 404 not found page */}
                </Switch>
                
                
            </div>
        );
    }
}

export default Blog;