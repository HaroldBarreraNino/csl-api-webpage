import { useState, useEffect } from "react";
import './DictionaryPage.css'; 
import DicionaryNavbar from "./DictionaryNavbar";

// Datos de ejemplo 
const DUMMY_DATA = [
    { 
        id: 1, 
        palabra: "Hola", 
        significadoAnimacion: "GIF de hola", 
        creadoEl: "2025-10-20", 
        ultimaModificacion: "2025-10-21" 
    },
    { 
        id: 2, 
        palabra: "Adiós", 
        significadoAnimacion: "GIF de adiós", 
        creadoEl: "2025-10-22", 
        ultimaModificacion: "2025-10-22" 
    },
    { 
        id: 3, 
        palabra: "Gracias", 
        significadoAnimacion: "GIF de gracias", 
        creadoEl: "2025-11-01", 
        ultimaModificacion: "2025-11-20" 
    },
];

const ApiTablePage = () => {

    const apiUrl = 'http://localhost:3000/api/palabras'; 
    
    const [palabras, setPalabras] = useState(DUMMY_DATA);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Lógica para simular la carga de datos de la API
    useEffect(() => {
        const fetchPalabras = async () => {
            setLoading(true);
            try {
                // *** ⚠️ Reemplaza esta línea con tu fetch real si tienes la endpoint ***
                // const response = await fetch(apiUrl);
                // if (!response.ok) throw new Error('Error al cargar los datos');
                // const data = await response.json();
                
                // setPalabras(data);

                // ** Simulación con un retardo para mostrar "Cargando..." **
                await new Promise(resolve => setTimeout(resolve, 500)); 
                setPalabras(DUMMY_DATA); 
                // *** ---------------------------------------------------- ***

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
        { label: "Autor", key: "creadoEl" } 
    ];

    return (
        <>
            <DicionaryNavbar />
            
            <div className="table-container">
                {loading && <p className="loading-text">Cargando datos...</p>}
                {error && <p className="error-text">Error: {error}</p>}

                {/* La tabla solo se muestra si no hay error y ya cargó */}
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
                                        <td>{item.palabra}</td>
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
        </>
    );
}

export default ApiTablePage;