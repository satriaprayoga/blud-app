import Home from "../pages/home/Home";
import Organization from "../pages/organization/Organization";

const routes=[
    {
        path:'/',
        component: Home,
        exact: true
    },
    {
        path:'/satker',
        component: Organization
    }
]

export default routes;