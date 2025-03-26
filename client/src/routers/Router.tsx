import { Route, Routes } from "react-router"
import App from "../App"


const Router = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<>home</>} />
              </Route>
          </Routes>
    </div>
  )
}

export default Router