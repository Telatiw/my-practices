// import { createBrowserRouter } from 'react-router'
// import Layout from '../Layout/Layout'
// import Home from '../Pages/Home/Home'
// import Login from '../Pages/Login/Login'
// import ErrorComponent from '../Components/ErrorComponent'
// import type React from 'react'
// import type { IUser } from '../Sotre/Index'
// const FetchUsers = async () => {
//     const res = await fetch('https://login-page-7c74b-default-rtdb.firebaseio.com/users.json')
//     const data = await res.json()
//     if (data) {
//         return Object.values(data)
//     }
//     return []
// }

// const routes = createBrowserRouter([
//     {
//         path: '/', Component: Layout, children: [
//             {
//                 index: true, Component: Login, action: async ({ request }) => {
//                     const formData = await request.formData()
//                     const user = Object.fromEntries(formData)
//                     try {
//                         if (user.email.trim() && user.firstname.trim() && user.lastname.trim()) {
//                             await fetch('https://login-page-7c74b-default-rtdb.firebaseio.com/users.json', {
//                                 method: 'POST',
//                                 body: JSON.stringify(user)
//                             })
//                             return { ok: true }
//                         }
//                     } catch (error: React.error) {
//                         return { ok: false, error: error.message }
//                     }
//                 }
//             },
//             { path: '/home', Component: Home, loader: FetchUsers, ErrorBoundary: ErrorComponent },
//         ]
//     }
// ])
// export default routes

import { createBrowserRouter, redirect } from 'react-router'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import ErrorComponent from '../Components/ErrorComponent'

const FetchUsers = async () => {
    const res = await fetch('https://login-page-7c74b-default-rtdb.firebaseio.com/users.json')
    const data = await res.json()
    if (data) {
        return Object.entries(data)
    }
    return []
}

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Login,
                action: async ({ request }) => {
                    try {
                        const formData = await request.formData()
                        const user = Object.fromEntries(formData)

                        if ((user.email as string)?.trim() && (user.firstname as string)?.trim() && (user.lastname as string)?.trim()) {
                            await fetch('https://login-page-7c74b-default-rtdb.firebaseio.com/users.json', {
                                method: 'POST',
                                body: JSON.stringify(user)
                            })
                            return redirect('/home')
                        } else {
                            return { ok: false, error: 'همه فیلدها را پر کنید!' }
                        }
                    } catch (error: unknown) {
                        return { ok: false, error: (error as Error).message }
                    }
                }
            },
            {
                path: '/home',
                Component: Home,
                loader: FetchUsers,
                ErrorBoundary: ErrorComponent
            },
        ]
    }
])

export default routes