import "./App.css";
import Discovery from "./components/Discovery";
import schema from "./config/schema";
import DataFlow from "./components/DataFlow";

// let headers = localStorage.getItem("headers");
// let data = localStorage.getItem("data");

// if (!headers) {
//   headers = ["Title", "Genre", "Year"];
//   data = [
//     ["Poor Things", "Comedy", "2023"],
//     ["The Bear", "Comedy", "2023"],
//     ["Killers of the Flower Moon", "Drama", "2023"],
//     ["The Boy and the Heron ", "Animated", "2023"],
//     ["Guillermo del Toro's Pinocchio", "Animated", "2022"],
//     ["The Banshees of Inisherin", "Comedy", "2022"],
//     ["The Fabelmans", "Drama", "2022"],
//     ["Everything Everywhere All at Once ", "Comedy", "2022"],
//   ];
// }

const isDiscovery = window.location.pathname.replace(/\//g, "") === "discovery";
localStorage.clear();
let data = JSON.parse(localStorage.getItem("data"));
if (!data) {
  data = [{}];
  Object.keys(schema).forEach((key) => (data[0][key] = schema[key].samples[0]));
}

function App() {
  if (isDiscovery) {
    return <Discovery />;
  }
  return <DataFlow schema={schema} initialData={data} />;
}

export default App;
