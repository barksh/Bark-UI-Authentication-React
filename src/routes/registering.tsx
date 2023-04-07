/**
 * @author WMXPY
 * @namespace Routes
 * @description Registering
 */

import { PostTouchV1ProxyResponse } from "@barksh/authentication-types";
import { CenteredLayout } from "@barksh/bark-design-react";
import { Portal, postTouchV1Proxy } from "@barksh/client-authenticator-browser";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { EnvironmentVariables } from "../util/environment";

export const RegisteringView: React.FC = () => {

    const navigate = useNavigate();

    const effect = async () => {

        try {

            if (!Portal.isRegistered()) {
                Portal.register();

                const portal: Portal = Portal.getInstance();
                const touchResult: PostTouchV1ProxyResponse = await postTouchV1Proxy(
                    EnvironmentVariables.moduleAuthenticationHost,
                    {
                        exposureKey: portal.exposureKey,
                    },
                );

                navigate("/sign-in", {
                    replace: true,
                    state: {
                        exposureKey: touchResult.exposureKey,
                        domain: touchResult.domain,
                    },
                });
            }
        } catch (err) {

            navigate("/error", {
                replace: true,
            });

            console.log(err);
        }
    };

    React.useEffect(() => {
        effect();
    }, []);

    return (<CenteredLayout>
        Registering
    </CenteredLayout>);
};
