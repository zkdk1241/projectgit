import React, { useState } from "react";
import DataInput from "../../components/commons/dataInput/DataInput";
import UserInput from "../../components/commons/dataInput/UserInput";
import PostModal from "../../components/commons/postModal/PostModal";

export default function Splash() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={toggleModal}>Open Bottom Sheet</button>
      <PostModal isOpen={isOpen} onClose={toggleModal}>
        {/* Content of the bottom sheet */}
        <h1>Bottom Sheet Modal</h1>
        <p>This is the content of the bottom sheet.</p>
      </PostModal>
    </>
  );
}
