import classes from "./table.module.scss";
import { TableData } from "../../../model";

interface Props {
  table: TableData;
}

export const TableRenderer = ({ table }: Props) => {
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className="heading h6 white">
          {table.columns.map((col) => (
            <th key={col.key} style={{ whiteSpace: "pre-line" }}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={`text-body m white ${classes.tr}`}>
            {table.columns.map((col) => (
              <td key={col.key}>
                {Array.isArray(row[col.key])
                  ? (row[col.key] as string[]).join(", ")
                  : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
