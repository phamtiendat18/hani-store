import * as React from "react";

function ArticleImage({ src, alt, className }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={`object-contain ${className}`}
        />
    );
}

export default ArticleImage;