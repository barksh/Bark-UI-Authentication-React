/**
 * @author WMXPY
 * @namespace Routes
 * @description Sign In
 */

import { Button, Callout, Card, CenteredLayout, FlexLayout, InputText, LeadingStatic, LoadingContainerRectangle, Spacing } from "@barksh/bark-design-react";
import { Portal, barkFinalizeV1 } from "@barksh/client-authenticator-browser";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdApps, MdLockOpen } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";
import { EnvironmentVariables } from "../util/environment";

export const SignInView: React.FC = () => {

    const format: SudooFormat<PROFILE> = useFormat();

    const navigate = useNavigate();
    const location = useLocation();

    const portal: Portal = Portal.getInstance();

    const [loading, setLoading] = React.useState(false);

    const [accountIdentifier, setAccountIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [failed, setFailed] = React.useState(false);

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

            setLoading(false);
            setFailed(true);
        }
    };

    return (<CenteredLayout>
        <Card
            size="large"
            headerTitle={`Sign-in`}
            loadingProvider={LoadingContainerRectangle}
            loadingSize="regular"
            loading={loading}
            minWidth="min(512px, 100vw)"
            minHeight="min(256px, 100vh)"
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
            {failed ? <React.Fragment>
                <Callout
                    contentPadding
                    maximizeWidth
                >
                    {format.get(PROFILE.SIGN_IN_FAILED_DESCRIPTION)}
                </Callout>
                <Spacing />
            </React.Fragment> : null}
            <FlexLayout
                align="center"
                withGap
            >
                <LeadingStatic
                    size="small"
                >
                    <MdApps
                        size={24}
                    />
                </LeadingStatic>
                <div>
                    {location.state.domain}
                </div>
            </FlexLayout>
            <Spacing />
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
                type="password"
                maximize
                value={password}
                onChange={(value: string) => {
                    setPassword(value);
                }}
            />
        </Card>
    </CenteredLayout>);
};
