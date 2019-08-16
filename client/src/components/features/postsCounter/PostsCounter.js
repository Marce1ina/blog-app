import React from "react";

class PostsCounter extends React.Component {
    render() {
        const { postsCount } = this.props;

        return postsCount ? <div>Posts amount: {this.props.postsCount}</div> : "No posts";
    }
}

export default PostsCounter;
