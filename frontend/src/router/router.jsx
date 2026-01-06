import HomePage from '../pages/Home/HomePage'
import AboutPage from '../pages/About/AboutPage'
import ContactPage from '../pages/Contact/ContactPage'
import ProductDetail from '../pages/ProductDetail/ProductDetail'

import App from '../App'

import { createBrowserRouter } from 'react-router-dom'

const my_router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/about',
                    element: <AboutPage />
                },
                {
                    path: '/contact',
                    element: <ContactPage />
                },
                {
                    path: '/product/:id',
                    element: <ProductDetail />
                }
            ]
        }
    ]
)


export default my_router;