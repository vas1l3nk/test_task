import React from "react";

type NoteTitleEditFormProps = {
    noteTitle: string;
    setNoteTitle: (title: string) => void;
};

const NoteEditForm: React.FC<NoteTitleEditFormProps> = ({ noteTitle, setNoteTitle }) => {
    return (
        <div className="edit-note-container">
            <label htmlFor="noteTitle">Edit Title:</label>
            <input
                id="noteTitle"
                type="text"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Enter new title"
            />
        </div>
    );
};

export default NoteEditForm;
