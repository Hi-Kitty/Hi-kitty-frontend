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
import type { ApiResultUserAndProfileResponse, UpdatePasswordBodyOne, UpdatePasswordBodyTwo } from '../../orval/model';
import { customInstance } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;

/**
 * 이미지와 함께 출력됩니다.
 * @summary 유저 정보 조회 with email
 */
export const getByEmail = (options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => {
  return customInstance<ApiResultUserAndProfileResponse>({ url: `/api/v1/auth/users`, method: 'get', signal }, options);
};

export const getGetByEmailQueryKey = () => [`/api/v1/auth/users`] as const;

export const getGetByEmailQueryOptions = <TData = Awaited<ReturnType<typeof getByEmail>>, TError = unknown>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getByEmail>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryOptions<Awaited<ReturnType<typeof getByEmail>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetByEmailQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getByEmail>>> = ({ signal }) =>
    getByEmail(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetByEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getByEmail>>>;
export type GetByEmailQueryError = unknown;

/**
 * @summary 유저 정보 조회 with email
 */
export const useGetByEmail = <TData = Awaited<ReturnType<typeof getByEmail>>, TError = unknown>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getByEmail>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetByEmailQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * 토큰 값을 입력하고 이미지, 닉네임 비밀번호를 입력하세요.
 * @summary 유저 정보 수정
 */
export const updatePassword = (
  updatePasswordBody: UpdatePasswordBodyOne | UpdatePasswordBodyTwo,
  options?: SecondParameter<typeof customInstance>
) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const request = new Blob([JSON.stringify(updatePasswordBody.request)], { type: 'application/json' });

  const formData = new FormData();

  formData.append('request', request);

  if (updatePasswordBody.img) {
    formData.append('img', updatePasswordBody.img, 'image.png');
  }

  return customInstance<ApiResultUserAndProfileResponse>(
    {
      url: `/api/v1/auth/users`,
      method: 'put',
      data: formData,
    },
    { ...config, ...options }
  );
};

export const getUpdatePasswordMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePassword>>,
    TError,
    { data: UpdatePasswordBodyOne | UpdatePasswordBodyTwo },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePassword>>,
  TError,
  { data: UpdatePasswordBodyOne | UpdatePasswordBodyTwo },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePassword>>,
    { data: UpdatePasswordBodyOne | UpdatePasswordBodyTwo }
  > = props => {
    const { data } = props ?? {};

    return updatePassword(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePasswordMutationResult = NonNullable<Awaited<ReturnType<typeof updatePassword>>>;
export type UpdatePasswordMutationBody = UpdatePasswordBodyOne | UpdatePasswordBodyTwo;
export type UpdatePasswordMutationError = unknown;

/**
 * @summary 유저 정보 수정
 */
export const useUpdatePassword = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePassword>>,
    TError,
    { data: UpdatePasswordBodyOne | UpdatePasswordBodyTwo },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getUpdatePasswordMutationOptions(options);

  return useMutation(mutationOptions);
};
