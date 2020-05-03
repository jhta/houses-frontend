import { Header, Footer } from '../organisms';

export const Layout = ({ children, isAuth = false, name = '' }) => (
  <div className="flex flex-col h-screen">
    <Header isAuth={isAuth} name={name} />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);
