import { useEffect, useRef } from "react";
import { Holistic } from "@mediapipe/holistic";
import { Camera } from "@mediapipe/camera_utils";
// import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { createFileRoute } from '@tanstack/react-router'


const HolisticTracker: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let camera: Camera | null = null;

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const holistic = new Holistic({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
    });

    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
    });

    holistic.onResults((results) => {
      const canvasCtx = canvasRef.current?.getContext("2d");
      if (!canvasCtx || !canvasRef.current || !videoRef.current) return;

      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasCtx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      console.log("Landmarks:", results.poseLandmarks, results.faceLandmarks, results.leftHandLandmarks, results.rightHandLandmarks);
    });

    if (videoRef.current) {
      camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await holistic.send({ image: videoRef.current as HTMLVideoElement });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }

    return () => {
      holistic.close();
      camera?.stop();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }}></video>
      <canvas ref={canvasRef} width={640} height={480} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
};

export const Route = createFileRoute('/holistic_1')({
  component: HolisticTracker,
})

export default HolisticTracker;
