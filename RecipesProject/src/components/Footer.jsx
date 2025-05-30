import { Link } from "react-router-dom"

const footer = () => {
  return (
      <footer
      className="bg-neutral-200 text-center text-sm dark:bg-neutral-700 lg:text-left mt-2">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <Link
          className="text-neutral-800 dark:text-neutral-400"
          to=""
        >MADE WITH LOVE❤️ by Prahlad</Link>
      </div>
    </footer>
  )
}

export default footer
