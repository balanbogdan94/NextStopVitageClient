import React from 'react';
import InputLayout from '../../layout/InputLayout';
import './AddProductForm.scss';
import { useForm, useFieldArray } from 'react-hook-form';
import ModalLayout from '../../layout/ModalLayout';
import { BiTrash, BiPhotoAlbum } from 'react-icons/bi';
import { addProduct } from '../../service/ProductService';
import { getBrands } from '../../service/BrandService';
import { getSizesForCategory } from '../../model/productsSizes';
import AddPhotoLogo from '../../assets/AddPhotos.svg';

const AddProductForm = ({ onCloseCallback, onSubmitCallback }) => {
	const [image, setImage] = React.useState<string[] | null>(null);
	const [brands, setBrands] = React.useState<string[]>([]);
	const [sizes, setSizes] = React.useState([]);
	const { control, watch, register, handleSubmit, formState } = useForm({
		mode: 'onChange',
	});

	const { isDirty, isValid } = formState;
	const category: string = watch('category');

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'sizes',
	});

	React.useEffect(() => {
		getBrands().then((data) => setBrands(data));
	}, []);

	React.useEffect(() => {
		let _sizes;
		if (category !== undefined) {
			_sizes = getSizesForCategory(category.toUpperCase());
		}
		if (_sizes) {
			setSizes(_sizes);
			if (fields.length === 0) append({ value: _sizes[0] });
		}
	}, [category]);

	const onImageChange = (event) => {
		let images: string[] = [];
		if (event.target.files) {
			const files = [...event.target.files];
			files.map((file) => images.push(URL.createObjectURL(file)));
		}
		setImage(images);
	};

	const onSubmitData = async (data) => {
		await addProduct(data);
		onSubmitCallback();
	};

	const productImages = register('productImages', { required: true });

	const closeAction = () => {
		if (!isDirty) {
			onCloseCallback();
			return;
		}
		if (window.confirm('You have unssaved data, do you really wanna exit')) {
			onCloseCallback();
		}
	};

	return (
		<ModalLayout
			title="Add Product"
			closeCallback={closeAction}
			isValid={isValid}
		>
			<form
				id="add-form"
				className="add-product-form"
				onSubmit={handleSubmit(onSubmitData)}
			>
				<section>
					<InputLayout
						title="Product name"
						isRequired
						help="minimum of 5 characters and maximum of 50 characters"
					>
						<input
							{...register('title', {
								required: true,
								minLength: 5,
								maxLength: 50,
							})}
							type="text"
						/>
					</InputLayout>
					<InputLayout title="Brand" isRequired>
						<>
							<input
								{...register('brand', { required: true })}
								type="text"
								list="brands"
							/>
							<datalist id="brands">
								{brands.map((brand) => (
									<option value={brand} />
								))}
							</datalist>
						</>
					</InputLayout>
					<InputLayout title="Description" isRequired={false}>
						<textarea {...register('description')} />
					</InputLayout>
					<InputLayout title="Drop" isRequired>
						<select id="drop" {...register('drop', { required: true })}>
							<option value="not-in-drop" selected>
								Not In Drop
							</option>
						</select>
					</InputLayout>
				</section>
				<section>
					<InputLayout title="Category" isRequired>
						<select id="category" {...register('category', { required: true })}>
							<option value="" disabled selected>
								Select your option
							</option>
							<option value="Tops">Tops</option>
							<option value="Pants">Pants</option>
							<option value="Shoes">Shoes</option>
							<option value="Hats">Hats</option>
							<option value="Accesories">Accesories</option>
						</select>
					</InputLayout>

					{category && (
						<fieldset className={'add-product-form__sizes'}>
							<legend>Sizes</legend>
							<button
								className="add-product-form__sizes__add-button"
								type="button"
								onClick={() => append({ value: sizes[0] })}
							>
								+
							</button>
							<div className="add-product-form__sizes__items">
								<ul>
									{fields.map((item, index) => {
										return (
											<li key={item.id}>
												<select
													className="item"
													{...register(
														`sizes.${index}.value` as 'sizes.0.value',
													)}
												>
													{sizes.map((x) => (
														<option value={x}>{x}</option>
													))}
												</select>
												{index > 0 && (
													<button
														className={'delete-button'}
														onClick={() => remove(index)}
													>
														<BiTrash fontSize={20} />
													</button>
												)}
											</li>
										);
									})}
								</ul>
							</div>
						</fieldset>
					)}
				</section>
				<section>
					<fieldset className="add-product-form__photos">
						<legend>Images</legend>

						<div className="add-product-form__photos__images-list">
							{image ? (
								image.map((img) => (
									<img className="image-product" src={img} alt="test" />
								))
							) : (
								<img src={AddPhotoLogo} alt="Add" style={{ width: '25%' }} />
							)}
						</div>
						<label className="add-product-form__photos__upload">
							Chose file
							<input
								type="file"
								accept="image/*"
								{...productImages}
								onChange={(e) => {
									productImages.onChange(e);
									onImageChange(e);
								}}
								multiple
							/>
						</label>
					</fieldset>
				</section>
				<section>
					<div className="add-product-form__price">
						<InputLayout title="Price" isRequired help="RON">
							<input
								{...register('price', { required: true })}
								type="number"
							></input>
						</InputLayout>
						<InputLayout
							title="Price after discount"
							isRequired={false}
							help="RON"
						>
							<input {...register('newPrice')} type="number"></input>
						</InputLayout>
					</div>
				</section>
			</form>
		</ModalLayout>
	);
};

export default AddProductForm;
