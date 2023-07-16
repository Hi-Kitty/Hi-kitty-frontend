/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */
import type { PlanResponse } from './planResponse';
import type { HeartResponse } from './heartResponse';

export interface ImagePlanHeartGet {
  id?: number;
  title?: string;
  percent?: number;
  subTitle?: string;
  content?: string;
  targetAmount?: number;
  currentAmount?: number;
  endAt?: string;
  createAt?: string;
  fundraiserId?: number;
  fundraiserName?: string;
  profileName?: string;
  profileUrl?: string;
  planResponse?: PlanResponse[];
  heartResponses?: HeartResponse[];
  imageUrl?: string;
  imageOriginalName?: string;
}
