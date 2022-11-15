import { Provider } from "react-redux";
import AppContent from "../components/layout/AppContent";
import Header from "../components/layout/Header";
import MainMenu from "../components/layout/MainMenu";
import store from "../redux/store";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppContextProvider } from "../context/appContextProvider";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Provider store={store}>
          <Header />
          <AppContent>
            <Component {...pageProps} />
          </AppContent>
          <MainMenu />
        </Provider>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
