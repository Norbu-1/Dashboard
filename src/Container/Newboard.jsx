import image from "../assets/forest.avif";

const Newboard = ({
  name = "AI Character Demo Storyboard",
  frameSize = "landscape_16_9",
  datt = "12 Mar 2024",
}) => {
  return (
    <div className={`${frameSize === "landscape_16_9" ? "w-96" : "w-80"} h-[17.88rem] mb-6 shadow-sm rounded-md`}>
      <img
        src={image}
        alt="Selected"
        style={{
          width: frameSize === "landscape_16_9" ? "384px" : "320px",
          height: frameSize === "landscape_16_9" ? "216px" : "216px",
        }}
      />
      <div className="font-semibold py-3 px-4 h-auto border border-gray-300 w-full rounded-b-md">
        <p>{name}</p>
        <p className="text-gray-400 text-sm">Updated {datt}</p>
      </div>
    </div>
  );
};

export default Newboard;
