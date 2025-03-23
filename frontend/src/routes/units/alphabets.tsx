import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
// import * as Accordion from '@radix-ui/react-accordion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/units/alphabets")({
  component: Units,
});

function Units() {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold mb-4">Alphabets</h1>

      <div className="flex items-center justify-center">
        <Accordion className="w-[80vw]" type="single" collapsible>
          {/* Unit 1: Introduction */}
          <AccordionItem value="unit1">
            <AccordionTrigger>A</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the most common words used in
              day-to-day conversations.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link to="/words/a" className="text-blue-600 underline ml-2">
                  Go to Unit 1
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 2: Alphabet */}
          <AccordionItem value="unit2">
            <AccordionTrigger>B</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the alphabet in sign language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link to="/words/b" className="text-blue-600 underline ml-2">
                  Go to Unit 2
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 3: Numbers */}
          <AccordionItem value="unit3">
            <AccordionTrigger>C</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the numbers (from 1 to 10) in sign
              language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link to="/words/c" className="text-blue-600 underline ml-2">
                  Go to Unit 3
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 4: Colours */}
          <AccordionItem value="unit4">
            <AccordionTrigger>D</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the primary and basic secondary
              colours in sign language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link to="/words/d" className="text-blue-600 underline ml-2">
                  Go to Unit 4
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Units;
