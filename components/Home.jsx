import React from "react";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";
import Mood from "./Mood";
import NewRelease from "./NewRelease";
import TopCharts from "./TopCharts";
import MusicPlayer from "./MusicPlayer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Mood />
      <Slideshow />
      <NewRelease />
      <TopCharts />
      <MusicPlayer />
    </>
  );
};

export default Home;
