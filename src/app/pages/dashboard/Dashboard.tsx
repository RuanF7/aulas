import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    return (
        <div>
            <p>{usuarioLogadoContext.nomeDoUsuario}</p>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
        </div>
    );
}