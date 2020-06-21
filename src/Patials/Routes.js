import Index from "../Home/Index";
import About from "../About/About";

export const Routes = [{
        path: '/',
        component: Index,
        exact: true
    },
    {
        path: '/about',
        component: About
    }
]