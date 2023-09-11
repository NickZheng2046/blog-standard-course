// import Link from "next/link";
// import {useUser} from "@auth0/nextjs-auth0/client";
// import Image from "next/image";
import Image from "next/image";
import HeroImage from '../public/hero.webp';
import { Logo } from "../components/Logo";
import Link from "next/link";

export default function Home() {

  // console.log('User: ',user);

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          The AI-powered blog platform that helps you to write better content in minutes. 
          Get high-quality content written by AI, so you can focus on what matters most.
        </p>
        <Link 
          href="/post/new" 
          className="btn"
          >
          Begin
        </Link>
      </div>
    </div>
  );
}
