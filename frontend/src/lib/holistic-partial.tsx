// import React, { useEffect, useRef, useState } from "react";
// import { Holistic, Results } from "@mediapipe/holistic";
// import { Camera } from "@mediapipe/camera_utils";
// import Webcam from "react-webcam";
// import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
// import { POSE_CONNECTIONS, FACEMESH_TESSELATION, HAND_CONNECTIONS } from "@mediapipe/holistic";
// // import pickle from "picklejs";
// import { createFileRoute } from '@tanstack/react-router'

// interface Landmark {
//   x: number;
//   y: number;
//   z: number;
// }
// interface HolisticLandmarks {
//   "pose": Landmark[];
//   "left": Landmark[];
//   "right": Landmark[];
// }


// const HolisticTracker: React.FC = () => {
//   const webcamRef = useRef<Webcam>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   // const [importedLandmarks, setImportedLandmarks] = useState<Results | null>(null);
//   const [landmarks, setLandmarks] = useState<HolisticLandmarks[] | null>(null);

//   useEffect(() => {
//     const fetchLandmarks = async () => {
//       try {
//         const response = await fetch("/landmarks.json");
//         const data = await response.json();
//         setLandmarks(data);
//       } catch (error) {
//         console.error("Error fetching landmarks", error);
//       }
//     };

//     fetchLandmarks();
//   }, []);

//   const onResults = (results: Results) => {
//     if (!webcamRef.current?.video || !canvasRef.current) return;
//     const videoWidth = webcamRef.current.video.videoWidth;
//     const videoHeight = webcamRef.current.video.videoHeight;
//     canvasRef.current.width = videoWidth;
//     canvasRef.current.height = videoHeight;

//     const canvasElement = canvasRef.current;
//     const canvasCtx = canvasElement.getContext("2d");
//     if (canvasCtx == null) throw new Error("Could not get context");
//     canvasCtx.save();
//     canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

//     // Only overwrite existing pixels.
//     canvasCtx.globalCompositeOperation = "source-in";
//     canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

//     // Only overwrite missing pixels.
//     canvasCtx.globalCompositeOperation = "destination-atop";
//     canvasCtx.drawImage(
//       results.image, 0, 0, canvasElement.width, canvasElement.height
//     );

//     canvasCtx.globalCompositeOperation = "source-over";
//     const displayLandmarks = landmarks;

//     // drawConnectors(canvasCtx, displayLandmarks.faceLandmarks, FACEMESH_TESSELATION,
//     //   { color: "#C0C0C070", lineWidth: 1 });
//     drawConnectors(canvasCtx, displayLandmarks ? [0]?.left, HAND_CONNECTIONS,
//       { color: "#CC0000", lineWidth: 5 });
//     drawLandmarks(canvasCtx, displayLandmarks ? [0].left,
//       { color: "#00FF00", lineWidth: 2 });
//     drawConnectors(canvasCtx, displayLandmarks.rightHandLandmarks, HAND_CONNECTIONS,
//       { color: "#00CC00", lineWidth: 5 });
//     drawLandmarks(canvasCtx, displayLandmarks.rightHandLandmarks,
//       { color: "#FF0000", lineWidth: 2 });
//     canvasCtx.restore();
//   };

//   useEffect(() => {
//     const holistic = new Holistic({
//       locateFile: (file: string) => {
//         return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
//       }
//     });
//     holistic.setOptions({
//       selfieMode: true,
//       modelComplexity: 1,
//       smoothLandmarks: true,
//       enableSegmentation: true,
//       smoothSegmentation: true,
//       refineFaceLandmarks: true,
//       minDetectionConfidence: 0.5,
//       minTrackingConfidence: 0.5
//     });
//     holistic.onResults(onResults);

//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null
//     ) {
//       if (!webcamRef.current?.video) return;
//       const camera = new Camera(webcamRef.current.video, {
//         onFrame: async () => {
//           if (!webcamRef.current?.video) return;
//           await holistic.send({ image: webcamRef.current.video });
//         },
//         width: 640,
//         height: 480,
//       });
//       camera.start();
//     }
//   }, []);

//   return (
//     <div className="App">
//       <Webcam
//         ref={webcamRef}
//         style={{
//           position: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zIndex: 9,
//           width: 1200,
//           height: 800,
//         }}
//       />
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zIndex: 9,
//           width: 1200,
//           height: 800,
//         }}
//       />
//     </div>
//   );
// };


// export const Route = createFileRoute('/holistic-partial')({
//   component: HolisticTracker,
// })

// export default HolisticTracker;
