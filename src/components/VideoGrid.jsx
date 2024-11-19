import { useNavigate } from "react-router-dom";
import { Play, ThumbsUp, Eye, Clock } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export const videos = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    description: "Learn the basics of React Hooks with practical examples",
    thumbnail: "/api/placeholder/400/225",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    views: 1200,
    likes: 156,
    creator: "Tech Academy",
    createdAt: "2024-02-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Building Modern UIs with Tailwind",
    description: "Master Tailwind CSS for modern web development",
    thumbnail: "/api/placeholder/400/225",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    views: 850,
    likes: 92,
    creator: "WebDev Pro",
    createdAt: "2024-02-14T15:30:00Z",
  },
  {
    id: 3,
    title: "Advanced JavaScript Patterns",
    description: "Deep dive into advanced JavaScript design patterns",
    thumbnail: "/api/placeholder/400/225",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    views: 2300,
    likes: 245,
    creator: "JS Ninja",
    createdAt: "2024-02-13T09:15:00Z",
  },
];

export const getVideos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(videos);
    }, 500); // Simulate network delay
  });
};

export const getVideoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const video = videos.find((v) => v.id === Number(id));
      if (video) {
        resolve(video);
      } else {
        reject(new Error("Video not found"));
      }
    }, 500);
  });
};

const VideoBox = ({ video }) => {
  const navigate = useNavigate();
  const { id, title, thumbnail, views, likes, creator, createdAt, duration } =
    video;

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)),
      "day"
    );
  };

  return (
    <div
      onClick={() => navigate(`/video/${id}`)}
      className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-16 h-16 text-white drop-shadow-lg" fill="white" />
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-sm rounded-md flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {formatDuration(duration)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-700 mb-2">
          <span className="font-medium hover:text-indigo-600 transition-colors">
            {creator}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {views.toLocaleString()}
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {likes.toLocaleString()}
            </div>
          </div>
          <div className="text-gray-400">{formatDate(createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoBox key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
