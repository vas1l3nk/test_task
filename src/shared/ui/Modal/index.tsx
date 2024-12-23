import React, { FC, forwardRef, ReactNode, MouseEvent } from 'react';
import './styles.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ isOpen, onClose, title, children, onCancel, onConfirm }, ref) => {
        const handleOverlayClick = (e: MouseEvent) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
                onClose();
            }
        };

        if (!isOpen) return null;

        return (
            <div
                className="modal-overlay"
                onClick={handleOverlayClick}
                ref={ref}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="modal-close-btn" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        {onCancel && (
                            <button className="modal-btn cancel-btn" onClick={onCancel}>
                                Cancel
                            </button>
                        )}
                        {onConfirm && (
                            <button className="modal-btn confirm-btn" onClick={onConfirm}>
                                OK
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

Modal.displayName = 'Modal';


export default Modal;
