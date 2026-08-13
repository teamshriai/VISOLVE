import { useEffect } from "react";

function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4 transition-opacity duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-[600px] bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Lab Interoperability Module
          </h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold leading-none p-1 transition-colors focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Modal Body / Responsive Video Iframe */}
        <div className="relative w-full aspect-[4/3] bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Us0qwUWUZI4?rel=0&autoplay=1"
            title="Lab Interoperability Module"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex justify-end px-4 py-2 bg-gray-50 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
