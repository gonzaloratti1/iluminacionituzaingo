import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Container } from "@mui/system";
import {
  FormControl,
  Input,
  FormHelperText,
  Typography,
  Button,
  FormGroup,
} from "@mui/material";
import { Form } from "react-bootstrap";


const CartForm = () => {
  const { totalPrice, cartList } = useContext(CartContext);
  const [data, seData] = useState({
    name: "",
    phone: "",
    email: "",
    adress: "",
    city: "",
  });

  const createOrder = async (e) => {
    e.preventDefault();
    const date = () => {
      let fecha = new Date();
      return (
        fecha.getDate() +
        "/" +
        (fecha.getMonth() + 1) +
        "/" +
        fecha.getFullYear()
      );
    };
    let order = {};
    order.buyer = data;
    order.total = totalPrice();
    order.items = cartList.map((cartItem) => {
      let id = cartItem.id;
      let name = cartItem.name;
      let item = cartItem.cost;
      return { id, name, item };
    });
    order.date = date();
    const db = getFirestore();
    const queryCollectionSet = collection(db, "orders");
    addDoc(queryCollectionSet, order)
      .then((resp) => {
        alert(`Tu envio esta en camino. Numero de orden: ${resp.id}`);
        window.location = "/";
      })
      .catch((err) => console.error(err))
      .finally(() => console.log("Orden completada"));
  };
  const handleChange = (e) => {
    seData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Form onSubmit={createOrder}>
        <FormGroup
          sx={{ marginTop: 10, marginLeft: 10 }}
        >
          <Typography variant="h3" sx={{ marginLeft: 40, marginBottom: 5 }}>
            Datos de contacto
          </Typography>

          <FormControl>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Nombre Completo"
              value={data.name}
              onChange={handleChange}
              sx={{ marginBottom: 1 }}
            ></Input>
            <FormHelperText id="name-helper" sx={{ marginBottom: 1 }}>
              Nombre y Apellido
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Input
              id="phone"
              type="number"
              name="phone"
              required
              placeholder="Telefono"
              value={data.phone}
              onChange={handleChange}
              sx={{ marginBottom: 1 }}
            ></Input>
            <FormHelperText id="phone-helper" sx={{ marginBottom: 1 }}>
              Numero de Telefono
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              sx={{ marginBottom: 1 }}
            ></Input>
            <FormHelperText id="email-helper" sx={{ marginBottom: 1 }}>
              Tu email personal
            </FormHelperText>
          </FormControl>

          <Typography variant="h3" sx={{ marginLeft: 40, marginBottom: 5 }}>
            Datos de envio
          </Typography>

          <FormControl>
            <Input
              id="adress"
              type="text"
              name="adress"
              placeholder="Direccion"
              value={data.adress}
              onChange={handleChange}
              sx={{ marginBottom: 1 }}
            ></Input>
            <FormHelperText id="adress-helper" sx={{ marginBottom: 1 }}>
              Calle y altura
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Input
              id="city"
              type="text"
              name="city"
              placeholder="Ciudad"
              value={data.city}
              onChange={handleChange}
              sx={{ marginBottom: 1 }}
            ></Input>
            <FormHelperText id="city-helper" sx={{ marginBottom: 1 }}>
              Ciudad o localidad
            </FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            type="submit"
          >
            Confirmar
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};
export default CartForm;
