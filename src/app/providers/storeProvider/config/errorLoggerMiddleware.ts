import {isRejectedWithValue, Middleware} from "@reduxjs/toolkit";

export const errorLoggerMiddleware: Middleware = () => (next) => (action) => {
    if(isRejectedWithValue(action) && action.payload){
        console.error(action.payload)
    }

    return next(action)
}