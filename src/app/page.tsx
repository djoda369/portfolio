import Image from "next/image";
import styles from "./page.module.scss";
import HeroHome from "@/components/pages/Home/Hero/Hero";
import Skills from "@/components/pages/Home/Skills/Index";
import MyStory from "@/components/pages/Home/MyStory/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome />
      <Skills />
      <MyStory />
    </main>
  );
}
