export const BackButton = ({ href = '', children, className = '' }) => (
  <div className="p-10">
    <a className={`text-gray-2 text-xs cursor-pointer ${className}`} href={href}>
      <div className="flex items-center">
        <h1 className="text-secondary text-xl font-bold">
          <label className="text-xl">{'<'}</label> {children}
        </h1>
      </div>
    </a>
  </div>
);
