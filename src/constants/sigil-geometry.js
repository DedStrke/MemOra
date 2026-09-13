/*
  Memora command sigil — geometry for viewBox 0 0 128 128, fill currentColor.

  Anatomy (redrawn to properly match the reference - spike pointing UP):
  - central-point: the main vertical spike pointing boldly UPWARDS in the center
  - upper-left:    left angular wing sweeping outward
  - upper-right:   right angular wing sweeping outward
  - v-notch:       the connecting geometry at the base
  - fragment:      detaches upward on XP / level-up events
*/
export const SIGIL = {
  /*
    Central upward spike: starts from the base/center and fires straight UP.
  */
  centralPoint:
    'M 64 12 L 72 44 L 68 52 L 64 64 L 60 52 L 56 44 Z',

  /*
    Left wing: sweeps out and up from the center base.
  */
  upperLeft:
    'M 56 60 L 16 36 L 28 64 L 48 84 L 56 72 Z',

  /*
    Right wing: exact mirror of upperLeft across x=64.
  */
  upperRight:
    'M 72 60 L 112 36 L 100 64 L 80 84 L 72 72 Z',

  /*
    Base / V-notch joining them.
  */
  vNotch:
    'M 48 84 L 64 108 L 80 84 L 64 92 Z',

  /*
    Level-up / XP fragment: small angular shard that detaches upward.
  */
  fragment:
    'M 64 0 L 70 8 L 58 8 Z',
}
