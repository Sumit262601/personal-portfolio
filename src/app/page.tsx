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
      <Heading className="">Hello there! I&apos;m Sumit Frontend Developer</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a frontend developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        the user experience. I&apos;m passionate about{" "}
        <Highlight>creating beautiful and performant web applications</Highlight>{" "}
        that solve real-world problems. I enjoy working with{" "}
        <Highlight>modern web technologies</Highlight> and always strive to
        learn and improve my skills.

      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
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


