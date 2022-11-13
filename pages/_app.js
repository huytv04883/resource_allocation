import { Provider } from "react-redux";
import AppContent from "../components/layout/AppContent";
import Header from "../components/layout/Header";
import MainMenu from "../components/layout/MainMenu";
import store from "../redux/store";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
        <MainMenu />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
