// 게시판 전체 조회
export type RootResponse<T> = {
  error: any;
  response: T;
  success: boolean;
};
export interface Response {
  content: AllPostResponse[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface AllPostResponse {
  id: number;
  title: string;
  fundraiserId: number;
  fundraiserName: string;
  percent: number;
  imageId: number;
  imageUrl: string;
  imageName: string;
  createdAt: Date;
  endAt: Date;
  dday: number;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

// 게시판 상세 조회
export interface DetailPostResponse {
  id: number;
  title: string;
  percent: string;
  subTitle: string;
  content: string;
  targetAmount: number;
  currentAmount: number;
  endAt: Date;
  createAt: Date;
  fundraiserId: number;
  fundraiserName: string;
  profileName: string;
  profileUrl: string;
  planResponse: PlanResponse[];
  heartResponses: any[];
  imageOriginalName: string;
  imageUrl: string;
}

export interface PlanResponse {
  id: number;
  reason: string;
  amount: number;
}
