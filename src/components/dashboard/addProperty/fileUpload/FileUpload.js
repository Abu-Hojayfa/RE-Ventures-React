import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function FileUpload() {
    const [files, setFiles] = useState([]);
    const [uploadedUrls, setUploadedUrls] = useState([]);

    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        return <div className="bg-red-500 text-white p-4">Missing Cloudinary credentials in .env</div>;
    }

    const handleFileUpload = async (fieldName, file, metadata, load, error, progress, abort) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                const uploadedUrl = data.secure_url;
                setUploadedUrls((prev) => [...prev, uploadedUrl]);
                console.log("Uploaded URL:", uploadedUrl);
                load(uploadedUrl);
            } else {
                error(`Upload failed with status ${response.status}`);
            }
        } catch (err) {
            console.error("Upload error:", err);
            error("An error occurred while uploading.");
        }

        return () => abort();
    };

    return (
        <div className="FileUpload w-full">
            <div className="w-full min-h-10  max-w-lg mx-auto border-2 border-dashed border-gray-300 rounded-lg">
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    allowReorder={true}
                    server={{ process: handleFileUpload }}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
            </div>

            <div className="uploaded-urls mt-5">
                <h3 className="text-black mb-4">Uploaded Image URLs:</h3>
                <ul>
                    {uploadedUrls.map((url, index) => (
                        <li key={index} className="text-blue-500">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
