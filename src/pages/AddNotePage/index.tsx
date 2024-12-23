import './styles.scss'
import {AddNoteForm} from "@/features/AddNote";
const AddNotePage = () => {
    return (
        <div className={'add_page'}>
            <h1>Create Note</h1>
            <AddNoteForm/>
        </div>
    )
}

export default AddNotePage