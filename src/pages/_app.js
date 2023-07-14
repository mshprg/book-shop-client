import '@/styles/global.css'
import '@/styles/animation.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {wrapper} from "@/store";
import Notifications from "@/components/Notifications";

function App({ Component, pageProps }) {
  return (
      <>
          <Notifications />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}

export default wrapper.withRedux(App)
