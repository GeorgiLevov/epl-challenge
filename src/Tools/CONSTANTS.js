export const COLORS = {
  primary: "hsl(273deg 60% 22%)",
  primaryLight: "hsl(263deg 60% 50%)",

	transparent: "hsl(0deg 0% 100% / 0%)",
  white: "hsl(0deg 0%  100%)",
  red: "hsl(339deg 100% 50%)",
  green: "hsl(152deg 100% 50%)",
  blue: "hsl(184deg 100% 51%)",
  yellow: "hsl(65deg 100% 50%)",
	
	shadowColor: `0deg 0% 49%`,
  offwhite: "hsl(0 0% 96% / 1)",
  gray: "hsl(240deg 10% 50%)",
  transparentGray15: "hsl(240deg 10% 50% / 15%)",
  black: "hsl(0deg 0% 0%)",

	AVL_primary: "#95BFE5",
	AVL_secondary: "#670E36",
  EVE_primary: "#003399",
	EVE_secondary: "#FFFFFF",
  BOU_primary: "#B50E12",
	BOU_secondary: "#000000",
  BHA_primary: "0057B8",
  BHA_secondary: "#FFCD00",
  ARS_primary: "#DB0007",
  ARS_secondary: "#9C824A",
  LUT_primary: "#F78E1E",
  LUT_secondary: "#002D62",
  MUN_primary: "#DA291C",
  MUN_secondary: "#FBE122",
  CRY_primary: "#1B458F",
  CRY_secondary: "#A7A5A6",
  NEW_primary: "#241F20",
  NEW_secondary: "#F1BE48",
  BUR_primary: "#6C1D45",
  BUR_secondary: "#99D6EA",
  WHU_primary: "#7A263A",
  WHU_secondary: "#1BB1E7",
  SHU_primary: "#EE2737",
  SHU_secondary: "#000000",
  WOL_primary: "#FDB913",
  WOL_secondary: "#231F20",
  MCI_primary: "#6CABDD",
  MCI_secondary: "#FFC659",
  TOT_primary: "#132257",
  TOT_secondary: "#FFFFFF",
  LIV_primary: "#C8102E",
  LIV_secondary: "#00B2A9",
  NFO_primary: "#EB0024",
  NFO_secondary: "#FFFFFF",
  BRE_primary: "#E30613",
  BRE_secondary: "#FBB800",
  FUL_primary: "#000000",
  FUL_secondary: "#CC0000",
  CHE_primary: "#034694",
  CHE_secondary: "#EE242C",
};

export const SHADOWS = {
	boxshadowLight: "hsla(0, 0%, 0%, 0.1) 0 4px 12px",
	boxshadowPrimaryLight: "hsl(263deg 60% 50%) 0 4px 12px",
  shadowElevationLow: `0.3px 0.5px 0.7px hsl(${COLORS.shadowColor} / 0.34), 0.4px 0.8px 1px -1.2px hsl(${COLORS.shadowColor} / 0.34), 1px 2px 2.5px -2.5px hsl(${COLORS.shadowColor} / 0.34)`,
  shadowElevationMedium: ` 0.3px 0.5px 0.7px hsl(${COLORS.shadowColor} / 0.36), 0.8px 1.6px 2px -0.8px hsl(${COLORS.shadowColor} / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(${COLORS.shadowColor} / 0.36), 5px 10px 12.6px -2.5px hsl(${COLORS.shadowColor} / 0.36)`, 
	shadowElevationHigh:` 0.3px 0.5px 0.7px hsl(${COLORS.shadowColor} / 0.34), 1.5px 2.9px 3.7px -0.4px hsl(${COLORS.shadowColor} / 0.34), 2.7px 5.4px 6.8px -0.7px hsl(${COLORS.shadowColor} / 0.34), 4.5px 8.9px 11.2px -1.1px hsl(${COLORS.shadowColor} / 0.34), 7.1px 14.3px 18px -1.4px hsl(${COLORS.shadowColor} / 0.34), 11.2px 22.3px 28.1px -1.8px hsl(${COLORS.shadowColor} / 0.34), 17px 33.9px 42.7px -2.1px hsl(${COLORS.shadowColor} / 0.34), 25px 50px 62.9px -2.5px hsl(${COLORS.shadowColor} / 0.34)`
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


export const MATCHGRADIENTS = {
	manutdWolves: `linear-gradient(
  90deg,
  hsl(0deg 100% 50%) 1%,
  hsl(0deg 100% 45%) 32%,
  hsl(0deg 100% 41%) 40%,
  hsl(0deg 100% 36%) 45%,
  hsl(0deg 100% 32%) 48%,
  hsl(0deg 100% 27%) 50%,
  hsl(0deg 100% 23%) 51%,
  hsl(0deg 100% 18%) 51%,
  hsl(0deg 100% 14%) 51%,
  hsl(0deg 100% 9%) 51%,
  hsl(0deg 100% 5%) 50%,
  hsl(0deg 0% 0%) 50%,
  hsl(240deg 100% 5%) 50%,
  hsl(239deg 100% 9%) 49%,
  hsl(239deg 100% 14%) 49%,
  hsl(239deg 100% 18%) 49%,
  hsl(239deg 100% 23%) 49%,
  hsl(239deg 100% 27%) 50%,
  hsl(239deg 100% 32%) 52%,
  hsl(239deg 100% 36%) 55%,
  hsl(239deg 100% 41%) 60%,
  hsl(239deg 100% 45%) 68%,
  hsl(239deg 100% 50%) 99%
)`,

}