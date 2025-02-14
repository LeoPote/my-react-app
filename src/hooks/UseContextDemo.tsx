import {useTenantContext} from "./useContextProvider.ts";

export function UseContextDemo() {

  const tenantContext = useTenantContext();

  return (
    <>
      <div><h2>{tenantContext.tenantContext.language}</h2></div>
    </>
  );
}

