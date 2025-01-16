// @flow

const contrastPreferences: {|
  NO_PREFERENCE: string,
  MORE: string,
  LESS: string,
  CUSTOM: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  MORE: 'more',
  LESS: 'less',
  CUSTOM: 'custom',
});

export type ContrastPreference = $Values<typeof contrastPreferences>;

export default contrastPreferences;
