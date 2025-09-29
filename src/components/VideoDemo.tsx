import React, { useRef, useState } from 'react';

interface VideoDemoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const VideoDemo: React.FC<VideoDemoProps> = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`video-demo ${className}`}>
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          poster={poster}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
        >
          <source src={src} type="video/webm" />
          <source src={src.replace('.webm', '.mov')} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        
        {!controls && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-4 transition-all duration-200"
            >
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
      
      {duration > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      )}
    </div>
  );
};

// Example usage component
export const VideoShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">High Quality Demo</h2>
        <VideoDemo 
          src="/demo.webm" 
          poster="/placeholder.svg"
          className="max-w-4xl"
        />
        <p className="text-sm text-gray-600 mt-2">
          1280×720, 30fps, 860KB - Optimized for desktop viewing
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Mobile Optimized</h2>
        <VideoDemo 
          src="/demo-small.webm" 
          poster="/placeholder.svg"
          className="max-w-2xl"
        />
        <p className="text-sm text-gray-600 mt-2">
          854×480, 24fps, 406KB - Optimized for mobile devices
        </p>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">With Audio</h2>
        <VideoDemo 
          src="/demo-with-audio.webm" 
          poster="/placeholder.svg"
          className="max-w-4xl"
          muted={false}
        />
        <p className="text-sm text-gray-600 mt-2">
          1280×720, 30fps, 881KB - Includes audio track
        </p>
      </div>
    </div>
  );
};
