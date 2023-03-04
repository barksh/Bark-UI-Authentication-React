/**
 * @author WMXPY
 * @namespace Routes
 * @description Sign In
 */

import { barkFinalizeV1, Portal } from "@barksh/client-authenticator-browser";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { EnvironmentVariables } from "../util/environment";

export const SignInView: React.FC = () => {

    const navigate = useNavigate();

    const portal: Portal = Portal.getInstance();

    const [accountIdentifier, setAccountIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitAction = async (): Promise<void> => {

        await barkFinalizeV1(EnvironmentVariables.moduleAuthenticationHost,
            {
                exposureKey: portal.exposureKey,
                accountIdentifier,
                password,
            },
        );

        navigate("/submitted", {
            replace: true,
        });
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
