import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from "react";
export const Route = createFileRoute("/units/")({
  component: Introduction,
});

const units = [
  {
    "title": "Unit 1: Introduction",
    "description": "In this unit, you will learn the most common words used in day-to-day conversations.",
    "image": "https://plus.unsplash.com/premium_photo-1661486437346-aeffbc5fcfc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50cm9kdWN0aW9ufGVufDB8fDB8fHww",
    "link": "/units/intro",
  },
  {
    "title": "Unit 2: Colors",
    "description": "In this unit, you will learn about the colors.",
    "image": "https://images.unsplash.com/photo-1509216701163-b79cd826e0a6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "link": "/units/colours",
  },
  {
    "title": "Unit 3: Fruits",
    "description": "In this unit, you will learn the fruits.",
    "image": "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "link": "/units/fruits",
  },
]

function Introduction() {

  return (
    <div className="p-2 mx-12">
          <h1 className="text-3xl font-bold ml-4 mt-4 mb-8">Units</h1>

          <div className="grid grid-cols-3 gap-12">
          {
              units.map((unit) => {
                return (
                  <div className="border-4 rounded-4xl">
                    <div className="flex flex-col hover:bg-yellow-100 hover:text-black rounded-2xl transition">
                      <img src={unit.image} className="rounded-t-2xl"/>
                      {/* <h2 className="py-4 text-xl text-center hover:bg-yellow-100 hover:text-black cursor-pointer rounded-b-2xl transition-colors">{word.text}</h2> */}
                      <Link
                          to={unit.link}
                          className="py-4 text-xl text-center  cursor-pointer rounded-b-2xl transition-colors"
                        >
                          {unit.title}
                        </Link>                    
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
  );
}

export default Introduction;
