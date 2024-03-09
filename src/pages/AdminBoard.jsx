import React from 'react';
import axios from 'axios';

function AdminBoard() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  console.log(selectedFile);
  function handleFileChange(e) {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setSelectedFile(formData);
  }

  function uploadFile(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/product/upload', selectedFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="max-w-lg mx-auto min-h-[600px]">
      <h1>TESTING</h1>

      <form onSubmit={uploadFile}>
        <input
          type="file"
          onChange={(e) => handleFileChange(e)}
          name="image"
          id="image"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AdminBoard;
