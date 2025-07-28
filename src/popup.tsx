import type React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";

export default function Popup({ ...props }: React.ComponentProps<"div">) {
  return (
    <>
      {createPortal(
        <div
          {...props}
          className={`backdrop-blur-xs flex gap-4 z-[9999] text-gray-50 text-2xl flex-col absolute top-0 inset-0  justify-center items-center ${props.className}`}
        >
          <div className="border px-4 py-2 rounded-lg animate-appear relative">
            <p>Exam is completed</p>
            <Link to={"/"}>Go to home screen</Link>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
