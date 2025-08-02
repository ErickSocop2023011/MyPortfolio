import { useState } from "react";
import { ImageModal } from "./ImageModal.jsx";

const photos = [
    "/photos/img1.jpg",
    "/photos/img2.jpg",
    "/photos/img3.jpg",
    "/photos/img4.jpg",
    "/photos/img5.jpg",
    "/photos/img6.jpg",
    ];

    export function PhotoGrid() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((src, index) => (
            <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
                onClick={() => setSelectedImg(src)}
            >
                <img src={src} alt={`photo-${index}`} className="w-full h-40 object-cover" />
            </div>
            ))}
        </div>
        {selectedImg && <ImageModal img={selectedImg} onClose={() => setSelectedImg(null)} />}
        </>
    );
}
