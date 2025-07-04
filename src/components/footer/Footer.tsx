export default function Footer() {
  return (
    <footer className="bg-[var(--sub-bg)] border-t border-[var(--border)] border-opacity-30 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[var(--main-text)] text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Yedo Portfolio</p>
            <p className="text-[var(--sub-text)] text-sm">
              프론트엔드 개발자 이예도
            </p>
          </div>

          <div className="flex gap-4 text-[var(--sub-text)] text-sm">
            <a
              href="https://blog.yedo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="https://github.com/ydsic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)] border-opacity-20 mt-6 pt-4 text-center">
          <p className="text-[var(--sub-text)] text-xs">
            © 2025 Yedo Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
