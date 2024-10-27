import React, { useState } from "react";

const ImageTable = () => {
  const [selectedImages] = useState([
    {
      id: 1,
      url: "https://www.cnet.com/a/img/resize/5981aebcd98b6c68f23a5a17d0804bd59e067eff/hub/2020/06/24/a2e48e09-5e07-4313-b4e8-0aed2e49071d/nikonf-davidt.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Image 1",
    },
    {
      id: 2,
      url: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?quality=85&w=1920",
      title: "Image 2",
    },
    {
      id: 3,
      url: "https://www.freedigitalphotos.net/images/previews/beautiful-child-having-breakfast-at-home-100339504.jpg",
      title: "Image 3",
    },
  ]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Image</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {selectedImages.map((image) => (
            <tr key={image.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {image.id}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                <img
                  src={image.url}
                  alt={image.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {image.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageTable;
