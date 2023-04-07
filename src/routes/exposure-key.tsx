/**
 * @author WMXPY
 * @namespace Routes
 * @description Exposure Key
 */

import { PostTouchV1ProxyResponse } from "@barksh/authentication-types";
import { Button, Card, CenteredLayout, InputText, LoadingContainerRectangle, Spacing } from "@barksh/bark-design-react";
import { Portal, postTouchV1Proxy } from "@barksh/client-authenticator-browser";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdOutbound } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";
import { EnvironmentVariables } from "../util/environment";

export const ExposureKeyView: React.FC = () => {

    const navigate = useNavigate();

    const format: SudooFormat<PROFILE> = useFormat();

    const [loading, setLoading] = React.useState(false);

    const [exposureKey, setExposureKey] = React.useState('');
    const [exposureError, setExposureError] = React.useState('');

    const submitAction = async (): Promise<void> => {

        setLoading(true);

        try {

            const touchResult: PostTouchV1ProxyResponse = await postTouchV1Proxy(
                EnvironmentVariables.moduleAuthenticationHost,
                {
                    exposureKey,
                },
            );

            Portal.registerOverride(touchResult.exposureKey);

            navigate("/sign-in", {
                replace: true,
                state: {
                    exposureKey: touchResult.exposureKey,
                    domain: touchResult.domain,
                },
            });
        } catch (error) {

            setExposureError(format.get(PROFILE.MANUAL_INPUT_EXPOSURE_KEY_ERROR));

            setLoading(false);
        }
    };

    return (<CenteredLayout>
        <Card
            size="large"
            loadingProvider={LoadingContainerRectangle}
            loadingSize="regular"
            loading={loading}
            headerTitle={format.get(PROFILE.MANUAL_INPUT_EXPOSURE_KEY)}
            minWidth="min(512px, 100vw)"
            minHeight="min(256px, 100vh)"
            maxWidth="768px"
            actions={<Button
                prefix={<MdOutbound
                    size={24}
                />}
                onClick={() => {
                    submitAction();
                }}
            >
                Submit
            </Button>}
        >
            {format.get(PROFILE.MANUAL_INPUT_EXPOSURE_KEY_DESCRIPTION)}
            <Spacing
                size="large"
            />
            <InputText
                title="Exposure Key"
                placeholder="Exposure Key"
                error={exposureError}
                maximize
                value={exposureKey}
                onChange={(value: string) => {
                    setExposureKey(value);
                }}
            />
        </Card>
    </CenteredLayout>);
};
