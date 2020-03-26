export const H1 = ({ children, className = '' }) => (
  <h1 className={` ${className} text-3xl text-titleColor mb-4`}>{children}</h1>
);

export const H2 = ({ children, className = '' }) => (
  <h2 className={`${className} text-2xl text-titleColor mb-2 `}>{children}</h2>
);
