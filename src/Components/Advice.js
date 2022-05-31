import { Component } from "react";

class Advice extends Component {
    constructor() {
        super();
        this.state = {
            advice: ""
        }
    }
    getAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    advice: json.slip.advice
                })
            })
    }
    render() {
        const { advice } = this.state
        return (
            <div>
                <h1>Random Advice App</h1>
                <button onClick={() => this.getAdvice()}>Click</button>
                <p>{advice}</p>
            </div>
        )
    }
}

export default Advice;