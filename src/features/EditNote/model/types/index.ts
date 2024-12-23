export type EditNoteArgs = {
    id: number;
    body: EditNoteBody
}

export type EditNoteBody = {
    title?: string;
    completed?: boolean;
}
