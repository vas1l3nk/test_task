import NotesListPage from '@/pages/NotesListPage';
import AddNotePage from "@/pages/AddNotePage";
import NoteDetailsPage from "@/pages/NoteDetailsPage";
import MainLayout from "@/app/layouts/MainLayout";
import FooterLayout from "@/app/layouts/FooterLayout";

export enum AppRoutes {
    NOTES_LIST = 'notes-list',
    ADD_NOTE = 'add-note',
    DETAILS_PAGE = 'details-page'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.NOTES_LIST]: '/test_task',
    [AppRoutes.ADD_NOTE]: '/test_task/add-note',
    [AppRoutes.DETAILS_PAGE]: '/test_task/note/:id'
}

export const routeConfig = [
    {
        path: RoutePath[AppRoutes.NOTES_LIST],
        element: <MainLayout />,
        children: [
            {
                path: RoutePath[AppRoutes.NOTES_LIST],
                element: <NotesListPage />
            },
            {
                path: RoutePath[AppRoutes.DETAILS_PAGE],
                element: <NoteDetailsPage />
            }
        ]
    },
    {
        path: RoutePath[AppRoutes.ADD_NOTE],
        element: <FooterLayout />,
        children: [
            {
                path: RoutePath[AppRoutes.ADD_NOTE],
                element: <AddNotePage/>
            }
        ]
    }
] as const


type ExtractPaths<T> = T extends { path: infer P, children?: infer C }
    ? C extends readonly any[]
        ? P | ExtractPaths<C[number]>
        : P
    : never;

export type AppLinks = ExtractPaths<typeof routeConfig[number]>;

