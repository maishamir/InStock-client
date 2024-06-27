import { useState } from "react";
import Modal from "react-modal";
import "./DeleteModal.scss";
import closeIcon from "../../assets/images/icons/close-24px.svg";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function DeleteModal({ toBeDeleted, itemType, typeOfList }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    //whatever happens goes here
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="delete">
      <button onClick={openModal}>Replace with delete icon</button>
      <Modal
        className="delete__modal"
        overlayClassName="delete__overlay"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Delete Modal"
      >
        <button className="delete__close-icon" onClick={closeModal}>
          <img className="delete__icon" src={closeIcon} alt="close icon" />
        </button>
        <div className="delete__content">
          <div className="delete__text">
            <h1 className="delete__header">
              Delete {toBeDeleted} {itemType}?
            </h1>
            <p className="delete__text">
              Please confirm that you’d like to delete {toBeDeleted} from the{" "}
              {typeOfList}. You won’t be able to undo this action.
            </p>
          </div>
          <div className="delete__buttons">
            <SecondaryButton buttonText="Cancel" onClick={closeModal} />
            <DeleteButton buttonText="Delete" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteModal;
