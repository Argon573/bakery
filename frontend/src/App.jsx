import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.jsx"

function App() {

  return (
      <BrowserRouter>
        <div className="h-full w-full relative">
            <Router />
        </div>
      </BrowserRouter>
  )
}

export default App
