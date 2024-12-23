import {Note} from "@/entities/Note/model/types";
import {rtkApi} from "@/shared/api/rtkApi";
import {EditNoteArgs} from "@/features/EditNote/model/types";
import {DeleteNoteArgs} from "@/features/DeleteNote/model/types";
import {AddNoteArgs} from "@/features/AddNote/model/types";

const noteApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchNotes: build.query<Note[], void>({
            query: () => ({
                url: `/todos`,
                method: 'GET',
            }),
            providesTags: ['Note']
        }),
        editNote: build.mutation<void, EditNoteArgs>({
            query: ({id, body}) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                body: body
            }),
        }),
        deleteNote: build.mutation<void, DeleteNoteArgs>({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
        }),
        getNoteById: build.query<void, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'GET',
            }),
        }),
        createNote: build.mutation<Note[], AddNoteArgs>({
            query: (body) => ({
                url: `/todos`,
                method: 'POST',
                body: body
            }),
        }),
    }),
});

export const useFetchNotesQuery = noteApi.useFetchNotesQuery;
export const useEditNoteMutation = noteApi.useEditNoteMutation;
export const useDeleteNoteMutation = noteApi.useDeleteNoteMutation;
export const useCreateNoteMutation = noteApi.useCreateNoteMutation
