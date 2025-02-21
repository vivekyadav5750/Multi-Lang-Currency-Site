"use client";

import { useEffect } from "react";
import "./style.css";
import gsap, { Linear } from "gsap";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Error404() {
  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    t1.to(".cog1", {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t2.to(".cog2", {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });
  }, []);
  return (
    <div className="w-full h-svh flex flex-col items-center justify-center">
      <div className="scale-75 relative flex items-center justify-center">
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="cog-wheel2">
          <div className="cog2">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <h1 className="second-four">4</h1>
      </div>
      <p className="animate-pulse relative -top-16">Uh Oh! Page not found!</p>
      <Button asChild>
        <Link className="-mt-12" href={"/"}>
          Home
        </Link>
      </Button>
    </div>
  );
}
