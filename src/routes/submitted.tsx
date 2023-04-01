/**
 * @author WMXPY
 * @namespace Routes
 * @description Submitted
 */

import { Callout, CenteredLayout } from "@barksh/bark-design-react";
import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { MdRocketLaunch } from "react-icons/md";
import { useFormat } from "../i18n/hook";
import { PROFILE } from "../i18n/profile/profile";

export const SubmittedView: React.FC = () => {

    const format: SudooFormat<PROFILE> = useFormat();

    return (<CenteredLayout>
        <Callout
            title={format.get(PROFILE.SUBMITTED_SUCCESSFULLY)}
            prefix={<MdRocketLaunch
                size={24}
            />}
            contentPadding
            size="large"
        >
            {format.get(PROFILE.SUBMITTED_SUCCESSFULLY_DESCRIPTION)}
        </Callout>
    </CenteredLayout>);
};
