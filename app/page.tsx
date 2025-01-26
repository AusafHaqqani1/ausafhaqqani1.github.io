import Header from "@/components/Header"
import Landing from "@/components/Landing"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Publications from "@/components/Publications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
}

