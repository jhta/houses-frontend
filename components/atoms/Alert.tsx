export const Alert = ({ message, title = 'Error' }) => (
  <div role="alert" className="absolute left-0 ml-6 bottom-0 mb-10">
    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">{title}</div>
    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{message}</p>
    </div>
  </div>
);
