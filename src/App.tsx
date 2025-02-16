import { ThemeProvider } from "./components/theme-provider";
import Card from "./components/card/card";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <main>
      <h1>Odin Weather App</h1>
    <Card />
    </main>
    </ThemeProvider>
  );
}

export default App;
