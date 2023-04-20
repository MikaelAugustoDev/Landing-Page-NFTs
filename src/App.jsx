import { createGlobalStyle } from "styled-components"
import { MainPrincipal } from "./components/MainPrincipal"
import { MainSecundary } from "./components/MainSecundary"
import { MainTercery } from "./components/MainTercery"
import { MainQuartenery } from "./components/MainQuaternery"
import { Footer } from "./components/Footer"

function App() {


  return (
    <>
      <GlobalStyles/>

      <MainPrincipal/>

      <MainSecundary/>

      <MainTercery/>

      <MainQuartenery/>

      <Footer/>

    </>
  )
}

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: #0e0e0e;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff5b50;
  }
`

export default App