import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout/defaultLayout'
import { Home } from './pages/Home/home'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}