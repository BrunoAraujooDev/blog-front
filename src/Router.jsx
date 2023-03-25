import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout/defaultLayout'
import { Home } from './pages/Home/Home'
import PostCommentPage from './pages/PostComment/PostComment'
import Posts from './pages/Posts/Posts'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:postId" element={<PostCommentPage />} />
            </Route>
        </Routes>
    )
}