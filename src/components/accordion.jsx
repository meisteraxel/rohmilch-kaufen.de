import React, { useState } from "react";
import PlusIcon from "../assets/images/plus-icon.png";
import "../index.css";

function Accordion() {
  const data = [
    {
      question: "Was ist Rohmilch?",
      answer:
        "Rohmilch ist unbehandelte Milch, die direkt von Kühen, Schafen, und Ziegen kommt und nicht pasteurisiert oder homogenisiert wurde. Sie enthält daher natürliche Bakterien und Enzyme.",
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
    <div className="accordion flex flex-col gap-2">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => toggle(index)}
          className="item rounded-lg bg-white p-5 font-inter cursor-pointer shadow-lg"
        >
          <div className="title font-inter-bold text-base flex justify-between items-center mb-3">
            <h2>{item.question}</h2>
            <img
              src={PlusIcon}
              className={
                selected === index
                  ? "text-2xl rotate-45 transition-all w-4"
                  : "text-2xl transition-all w-4"
              }
            />
          </div>
          <div className={selected === index ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
