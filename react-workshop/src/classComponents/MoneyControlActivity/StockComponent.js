import { Component } from "react";
import axios from "axios";
import DisplayDetails from "../../components/MoneyControlActivity/DisplayDetails";

export default class StockComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <>
        <DisplayDetails data={this.state.data} style={this.props.style} />
      </>
    );
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 1000);
  }

  getData = () => {
    axios.get(this.props.url).then((response) => {
      this.setState({ data: response.data.data });
      console.log(this.state.data);
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
