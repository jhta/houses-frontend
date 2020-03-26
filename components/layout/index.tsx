import { Header, Footer } from '../organisms';

export const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);
