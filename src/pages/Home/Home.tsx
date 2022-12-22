import { Button, Col, Row } from "antd";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Row>
      <Col span={24} className="content-center">
        <p>Home Page</p>
        <Button type="primary">Click me!</Button>
      </Col>
    </Row>
  );
};

export default Home;
