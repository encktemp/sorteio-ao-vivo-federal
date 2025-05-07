
import React from 'react';

const VideoFrame: React.FC = () => {
  return (
    <div className="w-full h-full bg-bicho-red rounded-lg overflow-hidden shadow-lg border-2 border-bicho-border">
      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
        <p className="text-white text-xl">Área do Vídeo</p>
        {/* Este div será substituído pelo vídeo ao vivo no OBS */}
      </div>
    </div>
  );
};

export default VideoFrame;
