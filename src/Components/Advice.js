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
    fetchAdvice = () => {
        this.setState({
            loading: true
        })
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    advice: json.slip.advice,
                    loading: false
                })
            })
    }

    getAdvice() {
        this.fetchAdvice();
    }

    render() {
        const { advice, loading } = this.state
        return (
            <div>
                <h1>Random Advice App</h1>
                <button onClick={() => this.getAdvice()}>Click</button>
                {/* <p>{advice}</p> */}
                <div>
                    {!loading ? <p>{advice}</p> : <Loader />}
                </div>
            </div>
        )
    }
}

export default Advice;