/**
 * @author WMXPY
 * @namespace Routes
 * @description Error
 */

import { Button, Callout, CenteredLayout } from "@barksh/bark-design-react";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdError } from "react-icons/md";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";
import { useNavigate } from "react-router-dom";

export const ErrorView: React.FC = () => {

    const format: SudooFormat<PROFILE> = useFormat();

    const navigate = useNavigate();

    return (<CenteredLayout>
        <Callout
            title={format.get(PROFILE.ERROR_NO_EXPOSURE_KEY)}
            prefix={<MdError
                size={24}
            />}
            contentPadding
            size="large"
            actions={<Button
                size="small"
                onClick={() => {
                    navigate("/exposure-key", {
                        replace: true,
                    });
                }}
            >
                {format.get(PROFILE.MANUAL_INPUT_EXPOSURE_KEY)}
            </Button>}
        >
            {format.get(PROFILE.ERROR_NO_EXPOSURE_KEY_DESCRIPTION)}
        </Callout>
    </CenteredLayout>);
};
