import React, { createContext, useContext, useMemo } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

// Create the context
const ResponsiveContext = createContext();

// Provider component
export const ResponsiveProvider = ({ children }) => {
    const isMobile = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false });
    const isTablet = useBreakpointValue({ base: false, sm: false, md: true, lg: true, xl: false });
    const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xl: true });

    // Memoize the values to optimize performance
    const value = useMemo(
        () => ({ isMobile, isTablet, isDesktop }),
        [isMobile, isTablet, isDesktop]
    );

    return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
};

// Custom hook to use the context
export const useResponsive = () => useContext(ResponsiveContext);
