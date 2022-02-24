import { Component } from "react";
import Axios from "axios";
import DisplayDetails from "../../components/MoneyControlActivity/Header";


export default class StockComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            style : {width: '40%', marginTop: '40px', marginRight: '30px', float: 'right'}
        }
    }

    render() {
        return (
            <>
                <DisplayDetails data = {this.state.data} style={this.state.style}/>
            </>
        )
    }

    componentDidMount() {
        setInterval(this.getData, 1000);
    }

    getData() {
        Axios.get(this.props.url).then((response) => {
            this.setState({ data: response.data.data })
            console.log(this.state.data)
        });
    }
}