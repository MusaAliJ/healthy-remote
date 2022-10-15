import { createTheme } from "@material-ui/core/styles"
import customBlack from "./color/customBlack"
import customOrange from "./color/customOrange"
import { grey } from "@material-ui/core/colors"

export const createMaterialTheme = function (color = customOrange[500]) {
  const primaryColor = color
  const secondaryColor = customOrange[300]
  const secondaryBlack = customBlack[500]

  return createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: "#fff"
      },
      secondary: {
        main: secondaryBlack
      },
      captionText: {
        color: customBlack[400]
      },
      errorBar: {
        border: "#FF4D4E",
        color: "#FF4D4E"
      },
      border: {
        color: grey[100]
      },
      common: {
        white: "white"
      }
    },
    primaryButton: {
      color: "white",
      borderRadius: 20
    },
    typography: {
      fontFamily: "'Nunito'",
      fontWeight: 400,
      allVariants: {
        color: customBlack[500]
      },
      h2: {
        fontWeight: 700,
        fontSize: 32
      },
      h5: {
        fontWeight: 700,
        fontSize: 18
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: 600
      },
      h3: {
        fontSize: 24,
        fontWeight: 600
      },
      h4: {
        fontSize: 20,
        fontWeight: 700
      }
    },
    links: {
      textDecoration: "none",
      color: color
    },
    overrides: {
      MuiRadio: {
        colorPrimary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: primaryColor
          }
        },
        colorSecondary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: secondaryColor
          }
        }
      },
      MuiCheckbox: {
        colorPrimary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: primaryColor
          }
        },
        colorSecondary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: secondaryColor
          }
        }
      },
      MuiSwitch: {
        switchBase: {
          // Controls default/unchecked color for the thumb
          color: primaryColor
        },
        colorSecondary: {
          color: customBlack[200],
          "&$checked": {
            // Controls checked color for the thumb
            color: primaryColor
          }
        },
        track: {
          // Controls default/unchecked color for the track
          opacity: 0.3,
          backgroundColor: customBlack[200],
          "$checked$checked + &": {
            // Controls checked color for the track
            opacity: 0.5,
            backgroundColor: primaryColor
          }
        }
      },
      MuiButton: {
        root: {
          letterSpacing: 2,
          fontWeight: 700
        },
        outlinedPrimary: {
          color: primaryColor,
          background: "white",
          border: `1px solid ${primaryColor}`
        },
        outlinedSecondary: {
          color: secondaryBlack,
          background: "white",
          border: `1px solid ${secondaryBlack}`
        },
        contained: {
          color: "white"
        },
        containedPrimary: {
          background: primaryColor
        },
        containedSecondary: {
          background: secondaryBlack
        }
      },
      MuiTab: {
        root: {
          color: primaryColor,
          fontWeight: 700
        }
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 16
        }
      }
    },
    snackBar: {
      color: "#FFFFFF",
      error: {
        background: "#FF4D4E"
      }
    },
    custom: {
      white: "#FFFFFF",
      lightgrey: "#969696",
      whiteGrey: "#EFEFEF",
      blueGrey: "#353c53",
      grey: "#DDDDDD",
      darkGrey: "#F4F4F4",
      blue: "#385ab5",
      bgGrey: "#F6F9FE",
      inactiveGrey: "#808080",
      red: "#f44336",
      green: "#00D100",
      normalGrey: "#Eef2f5"
    }
  })
}
