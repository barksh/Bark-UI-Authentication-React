/**
 * @author WMXPY
 * @namespace I18n
 * @description Hook
 */

import { createUseFormat } from "@sudoo/internationalization-react";
import { internationalization } from "./i18n";

export const useFormat = createUseFormat(internationalization);
