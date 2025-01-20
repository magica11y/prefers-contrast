// @flow

import mockWindowMatchMedia from '@magica11y/match-user-preference/lib/testing/mockWindowMatchMedia';

import prefersContrast, { contrastPreferences, type ContrastPreference } from '../src';

describe('prefersContrast()', () => {
  it.each`
    testInput                            | expectedOutput
    ${contrastPreferences.NO_PREFERENCE} | ${'no-preference'}
    ${contrastPreferences.MORE}          | ${'more'}
    ${contrastPreferences.LESS}          | ${'less'}
    ${contrastPreferences.CUSTOM}        | ${'custom'}
  `('returns contrast preference as "$expectedOutput"', ({ testInput, expectedOutput }) => {
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockWindowMatchMedia(true, `(prefers-contrast: ${testInput})`));

    const contrastPreference: ?ContrastPreference = prefersContrast();

    expect(contrastPreference).toEqual(expectedOutput);

    window.matchMedia.mockClear();
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const contrastPreference: ?ContrastPreference = prefersContrast();

    expect(contrastPreference).toEqual(null);

    window.matchMedia.mockClear();
  });
});
