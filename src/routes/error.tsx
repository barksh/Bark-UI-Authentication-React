/**
 * @author WMXPY
 * @namespace Routes
 * @description Error
 */

import { Callout, CenteredLayout } from "@barksh/bark-design-react";
import * as React from "react";

export const ErrorView: React.FC = () => {

    return (<CenteredLayout>
        <Callout
            title="Error"
        >
            Error
        </Callout>
    </CenteredLayout>);
};
