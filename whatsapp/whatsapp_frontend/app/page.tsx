import Image from "next/image";
import Sidebar from "./_components/_sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar activeItem="account"/>
      <h1> Hi This is the whats app project</h1>
    </div>
      );
}
