import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import App from "./App";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ index: true, element: <App /> },
			{ path: "/login", element: <div>Login</div> },
			{ path: "/register", element: <div>Register</div> },
		],
	},
]);
