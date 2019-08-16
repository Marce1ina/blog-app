import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "./components/layout/mainLayout/MainLayout";
import Home from "./components/pages/home/HomePage";
import Posts from "./components/pages/posts/PostsPage";
import Contact from "./components/pages/contact/ContactPage";
import NotFound from "./components/pages/notFound/NotFoundPage";
import NewPost from "./components/pages/newPost/NewPostPage";
import Post from "./components/pages/singlePost/SinglePostPage";
import EditPost from "./components/pages/editPost/EditPostPage";

class App extends React.Component {
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/posts/new" exact component={NewPost} />
                    <Route path="/posts/:id/edit" component={EditPost} />
                    <Route path="/posts/:id" component={Post} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout>
        );
    }
}

export default App;
