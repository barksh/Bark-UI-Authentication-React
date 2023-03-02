/**
 * @author WMXPY
 * @namespace Routes
 * @description Registering
 */

import { PostTouchV1ProxyResponse } from "@barksh/authentication-types";
import { Portal, postTouchV1Proxy } from "@barksh/client-authenticator-browser";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const RegisteringView: React.FC = () => {

    const navigate = useNavigate();

    const effect = async () => {

        try {
            if (!Portal.isRegistered()) {
                Portal.register();

                const portal: Portal = Portal.getInstance();
                const touchResult: PostTouchV1ProxyResponse = await postTouchV1Proxy(
                    'http://localhost:4000',
                    {
                        exposureKey: portal.exposureKey,
                    },
                );

                console.log(touchResult);

                navigate("/sign-in");
            }
        } catch (err) {

            navigate("/error");

            console.log(err);
        }
    };

    React.useEffect(() => {
        effect();
    }, []);

    return (<div>
        Registering
    </div>);
};
