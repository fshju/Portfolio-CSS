import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home-section" id="home">
        <div className="profile-picture">
          <Image
            src="/shah pic.jpeg"
            alt="Shahrukh Ishtiaq"
            width={500}
            height={500}
            priority
          />
        </div>
        <h2 className="home-title">Shahrukh Ishtiaq</h2>
        <p className="home-subtitle">Software Engineer</p>
      </section>
    </div>
  );
};

export default Home;
