"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import WatermarkHeader from "@/components/typography/WatermarkHeader";

const projects = [
  {
    id: 1,
    title: "Site Excavation",
    category: "Earthworks",
    image: "/images/home/project-a.webp",
  },
  {
    id: 2,
    title: "Road Grading",
    category: "Infrastructure",
    image: "/images/home/project-b.webp",
  },
  {
    id: 3,
    title: "Material Handling",
    category: "Site Clearance",
    image: "/images/home/project-c.webp",
  },
  {
    id: 4,
    title: "Bulk Earthmoving",
    category: "Heavy Haulage",
    image: "/images/home/project-d.webp",
  },
  {
    id: 5,
    title: "Asphalt Paving",
    category: "Road Surfacing",
    image: "/images/home/project-e.webp",
  },
  {
    id: 6,
    title: "Site Preparation",
    category: "Plant Equipment",
    image: "/images/home/project-f.webp",
  },
];

const ProjectsGallery = () => {
  return (
    <section className="bg-secondary w-full">
      <div className="relative pt-20 pb-16 w-full flex flex-col justify-center overflow-hidden border-b border-gray-200">
        <WatermarkHeader text="Projects" backText="Our Latest" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#312a7a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10" />

            <div className="absolute bottom-0 left-0 w-[85%] bg-primary py-6 px-8 md:py-8 md:px-10 transition-all duration-500 ease-out translate-y-full group-hover:-translate-y-8 z-20 flex flex-col items-start opacity-0 group-hover:opacity-100">
              <span className="text-sm md:text-base text-[#1e1e1e] font-medium mb-2 uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e1e1e] uppercase tracking-wider">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
