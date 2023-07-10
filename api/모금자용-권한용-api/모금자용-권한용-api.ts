/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */
import { useQuery, useMutation } from 'react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from 'react-query';
import type {
  ApiResultPagePageImageGet,
  GetBoardsParams,
  ApiResultBoardFundraiserImagePlanResponse,
  Create1Body,
  ApiResultBoardYearMonthlyAmounts,
} from '../../orval/model';
import { customInstance } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;

/**
 * 모금자 이메일, 모금자가 작성한 게시글 가져오기
 * @summary 모금자 프로필 - 쿼리 스트링입니다! 추가로 인증인가 유저정보조회를 불러오세요
 */
export const getBoards = (
  params: GetBoardsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiResultPagePageImageGet>(
    { url: `/api/v1/fundraisers/boards`, method: 'get', params, signal },
    options
  );
};

export const getGetBoardsQueryKey = (params: GetBoardsParams) =>
  [`/api/v1/fundraisers/boards`, ...(params ? [params] : [])] as const;

export const getGetBoardsQueryOptions = <TData = Awaited<ReturnType<typeof getBoards>>, TError = unknown>(
  params: GetBoardsParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoards>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getBoards>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBoardsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoards>>> = ({ signal }) =>
    getBoards(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetBoardsQueryResult = NonNullable<Awaited<ReturnType<typeof getBoards>>>;
export type GetBoardsQueryError = unknown;

/**
 * @summary 모금자 프로필 - 쿼리 스트링입니다! 추가로 인증인가 유저정보조회를 불러오세요
 */
export const useGetBoards = <TData = Awaited<ReturnType<typeof getBoards>>, TError = unknown>(
  params: GetBoardsParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoards>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetBoardsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 모금자 게시판 생성
 */
export const create1 = (create1Body: Create1Body, options?: SecondParameter<typeof customInstance>) => {
  const formData = new FormData();

  formData.append('boardCreateRequest', new Blob([JSON.stringify(create1Body.boardCreateRequest)]));
  formData.append('img', create1Body.img);
  formData.append('planCreatesRequest', new Blob([JSON.stringify(create1Body.planCreatesRequest)]));

  return customInstance<ApiResultBoardFundraiserImagePlanResponse>(
    {
      url: `/api/v1/fundraisers/boards`,
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options
  );
};

export const getCreate1MutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof create1>>, TError, { data: Create1Body }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<Awaited<ReturnType<typeof create1>>, TError, { data: Create1Body }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof create1>>, { data: Create1Body }> = props => {
    const { data } = props ?? {};

    return create1(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type Create1MutationResult = NonNullable<Awaited<ReturnType<typeof create1>>>;
export type Create1MutationBody = Create1Body;
export type Create1MutationError = unknown;

/**
 * @summary 모금자 게시판 생성
 */
export const useCreate1 = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof create1>>, TError, { data: Create1Body }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getCreate1MutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 모금자 프로필에서 상세 조회시 월마다 금액 확인
 * @summary 게시판 상세 조회(결제 확인)
 */
export const getBoard = (boardId: number, options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => {
  return customInstance<ApiResultBoardYearMonthlyAmounts>(
    { url: `/api/v1/fundraisers/boards/${boardId}`, method: 'get', signal },
    options
  );
};

export const getGetBoardQueryKey = (boardId: number) => [`/api/v1/fundraisers/boards/${boardId}`] as const;

export const getGetBoardQueryOptions = <TData = Awaited<ReturnType<typeof getBoard>>, TError = unknown>(
  boardId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBoardQueryKey(boardId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoard>>> = ({ signal }) =>
    getBoard(boardId, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!boardId, ...queryOptions };
};

export type GetBoardQueryResult = NonNullable<Awaited<ReturnType<typeof getBoard>>>;
export type GetBoardQueryError = unknown;

/**
 * @summary 게시판 상세 조회(결제 확인)
 */
export const useGetBoard = <TData = Awaited<ReturnType<typeof getBoard>>, TError = unknown>(
  boardId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBoard>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetBoardQueryOptions(boardId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
