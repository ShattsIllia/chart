import {AlVelComp} from "./components/AlvelComp";
import {IlliaComp} from "./components/IlliaComp";
import { Layout } from "./components/Layout/Layout";
import { UsersPage } from "./pages/UserPage/UserPage";

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
        name: 'user',
        path: '/user',
        exact: false,
        component: UsersPage,
        layout: Layout,
        config: {
            withHeader: false
        }
    }
]