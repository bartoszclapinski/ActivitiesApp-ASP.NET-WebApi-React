import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestErrors";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard />  },
            { path: 'activities/:id', element: <ActivityDetails />  },
            { path: 'createActivity', element: <ActivityForm /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'errors', element: <TestErrors />}
        ]
    }
];

export const router = createBrowserRouter(routes);