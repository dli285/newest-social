import React from "react";
import Modal from 'react-modal'
import { boolean } from "yup";
import { AppInput } from "../../../AppInput/AppInput";
import { AppButton } from "../../../AppButton/AppButton";

const customStyles = {

}

interface AppModalProps {
    modalIsOpen: boolean
    closeModal: () => void
    onCommentInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onAddComment: () => void
}

export const AppModal = ({ modalIsOpen, closeModal, onCommentInputChange, onAddComment }: AppModalProps) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add comments">
            <button onClick={closeModal}>close</button>
            <div>Add comments</div>
            <form>
                <AppInput
                    type="text"
                    inputPlaceholder="New comment"
                    onChange={onCommentInputChange}
                />
                <AppButton
                    type="button"
                    isDisabled={false}
                    buttonText="AddComment"
                    onClick={() => onAddComment()}
                />
            </form>
        </Modal>
    )
}