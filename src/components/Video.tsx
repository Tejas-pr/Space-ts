import video1 from "../assets/footage.mp4";
const Video = () => {
  return (
    <video
      autoPlay
      loop
      className="fixed h-[100%] w-screen left-0 top-0 object-cover -z-10"
    >
      <source src={video1} type="video/mp4" />
    </video>
  );
};

export default Video;
