/**
 * @author WMXPY
 * @namespace Routes
 * @description Sign In
 */

import { barkFinalizeV1, Portal } from "@barksh/client-authenticator-browser";
import * as React from "react";

export const SignInView: React.FC = () => {

    const portal: Portal = Portal.getInstance();

    const [accountIdentifier, setAccountIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitAction = async (): Promise<void> => {

        barkFinalizeV1('http://localhost:4000',
            {
                exposureKey: portal.exposureKey,
                accountIdentifier,
                password,
            },
        );
    };

    return (<div>
        {portal.exposureKey}
        <br />
        <input
            type="text"
            placeholder="account identifier"
            value={accountIdentifier}
            onChange={(event) => {
                setAccountIdentifier(event.target.value);
            }}
        />
        <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
                setPassword(event.target.value);
            }}
        />
        <button
            onClick={() => {
                submitAction();
            }}
        >Sign-in</button>
    </div>);
};
