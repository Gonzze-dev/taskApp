import React, { useState, ReactNode } from 'react';
import './Modal.css'
import ButtonGreen from '../../UI/ButtonGreen/ButtonGreen'
import ButtonBorderGreen from '../../UI/ButtonBorderGreen/ButtonBorderGreen'

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    onClose();
  };

  return (
    <>
      <button onClick={handleModalToggle}>Add taskp</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {children}
            <div className='buttonsAddCancelTask-container'>
              <ButtonGreen width={100} height={30}>Agregar</ButtonGreen>
              <ButtonBorderGreen width={100} height={30} moreStyle={{marginLeft: '10px'}} onClick={handleModalToggle}>Cerrar</ButtonBorderGreen>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;