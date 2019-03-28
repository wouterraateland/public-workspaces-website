import React, { createContext } from "react";
import { useSpaceControlsProvider } from "hooks/useSpaceControls";

const SpaceControlsContext = createContext(null);

export const SpaceControlsProvider = ({ children, ...otherProps }) => {
  const value = useSpaceControlsProvider(otherProps);
  return (
    <SpaceControlsContext.Provider value={value}>
      {children}
    </SpaceControlsContext.Provider>
  );
};

export default SpaceControlsContext;
