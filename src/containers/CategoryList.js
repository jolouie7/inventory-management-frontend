import React, {useEffect, useState} from 'react'
import Category from "../components/Category";
import { Container, Row, Col } from 'react-bootstrap';

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://127.0.0.1:8000/inventory/category-list/"
      );
      response = await response.json();
      setCategories(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      <Container>
        <Row s={3}>
          {categories.map((cat, index) => (
            <Col key={index}>
              <Category name={cat.name} key={index} id={cat.id}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CategoryList
