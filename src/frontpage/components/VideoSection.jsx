import { useInView } from "../../hooks/useInView";
import { YOUTUBE_VIDEO_ID } from "../../data/constants";

export default function VideoSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="video-section">
      <div className="video-container">
        <div ref={ref} className={`video-card ${visible ? "visible" : ""}`}>
          <div className="video-header">
            <div className="video-label">Video Tutorial</div>
            <h2 className="video-title">How to use eBOSS EBIS 4.0</h2>
            <p className="video-description">
              Watch this quick guide to understand the step-by-step online business permit application process.
            </p>
          </div>

          <div className="video-wrapper">
            <iframe
              className="video-iframe"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="eBOSS EBIS 4.0 Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}