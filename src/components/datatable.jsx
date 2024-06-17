import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const bundeslandOptions = [
  "Sachsen",
  "Brandenburg",
  "Niedersachsen",
  "Bayern",
  "Thüringen",
  "Hessen",
  "Schleswig-Holstein",
  "Saarland",
  "Nordrhein-Westfalen",
  "Baden-Württemberg",
  "Rheinland-Pfalz",
  "Mecklenburg-Vorpommern",
];
const hofartOptions = [
  "Milchtankstelle",
  "Bauernhof",
  "Bio-Bauernhof",
  "Hofladen",
];
const milchartOptions = ["Kuhmilch"];

function DataTable() {
  const [stations, setStations] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  async function getStations() {
    document.getElementById("filter-btn").classList.add("font-inter-bold");
    document.getElementById("reset-btn").classList.remove("font-inter-bold");
    const { data, error } = await supabase.from("rohmilch").select();
    if (error) {
      console.error(error);
    } else {
      setStations(data || []);
    }
  }

  async function queryData(filter, value) {
    const { data, error } = await supabase
      .from("rohmilch")
      .select()
      .ilike(filter, `%${value}%`);
    if (error) {
      console.error(error);
    } else {
      setStations(data || []);
    }
  }

  function handleFilter() {
    const filterValue = document.getElementById("filter-value").value;
    document.getElementById("filter-btn").classList.remove("font-inter-bold");
    document.getElementById("reset-btn").classList.add("font-inter-bold");
    const inputValue = isSelect
      ? document.getElementById("filter-select").value
      : document.getElementById("filter-input").value;
    queryData(filterValue, inputValue);
  }

  useEffect(() => {
    const inputField = document.getElementById("filter-input");
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleFilter();
      }
    };

    inputField.addEventListener("keydown", handleKeyDown);

    return () => {
      inputField.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleFilterChange(e) {
    const selectedFilter = e.target.value;
    if (
      selectedFilter === "Bundesland" ||
      selectedFilter === "Hofart" ||
      selectedFilter === "Milchart"
    ) {
      setIsSelect(true);
      setSelectOptions(
        selectedFilter === "Bundesland"
          ? bundeslandOptions
          : selectedFilter === "Hofart"
          ? hofartOptions
          : milchartOptions
      );
    } else {
      setIsSelect(false);
    }
  }

  return (
    <>
      <div className="grid grid-rows-2 md:grid-cols-[0.5fr_1fr_auto] md:grid-rows-1 grid-cols-2 mb-2">
        <select
          name="filter"
          id="filter-value"
          className="border border-grey rounded-lg p-1 text-xs md:text-sm"
          onChange={handleFilterChange}
        >
          <option value="Name">Name</option>
          <option value="Anschrift">Anschrift</option>
          <option value="Bundesland">Bundesland</option>
          <option value="Milchart">Milchart</option>
          <option value="Hofart">Hofart</option>
        </select>
        {isSelect ? (
          <select
            id="filter-select"
            className="p-1 border border-grey rounded-lg ml-2 text-xs md:text-sm"
          >
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            id="filter-input"
            className="p-1 border border-grey rounded-lg ml-2 text-xs md:text-sm"
          />
        )}
        <div className="flex align-baseline">
          <button
            className="font-inter-bold px-1 hover:underline text-xs mr-2 md:ml-2 md:text-sm"
            id="filter-btn"
            onClick={handleFilter}
          >
            Filtern
          </button>
          <button
            onClick={getStations}
            className="font-inter hover:underline text-xs md:text-sm"
            id="reset-btn"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="max-h-[60vh] overflow-x-auto">
        {stations.map((station, index) => (
          <div
            key={index}
            className="border border-grey rounded-lg p-2 mb-2 overflow-hidden bg-white"
          >
            <h1 className="font-inter-bold md:text-base text-sm">
              {station.Name}
            </h1>
            <div className="grid grid-rows-[1fr_0.5fr] grid-cols-3 overflow-hidden mt-1 gap-x-6 gap-y-4 md:gap-1 md:items-end md:grid-rows-1 md:grid-cols-[2fr_1.2fr_1fr_1fr_1fr]">
              <div>
                <p className="text-xs text-slate-600">Anschrift</p>
                <p className="text-xs md:text-sm">{station.Anschrift}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Bundesland</p>
                <p className="text-xs md:text-sm">{station.Bundesland}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Milchart</p>
                <p className="text-xs md:text-sm">{station.Milchart}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Hofart</p>
                <p className="text-xs md:text-sm">{station.Hofart}</p>
              </div>
              <div className="md:overflow-hidden flex flex-col">
                <p className="text-xs text-slate-600">Standort</p>
                <a
                  href={station.Standort}
                  target="_blank"
                  className="text-xs md:text-sm hover:underline"
                >
                  {station.Standort}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DataTable;
