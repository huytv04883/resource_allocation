import "../styles/globals.css";
import Header from "../components/layout/Header";
import MainMenu from "../components/layout/MainMenu";
import AppContent from "../components/layout/AppContent";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <AppContent>
        <Component {...pageProps} />
      </AppContent>
      <MainMenu />
    </>
  );
}

export default MyApp;
