import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { routeConfig } from "@/shared/config/routeConfig";
import type { AppLinks } from "@/shared/config/routeConfig";

const AppRouter = () => (
    <Suspense
        fallback={
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <MoonLoader />
            </div>
        }
    >
        <Routes>
            {routeConfig.map(({ path, element, children }) => {
                const validatedPath: AppLinks = path as AppLinks;
                return (
                    <Route
                        key={validatedPath}
                        path={validatedPath}
                        element={
                            <Suspense
                                fallback={
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100vh",
                                            width: "100%",
                                        }}
                                    >
                                        <MoonLoader />
                                    </div>
                                }
                            >
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        }
                    >
                        {children &&
                            children.map(({ path: childPath, element: childElement }) => {
                                const validatedChildPath: AppLinks = childPath as AppLinks;

                                return (
                                    <Route
                                        key={validatedChildPath}
                                        path={validatedChildPath}
                                        element={childElement}
                                    />
                                );
                            })}
                    </Route>
                );
            })}
        </Routes>
    </Suspense>
);

export default AppRouter;