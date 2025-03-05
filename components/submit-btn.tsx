import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn({ className = "" }: { className?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-indigo-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-indigo-800 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 ${className}`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
