import { Header, Footer } from '../organisms';

export const Layout = ({ children, isAuth = false }) => (
  <div className="flex flex-col h-screen">
    <Header isAuth={isAuth} />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);
