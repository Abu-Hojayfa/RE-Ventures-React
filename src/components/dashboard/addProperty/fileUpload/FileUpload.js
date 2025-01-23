import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function FileUpload() {
    const [previewSrcList, setPreviewSrcList] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files) displayPreviews(files);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files) displayPreviews(files);
    };

    const displayPreviews = (files) => {
        const updatedPreviews = [...previewSrcList];

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                updatedPreviews.push(reader.result);
                if (updatedPreviews.length === previewSrcList.length + files.length) {
                    setPreviewSrcList(updatedPreviews);
                }
            };
        });
    };

    const handleDelete = (index) => {
        const updatedPreviews = previewSrcList.filter((_, i) => i !== index);
        setPreviewSrcList(updatedPreviews);
    };

    return (
        <div>
            {/* Upload Zone */}
            <div
                className={`w-full flex justify-center items-center h-[40vh] relative border-2 ${isDragOver ? "border-indigo-600" : "border-gray-300"
                    } border-dashed rounded-lg p-6`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                id="dropzone"
            >
                <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                    onChange={handleFileChange}
                    multiple
                />
                <div className="text-center">
                    <img
                        className="mx-auto h-12 w-12"
                        src="https://www.svgrepo.com/show/357902/image-upload.svg"
                        alt="Upload Icon"
                    />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                        <label htmlFor="file-upload" className="relative cursor-pointer">
                            <span>Drag and drop</span>
                            <span className="text-blue-600"> or browse</span>
                            <span> to upload</span>
                        </label>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>

            {/* Preview Section */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {previewSrcList.map((src, index) => (
                    <div key={index} className="relative group">
                        {/* Image Preview */}
                        <img
                            src={src}
                            alt={`Preview ${index}`}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        {/* Delete Button */}
                        <button
                            onClick={() => handleDelete(index)}
                            className="absolute top-1 right-1 bg-[#4D6EFF] text-white rounded-full p-1 text-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Delete"
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
