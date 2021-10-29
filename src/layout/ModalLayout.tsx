import React from 'react';
import './ModalLayout.scss';

const ModalLayout = ({ children, title, closeCallback, isValid }) => {
	if (isValid) {
		debugger;
	}
	return (
		<div className="modal">
			<div className="modal-container">
				<div className="modal-container__header">
					<h2>{title}</h2>
				</div>
				<div className="modal-container__content">{children}</div>
				<div className="modal-container__footer">
					<div className="modal-container__footer__actions">
						<button onClick={closeCallback}>Close</button>
						<button
							className="submit"
							form="add-form"
							type="submit"
							disabled={!isValid}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalLayout;
