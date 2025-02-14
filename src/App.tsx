import './App.css'
import {useContextProvider} from "./hooks/useContextProvider.ts";
import {CarouselAntd} from "./hooks/CarouserAntd.tsx";

function App() {

  const {contextValue, TenantContext} = useContextProvider();

  return (
    <TenantContext.Provider value={contextValue}>
      <CarouselAntd />
    </TenantContext.Provider>
  )
}

export default App

