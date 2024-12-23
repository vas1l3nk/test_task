import {FC, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCreateNoteMutation} from "@/entities/Note/api/noteApi";
import {AddNoteArgs} from "@/features/AddNote/model/types";
import {RoutePath} from "@/shared/config/routeConfig";

const CreateNote: FC = () => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [create, {isLoading}] = useCreateNoteMutation()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title.trim().length < 3 || title.trim().length > 50) {
            setError('Length must be from 3 to 50 symbols');
            return;
        }

        if (!title.trim()) {
            setError('title cannot be empty');
            return;
        }

        const newNote: AddNoteArgs = {
            userId: 1,
            title: title.trim(),
            completed,
        };

        create(newNote).then(() => {
            navigate(RoutePath["notes-list"]);
        }).catch((error) => {
            console.error('error when add note', error)
        });
    };

    return (
        <div className="create-note">
            <h1>Add note</h1>
            <form onSubmit={handleSubmit} className="create-note-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        className={error ? 'input-error' : ''}
                    />
                    {error && <span className="error-message">{error}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="completed">
                        <input
                            type="checkbox"
                            id="completed"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />
                        Completed
                    </label>
                </div>

                <button type="submit" className="btn-submit">
                    Save
                </button>
                {isLoading && (
                    <div>Saving...</div>
                )}
            </form>
        </div>
    );
};

export default CreateNote;