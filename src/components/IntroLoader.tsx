
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({
  onComplete,
}: IntroLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete,
      });

      tl.fromTo(
        containerRef.current,
        { autoAlpha: 1 },
        { autoAlpha: 1, duration: 0.1 }
      );

      tl.fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        0
      );

      tl.fromTo(
        textRef.current,
        {
          scale: 2.4,
          opacity: 0,
          filter: "blur(18px)",
          letterSpacing: "0.12em",
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          letterSpacing: "-0.065em",
          duration: 2,
          ease: "power4.out",
        },
        0.15
      );

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        1.1
      );

      tl.to(
        textRef.current,
        {
          scale: 0.92,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.6,
          ease: "power2.inOut",
        },
        2.7
      );

      tl.to(
        containerRef.current,
        {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        2.9
      );

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="intro-loader" ref={containerRef}>
      <div className="intro-content">

        <p className="intro-label" ref={labelRef}>
          JOHNSON S. — FRONTEND DEVELOPER
        </p>

        <h1 ref={textRef}>
          PORTFOLIO<span>.</span>
        </h1>

        <div className="intro-line" ref={lineRef} />

        <p className="intro-year">
          SELECTED WORKS · 2026
        </p>

      </div>
    </div>
  );
}
