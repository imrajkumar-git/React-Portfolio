import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoToTop from '../components/GoToTop'
// import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Home/Home'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </BrowserRouter>
            <GoToTop />
        </>
    )
}

export default Router