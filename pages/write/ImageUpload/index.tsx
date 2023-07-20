import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

interface ImageUploadProps {
  onChange: (file: File) => void;
  images: string[];
  onDelete: (index: number) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, images, onDelete }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onChange(file);
    }
  };

  const handleDefaultImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <BackgroundImg
        ref={inputRef}
        type="file"
        id="file"
        accept="image/jpg, image/jpeg, image/png"
        style={{ display: 'none' }}
        onChange={handleAddImages}
      />
      <BackgroundImgReal
        src="images/Camera.svg"
        width={420}
        height={300}
        alt="cat-hungry"
        onClick={handleDefaultImage}
      />
      {images.map((image, id) => (
        <UpImg key={id}>
          <Image src={image} alt={`${image}-${id}`} width={100} height={100} />
          <span onClick={() => onDelete(id)}>X</span>
        </UpImg>
      ))}
    </>
  );
};

const BackgroundImg = styled.input`
  background-size: cover;
  background-position: center;
  display: table;
  width: 100%;
  background-color: #666;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const BackgroundImgReal = styled.img`
  background-size: cover;
  background-color: #666;
  background-position: center;
  display: table;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const UpImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  ::before {
    content: '';
    position: absolute;
    background-color: rgba(30, 29, 41, 0.32);
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  span {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 140%;
    padding-left: 4.5px;
    background-color: rgba(30, 29, 41, 0.32);
    border-radius: 50%;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    outline: none;
    z-index: 20;
  }
`;

export default ImageUpload;
