import { Document, Page } from 'react-pdf';

function Resume()
{
    return(
        
        <div>
            <h1>Resume</h1>
                <a href="/william-cv/Attatchments/Resume2023.pdf" target="_blank" rel="noopener noreferrer">view my resume</a>
                
                <Document file="/william-cv/Attatchments/Resume2023.pdf">
                    <Page pageNumber={1} />
                </Document>
        </div>
    );
}
export default Resume;