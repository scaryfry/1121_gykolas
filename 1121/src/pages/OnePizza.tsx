import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKENDURL } from "../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const OnePizza = () =>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        apiClient.get(`/pizzak/${id}`).then((response) => setPizza(response.data)).catch(() => toast.error("Nem sikerült feltölteni adattal!"))
    }, [id])

    const deletePizza = () =>{
        apiClient.delete(`/pizzak/${id}`).then(() => {toast.success("Sikeres törlés!"), navigate("/")}).catch(() => toast.error("Sikertelen törlés!"))
    }
    const editPizza = () => {
        navigate(`/edit-page/${id}`)
    }

  return (
    <>
      {pizza ? (
        <>
          <h1>{pizza.nev}</h1>
          <h2>{pizza.leiras}</h2>
          <img width={200} src={`${BACKENDURL}/kepek/${pizza.imageUrl}`} />
          <br />
          <button onClick={editPizza}>Szerkesztés</button>
          <button onClick={deletePizza}>Törlés</button>
        </>
      ) : (
        <>A pizza nem található!</>
      )}
    </>
  );
};

export default OnePizza;