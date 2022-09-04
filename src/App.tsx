import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading";

const UserList = lazy(() => import("./pages/UserList"));
const UserUpdate = lazy(() => import("./pages/UserUpdate"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<UserList />} />
				<Route path="/update/:id" element={<UserUpdate />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
