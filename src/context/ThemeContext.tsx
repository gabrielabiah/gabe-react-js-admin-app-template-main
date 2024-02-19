import React, { createContext, useEffect, useState, useReducer } from "react";

export const ThemeContext = createContext({});
const reducer = (previousState: any, updatedState: any) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  sideBarStyle: { value: "full", label: "Full" },
  sidebarposition: { value: "fixed", label: "Fixed" },
  headerposition: { value: "fixed", label: "Fixed" },
  sidebarLayout: { value: "vertical", label: "Vertical" },
  primaryColor: "color_1",
  secondaryColor: "color_1",
  navigationHader: "color_2",
  haderColor: "color_1",
  sidebarColor: "color_2",
  background: { value: "light", label: "Light" },
  containerPositionSize: { value: "wide-boxed", label: "Wide Boxed" },
  iconHover: false,
  menuToggle: false,
  windowWidth: 0,
  windowHeight: 0,
};

const ThemeContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [sidebariconHover, setSidebariconHover] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    sideBarStyle,
    sidebarposition,
    headerposition,
    sidebarLayout,
    primaryColor,
    secondaryColor,
    navigationHader,
    haderColor,
    sidebarColor,
    background,
    containerPositionSize,
    iconHover,
    menuToggle,
    windowWidth,
    windowHeight,
  } = state;

  const body = document.querySelector("body");
  const ChangeIconSidebar = (value: any) => {
    if (sideBarStyle.value === "icon-hover") {
      if (value) {
        setSidebariconHover(true);
      } else {
        setSidebariconHover(false);
      }
    }
  };

  const openMenuToggle = () => {
    sideBarStyle.value === "overly"
      ? dispatch({ menuToggle: true })
      : dispatch({ menuToggle: false });
  };
  const changeBackground = (name: { value: string }) => {
    body?.setAttribute("data-theme-version", name.value);
    dispatch({ background: name });
  };

  useEffect(() => {
    const body = document.querySelector("body");
    let resizeWindow = () => {
      dispatch({ windowWidth: window.innerWidth });
      dispatch({ windowHeight: window.innerHeight });
      window.innerWidth >= 768 && window.innerWidth < 1024
        ? body?.setAttribute("data-sidebar-style", "mini")
        : window.innerWidth <= 768
        ? body?.setAttribute("data-sidebar-style", "overlay")
        : body?.setAttribute("data-sidebar-style", "full");
    };
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        body,
        sidebarposition,
        primaryColor,
        secondaryColor,
        navigationHader,
        windowWidth,
        windowHeight,
        sideBarStyle,
        headerposition,
        sidebarLayout,
        haderColor,
        sidebarColor,
        iconHover,
        ChangeIconSidebar,
        menuToggle,
        sidebariconHover,
        openMenuToggle,
        changeBackground,
        background,
        containerPositionSize,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
