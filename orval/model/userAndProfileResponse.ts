/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */
import type { UserAndProfileResponseRole } from './userAndProfileResponseRole';

export interface UserAndProfileResponse {
  id?: number;
  email?: string;
  name?: string;
  role?: UserAndProfileResponseRole;
  originalName?: string;
  url?: string;
}
