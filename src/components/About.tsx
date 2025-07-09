"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Sumit Kumar — a passionate frontend developer, curious tech explorer, and a firm believer in the power of clean design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Since the beginning of my journey, I&apos;ve been fascinated by how code can bring ideas to life. I specialize in crafting intuitive, responsive, and modern web experiences using technologies like ReactJS, Tailwind CSS, Node.js, MongoDB, and more. 
        </Paragraph>

        <Paragraph className=" mt-4">
          But my story isn&apos;t just about code. I&apos;m also a lifelong learner and a creative thinker who enjoys exploring new technologies, solving real-world problems, and writing about what I discover. From building a YouTube video downloader in Python to creating blog and note management platforms, I love turning challenges into opportunities to grow.
        </Paragraph>
        <Paragraph className=" mt-4">
          Design plays a huge role in everything I do. For me, great design is not just about colors and layouts — it’s about user experience, accessibility, and clarity. I strive to blend logic with creativity to build interfaces that are both functional and beautiful.
        </Paragraph>
        <Paragraph className=" mt-4">
          This website is where I share my journey, projects, and insights. Whether you&apos;re a fellow developer, a designer, or just someone passionate about tech, there’s something here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for visiting, and I&apos;m excited to have you along for the ride!
        </Paragraph>
      </div>
    </div>
  );
}
