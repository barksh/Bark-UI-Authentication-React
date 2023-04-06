/**
 * @author WMXPY
 * @namespace AuthenticationUI
 * @description Routes
 */

import * as React from "react";
import { createMemoryRouter } from "react-router-dom";
import { ErrorView } from "./routes/error";
import { RegisteringView } from "./routes/registering";
import { SignInView } from "./routes/sign-in";
import { SubmittedView } from "./routes/submitted";
import { ExposureKeyView } from "./routes/exposure-key";

const routes = [
    {
        path: "/registering",
        element: <RegisteringView /> as React.ReactElement,
    },
    {
        path: "/sign-in",
        element: <SignInView /> as React.ReactElement,
    },
    {
        path: "/error",
        element: <ErrorView /> as React.ReactElement,
    },
    {
        path: "/exposure-key",
        element: <ExposureKeyView /> as React.ReactElement,
    },
    {
        path: "/submitted",
        element: <SubmittedView /> as React.ReactElement,
    },
];

export const memoryRouter = createMemoryRouter(routes, {

    initialEntries: ["/registering"],
    initialIndex: 0,
});
