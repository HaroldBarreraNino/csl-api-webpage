import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './ApiShowcasePage.css';
import { API_URL } from "../config/api.js";

const ApiShowcasePage = () => {

    const apiUrl = `${API_URL}/palabras/texto/`
    const [palabra, setPalabra] = useState("");
    const [gifUrl, setGifUrl] = useState(null);
    const [error, setError] = useState(null);
    const [currentId, setCurrentId] = useState(null);

    const navigate = useNavigate();

    //Metodo principal de traduccion
    const traducirPalabra = async () => {
        try {
            setError(null);
            setGifUrl(null);

            const response = await fetch(apiUrl + palabra);

            //Mensaje generico de error
            if (!response.ok) {
                throw new Error('No se encontro la palabra')
            }

            //Convertimos la respuesta en un JSON y actualizamos la imagen
            const data = await response.json();
            setGifUrl(data.significadoAnimacion);
            setCurrentId(data.id);

        } catch (error) {
            setError(error.message)
        }
    }

    const goToModify = () => {
      if(!currentId){
        setError('Debes buscar una palabra antes de modificarla');
        return;
      }

      navigate(`/modify/${currentId}`);
    }

    return (
        <>
            <Navbar />
            <div className="api-container">
                <h2 className="api-title">Buscar palabra</h2>

                <div className="api-search-area">
                    <input
                        type="text"
                        value={palabra}
                        onChange={(e) => setPalabra(e.target.value)}
                        placeholder="Escribe una palabra"
                        className="api-input"
                    />

                    {/* <button onClick={traducirPalabra} className="api-button">
                        Translate
                    </button> */}
                </div>

                {error && <p className="api-error">{error}</p>}

                {gifUrl && (
                    <img src={gifUrl} alt="significado animado" className="api-image" />
                )}

                <div className="buttons-row">
                    <button onClick={traducirPalabra} className="api-button">Translate</button>
                    <button onClick={goToModify} className="btn-white">Modify traduction</button>
                </div>
            </div>
        </>
    );
}

export default ApiShowcasePage;
