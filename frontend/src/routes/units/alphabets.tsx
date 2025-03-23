import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/units/alphabets")({
  component: Alphabets,
});

function Alphabets() {
  const [recording, setRecording] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState("");

  // Refs for the MediaRecorder and collected data
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // Ref for the user's video preview element
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  // Request the user's webcam stream on mount
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

  // Start recording by creating a MediaRecorder and starting it
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

  // Stop recording and trigger the onstop handler
  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();
  };

  // Handle submission (for now, simply log the recorded video URL)
  const handleSubmit = () => {
    console.log("Submitted video URL:", recordedVideoUrl);
    alert("Video submitted!");
  };

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
                className="px-4 py-2 bg-blue-500  font-bold rounded"
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
      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-500  font-bold rounded"
        >
          Submit Your Video
        </button>
      </div>
    </div>
  );
}

export default Alphabets;
