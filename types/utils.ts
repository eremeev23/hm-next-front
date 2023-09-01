export interface DefaultResponse<T> {
  results: T[];
  limit: number;
}

export type LinkType = {
  href: string,
  title?: string,
  iconName?: string
}
