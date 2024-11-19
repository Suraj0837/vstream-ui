import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThumbsUp, Eye, ArrowLeft, Loader2 } from "lucide-react";
import Hls from "hls.js";
import { getVideoById } from "./VideoGrid";

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  useEffect(() => {
    if (video && video.videoUrl && videoRef.current) {
      const videoUrl = "http://10.17.35.84:8080/videos/hls/1/4665f501-5a01-4f84-9f68-f3baee6f4319/index.m3u8"; // Hardcoded HLS URL
      // Initialize HLS.js
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl); // Load HLS stream
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS manifest loaded, starting playback");
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS error:", data);
        });

        return () => {
          hls.destroy(); // Clean up HLS instance
        };
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // For Safari or native HLS support
        videoRef.current.src = video.videoUrl;
      }
    }
  }, [video]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Video not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="bg-black rounded-xl overflow-hidden mb-6">
        <video
          ref={videoRef} // Attach ref for HLS.js
          controls
          className="w-full aspect-video h-[40rem] object-cover"
          poster={video.thumbnail}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Eye className="w-5 h-5 mr-1" />
              {video.views.toLocaleString()} views
            </div>
            <div className="flex items-center text-gray-600">
              <ThumbsUp className="w-5 h-5 mr-1" />
              {video.likes.toLocaleString()} likes
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">{video.creator}</h3>
          <p className="text-gray-700">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;