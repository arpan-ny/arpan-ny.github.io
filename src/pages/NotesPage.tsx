import React from "react";

const NotesPage: React.FC = () => {
  return (
    <div className="flex-grow p-4 sm:p-6 mt-20 md:mt-0 text-left" style={{ color: "var(--text-color)" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Notes</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Currently Reading</h2>
          <ul className="list-disc list-inside">
            <li>"The Pragmatic Programmer: Your Journey to Mastery" by David Thomas and Andrew Hunt</li>
            <li>"Designing Data-Intensive Applications" by Martin Kleppmann</li>
            <li>"The Lord of the Rings: The Two Towers" by J. R. R. Tolkien</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Free Time</h2>
          <p>
            When I'm not coding, I enjoy exploring new technologies and reading about the latest advancements in AI. I also like to play video games and go for hiking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Interests</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Software Development</h3>
              <p>
                I'm passionate about building robust and scalable software. My interests lie in Full Stack Development, system design, and cloud computing. I'm always looking for ways to improve my craft and learn new things.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">AI Agents and LLMs</h3>
              <p>
                The recent advancements in AI, especially in the field of Large Language Models (LLMs) and AI agents, have captured my attention. I'm fascinated by the potential of these technologies to revolutionize how we interact with computers and solve complex problems. I'm actively learning more about building applications with LLMs and exploring the ethics and challenges associated with them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotesPage;