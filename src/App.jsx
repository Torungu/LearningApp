import React, { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CustomInput from "./components/custom/CustomInput";
import CustomButton from "./components/custom/CustomButton";

function App() {
  const handleData = (data) => {
    console.log(data);
    return data;
  };
  // const handleImage = (data) => {
  //   console.log(data);
  // };
  const clickButton = () => {
    console.log("on");
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="container mx-auto py-5 items-center justify-between">
          <div className="flex flex-col w-1/2 gap-y-3">
            <CustomInput
              labelContent="Audio Transcription"
              id="audioTranscription"
              type="file"
              acceptFileType="audio"
              onFileChange={handleData}
            />
            <CustomButton handleOnClick={clickButton} />
          </div>
          <div className="flex flex-col w-1/2 gap-y-3">
            <CustomInput
              labelContent="Image Filtering"
              id="imageFiltering"
              type="file"
              acceptFileType="image"
              onFileChange={handleData}
            />
            <CustomButton handleOnClick={clickButton} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
