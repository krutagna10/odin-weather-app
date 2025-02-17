import { ThemeProvider } from "./components/theme-provider";
import Giphy from "./components/giphy";
import Weather from "./components/weather";
import MDN from "./components/mdn";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        {/* <Weather /> */}
        <Giphy />
        {/* <MDN /> */}
      </main>
    </ThemeProvider>
  );
}

export default App;
