// import { createFileRoute } from "@tanstack/react-router";
// import { Button } from "@/components/ui/button";
// // import * as Accordion from '@radix-ui/react-accordion';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// import { Link } from "@tanstack/react-router";

// export const Route = createFileRoute("/units/")({
//   component: Units,
// });

// const units = [
//   {
//     "title": "Unit 1: Introduction",
//     "description": "In this unit, you will learn the most common words used in day-to-day conversations.",
//     "link": "/units/intro",
//   },
//   {
//     "title": "Unit 2: Colors",
//     "description": "In this unit, you will learn about the colors.",
//     "link": "/units/colours",
//   },
//   {
//     "title": "Unit 3: Fruits",
//     "description": "In this unit, you will learn the fruits.",
//     "link": "/units/fruits",
//   },
// ]

// function Units() {
//   return (
//     <div className="p-2">
//       <h1 className="text-3xl font-bold ml-4 my-4">Units</h1>

//       <div className="flex items-center justify-center mt-8">
//       <Accordion className="w-[90vw]" type="single" collapsible>
//         {
//           units.map((unit) => {
//             return (
//               <AccordionItem value={unit.title}>
//                 <AccordionTrigger>{unit.title}</AccordionTrigger>
//                 <AccordionContent>
//                   {unit.description}
//                   <div
//                     onClick={(e) => {
//                       e.stopPropagation();
//                     }}
//                   >
//                     <Link
//                       to={unit.link}
//                       className="text-blue-600 underline ml-2"
//                     >
//                       Go to Lesson
//                     </Link>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>)
//           })
//         }
//       </Accordion>
//       </div>
//     </div>
//   );
// }

// export default Units;
