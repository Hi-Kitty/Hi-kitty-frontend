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
  ApiResultUserResponse,
  UserCreateRequest,
  ApiResultLoginResponse,
  LoginRequest,
  VerifyEmailParams,
  ApiResultBoolean,
  ExistsByEmailParams
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
 * @summary 회원가입
 */
export const create = (
    userCreateRequest: UserCreateRequest,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<ApiResultUserResponse>(
      {url: `/api/v1/users`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: userCreateRequest
    },
      options);
    }
  


export const getCreateMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: UserCreateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: UserCreateRequest}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof create>>, {data: UserCreateRequest}> = (props) => {
          const {data} = props ?? {};

          return  create(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type CreateMutationResult = NonNullable<Awaited<ReturnType<typeof create>>>
    export type CreateMutationBody = UserCreateRequest
    export type CreateMutationError = unknown

    /**
 * @summary 회원가입
 */
export const useCreate = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof create>>, TError,{data: UserCreateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {
    
      const mutationOptions = getCreateMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * 이메일과 비밀번호를 입력하세요
 * @summary 로그인
 */
export const login = (
    loginRequest: LoginRequest,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<ApiResultLoginResponse>(
      {url: `/api/v1/users/login`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: loginRequest
    },
      options);
    }
  


export const getLoginMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: LoginRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: LoginRequest}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof login>>, {data: LoginRequest}> = (props) => {
          const {data} = props ?? {};

          return  login(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>
    export type LoginMutationBody = LoginRequest
    export type LoginMutationError = unknown

    /**
 * @summary 로그인
 */
export const useLogin = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof login>>, TError,{data: LoginRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {
    
      const mutationOptions = getLoginMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * id 값을 입력하세요
 * @summary 유저 정보 조회
 */
export const getById = (
    id: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ApiResultUserResponse>(
      {url: `/api/v1/users/${id}`, method: 'get', signal
    },
      options);
    }
  

export const getGetByIdQueryKey = (id: number,) => [`/api/v1/users/${id}`] as const;
  

    
export const getGetByIdQueryOptions = <TData = Awaited<ReturnType<typeof getById>>, TError = unknown>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getById>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof getById>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetByIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getById>>> = ({ signal }) => getById(id, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getById>>>
export type GetByIdQueryError = unknown

/**
 * @summary 유저 정보 조회
 */
export const useGetById = <TData = Awaited<ReturnType<typeof getById>>, TError = unknown>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getById>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetByIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * id 값과 code를 입력하세요
 * @summary 이메일 인증
 */
export const verifyEmail = (
    id: number,
    params: VerifyEmailParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<void>(
      {url: `/api/v1/users/${id}/verify`, method: 'get',
        params, signal
    },
      options);
    }
  

export const getVerifyEmailQueryKey = (id: number,
    params: VerifyEmailParams,) => [`/api/v1/users/${id}/verify`, ...(params ? [params]: [])] as const;
  

    
export const getVerifyEmailQueryOptions = <TData = Awaited<ReturnType<typeof verifyEmail>>, TError = unknown>(id: number,
    params: VerifyEmailParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof verifyEmail>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof verifyEmail>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getVerifyEmailQueryKey(id,params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof verifyEmail>>> = ({ signal }) => verifyEmail(id,params, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type VerifyEmailQueryResult = NonNullable<Awaited<ReturnType<typeof verifyEmail>>>
export type VerifyEmailQueryError = unknown

/**
 * @summary 이메일 인증
 */
export const useVerifyEmail = <TData = Awaited<ReturnType<typeof verifyEmail>>, TError = unknown>(
 id: number,
    params: VerifyEmailParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof verifyEmail>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getVerifyEmailQueryOptions(id,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * 이메일을 통해서 기존 회원 여부
 * @summary 기존 회원 확인
 */
export const existsByEmail = (
    params: ExistsByEmailParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      return customInstance<ApiResultBoolean>(
      {url: `/api/v1/users/exists`, method: 'get',
        params, signal
    },
      options);
    }
  

export const getExistsByEmailQueryKey = (params: ExistsByEmailParams,) => [`/api/v1/users/exists`, ...(params ? [params]: [])] as const;
  

    
export const getExistsByEmailQueryOptions = <TData = Awaited<ReturnType<typeof existsByEmail>>, TError = unknown>(params: ExistsByEmailParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof existsByEmail>>, TError, TData>, request?: SecondParameter<typeof customInstance>}
): UseQueryOptions<Awaited<ReturnType<typeof existsByEmail>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getExistsByEmailQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof existsByEmail>>> = ({ signal }) => existsByEmail(params, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type ExistsByEmailQueryResult = NonNullable<Awaited<ReturnType<typeof existsByEmail>>>
export type ExistsByEmailQueryError = unknown

/**
 * @summary 기존 회원 확인
 */
export const useExistsByEmail = <TData = Awaited<ReturnType<typeof existsByEmail>>, TError = unknown>(
 params: ExistsByEmailParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof existsByEmail>>, TError, TData>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getExistsByEmailQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

