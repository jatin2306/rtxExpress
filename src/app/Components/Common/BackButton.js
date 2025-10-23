"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const BackButton = ({ className = "" }) => {
  const router = useRouter( );
  return (
    <Button
      onClick={() => router.back()}
      className={`p-2 rounded-full bg-main hover:bg-[#9fffe0] transition ${className}`}
    >
      <ArrowLeft className="w-5 h-5 text-[#004d4d]" />
    </Button>
  );
};

export default BackButton;


