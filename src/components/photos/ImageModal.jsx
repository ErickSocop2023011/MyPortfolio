export function ImageModal({ img, onClose }) {
    return (
        <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
        >
        <img
            src={img}
            alt="zoom"
            className="max-w-full max-h-[80vh] rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
        />
        </div>
    );
}
