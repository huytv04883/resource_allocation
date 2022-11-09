import { Provider } from "react-redux";
import AppContent from "../components/layout/AppContent";
import Header from "../components/layout/Header";
import MainMenu from "../components/layout/MainMenu";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Provider store={store}>
      <Header />
      <AppContent>
        <Component {...pageProps} />
      </AppContent>
      <MainMenu />
    </Provider>
  );
}

export default MyApp;
