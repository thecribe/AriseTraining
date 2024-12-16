import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const page = ({ params }) => {
  let question_dot = [];
  for (let i = 0; i < 40; i++) {
    question_dot.push(i + 1);
  }

  return (
    <Fragment>
      <div>
        <ul className=" hidden lg:flex gap-2  items-center flex-wrap">
          {question_dot.map((li) => (
            <li
              key={li}
              className="p-2 w-10 h-10 bg-gray-100 text-center rounded-full border border-transparent hover:bg-white hover:border-black hover:border transition_class hover:cursor-pointer"
            >
              {li}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <div className=" flex justify-between items-center my-5 border-y-2 py-4">
            <h3>Question 1</h3>
            <div className=" flex gap-5 justify-center items-center">
              <button className="py-1 px-2 bg-slate-200 hover:cursor-pointer hover:bg-slate-300 transition_class">
                Prev
              </button>
              <button className="py-1 px-2 bg-slate-200 hover:cursor-pointer hover:bg-slate-300 transition_class">
                <Link
                  href={
                    "/exam/" + params.student_id + "/submission_confirmation"
                  }
                >
                  Next
                </Link>
              </button>
            </div>
          </div>
          <div>
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita, beatae distinctio, tenetur perspiciatis iste quis
                quaerat, architecto obcaecati ipsa sequi quod labore quo
                assumenda dolores omnis. Voluptate corrupti consequatur
                distinctio maxime at sed, suscipit, cum iure libero vel ipsum
                asperiores provident quam laboriosam ducimus! Distinctio
                doloribus atque doloremque aspernatur hic.
              </p>
              <div className="flex justify-center items-center my-5">
                <Image
                  src="/next.svg"
                  width={150}
                  height={150}
                  alt={"Question" + "1" + "image"}
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5">Options</h4>
              <div className="flex gap-5 items-center my-3">
                <input type="radio" id="A" name="1" value="A" />
                <label htmlFor="1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, ex.
                </label>
              </div>

              <div className="flex gap-5 items-center my-3">
                <input type="radio" id="A" name="1" value="B" />
                <label htmlFor="1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, ex.
                </label>
              </div>
              <div className="flex gap-5 items-center my-3">
                <input type="radio" id="A" name="1" value="C" />
                <label htmlFor="1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, ex.
                </label>
              </div>
              <div className="flex gap-5 items-center my-3">
                <input type="radio" id="A" name="1" value="D" />
                <label htmlFor="1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, ex.
                </label>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
