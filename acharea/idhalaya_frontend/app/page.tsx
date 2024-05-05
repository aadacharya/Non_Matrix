import Image from "next/image";
import Header from "./_components/_header/header";
import Footer from "./_components/_footer/footer";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home_page}>
      <div>
        {/* Code for home page main screen */}
        <Header />
        {/* other first screen components */}
      </div>
      <div>{/* other home components */}</div>
      <Footer />
    </div>
  );
}
