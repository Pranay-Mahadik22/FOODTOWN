import App from "../App";
import About from "./About";
import Body from "./Body";
import Cardcontainer from "./Cardcontainer";
import Contact from "./Contact";
import {createBrowserRouter} from "react-router-dom";
import CustomError from "./CustomError";
  
const Approuter = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      errorElement : <CustomError/>,
      children : [{
        path : "",
        element : <Body/>,
        errorElement : <CustomError/>
      },
      {
        path : "contact",
        element : <Contact/>
       // errorElement : <CustomError/>
      },
      {
        path : "about",
        element : <About/>
      //  errorElement : <CustomError/>
      }
    ]
    },

    {
        path : "/about",
        element : <About/>
    },
    {
        path : "/contact",
        element : <Contact/>
    }
])
export default Approuter