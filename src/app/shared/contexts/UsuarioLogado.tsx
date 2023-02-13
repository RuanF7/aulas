import { createContext } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
}

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC <IUsuarioLogadoProviderProps> = ({ children }) => {
  /*const [nome, setNome] = useState ('');*/

  return (
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario:'Ruan'}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
  
}