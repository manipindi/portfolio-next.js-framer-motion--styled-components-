import Explore from "@/components/explore";
import IntroSection from "@/components/intro";
import InformationWrapper from "components/information/index";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const DynamicIntro = dynamic(() => import("components/intro"), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <div>
      <DynamicIntro />
      <InformationWrapper />
      <Explore />
    </div>
  );
}
