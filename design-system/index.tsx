import Color from 'color';

function getColors() {
  const rawSolids = {
    white: Color.rgb(255, 255, 255),
    black: Color.rgb(0, 0, 0),
    transparent: Color.rgb(255, 255, 255).alpha(0),

    gray245: Color.rgb(245, 245, 245),
    gray235: Color.rgb(235, 235, 235),
    gray225: Color.rgb(225, 225, 225),
    gray215: Color.rgb(215, 215, 215),
    gray150: Color.rgb(150, 150, 150),
    gray125: Color.rgb(125, 125, 125),
    gray45: Color.rgb(45, 45, 45),

    // https://coolors.co/f1f2eb-d8dad3-a4c2a5-566246-4a4a48
    // alabaster: Color.rgb(241, 242, 235),
    // timberwolf: Color.rgb(216, 218, 211),
    // cambridgeBlue: Color.rgb(164, 194, 165),
    // ebony: Color.rgb(86, 98, 70),
    // davysGray: Color.rgb(74, 74, 72),
    // eerieBlack: Color.rgb(21, 21, 20),

    // https://coolors.co/fff2de-474448-2d232e-534b52-70a288
    oldLace: Color.rgb(255, 247, 234),
    raisinBlack: Color.rgb(45, 35, 46),
    mediumLiver: Color.rgb(83, 75, 82),
    darkLiver: Color.rgb(71, 68, 72),
    polishedPine: Color.rgb(112, 162, 136),
  };

  // @ts-ignore
  const solids: { [key in keyof typeof rawSolids]: string } = Object.entries(rawSolids).reduce(
    (acc, [key, value]) => {
      // @ts-ignore
      acc[key] = value.string();
      return acc;
    },
    {}
  );

  return Object.freeze({
    solids: {
      raw: rawSolids,
      ...solids,
    },
  });
}

function createFontStyle(type: 'light' | 'regular' | 'bold', fontSize: number, fontWeight: number) {
  return `
    font-family: ${type === 'bold' ? "'Playfair Display', serif" : "'Open-Sans', sans-serif"};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${1.1 * fontSize}px;
  `;
}

function getFonts() {
  return {
    light: {
      '100': createFontStyle('light', 12, 100),
      '200': createFontStyle('light', 16, 100),
      '300': createFontStyle('light', 20, 100),
      '400': createFontStyle('light', 24, 200),
      '500': createFontStyle('light', 28, 200),
      '600': createFontStyle('light', 32, 200),
      '700': createFontStyle('light', 36, 300),
      '800': createFontStyle('light', 40, 300),
      '900': createFontStyle('light', 44, 300),
    },
    regular: {
      '100': createFontStyle('regular', 12, 400),
      '200': createFontStyle('regular', 16, 400),
      '300': createFontStyle('regular', 20, 400),
      '400': createFontStyle('regular', 24, 400),
      '500': createFontStyle('regular', 28, 400),
      '600': createFontStyle('regular', 32, 500),
      '700': createFontStyle('regular', 36, 500),
      '800': createFontStyle('regular', 40, 500),
      '900': createFontStyle('regular', 44, 500),
    },
    bold: {
      '100': createFontStyle('bold', 12, 700),
      '200': createFontStyle('bold', 16, 700),
      '300': createFontStyle('bold', 20, 700),
      '400': createFontStyle('bold', 24, 700),
      '500': createFontStyle('bold', 28, 700),
      '600': createFontStyle('bold', 32, 700),
      '700': createFontStyle('bold', 36, 800),
      '800': createFontStyle('bold', 40, 800),
      '900': createFontStyle('bold', 44, 900),
    },
  } as const;
}

function getSpacing() {
  return {
    none: 0,
    hairline: 1,
    // sdfs
    xxxxSmall: 2,
    xxxSmall: 4,
    xxSmall: 8,
    xSmall: 16,
    small: 24,
    medium: 32,
    large: 36,
    xLarge: 42,
    xxLarge: 64,
    xxxLarge: 72,
    xxxxLarge: 120,
    invert(spacing: number) {
      return -1 * spacing;
    },
  } as const;
}

function getShadows() {
  return {
    inset100: `box-shadow: inset ${Spacing.xxxSmall}px ${Spacing.xxxSmall}px ${Spacing.xSmall}px ${Colors.solids.black};`,
    100: `box-shadow: ${Spacing.xxxSmall}px ${Spacing.xxxSmall}px ${Spacing.xSmall}px ${Colors.solids.raisinBlack};`,
    200: {},
    300: {},
  } as const;
}

export const Colors = getColors();
export const Fonts = getFonts();
export const Spacing = getSpacing();
export const Shadows = getShadows();
