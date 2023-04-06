/**
 * @author WMXPY
 * @namespace Routes
 * @description Exposure Key
 */

import { Button, Card, CenteredLayout, InputText } from "@barksh/bark-design-react";
import * as React from "react";
import { MdLockOpen } from "react-icons/md";

export const ExposureKeyView: React.FC = () => {

    const [loading, setLoading] = React.useState(false);

    const [exposureKey, setExposureKey] = React.useState('');

    const submitAction = async (): Promise<void> => {

        setLoading(true);
    };

    return (<CenteredLayout>
        <Card
            size="large"
            headerTitle="Exposure Key"
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
                Submit
            </Button>}
        >
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
