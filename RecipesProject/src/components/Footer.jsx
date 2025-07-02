import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 dark:bg-neutral-700 text-center lg:text-left mt-4">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-700 dark:text-neutral-200">
        
        <p className="mb-2 md:mb-0 text-center">
          © {new Date().getFullYear()} Copyright:
        </p>
        
        <Link
          className="text-neutral-800 dark:text-neutral-400 hover:underline text-center"
          to="/"
        >
          MADE WITH LOVE ❤️ by Prahlad
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
