import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        // Get the full height including all content and margins
        const rect = ref.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(ref.current);
        const marginTop = parseInt(computedStyle.marginTop) || 0;
        const marginBottom = parseInt(computedStyle.marginBottom) || 0;
        const totalHeight = rect.height + marginTop + marginBottom;
        
        // Add extra height to ensure line extends through all content
        setTimelineHeight(totalHeight + 100);
      }
    };

    // Initial calculation
    updateHeight();
    
    // Recalculate after a short delay to ensure all content is rendered
    const timer = setTimeout(updateHeight, 100);
    
    window.addEventListener('resize', updateHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, [data]);

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
        
        {/* Simple Static Line - Extended Length */}
        <div 
          className="timeline-line" 
          style={{ 
            height: Math.max(timelineHeight, 800) + "px" // Ensure minimum height
          }}
        >
          {/* No progress bar, just the static line */}
        </div>
      </div>
    </div>
  );
};