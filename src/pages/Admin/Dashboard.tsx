import React, { useEffect, useState } from 'react';

import ProductTable from '../../components/ProductTable';
import { useAuthorization } from '../../context/AuthorizationContext';
import { BiEdit, BiTrash } from 'react-icons/bi';
import './Dashboard.scss';
import AddProductForm from './AddProductForm';
import { Product } from '../../model/product';
import { deleteProducts, getProducts } from '../../service/ProductService';
import { TableProduct } from '../../model/productForTable';
import { useNavigate } from 'react-router';

const Dashboard = () => {
	const { logOut } = useAuthorization();
	const navigate = useNavigate();
	const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [products, setProducts] = useState<TableProduct[]>([]);

	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
	}, []);

	async function signOutPressed(e) {
		e.preventDefault();
		if (logOut) {
			await logOut();
			navigate('/admin/login');
		}
	}

	function onRowSelected(selectedRows) {
		setSelectedRows(selectedRows);
	}

	function onAddProductPressed(e) {
		e.preventDefault();
		setIsOpen(true);
	}

	function onCloseModal(e) {
		setIsOpen(false);
	}

	function onSubmit() {
		getProducts().then((data) => {
			setProducts(data);
		});
		setIsOpen(false);
	}

	async function deleteSelectedItems() {
		await deleteProducts(selectedRows);
		getProducts().then((data) => {
			setProducts(data);
		});
	}

	return (
		<>
			{isOpen && (
				<AddProductForm
					onCloseCallback={onCloseModal}
					onSubmitCallback={onSubmit}
				/>
			)}
			<div className='products-container'>
				<h1>My Products</h1>
				<div className='products-container__actions'>
					<button
						className='products-container__actions__add-button'
						onClick={onAddProductPressed}>
						+
					</button>
					<div
						className={
							selectedRows.length > 0
								? 'products-container__actions--selected'
								: 'products-container__actions--hidden'
						}>
						<button className='products-container__actions__edit-button'>
							<BiEdit fontSize={20} />
						</button>
						<button
							className='products-container__actions__delete-button'
							onClick={deleteSelectedItems}>
							<BiTrash fontSize={20} />
						</button>
					</div>
				</div>

				<ProductTable data={products} onRowSelected={onRowSelected} />
			</div>
		</>
	);
};

export default Dashboard;
