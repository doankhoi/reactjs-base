import React from "react";
import { Button, Row, Col } from "antd";
import "./about.scss";

export const About: React.FC = () => {
  return (
    <Row>
      <Col span={24} className="content-center">
        <p>About Page</p>
        <Button type="primary">Click me!</Button>
      </Col>
    </Row>
  );
};

export default About;
