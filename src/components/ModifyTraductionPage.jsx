import './ModifyTraductionPage.css';
import ModifyTraductionNavbar from "./ModifyTraductionNavbar";

const ModifyTraductionPage = () => {
    return <>
        <ModifyTraductionNavbar />

        <form id="CslUploadForm" method="post" encType="multipart/form-data">
            <label htmlFor="fileInput">
                Select a file to upload:
                <input type="file" id="fileInput" name="file" />
            </label>
            <label>
                Meaning:
                <input type="text" name="meaning" />
            </label>
            <label>
                Author:
                <input type="text" name="author" />
            </label>

            <button type="submit">Submit Traduction</button>
        </form>
    </>;
};

export default ModifyTraductionPage;