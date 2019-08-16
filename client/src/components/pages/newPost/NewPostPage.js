import React from "react";
import PostForm from "../../features/postForm/PostFormContainer";
import PageTitle from "../../common/PageTitle/PageTitle";

const NewPostPage = () => (
    <>
        <PageTitle>Add post</PageTitle>
        <PostForm />
    </>
);

export default NewPostPage;
