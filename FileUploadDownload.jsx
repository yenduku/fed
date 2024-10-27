import React, { useState } from 'react';
const FileUploadDownload = () => {
 const [file, setFile] = useState(null);
 // Function to handle file upload
 const handleFileUpload = (e) => {
 const uploadedFile = e.target.files[0];
 setFile(uploadedFile);
 };
 // Function to handle file download
 const handleFileDownload = () => {
 if (file) {
 const url = URL.createObjectURL(new Blob([file]));
 const link = document.createElement('a');
 link.href = url;
 link.setAttribute('download', file.name);
 document.body.appendChild(link);
 link.click();
 }
 };
 return (
 <div>
 <h2>File Upload and Download</h2>
 <input type="file" onChange={handleFileUpload} />
 <br />
 {file && (
 <div>
 <p>Uploaded File: {file.name}</p>
 <button onClick={handleFileDownload}>Download File</button>
 </div>
 )}
 </div>
 );
};
export default FileUploadDownload;