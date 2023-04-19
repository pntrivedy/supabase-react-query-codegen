interface ToHookNameArgs {
  operation: string;
  tableName: string;
}

export function toHookName({ operation, tableName }: ToHookNameArgs): string {
  const camelCaseTableName = tableName.replace(/(_\w)/g, (match) =>
    match[1].toUpperCase()
  );

  const formattedTableName =
    camelCaseTableName[0].toUpperCase() + camelCaseTableName.slice(1);

  if (operation !== 'GetAll') {
    return `use${operation}${formattedTableName.slice(0, -1)}`;
  } else {
    return `use${operation}${formattedTableName}`;
  }
}