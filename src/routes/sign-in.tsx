/**
 * @author WMXPY
 * @namespace Routes
 * @description Sign In
 */

import { Button, Card, CenteredLayout, InputText, LoadingContainerRectangle } from "@barksh/bark-design-react";
import { Portal, barkFinalizeV1 } from "@barksh/client-authenticator-browser";
import * as React from "react";
import { MdLockOpen } from "react-icons/md";
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

    return (<CenteredLayout>
        <Card
            size="large"
            headerTitle={`Sign-in`}
            loadingProvider={LoadingContainerRectangle}
            loading={loading}
            minWidth="min(512px, 100vw)"
            maxWidth="768px"
            actions={<Button
                prefix={<MdLockOpen
                    size={24}
                />}
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
                maximize
                value={accountIdentifier}
                onChange={(value: string) => {
                    setAccountIdentifier(value);
                }}
            />
            <InputText
                title="Password"
                placeholder="Password"
                maximize
                value={password}
                onChange={(value: string) => {
                    setPassword(value);
                }}
            />
        </Card>
    </CenteredLayout>);
};
