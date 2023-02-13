import { Routes1 } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes1 />
    </UsuarioLogadoProvider>
    
  );
}
