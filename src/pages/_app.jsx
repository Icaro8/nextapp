import "../styles/globals.scss";
import AuthContextProvider from "../contexts/useLoginRegister";
import ContextResponse from "../contexts/useSetResponse";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ContextResponse>
        <Component {...pageProps} />
      </ContextResponse>
    </AuthContextProvider>
  );
}

export default MyApp;
