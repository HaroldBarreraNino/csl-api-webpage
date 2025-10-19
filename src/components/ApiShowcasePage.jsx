import { useState } from "react";

const ApiShowcasePage = () => {

    const apiUrl = 'http://localhost:3000/api/palabras/'
    const [palabra, setPalabra] = useState("");
    const [gifUrl, setGifUrl] = useState(null);
    const [error, setError] = useState(null);

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

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Buscar palabra</h2>

                <input
                    type="text"
                    value={palabra}
                    onChange={(e) => setPalabra(e.target.value)}
                    placeholder="Escribe una palabra"
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                    }}
                />
                <button
                    onClick={traducirPalabra}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Buscar
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}

                {gifUrl && (
                    <div style={{ marginTop: "20px" }}>
                        <img
                            src={gifUrl}
                            alt="significado animado"
                            style={{ maxWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default ApiShowcasePage;