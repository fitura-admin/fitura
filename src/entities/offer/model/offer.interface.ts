export type TextNode =
  | { type: "paragraph"; content: string }
  | {
      type: "paragraph";
      content: (string | { type: "strong"; content: string })[];
    }
  | {
      type: "list";
      items: (string | { text: string; children?: string[] })[];
    }
  | { type: "table"; tableId: string };

export interface Section {
  id: string;
  title: string;
  level?: 1 | 2 | 3;
  content: TextNode[];
}

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableData {
  id: string;
  columns: TableColumn[];
  rows: Record<string, string | string[]>[];
}

export interface DocumentStructure {
  meta: {
    title: string;
    date: string;
  };
  sections: Section[];
  tables: TableData[];
}
