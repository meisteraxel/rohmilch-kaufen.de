import React, { useState } from "react";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import GrasIcon from "../assets/images/gras-icon.svg";
import BubbleIcon from "../assets/images/gedanken.svg";
import "../index.css";

function Faq() {
  const data = [
    {
      question: "Was ist Rohmilch?",
      answer:
        "Rohmilch ist unbehandelte Milch, die direkt von der Kuh/Schaf/Ziege kommt und nicht pasteurisiert oder homogenisiert wurde. Sie enthält daher natürliche Bakterien und Enzyme.",
    },
    {
      question: "Wie lagert man Rohmilch?",
      answer:
        "Lagere Rohmilch immer im Kühlschrank bei einer Temperatur von unter 4°C. Verwende am besten einen luftdichten Behälter, um sie vor Fremdgerüchen zu schützen.",
    },
    {
      question: "Wie lange ist Rohmilch trinkbar?",
      answer:
        "Rohmilch sollte innerhalb weniger Tage nach dem Kauf verzehrt werden, da sie schneller verdirbt als pasteurisierte Milch. Überprüfe regelmäßig den Geruch und Geschmack, um ihre Frische zu gewährleisten.",
    },
    {
      question: "Warum ist Rohmilch gesund?",
      answer:
        "Rohmilch enthält viele natürliche Nährstoffe wie Vitamine, Mineralien und gesunde Bakterienkulturen, die die Darmflora unterstützen können. Einige Menschen schwören auf den Geschmack und die ernährungsphysiologischen Vorteile von Rohmilch.",
    },
    {
      question: "Ist Rohmilch sicher zu trinken?",
      answer:
        "Rohmilch kann Krankheitserreger wie Salmonellen oder E.coli enthalten, daher ist es wichtig, Rohmilch von zuverlässigen Quellen zu beziehen und sie sicher zu lagern und zu handhaben.",
    },
    {
      question:
        "Kann ich Rohmilch für die Zubereitung von Käse oder Joghurt verwenden?",
      answer:
        "Ja, viele Käse- und Joghurtliebhaber bevorzugen die Verwendung von Rohmilch für die Herstellung dieser Produkte. Es ist jedoch wichtig, hygienische Standards einzuhalten, um das Risiko von Kontaminationen zu minimieren.",
    },
  ];

  const [selected, setSelected] = useState(0);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-10 py-5 flex flex-col items-center">
        <h1 className="text-6xl text-center font-inter-black mb-10 mt-20">
          FAQ
          <br />
          <span className="font-pacifico mt-2 text-5xl">
            Fragen & Antworten
          </span>
        </h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src={GrasIcon}
            alt=""
            className="w-18 h-18 absolute -z-10 -left-12 -top-12"
          />
          <img
            src={BubbleIcon}
            alt=""
            className="w-24 h-24 absolute -z-10 -right-[95px] -top-[95px]"
          />
          <div className="bg-[#fafafa] p-5 rounded-xl h-screen">
            <div className="accordion flex flex-col gap-2">
              {data.map((item, index) => (
                <div
                  onClick={() => toggle(index)}
                  className="item rounded-lg bg-white p-5 font-inter cursor-pointer"
                >
                  <div className="title font-inter-bold text-base flex justify-between items-center mb-3">
                    <h2>{item.question}</h2>
                    <span>{selected === index ? "-" : "+"}</span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
