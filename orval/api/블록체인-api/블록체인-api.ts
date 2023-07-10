/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */
import {
  useQuery,
  useMutation
} from 'react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  ChainCreateRequest,
  ApiResultChainResponse
} from '../../model'
import { customInstance } from '../../../api/axios';


// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const sendTransaction = (
    chainCreateRequest: ChainCreateRequest,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<void>(
      {url: `/api/v1/chains`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: chainCreateRequest
    },
      options);
    }
  


export const getSendTransactionMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof sendTransaction>>, TError,{data: ChainCreateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof sendTransaction>>, TError,{data: ChainCreateRequest}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof sendTransaction>>, {data: ChainCreateRequest}> = (props) => {
          const {data} = props ?? {};

          return  sendTransaction(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SendTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof sendTransaction>>>
    export type SendTransactionMutationBody = ChainCreateRequest
    export type SendTransactionMutationError = unknown

    export const useSendTransaction = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof sendTransaction>>, TError,{data: ChainCreateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {
    
      const mutationOptions = getSendTransactionMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    export const getTransaction = (
    key: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ApiResultChainResponse>(
      {url: `/api/v1/chains/${key}`, method: 'get', signal
    },
      options);
    }
  

export const getGetTransactionQueryKey = (key: string,) => [`/api/v1/chains/${key}`] as const;
  

    
export const getGetTransactionQueryOptions = <TData = Awaited<ReturnType<typeof getTransaction>>, TError = unknown>(key: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTransactionQueryKey(key);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTransaction>>> = ({ signal }) => getTransaction(key, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(key), ...queryOptions}}

export type GetTransactionQueryResult = NonNullable<Awaited<ReturnType<typeof getTransaction>>>
export type GetTransactionQueryError = unknown

export const useGetTransaction = <TData = Awaited<ReturnType<typeof getTransaction>>, TError = unknown>(
 key: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTransactionQueryOptions(key,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

