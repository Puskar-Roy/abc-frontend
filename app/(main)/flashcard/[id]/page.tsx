import MainHeader from "@/app/_containers/MainHeader";
import React from "react";
import Image from "next/image";
import QuestionIcon from "@/assets/svg/testIcons/question.svg";
import TopicSelected from "@/app/(main)/test/_components/TopicSelected";
import Selector from "../_components/Selector";
import Customization from "@/app/(main)/flashcard/_components/Customization";
import ArrowIcon from "@/assets/svg/testIcons/sidebar.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <MainHeader name="Flashcards">
      <div className="border px-5 py-5 shadow-sm rounded-xl">
        <TopicSelected />
        <div className="w-full h-[123px] mt-8 rounded-[9px] bg-[#e6f6eb] flex justify-center items-center gap-[30px] shadow-sm">
          <Image
            className="h-[60px] w-[60px]"
            height={50}
            width={50}
            src={QuestionIcon}
            alt="Question"
          />
          <div className="flex flex-col  ">
            <h1 className="text-[27px] leading-[27px] font-[500] text-[#6C7180] ">
              Total Flashcards Available
            </h1>
            <p className="text-[30px] leading-[30px] font-[700] text-[#444d5c] ">
              10
            </p>
          </div>
        </div>
        <Selector />
        <Customization />
        <div className="flex justify-center items-center">
          <Button className="text-center mt-8 w-fit" variant="blue">
            <Link
              href={"/flashcard/cards/q-1"}
              className="flex justify-center items-center gap-2"
            >
              Proceed <Image src={ArrowIcon} alt="Arrow" className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </MainHeader>
  );
};

export default page;
