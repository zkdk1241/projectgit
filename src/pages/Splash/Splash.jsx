import React from "react";
import ErrorMessage from "../../components/commons/errorMessage/ErrorMessage";
import ProfileImg from "../../components/commons/profileImg/ProfileImg";
import img from "../../img/ProfileImg.svg"

export default function Splash() {

  return (
    <>
      <div>Splash</div>
      <ErrorMessage>에러</ErrorMessage>
      <ProfileImg className="large" src={img} alt="이미지"/>
    </>
  );
}
