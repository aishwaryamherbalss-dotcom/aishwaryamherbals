import { useState, useRef } from "react";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 md:py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
            See How Our Products Are Used
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Simple, gentle herbal care for everyday use
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-sage/10 aspect-video">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/lovable-uploads/a6f60886-1197-452f-b145-4244fcef2dba.png"
              playsInline
              controls={isPlaying}
              onPause={handlePause}
              onEnded={handlePause}
            >
              {/* Replace this src with your actual video URL */}
              <source src="/product-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300 group cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/95 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            🌿 Handmade with care in Tamil Nadu
          </p>
        </div>
      </div>
    </section>
  );
};
