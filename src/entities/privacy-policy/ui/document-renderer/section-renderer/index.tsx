import classes from "./section.module.scss";
import { ElementType, Fragment } from "react";
import { Section, TableData } from "../../../model";
import { TableRenderer } from "../table-renderer";
import { linkify } from "../linkify";

interface Props {
  section: Section;
  tables: TableData[];
}

export const SectionRenderer = ({ section, tables }: Props) => {
  const HeadingTag = `h${section.level || 2}` as ElementType;

  return (
    <section className={classes.section}>
      <HeadingTag className={`heading h6 white ${classes.heading}`}>
        {section.title}
      </HeadingTag>

      {section.content.map((node, index) => {
        if (node.type === "paragraph") {
          if (Array.isArray(node.content)) {
            return (
              <p
                key={index}
                className={`text-body m white ${classes.paragraph}`}
              >
                {node.content.map((item, i) =>
                  typeof item === "string" ? (
                    <Fragment key={i}>{linkify(item)}</Fragment>
                  ) : (
                    <strong key={i}>{linkify(item.content)}</strong>
                  ),
                )}
              </p>
            );
          }

          return (
            <p key={index} className={`text-body m white ${classes.paragraph}`}>
              {linkify(node.content)}
            </p>
          );
        }

        if (node.type === "list") {
          return (
            <ul key={index} className={classes.list}>
              {node.items.map((item, i) => {
                if (typeof item === "string") {
                  return (
                    <li
                      key={i}
                      className={`${classes.paragraph} text-body m white`}
                    >
                      {linkify(item)}
                    </li>
                  );
                }

                return (
                  <li
                    key={i}
                    className={`${classes.paragraph} text-body m white`}
                  >
                    {linkify(item.text)}
                    {item.children && (
                      <ul className={classes.list}>
                        {item.children.map((child, ci) => (
                          <li
                            key={ci}
                            className={`${classes.paragraph} text-body m white`}
                          >
                            {linkify(child)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        }

        if (node.type === "table") {
          const table = tables.find((t) => t.id === node.tableId);
          if (!table) return null;
          return <TableRenderer key={index} table={table} />;
        }

        return null;
      })}
    </section>
  );
};
