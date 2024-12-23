import {configureStore} from "@reduxjs/toolkit";
import {rtkApi} from "@/shared/api/rtkApi";
import {errorLoggerMiddleware} from "@/app/providers/storeProvider/config/errorLoggerMiddleware";

export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath] : rtkApi.reducer
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({
        serializableCheck: {

        }
    }).concat(rtkApi.middleware, errorLoggerMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch