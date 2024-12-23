import { FC, useEffect, useState } from "react";
import { Note } from "@/entities/Note/model/types";
import "./styles.scss";
import DeleteNoteButton from "@/features/DeleteNote/ui/DeleteNoteButton";
import EditNoteButton from "@/features/EditNote/ui/NoteEditButton";
import { ToggleNoteCheckbox } from "@/features/ToggleNote";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "@/shared/ui/Link";
import { generateLinkFromTitle } from "@/entities/Note/model/utils";

type NotesTableProps = {
    notes: Note[];
};

const NotesTable: FC<NotesTableProps> = ({ notes }) => {
    const [highlightedRows, setHighlightedRows] = useState<number[]>([]);
    const [completedFilter, setCompletedFilter] = useState<boolean | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    const getFilterFromURL = () => {
        const urlParams = new URLSearchParams(location.search);
        const completedParam = urlParams.get("completed");

        if (completedParam === "true") return true;
        if (completedParam === "false") return false;
        return null;
    };

    const filteredNotes = completedFilter === null
        ? notes
        : notes.filter(note => note.completed === completedFilter);

    useEffect(() => {
        setCompletedFilter(getFilterFromURL());
    }, [location.search]);

    const handleFilterChange = (newFilter: boolean | null) => {
        const urlParams = new URLSearchParams(location.search);

        if (newFilter === null) {
            urlParams.delete("completed");
        } else {
            urlParams.set("completed", String(newFilter));
        }

        navigate({
            pathname: location.pathname,
            search: urlParams.toString(),
        });
    };

    const handleToggle = (index: number, isChecked: boolean) => {
        setHighlightedRows((prev) =>
            isChecked ? [...prev, index] : prev.filter((i) => i !== index)
        );
    };

    const completedColumnClass =
        completedFilter === null
            ? ""
            : completedFilter
                ? "completed-filter-active"
                : "completed-filter-inactive";

    return (
        <div>
            <button onClick={() => handleFilterChange(null)}>All</button>
            <button onClick={() => handleFilterChange(true)}>Completed</button>
            <button onClick={() => handleFilterChange(false)}>Not completed</button>

            <table className="notes-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th
                            onClick={() => handleFilterChange(completedFilter === true ? null : true)}
                            style={{ cursor: "pointer" }}
                            className={completedColumnClass}
                        >
                            Completed
                        </th>
                        <th>Link</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredNotes.map((note, index) => (
                        <tr
                            key={note.id}
                            className={highlightedRows.includes(index) ? "highlighted-row" : ""}
                        >
                            <td>{index + 1}</td>
                            <td>{note.title}</td>
                            <td>
                                <ToggleNoteCheckbox
                                    checked={note.completed}
                                    onToggle={(isChecked) => handleToggle(index, isChecked)}
                                />
                            </td>
                            <td>
                                <CustomLink to={generateLinkFromTitle(`${note.title}`)}>Link</CustomLink>
                            </td>
                            <td>
                                <EditNoteButton note={note} />
                                <DeleteNoteButton noteId={note.id} noteTitle={note.title} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotesTable;