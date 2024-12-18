export type Pagination = {
  current: number
  previous: number | null
  next: number | null
  limitValue: number
  pages: number
  count: number
}

export type PaginationResponse<T> = {
  records: Array<T>
  pagination: Pagination
}
