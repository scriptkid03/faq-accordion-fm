"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It is suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions.",
    },
  ];

  return (
    <main className="flex flex-col h-screen">
      <div className="h-[45%] w-full bg-header-pattern bg-cover bg-center"></div>
      <div className="flex justify-center bg-lightPink w-full flex-grow">
        <div className="flex flex-col gap-5 h-fit w-full md:w-[40%] bg-white -mt-32 md:-mt-40 rounded-2xl p-6 md:p-12">
          <div className="flex items-center text-darkPurple gap-5 text-3xl md:text-5xl font-bold">
            <Image
              src={"/svgs/icon-star.svg"}
              width={30}
              height={30}
              alt="star icon"
            />
            <span>FAQs</span>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center text-base justify-between pt-2 cursor-pointer"
                onClick={() => toggleAnswer(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleAnswer(index);
                }}
              >
                <span className="font-semibold text-darkPurple hover:text-lightPurple">
                  {faq.question}
                </span>
                <Image
                  src={openIndex === index ? "/svgs/icon-minus.svg" : "/svgs/icon-plus.svg"}
                  width={30}
                  height={30}
                  alt="toggle icon"
                />
              </div>
              {openIndex === index && (
                <div>
                  <span className="text-grayishPurple tracking-tight">
                    {faq.answer}
                  </span>
                </div>
              )}
              {index < faqs.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
