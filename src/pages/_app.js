import '@/styles/global.css'
import '@/styles/animation.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}
