import Image from "next/image";
import Header from "../_components/_header/header";
import Footer from "../_components/_footer/footer";
import Tagline from "../_components/_tagline/tagline"
import Essential_Courses from "../_components/_essential_courses/essential_courses"
import Assesment_Banner from "../_components/_assesments/assesment_banner"
import Crispchat from "../_components/crispchat"
export default function Home() {
  return (
    <div >
      <div>
        <Header/>
         <Tagline/>
        <Essential_Courses/> 
        <Assesment_Banner/>
      </div>
      {/* <Crispchat/> */}
      <Footer/>
    </div>
  );
}
