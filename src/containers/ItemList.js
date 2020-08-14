import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { Container, Row, Col } from "react-bootstrap";

const CategoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://127.0.0.1:8000/inventory/item-list/"
      );
      response = await response.json();
      setItems(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {items.map((item, index) => (
            <Col>
              <Item name={item.name} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryList;
