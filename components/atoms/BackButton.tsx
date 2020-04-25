export const BackButton = ({ href = '', children, className = '' }) => (
  <div className="p-10">
    <a className={`cursor-pointer text-secondary text-xl font-bold  hover:underline ${className}`} href={href}>
      {children}
    </a>
  </div>
);
