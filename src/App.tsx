import { ThemeProvider } from "./components/theme-provider";
import Weather from "./components/weather";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Weather />
      </main>
    </ThemeProvider>
  );
}

export default App;
