// @flow

import mockWindowMatchMedia from '@magica11y/cauldron/lib/testing/mockWindowMatchMedia';

import prefersContrast, { contrastPreferences, type ContrastPreference } from '../src';

describe('prefersContrast()', () => {
  it('returns a contrast preference when media-query matches', () => {
    type TestParameter = {|
      testInput: ContrastPreference,
      expectedOutput: ContrastPreference,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: contrastPreferences.NO_PREFERENCE,
        expectedOutput: 'no-preference',
      },
      {
        testInput: contrastPreferences.MORE,
        expectedOutput: 'more',
      },
      {
        testInput: contrastPreferences.LESS,
        expectedOutput: 'less',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(prefers-contrast: ${testParameter.testInput})`));

      const contrastPreference = prefersContrast();

      expect(contrastPreference).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const contrastPreference = prefersContrast();

    expect(contrastPreference).toEqual(null);
  });
});
