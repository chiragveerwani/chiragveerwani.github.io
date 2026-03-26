import { useState, useEffect } from 'react';

export default function App() {
  const fullText = "Hi, I'm [Your Name]";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100); // Typing speed in milliseconds
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D6E8F5' }}>
      {/* Header Section */}
      <header className="px-8 py-12 max-w-3xl mx-auto">
        <h1 className="mb-4 text-gray-800">
          {displayedText}
          <span 
            className={`inline-block w-0.5 h-8 bg-gray-800 ml-1 ${isTypingComplete ? 'animate-blink' : ''}`}
            style={{ verticalAlign: 'middle' }}
          ></span>
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to my personal space on the web! I'm a passionate writer and content creator 
          who loves sharing thoughts, ideas, and stories. This is where I keep all my blog posts 
          organized and easily accessible. Feel free to explore and read what interests you.
        </p>
      </header>

      {/* Blog Links Section */}
      <main className="px-8 pb-12 max-w-3xl mx-auto">
        <h2 className="mb-6 text-gray-800">My Blog Posts</h2>
        <ul className="space-y-3">
          <li>
            <a 
              href="https://example.com/blog/post-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Getting Started with Web Development
            </a>
          </li>
          <li>
            <a 
              href="https://example.com/blog/post-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              My Journey into Tech
            </a>
          </li>
          <li>
            <a 
              href="https://example.com/blog/post-3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Top 10 Productivity Tips
            </a>
          </li>
          <li>
            <a 
              href="https://example.com/blog/post-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Lessons Learned in 2025
            </a>
          </li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}