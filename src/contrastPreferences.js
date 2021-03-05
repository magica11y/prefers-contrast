// @flow

const contrastPreferences: {|
  NO_PREFERENCE: string,
  MORE: string,
  LESS: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  MORE: 'more',
  LESS: 'less',
});

export type ContrastPreference = $Values<typeof contrastPreferences>;

export default contrastPreferences;
