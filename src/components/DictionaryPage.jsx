import { useState, useEffect } from "react";
import './DictionaryPage.css'; 
import DicionaryNavbar from "./DictionaryNavbar";
import { API_URL } from "../config/api.js";
import Footer from './Footer.jsx';

const ApiTablePage = () => {

    const apiUrl = `${API_URL}/palabras`; 
    
    const [palabras, setPalabras] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Lógica para simular la carga de datos de la API
    useEffect(() => {
        const fetchPalabras = async () => {
            setLoading(true);
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Error al cargar los datos');
                const data = await response.json();
                setPalabras(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPalabras();
    }, []);

    const headers = [
        { label: "Traduccion", key: "palabra" },
        { label: "Texto", key: "significadoAnimacion" }, 
        { label: "Modificado por ultima vez", key: "ultimaModificacion" },
        { label: "Creado el", key: "creadoEl" } 
    ];

    return (
        <>
            <DicionaryNavbar />
            
            <div className="table-container">
                {loading && <p className="loading-text">Cargando datos...</p>}
                {error && <p className="error-text">Error: {error}</p>}

                {!loading && !error && (
                    <div className="responsive-table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    {headers.map((header) => (
                                        <th key={header.key}>{header.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {palabras.map((item) => (
                                    <tr key={item.id}>
                                        <td><div className="gif-cell"><img src={item.significadoAnimacion} alt={item.palabra} loading="lazy"/></div></td>
                                        <td>{item.palabra}</td> 
                                        <td>{item.ultimaModificacion}</td>
                                        <td>{item.creadoEl}</td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
          <Footer />
        </>
    );
}

export default ApiTablePage;
