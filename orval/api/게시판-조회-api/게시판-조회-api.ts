/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */
import {
  useQuery
} from 'react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  ApiResultPagePageImageGet,
  GetBoards1Params,
  ImagePlanHeartGet,
  GetBoards2Params
} from '../../model'
import { customInstance } from '../../../api/axios';


// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * @summary 모금자 게시판 전체 조회 - page 0부터 시작 - 쿼리 스트링 입니다!
 */
export const getBoards1 = (
    params: GetBoards1Params,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ApiResultPagePageImageGet>(
      {url: `/api/v1/boards`, method: 'get',
        params, signal
    },
      options);
    }
  

export const getGetBoards1QueryKey = (params: GetBoards1Params,) => [`/api/v1/boards`, ...(params ? [params]: [])] as const;
  

    
export const getGetBoards1QueryOptions = <TData = Awaited<ReturnType<typeof getBoards1>>, TError = unknown>(params: GetBoards1Params, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoards1>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof getBoards1>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetBoards1QueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoards1>>> = ({ signal }) => getBoards1(params, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetBoards1QueryResult = NonNullable<Awaited<ReturnType<typeof getBoards1>>>
export type GetBoards1QueryError = unknown

/**
 * @summary 모금자 게시판 전체 조회 - page 0부터 시작 - 쿼리 스트링 입니다!
 */
export const useGetBoards1 = <TData = Awaited<ReturnType<typeof getBoards1>>, TError = unknown>(
 params: GetBoards1Params, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoards1>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetBoards1QueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary 모금자 게시판 하나 조회
 */
export const getBoard1 = (
    boardId: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ImagePlanHeartGet>(
      {url: `/api/v1/boards/${boardId}`, method: 'get', signal
    },
      options);
    }
  

export const getGetBoard1QueryKey = (boardId: number,) => [`/api/v1/boards/${boardId}`] as const;
  

    
export const getGetBoard1QueryOptions = <TData = Awaited<ReturnType<typeof getBoard1>>, TError = unknown>(boardId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoard1>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof getBoard1>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetBoard1QueryKey(boardId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoard1>>> = ({ signal }) => getBoard1(boardId, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(boardId), ...queryOptions}}

export type GetBoard1QueryResult = NonNullable<Awaited<ReturnType<typeof getBoard1>>>
export type GetBoard1QueryError = unknown

/**
 * @summary 모금자 게시판 하나 조회
 */
export const useGetBoard1 = <TData = Awaited<ReturnType<typeof getBoard1>>, TError = unknown>(
 boardId: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoard1>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetBoard1QueryOptions(boardId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * 모금자가 작성한 게시글 가져오기
 * @summary 모금자 글쓴이 프로필 조회 - 쿼리 스트링입니다!
 */
export const getBoards2 = (
    fundraiserId: number,
    params: GetBoards2Params,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ApiResultPagePageImageGet>(
      {url: `/api/v1/boards/fundraisers/${fundraiserId}`, method: 'get',
        params, signal
    },
      options);
    }
  

export const getGetBoards2QueryKey = (fundraiserId: number,
    params: GetBoards2Params,) => [`/api/v1/boards/fundraisers/${fundraiserId}`, ...(params ? [params]: [])] as const;
  

    
export const getGetBoards2QueryOptions = <TData = Awaited<ReturnType<typeof getBoards2>>, TError = unknown>(fundraiserId: number,
    params: GetBoards2Params, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoards2>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof getBoards2>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetBoards2QueryKey(fundraiserId,params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getBoards2>>> = ({ signal }) => getBoards2(fundraiserId,params, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(fundraiserId), ...queryOptions}}

export type GetBoards2QueryResult = NonNullable<Awaited<ReturnType<typeof getBoards2>>>
export type GetBoards2QueryError = unknown

/**
 * @summary 모금자 글쓴이 프로필 조회 - 쿼리 스트링입니다!
 */
export const useGetBoards2 = <TData = Awaited<ReturnType<typeof getBoards2>>, TError = unknown>(
 fundraiserId: number,
    params: GetBoards2Params, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getBoards2>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetBoards2QueryOptions(fundraiserId,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

