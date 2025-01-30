"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  onBack?: () => void;
  onPlayingChange?: (isPlaying: boolean) => void;
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export function VideoPlayer({
  src,
  onBack,
  onPlayingChange,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const youtubeVideoId = getYouTubeVideoId(src);
  const isYouTube = !!youtubeVideoId;

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    const video = videoRef.current;
    const handlePlay = () => {
      setIsPlaying(true);
      onPlayingChange?.(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
      onPlayingChange?.(false);
    };

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [onPlayingChange]);

  useEffect(() => {
    if (isYouTube) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // @ts-expect-error - YouTube IFrame API types are not available
      window.onYouTubeIframeAPIReady = () => {
        // The API will call this function when ready
        // @ts-expect-error - YouTube IFrame API types are not available
        new YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event: { data: number }) => {
              setIsPlaying(event.data === 1); // 1 means playing
            },
          },
        });
      };
    }
  }, [isYouTube]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleYouTubePlay = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (isPlaying) {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
      onPlayingChange?.(false);
    } else {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      onPlayingChange?.(true);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current && !isYouTube) return;

    const element = isYouTube
      ? document.querySelector(".video-container")
      : videoRef.current;

    if (!element) return;

    if (!document.fullscreenElement) {
      await element.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  if (isYouTube) {
    return (
      <div className="video-container relative w-full h-full group">
        <iframe
          ref={iframeRef}
          className="w-full h-full pointer-events-none"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&mute=1`}
          allowFullScreen
          allow="autoplay; fullscreen"
        />

        {/* Clickable overlay for play/pause */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={toggleYouTubePlay}
        />

        {/* Back button - show when paused */}
        {!isPlaying && onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        )}

        {/* Custom controls for YouTube */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleYouTubePlay}
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={toggleFullscreen}
              className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isFullscreen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9V4.5M9 9H4.5M15 9V4.5M15 9H19.5M9 15V19.5M9 15H4.5M15 15V19.5M15 15H19.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        controls={false}
        onPlay={() => onPlayingChange?.(true)}
        onPause={() => onPlayingChange?.(false)}
      />

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-10">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={toggleFullscreen}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V4.5M9 9H4.5M15 9V4.5M15 9H19.5M9 15V19.5M9 15H4.5M15 15V19.5M15 15H19.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
