"use client";
import { useState } from "react";
import CommentsCard from "../cards/comments-card";
import Button from "@/ui/Button";
import Rating from "../general/Rating";
import ReviewsCard from "../cards/reviews-card";

type tab = "comments" | "reviews";

function Extradetails() {
  const [currTab, setCurrTab] = useState<tab>("comments");

  return (
    <div className="w-full">
      {/*tab */}
      <div className="grid grid-cols-2 w-full md:max-w-8/10 mx-auto border-b">
        <div
          onClick={() => setCurrTab("comments")}
          className={`text-center py-2 md:py-4 duration-300 ease-in-out relative hover:bg-primary/30 cursor-pointer ${
            currTab === "comments"
              ? "before:absolute before:left-0 before:w-full before:bottom-0 before:bg-primary before:h-[1px] before:translate-y-[1px] text-primary font-semibold"
              : ""
          }`}
        >
          Comments
        </div>
        <div
          onClick={() => setCurrTab("reviews")}
          className={`text-center py-2 md:py-4 duration-300 ease-in-out hover:bg-primary/30  relative  cursor-pointer ${
            currTab === "reviews"
              ? "before:absolute before:left-0 before:w-full before:bottom-0 before:bg-primary before:h-[1px] before:translate-y-[1px] text-primary font-semibold"
              : ""
          }`}
        >
          Ratings & Reviews
        </div>
      </div>
      {/*main content */}
      <div className="py-8 px-3">
        {currTab === "comments" ? (
          <ul className="space-y-5 w-full md:max-w-7/10 mx-auto">
            <>
              {Array.from({ length: 5 }).map((_, i) => (
                <CommentsCard
                  text='"I absolutely love this shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the "I absolutely love this shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt." attention to detail. It&apos;s become my favorite go-to shirt."'
                  key={i}
                />
              ))}
              <Button
                config={{
                  className: "rounded-lg! mt-2",
                }}
                size="full"
                variant="primary_outlined"
              >
                See more Comments
              </Button>
            </>
          </ul>
        ) : (
          <div className="space-y-5 w-full md:max-w-8/10 mx-auto">
            <>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-medium text-gray-700">
                  3.5
                </p>
                <Rating />
                <p className="text-xs font-medium text-gray-400">
                  Based on 12 reviews
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ReviewsCard
                    text='"I absolutely love this shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the "I absolutely love this shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt." attention to detail. It&apos;s become my favorite go-to shirt."'
                    key={i}
                  />
                ))}
              </ul>
              <Button
                config={{
                  className: "rounded-lg! mt-2",
                }}
                size="full"
                variant="primary_outlined"
              >
                See more Reviews
              </Button>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default Extradetails;
