// 그룹 정보 조회
export type RootResponse<T> = {
  success: boolean;
  response: T;
  error: null;
};

export interface Response {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: any[];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Content {
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
  sort: any[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
