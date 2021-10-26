import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [state, setState] = useState({
    key: "",
    location: "",
    which: "",
    code: "",
  });

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = (event) => {
    setState({
      key: event.key,
      location: event.location,
      which: event.which,
      code: event.code,
    });
  };

  const { key, location, which, code } = state;

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

export default App;
