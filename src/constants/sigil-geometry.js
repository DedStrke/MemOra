/*
  Memora command sigil — geometry for viewBox 0 0 128 128, fill currentColor.

  Anatomy (matches the brand reference):
  - upper-left:    left wing sweeping outward-upward from the central spine
  - upper-right:   mirror-image right wing
  - central-point: the main downward terminal spike from the V-notch
  - v-notch:       the small inward wedge between the two wings
  - fragment:      detaches upward on XP / level-up events

  All paths use absolute coordinates. The central axis is x=64.
  Keeping all pieces separate makes per-part animation trivial.
*/
export const SIGIL = {
  /*
    Left wing: starts at the spine (~x=58,y=48), sweeps left-up to a sharp
    outer tip (~x=14,y=18), then returns along a narrower inner edge to
    where the V-notch begins (~x=52,y=72).
  */
  upperLeft:
    'M 58 48 L 14 18 L 22 44 L 50 62 L 54 72 Z',

  /*
    Right wing: exact mirror of upperLeft across x=64.
  */
  upperRight:
    'M 70 48 L 114 18 L 106 44 L 78 62 L 74 72 Z',

  /*
    Central downward spike: starts at the two V-notch anchor points
    (x=54,y=72 and x=74,y=72) and terminates at a sharp point (x=64,y=108).
    This is the signature vertical terminal of the sigil.
  */
  centralPoint:
    'M 54 72 L 64 108 L 74 72 L 64 78 Z',

  /*
    V-notch bridge: the small filled shape that joins the two wings at the
    centre and visually locks the form together. Sits above the spike.
  */
  vNotch:
    'M 52 62 L 64 70 L 76 62 L 64 56 Z',

  /*
    Level-up / XP fragment: a small angular shard that detaches from the
    top of the sigil on achievement events. Starts invisible; animated
    upward 8–10px and fades out. Sits near the apex of the left wing.
  */
  fragment:
    'M 60 24 L 52 14 L 64 20 Z',

  /*
    Legacy aliases kept so the SigilMark component can keep using .command /
    .sweep / .terminal while we migrate to the new named parts.
    Remove once SigilMark is fully updated.
  */
  command:
    'M 58 48 L 14 18 L 22 44 L 50 62 L 54 72 L 64 108 L 74 72 L 78 62 L 106 44 L 114 18 L 70 48 L 64 56 L 58 48 Z',
  sweep:
    'M 52 62 L 64 70 L 76 62 L 64 56 Z',
  terminal:
    'M 60 24 L 54 14 L 68 14 L 64 28 Z',
}
