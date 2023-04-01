/**
 * @author WMXPY
 * @namespace Routes
 * @description Error
 */

import { Callout, CenteredLayout } from "@barksh/bark-design-react";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdError } from "react-icons/md";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";

export const ErrorView: React.FC = () => {

    const format: SudooFormat<PROFILE> = useFormat();

    return (<CenteredLayout>
        <Callout
            title={format.get(PROFILE.ERROR_NO_EXPOSURE_KEY)}
            prefix={<MdError
                size={24}
            />}
            contentPadding
            size="large"
        >
            {format.get(PROFILE.ERROR_NO_EXPOSURE_KEY_DESCRIPTION)}
        </Callout>
    </CenteredLayout>);
};
