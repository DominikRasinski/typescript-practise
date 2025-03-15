// Template literal Type pozwala nam na stworzenie wariacji z unii typow

type ReadPermission = "READ" | "NO_READ";
type WritePermission = "WRITE" | "NO_WRITE";

type TemplateLiteralType = `${ReadPermission}_${WritePermission}`;
