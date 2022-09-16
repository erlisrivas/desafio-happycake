import React from 'react'
import { Container } from "react-bootstrap";
import cake2 from "../componentes/cake2.png"

export default () => {
  return (
    <Container className="cnter text-center d-flex-column mt-5">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p> El lugar de los pasteles felices</p>
      <img className="pastel" src={cake2} alt="" width="140" height="120"/>
    </Container>
  );
};

