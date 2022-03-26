import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider, AuthProvider } from "auth/providers";
import { ToastProvider, Web3Provider } from "store/providers";
import { AppRouter } from "router";
import "./App.css";
import { Toast } from "components";

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
