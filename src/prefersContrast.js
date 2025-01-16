// @flow

import matchUserPreference from '@magica11y/match-user-preference';

import contrastPreferences, { type ContrastPreference } from './contrastPreferences';

const contrastPreferenceValues: Array<ContrastPreference> = [
  contrastPreferences.NO_PREFERENCE,
  contrastPreferences.MORE,
  contrastPreferences.LESS,
  contrastPreferences.CUSTOM,
];

/**
 * Detects user’s preferences for contrast
 * using CSS3 Media Queries level 5 specification for `'prefers-contrast'`.
 *
 * @returns Either 'no-preference', 'more', 'less' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-contrast
 */
const prefersContrast = (): ?ContrastPreference => {
  const matchedContrastPreference: ?ContrastPreference = contrastPreferenceValues.find(
    (contrastPreferenceValue: ContrastPreference) => matchUserPreference('prefers-contrast', contrastPreferenceValue),
  );

  if (matchedContrastPreference) {
    return matchedContrastPreference;
  }

  return null;
};

export default prefersContrast;
