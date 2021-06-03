import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/nunito/800.css";
// import "@fontsource/nunito/700.css";
// import "@fontsource/nunito/600.css";
// import "@fontsource/nunito/400.css";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#0F0E17",
          color: "#FFFFFE"
        },
      },
    },
    // fonts: {
    //   heading: "Nunito",
    //   body: "Nunito",
    // },
    colors: {
      brand: {
        primary: "#FED941",
        secondary:"#A7A9BE",
        black: "#000000",
        black_1: "#111111",
        background: "#0F0E17",
        white: "#FFFFFE"
      }
    },
    textStyles: {
        h1: {
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "56px",
            letterSpacing: "0.15%",
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "58px",
            letterSpacing: "0.15%",
        },
        h3: {
            fontSize: "37px",
            fontWeight: 700,
            lineHeight: "37px"
        },
        h4: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "34px"
        },
        h5: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "26px"
        }
    },
  });

export default theme;