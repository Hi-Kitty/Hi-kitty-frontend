/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */

/**
 * 유저 상태 - 이메일 인증 여부
 */
export type UserResponseStatus = typeof UserResponseStatus[keyof typeof UserResponseStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserResponseStatus = {
  PENDING: 'PENDING',
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
} as const;
