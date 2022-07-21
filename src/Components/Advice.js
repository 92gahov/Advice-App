import { Component } from "react";
import Loader from "./Loader";

class Advice extends Component {
    constructor() {
        super();
        this.state = {
            advice: "",
            loading: false
        }
    }

    getAdvice = async () => {
        this.setState({
            loading: true
        })
        const response = await fetch("https://api.adviceslip.com/advice");
        const json = await response.json();
        this.setState({
            advice: json.slip.advice,
            loading: false
        })
    };

    render() {
        const { advice, loading } = this.state
        return (
            <div>
                <h1>Random Advice App</h1>
                <button onClick={() => this.getAdvice()}>Click</button>
                <div>
                    {!loading ? <p>{advice}</p> : <Loader />}
                </div>
            </div>
        )
    }
};

export default Advice;