import { ThemeProvider } from "./components/theme-provider";
import Giphy from "./components/giphy";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Giphy />
      </main>
    </ThemeProvider>
  );
}

export default App;
