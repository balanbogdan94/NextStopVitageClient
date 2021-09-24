import React from 'react';
import './app.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import UserLayout from './layout/UserLayout';
import Authorization from './pages/authorization/Authorization';
import { MainLayout } from './layouts/MainLayout';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<UserLayout>
						<Home />
					</UserLayout>
				</Route>
				<Route path="/mens">
					<UserLayout>
						<Mens />
					</UserLayout>
				</Route>
				<Route path="/womens">
					<UserLayout>
						<Womens />
					</UserLayout>
				</Route>
				<Route path="/accessories">
					<UserLayout>
						<Accessories />
					</UserLayout>
				</Route>
				<Route path="/search">
					<UserLayout>
						<Search id={'23'} />
					</UserLayout>
				</Route>
				<Route path="/admin/login" component={Login} />
				<Route path="/admin" component={Dashboard} />
				<Route path="*">
					<div>Not found</div>
				</Route>
			</Switch>
		</Router>
	);
}

// TODO: Remove when pages are implemented

const Mens = () => {
	return <h1>Mens</h1>;
};

const Womens = () => {
	return <h1>Womens</h1>;
};

const Accessories = () => {
	return <section>Accessories</section>;
};

type TParams = { id: string };

const Search = (text: TParams) => {
	let query = useQuery();
	let x = query.get('word');
	return (
		<div>
			<h2>Here now</h2>
			<h1>Serach word: {x}</h1>
		</div>
	);
};

export default App;
