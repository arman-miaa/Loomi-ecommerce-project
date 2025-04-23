import { Route, Routes } from "react-router"
import App from "../App"
import Home from "../pages/home/Home"
import CategoryPage from "../pages/category/CategoryPage"


const Router = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<App/>}>
          <Route index element={<Home />} />
          <Route path="/categories/:categoryName" element={<CategoryPage/>} />
              </Route>
          </Routes>
    </div>
  )
}

export default Router