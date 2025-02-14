import * as React from "react";

const contextValue = {tenant: "RO", language: "EN"};
const TenantContext = React.createContext(contextValue)

export function useContextProvider() {
  return {contextValue, TenantContext};
}

export function useTenantContext() {
  const tenantContext = React.useContext(TenantContext);
  return {tenantContext};
}