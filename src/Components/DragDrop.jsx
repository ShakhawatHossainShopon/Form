import React, { useState } from "react";

const SimpleDragDrop = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="border-2 border-dashed border-gray-400 p-8 text-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h4 className="font-bold">Drag and Drop a File Here</h4>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mt-2"
      />
      {file && <p className="mt-2">Selected file: {file.name}</p>}
    </div>
  );
};

export default SimpleDragDrop;
