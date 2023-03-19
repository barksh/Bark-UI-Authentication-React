/**
 * @author WMXPY
 * @namespace Routes
 * @description Sign In
 */

import { Button, Card, InputText } from "@barksh/bark-design-react";
import { barkFinalizeV1, Portal } from "@barksh/client-authenticator-browser";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { EnvironmentVariables } from "../util/environment";

export const SignInView: React.FC = () => {

    const navigate = useNavigate();

    const portal: Portal = Portal.getInstance();

    const [loading, setLoading] = React.useState(false);

    const [accountIdentifier, setAccountIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitAction = async (): Promise<void> => {

        setLoading(true);

        try {
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
        } catch (error) {

            console.log(error);
            setLoading(false);
        }
    };

    return (<div>
        {portal.exposureKey}
        <br />
        <Card
            actions={<Button
                onClick={() => {
                    submitAction();
                }}
            >
                Sign-in
            </Button>}
        >
            <InputText
                title="Account Identifier"
                placeholder="Account Identifier"
                value={accountIdentifier}
                onChange={(value: string) => {
                    setAccountIdentifier(value);
                }}
            />
            <InputText
                title="Password"
                placeholder="Password"
                value={password}
                onChange={(value: string) => {
                    setPassword(value);
                }}
            />
        </Card>

        <br />
        {loading ? 'Loading...' : null}
    </div>);
};
