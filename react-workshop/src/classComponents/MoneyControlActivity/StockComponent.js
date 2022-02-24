import { Component } from "react";
import Axios from "axios";
import DisplayDetails from "../src/components/MoneyControlActivity/Header";
// react-workshop\src\components\MoneyControlActivity\DisplayDetails.js

export default class NlcData extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            style : {width: '40%', 'margin-top': '40px', 'margin-right': '30px', float: 'right'}
        }
    }

    render() {
        return (
            <>
                <DisplayDetails data = {this.state.nlc} style={this.state.style}/>
            </>
        )
    }

    componentDidMount() {
        setInterval(this.getData, 1000);
    }

    getData() {
        Axios.get(this.props.url).then((response) => {
            this.setState({ 