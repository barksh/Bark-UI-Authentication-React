/**
 * @author WMXPY
 * @namespace Util
 * @description Environment
 */

export type Environment = {

    readonly moduleAuthenticationHost: string;
};

const env: any = (import.meta as any).env;

export const EnvironmentVariables: Environment = {

    moduleAuthenticationHost: env.VITE_MODULE_AUTHENTICATION_HOST,
};
