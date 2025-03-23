import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/words/a")({
  component: Alphabets,
});

function Alphabets() {
  // Recording and recorded video state.
  const [recording, setRecording] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState("");

  // State for the video comparison process.
  const [loadingComparison, setLoadingComparison] = useState(false);
  // comparisonResult: true for correct, false for incorrect, null if not yet compared.
  const [comparisonResult, setComparisonResult] = useState<null | boolean>(
    null
  );
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  // Refs for MediaRecorder and video elements.
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  // Request webcam access on component mount.
  useEffect(() => {
    if (videoPreviewRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          videoPreviewRef.current!.srcObject = stream;
        })
        .catch((err) => {
          console.error("Error accessing webcam:", err);
        });
    }
  }, []);

  // Start recording using MediaRecorder.
  const startRecording = () => {
    setRecording(true);
    recordedChunksRef.current = [];
    const stream = videoPreviewRef.current?.srcObject as MediaStream;
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedVideoUrl(url);
    };

    mediaRecorder.start();
  };

  // Stop recording.
  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();
  };

  // Handle submission: show a loading screen, then simulate comparison and display result.
  const handleSubmit = () => {
    // Reset previous comparison results.
    setComparisonResult(null);
    setShowDemoVideo(false);
    // Show the full-screen loading screen.
    setLoadingComparison(true);

    // Simulate a delay (e.g., 3 seconds) to compare the videos.
    setTimeout(() => {
      setLoadingComparison(false);
      // Simulate a comparison result (replace this with your actual API call later).
      const result = Math.random() > 0.5;
      setComparisonResult(result);
      if (!result) {
        setShowDemoVideo(true);
      }
    }, 3000);
  };

  // If loadingComparison is true, render a full-screen loading screen.
  if (loadingComparison) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <p className="text-xl font-bold">Comparing videos, please wait...</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Unit 2: Alphabets</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Demo Video Box */}
        <div className="flex-1 border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Demo Video</h2>
          <video src="/demo-sign.mp4" controls className="w-full rounded" />
        </div>
        {/* User Recording Box */}
        <div className="flex-1 border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Your Recording</h2>
          <video
            ref={videoPreviewRef}
            autoPlay
            muted
            className="w-full rounded border mb-2"
          />
          <div className="flex gap-2">
            {!recording ? (
              <button
                onClick={startRecording}
                className="px-4 py-2 bg-blue-500 font-bold rounded"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="px-4 py-2 bg-blue-500 font-bold rounded"
              >
                Stop Recording
              </button>
            )}
          </div>
          {recordedVideoUrl && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Playback:</h3>
              <video
                src={recordedVideoUrl}
                controls
                className="w-full rounded border"
              />
            </div>
          )}
        </div>
      </div>
      {/* Submit Button and Comparison Feedback */}
      <div className="flex flex-col items-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-500  font-bold rounded"
        >
          Submit Your Video
        </button>
        {comparisonResult !== null && (
          <div className="mt-4 flex flex-col items-center">
            {comparisonResult ? (
              <div className="text-green-500 text-4xl">✓</div>
            ) : (
              <div className="text-red-500 text-4xl">✕</div>
            )}
            {showDemoVideo && (
              <div className="mt-4 border p-4 rounded">
                <h3 className="font-semibold mb-2">Correct Demo:</h3>
                <video
                  src="/correct-demo.mp4"
                  controls
                  className="w-full rounded border"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Alphabets;
