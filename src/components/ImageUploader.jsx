// src/components/ImageUploader.jsx
import React from "react";

class ImageUploader extends React.Component {
  handleImageUpload = (event) => {
    const files = event.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      images.push(URL.createObjectURL(files[i]));
    }
    this.props.onUpload(images);
  };

  render() {
    return (
      <div>
        <input type="file" multiple onChange={this.handleImageUpload} />
      </div>
    );
  }
}

export default ImageUploader;
