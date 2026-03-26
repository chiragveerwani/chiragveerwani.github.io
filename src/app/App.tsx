import { useState, useEffect } from 'react';

export default function App() {
  const fullText = "Hi, I'm Chirag Veerwani";
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
          <a href="https://example.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Resume</a> | 
          <a href="https://github.com/chiragveerwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Github</a> | 
          <a hef="https://chirag13.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Substack</a>
        </p>
      </header>

      {/* Blog Links Section */}
      <main className="px-8 pb-12 max-w-3xl mx-auto">
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
      </footer>
    </div>
  );
}