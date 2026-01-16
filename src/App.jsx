import "./App.css";
import CharacterList from "./components/CharacterList";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="max-w-7xl p-6 text-white mx-auto mt-15">
        <Content />
        <CharacterList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
