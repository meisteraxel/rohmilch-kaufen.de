import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import "../index.css";

function Form(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    state: "",
    location: "",
    milkType: "",
    farmType: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        setTimeout(() => {
          props.toggleForm();
        }, 500);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [props]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.toggleForm();
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("info-text").textContent =
      "Danke für deinen Vorschlag! Wir prüfen ihn und wenn alles passt fügen wir ihn hinzu :)";
    updateStations(formData);
    setFormData({
      name: "",
      address: "",
      state: "",
      location: "",
      milkType: "",
      farmType: "",
    });
  };

  async function updateStations(formData) {
    try {
      const { data, error } = await supabase.from("rohmilch-inputs").insert([
        {
          Name: formData.name,
          Anschrift: formData.address,
          Bundesland: formData.state,
          Milchart: formData.milkType,
          Hofart: formData.farmType,
          Standort: formData.location,
        },
      ]);

      if (error) {
        console.error(error);
      }
      document.getElementById("info-text").textContent =
        "Danke für deinen Vorschlag! Wir prüfen ihn und wenn alles passt fügen wir ihn hinzu :)";
    } catch (error) {
      document.getElementById("info-text").textContent =
        "Beim Speichern ist ein Fehler aufgetreten. Bitte versuche es erneut.";
    }
  }

  const handleReset = () => {
    document.getElementById("info-text").textContent =
      "Natürlich haben wir nicht alle Rohmilchstationen im Blick. Wenn ihr welche kennt, fügt sie gerne hinzu! :)";
    setFormData({
      name: "",
      address: "",
      state: "",
      location: "",
      milkType: "",
      farmType: "",
    });
  };

  return (
    <div
      id="popup"
      className={`fixed inset-0 flex items-center justify-center z-50 px-2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div
        className={`container relative max-w-5xl flex flex-col items-center bg-white p-6 rounded shadow-sm z-10 transition-all duration-500 ${
          isVisible ? "bottom-0" : "-bottom-[1000px]"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full border rounded h-[70vh] font-inter p-10 flex flex-col justify-evenly overflow-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Station hinzufügen</h2>
          <p className="mb-4" id="info-text">
            Natürlich haben wir nicht alle Rohmilchstationen im Blick. Wenn ihr
            welche kennt, fügt sie gerne hinzu! :)
          </p>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name der Station <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">
              Anschrift <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="z.B. Muhweg 56A, 45678 Kuhdorf"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-gray-700 mb-2">
                Bundesland <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Bitte wählen</option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bayern">Bayern</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Hessen">Hessen</option>
                <option value="Mecklenburg-Vorpommern">
                  Mecklenburg-Vorpommern
                </option>
                <option value="Niedersachsen">Niedersachsen</option>
                <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                <option value="Saarland">Saarland</option>
                <option value="Sachsen">Sachsen</option>
                <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thüringen">Thüringen</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-gray-700 mb-2">
                Standort (Google Maps Link)
              </label>
              <input
                type="url"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="milkType" className="block text-gray-700 mb-2">
                Milchart <span className="text-red-500">*</span>
              </label>
              <select
                id="milkType"
                name="milkType"
                value={formData.milkType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Bitte wählen</option>
                <option value="Kuhmilch">Kuhmilch</option>
                <option value="Ziegenmilch">Ziegenmilch</option>
                <option value="Schafmilch">Schafmilch</option>
              </select>
            </div>

            <div>
              <label htmlFor="farmType" className="block text-gray-700 mb-2">
                Hofart <span className="text-red-500">*</span>
              </label>
              <select
                id="farmType"
                name="farmType"
                value={formData.farmType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Bitte wählen</option>
                <option value="Milchtankstelle">Milchtankstelle</option>
                <option value="Bauernhof">Bauernhof</option>
                <option value="Bio-Bauernhof">Bio-Bauernhof</option>
                <option value="Hofladen">Hofladen</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button type="button" onClick={handleReset} className="underline">
              Formular löschen
            </button>
            <button
              type="submit"
              className="border-[3px] px-4 py-3 border-black font-inter-bold w-40 cta-button"
            >
              Absenden
            </button>
          </div>
        </form>
        <button
          onClick={handleClose}
          className="border-[3px] px-4 py-3 mt-6 border-black font-inter-bold w-40 cta-button"
        >
          Schliessen
        </button>
      </div>
    </div>
  );
}

export default Form;
