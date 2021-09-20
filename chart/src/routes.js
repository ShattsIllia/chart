import {AlVelComp} from "./components/AlvelComp";
import {IlliaComp} from "./components/IlliaComp";
import { Layout } from "./components/Leyout";
import { UsersPage } from "./components/Users"

export const routes = [
    {
        name: 'alex',
        path: '/alex',
        exact: false,
        component: AlVelComp,
        layout: Layout,
        config: {
            withHeader: false
        }
    },
    {
        name: 'illia',
        path: '/illia',
        exact: false,
        component: IlliaComp,
        layout: Layout,
        config: {
            withHeader: false
        }
    },
    {
        name: 'users',
        path: '/users',
        exact: false,
        component: UsersPage,
        layout: Layout,
        config: {
            withHeader: false
        }
    }
]