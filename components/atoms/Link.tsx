const A = ({ href, children, className = '' }) => (
  <a className={`text-gray-2 text-xs hover:underline ${className}`} href={href}>
    {children}
  </a>
);

export default A;
