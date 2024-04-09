import { RiFolder4Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import Newboard from "./Newboard";

const Section = ({ data }) => {
  return (
    <div className="font-semibold mx-7 md:mx-14 bg-white h-auto rounded-md md:my-[3rem] my-8 ">
      <div className="flex items-center justify-between px-4 md:px-8 pt-6">
        <div className="flex items-center gap-5 ">
          <RiFolder4Line className="text-4xl" />
          <div>
            <p className="text-lg">Default Project</p>
            <p className="text-sm text-gray-500">
              {data.length} storyboard{data.length !== 1 && "s"}
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center text-lg cursor-pointer">
          <BsThreeDotsVertical />
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex h-auto mt-6 flex-wrap mx-[2%]  items-center gap-[2%] justify-center lg:justify-start">
        {data &&
          data.map((board, index) => (
            <Newboard
              key={index}
              frameSize={board.frame}
              name={board.name}
              datt={board.date}
            />
          ))}
        <div className="w-96 h-[17.88rem] mb-6  shadow-sm rounded-md bg-gray-100 flex items-center justify-center ">
          <IoIosAddCircleOutline className="text-gray-300 text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Section;
