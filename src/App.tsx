import { Route, Routes } from "react-router"
import { Layout } from "./components/Layout/Layout"
import { links } from "./constant/links"
import { HomePage } from "./components/page/HomePage/HomePage"

function App() {
  return (
    <Routes>
      <Route path={links.home} element={<Layout />}>
        <Route index element={<HomePage/>}/>

      </Route>
    </Routes>
  )
}

export default App
