import { useEffect, useRef } from "react";
// import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import Webcam from "react-webcam";
import { createFileRoute } from '@tanstack/react-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { Camera } from "@mediapipe/camera_utils";
import {  HAND_CONNECTIONS, POSE_CONNECTIONS, Holistic, Results } from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

interface Landmark {
  x: number;
  y: number;
  z: number;
}
interface Frame {
  "pose": Landmark[];
  "left": Landmark[];
  "right": Landmark[];
}


interface HolisticTrackerProps {
    title: string,
    landmarks: Frame[],
    videoURL: string,
}

const HolisticTracker: React.FC<HolisticTrackerProps> = (props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [counter, setCounter] = useState(0);
  let counter = 0;
  const waitFrame = 2;
  let sameFrameCount = 0;

  // let matchCounter = 0;


  /*
   * Converts MediaPipe Holistic landmarks into the required frame format.
   */
  // const convertLandmarks = (holisticLandmarks: any): Frame => {
  //   return {
  //     pose: holisticLandmarks.poseLandmarks || [],
  //     left: holisticLandmarks.leftHandLandmarks || [],
  //     right: holisticLandmarks.rightHandLandmarks || [],
  //   };
  // };

  /**
   * Calculates the Euclidean distance between two sets of landmarks.
   */
  // const calculateDistance = (landmarks1: Landmark[], landmarks2: Landmark[]): number => {
  //   if (landmarks1.length !== landmarks2.length) return Infinity;
  //   return landmarks1.reduce((sum, l1, i) => {
  //     const l2 = landmarks2[i];
  //     return sum + Math.sqrt((l1.x - l2.x) ** 2 + (l1.y - l2.y) ** 2 + (l1.z - l2.z) ** 2);
  //   }, 0);
  // };

  /**
   * Finds the index of the frame with the closest left and right landmarks to the given frame.
   */
  // const findClosestFrame = (frames: Frame[], newFrame: Frame): number => {
  //   let minDistance = Infinity;
  //   let closestIndex = -1;

  //   frames.forEach((frame, index) => {
  //     const leftDistance = calculateDistance(frame.left, newFrame.left);
  //     const rightDistance = calculateDistance(frame.right, newFrame.right);
  //     const totalDistance = leftDistance + rightDistance;

  //     if (totalDistance < minDistance) {
  //       minDistance = totalDistance;
  //       closestIndex = index;
  //     }
  //   });

  //   return closestIndex;
  // };


  const onResults = (results: Results) => {
    if (!webcamRef.current?.video || !canvasRef.current) return
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    if (canvasCtx == null) throw new Error('Could not get context');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'source-over';
    // drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
    //   { color: '#00FF00', lineWidth: 4 });


    // drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
    //   { color: '#CC0000', lineWidth: 5 });
    // drawLandmarks(canvasCtx, results.leftHandLandmarks,
    //   { color: '#00FF00', lineWidth: 2 });
    // drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
    //   { color: '#00CC00', lineWidth: 5 });
    // drawLandmarks(canvasCtx, results.rightHandLandmarks,
    //   { color: '#FF0000', lineWidth: 2 });


    // const idx = findClosestFrame(landmarks, convertLandmarks(results))
    // if (counter < idx){
    //   counter = idx;
    // }
    // console.log(idx)
    const landmarks = props.landmarks;

    if (landmarks != undefined) {
      drawConnectors(canvasCtx, landmarks[counter].pose, POSE_CONNECTIONS,
        { color: '#EDCDC5', lineWidth: 4 });
      drawConnectors(canvasCtx, landmarks[counter].left, HAND_CONNECTIONS,
        { color: '#DBEEF7', lineWidth: 5 });
      drawLandmarks(canvasCtx, landmarks[counter].left,
        { color: '#DD5588', lineWidth: 1 });
      drawConnectors(canvasCtx, landmarks[counter].right, HAND_CONNECTIONS,
        { color: '#DBEEF7', lineWidth: 5 });
      drawLandmarks(canvasCtx, landmarks[counter].right,
        { color: '#DD5588', lineWidth: 1 });

      // increment()
      if (sameFrameCount < waitFrame){
        sameFrameCount++;
      } else {
        sameFrameCount = 0;
        counter++;
      }

      if (counter == landmarks.length) {
        counter = 0;
      }
    }

    // drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
    //   { color: '#00FF00', lineWidth: 4 });
    // drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
    //     { color: '#CC0000', lineWidth: 5 });
    // drawLandmarks(canvasCtx, results.leftHandLandmarks,
    //     { color: '#00FF00', lineWidth: 2 });
    // drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
    //     { color: '#00CC00', lineWidth: 5 });
    // drawLandmarks(canvasCtx, results.rightHandLandmarks,
    //     { color: '#FF0000', lineWidth: 2 });

    canvasCtx.restore();
  }

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file: string) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      }
    });
    holistic.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    holistic.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      if (!webcamRef.current?.video) return
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (!webcamRef.current?.video) return
          await holistic.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, [])

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-8">{props.title}</h1>

    <div className="mt-8">
    <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "right",
          zIndex: 9,
          width: 640,
          height: 480,
        }}
        className="rounded-xl"
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "right",
          zIndex: 9,
          width: 640,
          height: 480,
        }}
        className="rounded-xl border-4"
      />
    </div>

    {props.videoURL != "" && (<div className="mt-[70vh] flex items-center justify-center">
      <div className="w-[50vw]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-bold text-xl">Show Sample Video</AccordionTrigger>
              <AccordionContent className="flex items-center justify-center">
                <video width="720" height="480" controls>
                  <source src={props.videoURL} type="video/mp4"/>
                  {/* <source src="movie.ogg" type="video/ogg"/> */}
                Your browser does not support the video tag.
                </video> 
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </div>)}
    
    </div>
  );
};

export const Route = createFileRoute('/holistic')({
  component: HolisticTracker,
})

export default HolisticTracker;
