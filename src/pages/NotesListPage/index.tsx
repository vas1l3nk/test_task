import {FC} from "react";
import {useFetchNotesQuery} from "@/entities/Note/api/noteApi";
import {NotesTable} from "@/entities/Note";
import {useNavigate} from "react-router-dom";
import { RoutePath} from "@/shared/config/routeConfig";
import './styles.scss'

const NotesListPage: FC = () =>{
    const {data, isFetching} = useFetchNotesQuery()
    const navigate = useNavigate();
    return (
        <div>
            <div className={'inner'}>
                <div>List of all notes</div>
                <button onClick={() => navigate(RoutePath["add-note"])}>Create note</button>
            </div>
            {isFetching ? (
                <div>Загрузка...</div>
            ) : (
                <NotesTable notes={data}/>
            )}
        </div>
    )
}

export default NotesListPage;