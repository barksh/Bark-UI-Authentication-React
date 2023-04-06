/**
 * @author WMXPY
 * @namespace Routes
 * @description Exposure Key
 */

import { PostTouchV1ProxyResponse } from "@barksh/authentication-types";
import { Button, Card, CenteredLayout, InputText, Spacing } from "@barksh/bark-design-react";
import { postTouchV1Proxy } from "@barksh/client-authenticator-browser";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdOutbound } from "react-icons/md";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";
import { EnvironmentVariables } from "../util/environment";

export const ExposureKeyView: React.FC = () => {

    const format: SudooFormat<PROFILE> = useFormat();

    const [loading, setLoading] = React.useState(false);

    const [exposureKey, setExposureKey] = React.useState('');

    const submitAction = async (): Promise<void> => {

        setLoading(true);

        const touchResult: PostTouchV1ProxyResponse = await postTouchV1Proxy(
            EnvironmentVariables.moduleAuthenticationHost,
            {
                exposureKey,
            },
        );

        console.log(touchResult);
    };

    return (<CenteredLayout>
        <Card
            size="large"
            headerTitle={format.get(PROFILE.MANUAL_INPUT_EXPOSURE_KEY)}
            minWidth="min(512px, 100vw)"
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
                maximize
                value={exposureKey}
                onChange={(value: string) => {
                    setExposureKey(value);
                }}
            />
        </Card>

        <br />
        {loading ? 'Loading...' : null}
    </CenteredLayout>);
};
