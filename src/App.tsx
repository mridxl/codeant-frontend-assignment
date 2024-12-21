import { BrowserRouter, Routes, Route } from 'react-router';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/login" element={<h1>Login Page</h1>} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
