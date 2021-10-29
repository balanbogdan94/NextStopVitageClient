import React from 'react';
import './InputLayout.scss';

interface InputProps {
	title: string;
	isRequired: boolean;
	children: JSX.Element;
	help?: string;
}

const InputLayout = ({ title, isRequired, children, help }: InputProps) => {
	return (
		<div className="input-container">
			<label>
				<h4>{title}</h4>
				{children}
				{help && <small>{`( ${help} )`}</small>}
				{isRequired && <h6> This field is is Required </h6>}
			</label>
		</div>
	);
};

export default InputLayout;
