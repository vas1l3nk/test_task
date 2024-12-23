import {FC, useRef, useState} from "react";
import "./styles.scss";
import Modal from "@/shared/ui/Modal";
import {useDeleteNoteMutation} from "@/entities/Note/api/noteApi";
import {Note} from "@/entities/Note/model/types";
import useLockBodyScroll from "@/shared/hooks/useLockBodyScroll";
import {useTrapTab} from "@/shared/hooks/useTrapTab";

type DeleteNoteButtonProps = {
    noteId: number;
    noteTitle: string;
};

const DeleteNoteButton: FC<DeleteNoteButtonProps> = ({ noteId, noteTitle }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [deleteNote, { isLoading: isDeleteNoteLoading }] = useDeleteNoteMutation();

    useLockBodyScroll(isDeleteModalOpen);
    useTrapTab(isDeleteModalOpen, modalRef);

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen((prev) => !prev);
    };

    const handleDeleteNote = () => {
        deleteNote({ id: noteId }).then(() => toggleDeleteModal());
    };

    return (
        <>
            <button className="delete-btn" onClick={toggleDeleteModal}>
                Delete
            </button>

            <Modal
                ref={modalRef}
                isOpen={isDeleteModalOpen}
                onClose={toggleDeleteModal}
                title={`Delete note: ${noteTitle}`}
                onCancel={toggleDeleteModal}
                onConfirm={handleDeleteNote}
            >
                {isDeleteNoteLoading && <div>Loading...</div>}
            </Modal>
        </>
    );
};

export default DeleteNoteButton;
