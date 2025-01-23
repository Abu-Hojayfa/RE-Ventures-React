import React from "react";

export default function Map({ latitude, longitude }) {
    const generateMapSrc = (lat, lng) => {
        return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus`;
    };

    const mapSrc = generateMapSrc(latitude, longitude);

    return (
        <div className="mt-6 rounded-3xl overflow-hidden">
            <div className="relative w-full h-96">
                <iframe
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-3xl"
                    src={mapSrc}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
}
