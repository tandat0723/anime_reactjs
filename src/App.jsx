import "./App.css";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="max-w-7xl p-6 text-white mx-auto">
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
