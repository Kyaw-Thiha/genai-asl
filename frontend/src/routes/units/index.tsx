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

export const Route = createFileRoute("/units/")({
  component: Units,
});

function Units() {
  return (
    <div className="p-2">
      <h1 className="text-xl ml-4 my-4">Units</h1>

      <div className="flex items-center justify-center mt-8">
        <Accordion className="w-[90vw]" type="single" collapsible>
          {/* Unit 1: Introduction */}
          <AccordionItem value="unit1">
            <AccordionTrigger>Unit 1: Introduction</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the most common words used in
              day-to-day conversations.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  to="/units/intro"
                  className="text-blue-600 underline ml-2"
                >
                  Go to Unit 1
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 2: Alphabet */}
          <AccordionItem value="unit2">
            <AccordionTrigger>Unit 2: Alphabets</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the alphabet in sign language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  to="/units/alphabets"
                  className="text-blue-600 underline ml-2"
                >
                  Go to Unit 2
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 3: Numbers */}
          <AccordionItem value="unit3">
            <AccordionTrigger>Unit 3: Numbers</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the numbers (from 1 to 10) in sign
              language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  to="/units/numbers"
                  className="text-blue-600 underline ml-2"
                >
                  Go to Unit 3
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Unit 4: Colours */}
          <AccordionItem value="unit4">
            <AccordionTrigger>Unit 4: Colours</AccordionTrigger>
            <AccordionContent>
              In this unit, you will learn the primary and basic secondary
              colours in sign language.
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  to="/units/colours"
                  className="text-blue-600 underline ml-2"
                >
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
