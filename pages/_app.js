import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import AppContent from "../components/layout/AppContent";
import Header from "../components/layout/Header";
import MainMenu from "../components/layout/MainMenu";
import { AppContextProvider } from "../context/appContextProvider";
import store from "../redux/store";
import "../styles/globals.css";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

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
