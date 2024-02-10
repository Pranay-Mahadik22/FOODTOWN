import Cardcontainer from "./Cardcontainer";
import Footer from "./Footer";
import { Fragment } from "react";
import React from "react";
const Body = () => {
    console.log("react",React);
    return(
    <Fragment>
            <Cardcontainer/>
            <Footer/>
    </Fragment>
    );
}

export default Body;