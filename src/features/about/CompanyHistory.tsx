"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import WatermarkHeader from "@/components/typography/WatermarkHeader";

const timelineData = [
  {
    id: 1,
    period: "2001 - 2004",
    title: "Started Foundation",
    description:
      "We believe that every business is unique and our approach is never one-size-fits-all. We are committed to understanding each client's unique challenges and delivering measurable results.",
    image: "/images/about/history-1.jpg",
    numbering: "01",
  },
  {
    id: 2,
    period: "2005 - 2008",
    title: "Growth & Expansion",
    description:
      "We believe that every business is unique and our approach is never one-size-fits-all. We are committed to understanding each client's unique challenges and delivering measurable results.",
    image: "/images/about/history-2.jpg",
    numbering: "02",
  },
  {
    id: 3,
    period: "2009 - 2012",
    title: "Diversification",
    description:
      "We believe that every business is unique and our approach is never one-size-fits-all. We are committed to understanding each client's unique challenges and delivering measurable results.",
    image: "/images/about/history-3.jpg",
    numbering: "03",
  },
  {
    id: 4,
    period: "2013 - 2016",
    title: "Risk Management",
    description:
      "We believe that every business is unique and our approach is never one-size-fits-all. We are committed to understanding each client's unique challenges and delivering measurable results.",
    image: "/images/about/history-4.jpg",
    numbering: "04",
  },
  {
    id: 5,
    period: "2017 - 2020",
    title: "Future Vision",
    description:
      "We believe that every business is unique and our approach is never one-size-fits-all. We are committed to understanding each client's unique challenges and delivering measurable results.",
    image: "/images/about/history-5.jpg",
    numbering: "05",
  },
];

const CompanyHistory = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const dividerLineRef = useRef<HTMLDivElement>(null);
  const dividerCircleRef = useRef<HTMLSpanElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [dividerHeight, setDividerHeight] = useState(0);
  const [circlePosition, setCirclePosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (!timelineRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const visible = Math.min(
      Math.max(windowHeight - rect.top, 0),
      rect.height + windowHeight,
    );

    const progress = visible / (rect.height + windowHeight);
    const percent = progress * 100;

    setDividerHeight(percent);
    setCirclePosition(percent);

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    const newVisibleItems: number[] = [];

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.85) {
        newVisibleItems.push(index);
      }
    });

    setVisibleItems(newVisibleItems);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Section variant="wide" className="bg-gray-900 py-24">
      <Section>
        <div className="text-center mb-16">
          <WatermarkHeader
            text="Our Company Roadmap"
            backText="Construction History"
            contrastOnDark
          />
          <p className="text-gray-400 mt-4 mx-auto text-lg max-w-3xl">
            We believe that every business is unique and our approach is never
            one-size-fits-all. Our commitment to understanding each
            client&apos;s unique challenges drives our growth.
          </p>
        </div>

        <div className="relative">
          <div ref={timelineRef} className="max-w-7xl mx-auto relative">
            <div className="timeline-divider absolute top-0 bottom-0 w-5 left-4 md:left-1/2 md:-translate-x-1/2">
              {/* Track */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-700" />

              {/* Indicator */}
              <div
                ref={dividerLineRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 bg-primary rounded-full"
                style={{ height: `${dividerHeight}%` }}
              />

              {/* Circle */}
              <span
                ref={dividerCircleRef}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full -translate-y-1/2 border-4 border-primary"
                style={{ top: `${circlePosition}%` }}
              />
            </div>

            <div className="timeline-items space-y-16 border-l-2">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  className="timeline-item md:pl-0 relative group"
                  style={{
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.5s ease-out, transform 0.5s ease-out",
                  }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="thumbnail w-full md:w-[440px] h-auto md:h-[318px] rounded-lg overflow-hidden border border-gray-700 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={440}
                        height={318}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div
                      className={`content w-full md:w-[440px] h-auto md:h-[318px] p-8 bg-gray-800 border border-gray-700 rounded-lg flex flex-col justify-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <span className="timeline text-primary font-semibold text-lg mb-2 block">
                        {item.period}
                      </span>
                      <h5 className="title text-2xl font-heading text-white mb-4">
                        {item.title}
                      </h5>
                      <p className="description text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <span className="numbering text-4xl font-heading text-primary opacity-20">
                        {item.numbering}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default CompanyHistory;
