/**
 * @author WMXPY
 * @namespace AuthenticationUI
 * @description Entry
 */

import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { memoryRouter } from "./routes";

export const EntryView: React.FC = () => {

    return (<RouterProvider
        router={memoryRouter}
    />);
};
