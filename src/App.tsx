import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AuthentificationPage from './pages/Admin/AuthentificationPage';
import Dashboard from './pages/Admin/Dashboard';
import UserLayout from './layout/UserLayout';
import { AuthorizationProvider } from './context/AuthorizationContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './layout/AdminLayout';
import Products from './pages/Product/Products';
import Product from './pages/Product/Product';
import HomePage from './pages/Admin/HomePage';

function App() {
	return (
		<Router>
			<AuthorizationProvider>
				<Routes>
					<Route
						path='/'
						element={
							<UserLayout>
								<Home />
							</UserLayout>
						}></Route>
					<Route path='/products' element={<ProductsPage />} />
					<Route
						path='products/sale'
						element={
							<UserLayout>
								<Products onlyOnSale={true} />
							</UserLayout>
						}
					/>
					<Route path='products/:productId' element={<ProductPage />} />

					<Route path='/login' element={<AuthentificationPage />} />
					<Route
						path='/admin'
						element={
							<ProtectedRoute>
								<AdminLayout>
									<Dashboard />
								</AdminLayout>
							</ProtectedRoute>
						}
					/>
					<Route
						path='/admin/home-page'
						element={
							<ProtectedRoute>
								<AdminLayout>
									<HomePage />
								</AdminLayout>
							</ProtectedRoute>
						}
					/>

					<Route path='*'>
						<div>Not found</div>
					</Route>
				</Routes>
			</AuthorizationProvider>
		</Router>
	);
}

// TODO: Remove when pages are implemented

const ProductsPage = () => (
	<UserLayout>
		<Products />
	</UserLayout>
);

const ProductPage = () => (
	<UserLayout>
		<Product />
	</UserLayout>
);

export default App;
