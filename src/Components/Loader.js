import React from "react";
import loader from "../Components/img/kOnzy.gif";

class Loader extends React.Component {
    render() {
        return (
            <div>
                <img className="loader" src={loader} alt=""></img>
            </div>
        )
    }
};

export default Loader;