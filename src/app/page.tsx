import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="">Hello there! I&apos;m Sumit</Heading>
      <Paragraph className="max-w-4xl mt-4">
        I&apos;m a <Highlight>frontend developer</Highlight> who’s passionate about building clean, responsive, and impactful web applications that elevate user experience. With a strong foundation in the <Highlight>MERN stack,</Highlight> I love transforming ideas into modern, performance-driven products that solve real-world problems.

        I&apos;ve worked on a wide range of projects — from cloud-based note-taking apps and blog management systems to branding websites and Python-based tools like a YouTube video downloader. Whether it&apos;s implementing authentication, integrating rich text editors, managing complex UI state, or handling image uploads, I enjoy tackling challenges with code and creativity.

        I specialize in ReactJS, TailwindCSS, Node.js, Express, and MongoDB, and I&apos;m always experimenting with tools like Docker, Clerk, Redux, and Google OAuth to stay ahead. Beyond just writing code, I focus on building reusable components, pixel-perfect UIs, and scalable architecture.

        I thrive in environments where I can continuously learn, push my limits, and contribute to meaningful digital experiences.
      </Paragraph>
      
      <Paragraph className="max-w-4xl mt-4">
        I&apos;m a fresher software engineer building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}


