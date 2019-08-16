import React from "react";

import PageTitle from "../../common/PageTitle/PageTitle";
import PostsCounter from "../../features/postsCounter/PostsCounterContainer";
import Posts from "../../features/posts/PostsContainer";

const PostsPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounter />
        <Posts />
    </div>
);

export default PostsPage;
