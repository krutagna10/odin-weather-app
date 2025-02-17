import { ThemeProvider } from "./components/theme-provider";
import Giphy from "./components/giphy";
import Weather from "./components/weather";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Weather />
        <Giphy />
      </main>
    </ThemeProvider>
  );
}

export default App;
