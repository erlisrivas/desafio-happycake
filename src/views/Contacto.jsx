import React from 'react'
import { Container } from "react-bootstrap";

import Contacto from "../componentes/Contacto"

export default () => {
  return (
    <Container className=" cnter d-flex-column justify-content-center mt-5 pt-5">
      <h1 className="mb-4">Cuentanos, ¿En que te podemos ayudar?</h1>
      <Contacto />
    </Container>
  )
};

