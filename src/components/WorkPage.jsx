import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://pw-backend.vercel.app";

export default function WorkPage() {
  const [workData, setWorkData] = useState([]);
  const [previewData, setPreviewData] = useState({});

  const fetchWorkData = async () => {
    try {
      const { data } = await axios({
        url: BASE_URL,
        method: "GET",
      });

      setWorkData(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWorkData().then((data) => setPreviewData(data[0]));
  }, []);
  return (
    <section className="ml-4 mt-44 sm:mt-52 mb-20">
      <p className="text-5xl text-black font-bold bg-secondary py-2 px-2 w-fit">
        <strong>projects</strong>
      </p>
      <div className="py-1 mt-4 overflow-y-auto scrollbar pr-4 w-full ">
        {workData.map((work, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 cursor-pointer hover:text-secondary hover:translate-x-4 "
            >
              <p className="text-sm mt-2">
                {index < 9 ? `0${index + 1}` : index + 1}
              </p>
              <a href={work.stringUrl} target="_blank">
                <p className="text-2xl sm:text-4xl font-bold mb-2">
                  {work.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
