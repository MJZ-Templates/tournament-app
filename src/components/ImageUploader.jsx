import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #007bff;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #007bff;
  background-color: white;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const ImageUploader = ({ onUpload }) => {
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    onUpload(images);
  };

  return (
    <UploadContainer>
      <Label htmlFor="file-upload">Click to Upload Images</Label>
      <HiddenInput
        id="file-upload"
        type="file"
        multiple
        onChange={handleImageUpload}
      />
    </UploadContainer>
  );
};

export default ImageUploader;
