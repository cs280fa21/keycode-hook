import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      location: "",
      which: "",
      code: "",
    };
  }

  componentDidMount = () => {
    document.body.addEventListener("keydown", this.onKeyDown);
  };

  onKeyDown = (event) => {
    this.setState({
      key: event.key,
      location: event.location,
      which: event.which,
      code: event.code,
    });
  };

  render() {
    const { key, location, which, code } = this.state;
    return (
      <Container className="p-3">
        <Header />
        <Row>
          <Card title={"event.key"} value={key} />
          <Card title={"event.location"} value={location} />
          <Card title={"event.which"} value={which} />
          <Card title={"event.code"} value={code} />
        </Row>
      </Container>
    );
  }
}

export default App;
