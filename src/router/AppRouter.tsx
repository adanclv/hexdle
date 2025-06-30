import { MainPage } from '@/pages/MainPage'
import { Routes, Route } from 'react-router'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    )
}
