import Layout from "../Layout/Layout";
import Home from "../Page/Home";

const Routes = [
    { path: '/', element: <Layout />, children: [   
        { index: true, path: '/', element: <Home /> },
    ]
     }
]

export default Routes