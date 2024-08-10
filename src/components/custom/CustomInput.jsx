import React, { useState } from "react";
//Dua file len Apps, de xu ly
const CustomInput = ({
  labelContent,
  id,
  type,
  acceptFileType,
  onFileChange,
}) => {
  const [preview, setPreview] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith(`${acceptFileType}/`)) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onFileChange(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview("");
      onFileChange(null);
    }
  };
  return (
    <div className="flex flex-col w-1/2">
      <label className="block text-gray-700 text-xl font-bold mb-2">
        {labelContent}
      </label>
      <input
        type={type}
        id={id}
        accept={`${acceptFileType}/*`}
        onChange={handleFileChange}
      />
      {acceptFileType == "image"
        ? preview && <img src={preview} alt="Preview" className="mt-2 w-full" />
        : preview && (
            <audio controls className="mt-2 w-full">
              <source src={preview} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          )}
    </div>
  );
};

export default CustomInput;
