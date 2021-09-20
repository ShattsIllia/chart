import {AlVelComp} from "./components/AlvelComp";
import {IlliaComp} from "./components/IlliaComp";

export const routes = [
    {
        name: 'alex',
        path: '/alex',
        exact: false,
        component: AlVelComp,
        layout: <></>,
        config: {
            withHeader: false
        }
    },
    {
        name: 'illia',
        path: '/illia',
        exact: false,
        component: IlliaComp,
        layout: <></>,
        config: {
            withHeader: false
        }
    }
]