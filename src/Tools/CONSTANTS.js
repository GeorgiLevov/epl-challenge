export const COLORS = {
  primary: "hsl(273deg 60% 22%)",
  primaryLight: "hsl(263deg 60% 50%)",
  white: "hsl(0deg 0%  100%)",
  red: "hsl(339deg 100% 50%)",
  green: "hsl(152deg 100% 50%)",
  blue: "hsl(183deg 100% 50%)",
  yellow: "hsl(55deg 100% 50%)",

  offwhite: "hsl(0 0% 96% / 1)",
  gray: "hsl(240deg 10% 50%)",
  transparentGray15: "hsl(240deg 10% 50% / 15%)",
  black: "hsl(0deg 0% 0%)",

};


export const SHADOWS = {
	boxshadowLight: "hsla(0, 0%, 0%, 0.1) 0 4px 12px",
	boxshadowPrimaryLight: "hsl(263deg 60% 50%) 0 4px 12px"
}


export const WEIGHTS = {
    normal: 500,
    medium: 600,
    bold: 800,
};

export const BREAKPOINTS = {
    phone: 600,
    tablet: 950,
    laptop: 1300,
};

export const QUERIES = {
    phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
