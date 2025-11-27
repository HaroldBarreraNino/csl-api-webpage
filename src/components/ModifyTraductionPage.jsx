import './ModifyTraductionPage.css';
import ModifyTraductionNavbar from "./ModifyTraductionNavbar";
import { useState } from 'react';
import { useParams } from "react-router-dom";

const ModifyTraductionPage = () => {

    const apiUrl = 'http://localhost:3000/api/palabras'
    
    const { id } = useParams();
    const [file,setFile] = useState(null);
    const [meaning,setMeaning] = useState('');

    const handleSubmit = async(e) => {
      e.preventDefault();
      let data;
      
      const formdata = new FormData();
      formdata.append('significadoAnimacion', file);
      formdata.append('palabra', meaning);
      
      try {
        
        if(id){

          const putResponse = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            body: formdata
          }); 

          if (putResponse.ok) {
            console.log('Traduccion Modificada');
            data = await putResponse.json();
            return;
          }
        }
        //Si el objeto no existe lo creamos
        const postResponse = await fetch(apiUrl, {
          method: 'POST',
          body: formdata
        }); 

        if (postResponse.ok) {
          console.log('Traduccion Creada');
          data = await postResponse.json();
          return;
        }
        console.log('Respuesta: ', data);

      } catch (error) {
        console.error(error) ;
      }
    }

    return <>
        <ModifyTraductionNavbar />

        <form id="CslUploadForm" onSubmit={handleSubmit}>

            <label htmlFor="fileInput">
                Select a file to upload:
                <input type="file" id="fileInput" name="file" onChange={(e) => setFile(e.target.files[0])}/>
            </label>
            <label>
                Meaning:
                <input type="text" name="meaning" onChange={(e) => setMeaning(e.target.value)}/>
            </label>

            <button type="submit">Submit Traduction</button>
        </form>
    </>;
};

export default ModifyTraductionPage;
