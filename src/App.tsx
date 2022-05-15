import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "router";
import { Toast } from "components";
import { UserProvider, AuthProvider } from "auth/providers";
import { ToastProvider, Web3Provider, PairProvider } from "store/providers";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <UserProvider>
        <ToastProvider>
          <Toast />
          <Web3Provider>
            <AuthProvider>
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
            </AuthProvider>
          </Web3Provider>
        </ToastProvider>
      </UserProvider>
    </div>
  );
};

export default App;
