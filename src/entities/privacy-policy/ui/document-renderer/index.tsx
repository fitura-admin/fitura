import { DocumentStructure } from "../../model";
import { SectionRenderer } from "./section-renderer";

interface Props {
  document: DocumentStructure;
}

export const DocumentRenderer = ({ document }: Props) => {
  return (
    <>
      {document.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          tables={document.tables}
        />
      ))}
    </>
  );
};
