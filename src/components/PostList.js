import React from 'react';
import {connect} from 'react-redux';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>Post List</div>
        )
    };
}

export default connect()(PostList);