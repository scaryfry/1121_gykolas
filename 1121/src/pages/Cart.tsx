import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { Table } from "react-bootstrap";

const Cart = () => {
    
  const [kosar, setKosar] = useState<Array<number>>(JSON.parse(localStorage.getItem("kosar") ?? "[]"));
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((response) => setPizzak(response.data)).catch(() => {"Sikertelen pizza betöltés!"})
  }, [])
  const [fizetendo, setFizetendo] = useState<number>();

    return(
        <Table striped bordered hover>
        <thead>
        <th>Név</th>
        <th>Ár</th>
        </thead>
        <tbody>
        {kosar.map(id => {
            const pizza = pizzak.find((p) => p.id == id);
            return (
                <tr>
                {pizza?.nev}
                {pizza?.ar}
                </tr>
            )
        })}
        </tbody>
        <tfoot>
        <td>{fizetendo} Ft</td>
        <td></td>
        </tfoot>
        </Table>
    )
}

export default Cart;