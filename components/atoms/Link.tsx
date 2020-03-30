const A = ({ href, children, className = '', ...rest }) => (
  <a className={`text-gray-2 text-xs hover:underline ${className}`} href={href} {...rest}>
    {children}
  </a>
);

export default A;
