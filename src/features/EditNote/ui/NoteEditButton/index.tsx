// Features/EditNoteButton/index.tsx
import { FC, useState, useRef, useEffect } from "react";
import Modal from "@/shared/ui/Modal";
import { useEditNoteMutation } from "@/entities/Note/api/noteApi";
import useLockBodyScroll from "@/shared/hooks/useLockBodyScroll";
import { useTrapTab } from "@/shared/hooks/useTrapTab";
import "./styles.scss";
import NoteEditForm from "@/features/EditNote/ui/NoteEditForm";

type EditNoteButtonProps = {
    note: { id: number; title: string };
};

const EditNoteButton: FC<EditNoteButtonProps> = ({ note }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [noteText, setNoteText] = useState(note.title);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [editNote, { isLoading: isEditNoteLoading }] = useEditNoteMutation();

    useLockBodyScroll(isEditModalOpen);
    useTrapTab(isEditModalOpen, modalRef);

    const toggleEditModal = () => {
        setIsEditModalOpen((prev) => !prev);
    };

    const handleSaveEdit = () => {
        editNote({
            id: note.id,
            body: { title: noteText },
        }).then(() => toggleEditModal());
    };

    useEffect(() => {
        setNoteText(note.title);
    }, [note]);

    return (
        <>
            <button className="edit-btn" onClick={toggleEditModal}>
                Edit
            </button>

            <Modal
                ref={modalRef}
                isOpen={isEditModalOpen}
                onClose={toggleEditModal}
                title={`Edit note: ${note.title}`}
                onCancel={toggleEditModal}
                onConfirm={handleSaveEdit}
            >
                {isEditNoteLoading ? (
                    <div>Loading...</div>
                ) : (
                    <NoteEditForm
                        noteTitle={noteText}
                        setNoteTitle={setNoteText}
                    />
                )}
            </Modal>
        </>
    );
};

export default EditNoteButton;
