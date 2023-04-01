/**
 * @author WMXPY
 * @namespace I18n
 * @description I18n
 */

import { LOCALE, SudooInternationalization } from "@sudoo/internationalization";
import { ENGLISH_UNITED_STATES } from "./profile/en-us";
import { PROFILE } from "./profile/profile";

export const internationalization: SudooInternationalization<PROFILE> = SudooInternationalization.create(LOCALE.ENGLISH_UNITED_STATES);

internationalization
    .merge(LOCALE.ENGLISH_UNITED_STATES, ENGLISH_UNITED_STATES);
