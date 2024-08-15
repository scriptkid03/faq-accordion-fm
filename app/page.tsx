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
        "Frontend Mentor provides challenges that you can work on and submit for review. You get feedback from the community to help you improve.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Frontend Mentor provides challenges that you can work on and submit for review. You get feedback from the community to help you improve.",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "Frontend Mentor provides challenges that you can work on and submit for review. You get feedback from the community to help you improve.",
    },
    {
      question: "How does Frontend Mentor work?",
      answer:
        "Frontend Mentor provides challenges that you can work on and submit for review. You get feedback from the community to help you improve.",
    },
  ];

  return (
    <main className="flex flex-col h-screen">
      <div className="h-[65%] w-full bg-header-pattern bg-cover bg-center">

      </div>
      <div className="flex justify-center bg-lightPink w-full h-full">
        <div className="flex flex-col gap-5 w-[40%] h-[120%] bg-white -mt-40 rounded-2xl p-12">
          <div className="flex items-center text-darkPurple gap-5 text-5xl font-bold">
            <Image
              src={"/svgs/icon-star.svg"}
              width={40}
              height={40}
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
              <hr />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
