import React from "react";
import "././Assesmentreuse.css";

const Assesmentreuse = ({
  tag,
  title,
  highlight,
  description,
  buttonText,
  image,
  reverse = false,
}) => {
  return (
    <section className="assessment-section">
      <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
        
        {/* Left Content */}
        <div className="col-md-6 col-12 assessment-left">
          {tag && <span className="tag">{tag}</span>}

          {title && (
            <h2>
              {title.split(highlight).length > 1 ? (
                <>
                  {title.split(highlight)[0]}
                  <span className="highlight">{highlight}</span>
                  {title.split(highlight)[1]}
                </>
              ) : (
                title
              )}
            </h2>
          )}
          {description && <p>{description}</p>}
          {buttonText && <button className="demo-btn">{buttonText}</button>}
        </div>

        {/* Right Content (Image) */}
        <div className="col-md-6 col-12 text-center">
          {image && (
            <img
              src={image}
              alt="assessment-section"
              className="img-fluid assessment-image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Assesmentreuse;
