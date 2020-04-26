const TableHeader = ({ headers = [] }) =>
  Boolean(headers.length) && (
    <thead className="text-white">
      <tr className="bg-primary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
        {headers.map((h) => (
          <th key={h} className="p-3 text-left">
            {h}
          </th>
        ))}
      </tr>
    </thead>
  );

const TableCol = ({ label = '', styled = '', link = null }) => (
  <td className="border-gray-6 border hover:bg-gray-100 p-3 text-textColor">
    {link ? (
      <a className="text-third underline" href={link}>
        {label}
      </a>
    ) : (
      <span className={styled}>{label}</span>
    )}
  </td>
);

const TableRow = ({ columns = [] }) =>
  Boolean(columns.length) && (
    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      {columns.map((c, index) => (
        <TableCol key={index} {...c} />
      ))}
    </tr>
  );

export const Table = ({ headers = [], rows = [] }) => {
  return (
    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <TableHeader headers={headers} />
      <tbody className="flex-1 sm:flex-none">
        {rows.map((r, index) => (
          <TableRow key={index} columns={r} />
        ))}
      </tbody>
      <style jsx>{`
        @media (min-width: 640px) {
          table {
            display: inline-table !important;
          }

          thead tr:not(:first-child) {
            display: none;
          }
        }

        td:not(:last-child) {
          border-bottom: 0;
        }

        th:not(:last-child) {
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </table>
  );
};
