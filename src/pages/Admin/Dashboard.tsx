import React from 'react';
import { useHistory } from 'react-router';
import ProductTable from '../../components/ProductTable';
import { useAuthorization } from '../../context/AuthorizationContext';
import { BiEdit, BiTrash } from 'react-icons/bi';
import './Dashboard.scss';

const Dashboard = () => {
	const { logOut } = useAuthorization();
	const history = useHistory();
	const [isRowSelected, setIsRowSelected] = React.useState(false);

	async function signOutPressed(e) {
		e.preventDefault();
		if (logOut) {
			await logOut();
			history.push('/admin/login');
		}
	}

	function onRowSelected(isSelected) {
		console.log(isSelected);
		setIsRowSelected(isSelected);
	}

	return (
		<div className="products-container">
			<svg
				className="products-container__blob"
				width="234"
				height="194"
				viewBox="0 0 234 194"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M111.441 0.0376818C127.883 -0.934615 135.381 17.1705 149.183 24.1027C160.304 29.6884 172.816 32.8629 184.979 36.9727C201.009 42.3891 227.348 39.7071 233.022 52.4323C239.185 66.2542 214.392 77.8363 209.494 91.9537C206.293 101.179 209.098 110.809 209.457 120.353C209.924 132.763 217.777 145.651 211.951 157.231C206.31 168.442 191.748 175.724 178.425 182.027C165.112 188.324 150.091 195.1 134.541 193.85C118.41 192.553 108.609 178.225 92.8914 175.149C78.4071 172.315 63.164 179.229 48.4984 177.012C32.2102 174.55 11.754 172.622 3.37248 161.615C-5.42804 150.059 5.6818 135.239 6.50259 121.866C7.12777 111.679 7.27106 101.74 7.67297 91.547C8.0947 80.8517 6.15409 70.2169 8.95247 59.7348C12.0965 47.9581 11.7491 32.453 25.118 26.2016C39.7204 19.3735 59.9824 33.2569 75.8845 28.4371C91.9263 23.5749 94.2458 1.05446 111.441 0.0376818Z"
					fill="#D6E4E4"
				/>
			</svg>
			<h1>Lore Ipsum</h1>
			<div className="products-container__actions">
				<button className="products-container__actions__add-button">
					Add Product
				</button>
				<div
					className={
						isRowSelected
							? 'products-container__actions--selected'
							: 'products-container__actions--hidden'
					}
				>
					<button className="products-container__actions__edit-button">
						<BiEdit fontSize={20} />
					</button>
					<button className="products-container__actions__delete-button">
						<BiTrash fontSize={20} />
					</button>
				</div>
			</div>

			<ProductTable onRowSelected={onRowSelected} />
		</div>
	);
};

export default Dashboard;
