import React from 'react'
import FetchFrames from "../components/FetchFrames";
import { useStateValue } from "../context/StateProvider";

const Marvel = () => {
    const [{ setFrame, cartShow }, dispatch] = useStateValue();
    return (
      <div className=" w-full h-full">
        <h1 className=" mt-8 text-xl font-semibold mb-10">Marvel Frames:</h1>
        <FetchFrames
          data={setFrame?.filter((item) => item.category === "marvel")}
        />
      </div>
    );
}

export default Marvel