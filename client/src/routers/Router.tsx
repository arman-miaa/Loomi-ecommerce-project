import { Route, Routes } from "react-router"
import App from "../App"
import Home from "../pages/home/Home"


const Router = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Home/>} />
              </Route>
          </Routes>
    </div>
  )
}

export default Router