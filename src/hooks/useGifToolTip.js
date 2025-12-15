import { useState } from "react";
import { API_URL } from "../config/api.js";

export default function useGifToolTip() {
  const [gifUrl, setGifUrl] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const showGif = async(text, event) => {
    try {

      const rect = event.target.getBoundingClientRect();

      setPosition({
        top: rect.bottom + 10,
        left: rect.left,
      });

      const res = await fetch(`${API_URL}/palabras/texto/${text}`);
      const data = await res.json();
      console.log(data);

      setGifUrl(data.significadoAnimacion);
    } catch (err) {
      console.error('Error loading GIF: ', err);
      
    }
  }

  const hideGif = () => {
    setGifUrl('');
  }
  
  return {
    gifUrl,
    position,
    showGif,
    hideGif
  };

}
