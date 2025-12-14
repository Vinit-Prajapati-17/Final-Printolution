import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-wrapper">
        <div className="timeline-header">
          <h2 className="timeline-title">Portfolio Journey</h2>
          <p className="timeline-subtitle">
            Explore our creative process and the amazing projects we've delivered over the years.
          </p>
        </div>
      </div>

      <div ref={ref} className="timeline-content">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker-section">
              <div className="timeline-marker">
                <div className="timeline-marker-dot" />
              </div>
              <h3 className="timeline-section-title">
                {item.title}
              </h3>
            </div>

            <div className="timeline-content-section">
              <h3 className="timeline-mobile-title">
                {item.title}
              </h3>
              <div className="timeline-card">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          className="timeline-line"
          style={{ height: height + "px" }}
        >
          <motion.div
            className="timeline-progress"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
};