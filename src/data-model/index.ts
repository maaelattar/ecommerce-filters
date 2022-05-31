export type Filters = {
  [title: string]: Option[];
};
export type FormOptions = {
  title: string;
  checkedOptions: Option[];
};

export type FormattedFiltersData = [string, Option[]][];

export type Option = {
  id: string;
  title: string;
};
