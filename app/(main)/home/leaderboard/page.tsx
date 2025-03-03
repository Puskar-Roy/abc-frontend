import React from "react";
import SecondaryHeader from "@/app/_containers/SecondaryHeader";
import Image from "next/image";
import Line from "@/assets/svg/leaderboardIcon/line.svg";
import LeaderboardTable from "../_components/LeaderboardTable";

const quizData = [
  {
    id: 1,
    name: "Name 1",
    score: 98,
    accuracy: "98%",
    avgScore: 98,
    completionRate: "98%",
  },
  {
    id: 2,
    name: "Name 2",
    score: 85,
    accuracy: "85%",
    avgScore: 90,
    completionRate: "95%",
  },
  {
    id: 3,
    name: "Name 3",
    score: 75,
    accuracy: "80%",
    avgScore: 78,
    completionRate: "85%",
  },
  {
    id: 4,
    name: "Name 4",
    score: 92,
    accuracy: "90%",
    avgScore: 91,
    completionRate: "97%",
  },
  {
    id: 5,
    name: "Name 5",
    score: 88,
    accuracy: "87%",
    avgScore: 89,
    completionRate: "93%",
  },
  {
    id: 6,
    name: "Name 6",
    score: 95,
    accuracy: "96%",
    avgScore: 94,
    completionRate: "99%",
  },
];

const Page = () => {
  return (
    <SecondaryHeader returnurl="/home" name="Leaderboard">
      <LeaderboardTable />
      <div>
        <div className="relative p-4 text-[#374051] flex flex-col rounded-xl shadow-sm border mt-8 mb-5">
          {quizData.map((quiz, index) => (
            <div
              key={quiz.id}
              className="p-2.5 px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-row font-[400]"
            >
              <h1 className=" flex text-[21px] leading-[21px] font-[500] justify-center items-center gap-3">
                <span className="text-[#527DFF]  ">{index + 1}.</span>{" "}
                {quiz.name}
              </h1>
              <div className="flex gap-8">
                <div className="text-sm flex justify-center items-center flex-col mr-2">
                  <h1 className="text-[#6C7180] text-[18px] leading-[18px] font-[800] mb-1">
                    Score
                  </h1>
                  <p className="text-[#527DFF] text-[18px] leading-[18px] font-[600]">
                    {quiz.score}
                  </p>
                </div>
                <Image src={Line} alt="Line" />
                <div className="text-sm flex justify-center items-center flex-col">
                  <h1 className="text-[#6c7180] text-[18px] leading-[18px] font-[500] mb-1">
                    Accuracy
                  </h1>
                  <p className="text-[#527DFF] text-[18px] leading-[18px] font-[600]">
                    {quiz.accuracy}
                  </p>
                </div>
                <Image src={Line} alt="Line" />
                <div className="text-sm flex justify-center items-center flex-col">
                  <h1 className="text-[#6C7180] text-[18px] leading-[18px] font-[500] mb-1">
                    Avg. Score
                  </h1>
                  <p className="text-[#527DFF] text-[18px] leading-[18px] font-[600]">
                    {quiz.avgScore}
                  </p>
                </div>
                <Image src={Line} alt="Line" />
                <div className="text-sm flex justify-center items-center flex-col mr-2">
                  <h1 className="text-[#6C7180] text-[18px] leading-[18px] font-[500] mb-1">
                    Completion Rate
                  </h1>
                  <p className="text-[#527DFF] text-[18px] leading-[18px] font-[600]">
                    {quiz.completionRate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SecondaryHeader>
  );
};

export default Page;
