import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constant";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback Your Dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review your submission and get AI-Powerd Feedback.</h2>
      </div>
    </section>

    {resumes}

  </main>
}
