import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Note } from "@/entities/Note/model/types";
import {useFetchNotesQuery} from "@/entities/Note/api/noteApi";
import './styles.scss'
import CustomLink from "@/shared/ui/Link";

const NoteDetailsPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [note, setNote] = useState<Note | null>(null)
    const {data} = useFetchNotesQuery()

    useEffect(() => {
        const decodedTitle = id?.replace(/-/g, ' ');

        if (decodedTitle) {
            const foundNote = data.find(note => note.title === decodedTitle);
            setNote(foundNote || null);
        }
    }, [id, data]);

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div className={'container'}>
            <CustomLink to={'/test_task/'}>Back</CustomLink>
            <div className={'content'}>
                <h2>{note.title}</h2>
                <p>{note.completed}</p>
                <p>Completed: {note.completed ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
}

export default NoteDetailsPage;
