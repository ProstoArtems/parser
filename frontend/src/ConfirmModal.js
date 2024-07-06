import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Начался парсинг данных!</h2>
                <p>Пожалуйста, подождите</p>
            </div>
        </div>
    );
};

export default ConfirmModal;