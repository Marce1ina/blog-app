import React from "react";

class PostsCounter extends React.Component {
    render() {
        const { postsCount } = this.props;

        return postsCount ? `Posts amount: ${this.props.postsCount}` : "No posts";
    }
}

export default PostsCounter;
