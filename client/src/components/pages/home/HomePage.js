import React from "react";

import PageTitle from "../../common/PageTitle/PageTitle";
import PostsCounter from "../../features/postsCounter/PostsCounterContainer";
import Posts from "../../features/posts/PostsContainer";

const HomePage = () => (
    <>
        <PageTitle>Blog</PageTitle>
        <PostsCounter />
        <Posts pagination={false} postsPerPage={3} />
    </>
);

export default HomePage;
