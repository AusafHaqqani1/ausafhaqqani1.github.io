import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Mohammad Ausaf Ali Haqqani. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/in/mohammad-ausaf-ali-haqqani"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/ausafhaqqani1"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link href="mailto:malihaqqani@smu.edu" className="hover:text-blue-400 transition-colors duration-300">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

