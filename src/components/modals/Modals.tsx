import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	const modalRoot = document.getElementById("modal-root");
	if (!modalRoot) return null;

	return ReactDOM.createPortal(
		<div
			onClick={onClose}
			style={{
				position: "fixed",
				inset: 0,
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 100,
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					margin: "auto 0",
					backgroundColor: "#fff",
					padding: "2rem 1rem",
					borderRadius: "8px",
					minWidth: "300px",
					maxWidth: "90%",
					height: "80%",
					overflow: "auto",
				}}
			>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
