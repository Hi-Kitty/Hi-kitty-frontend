/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Hi Kitty 프로젝트!!
 * Hi Kitty의 API 명세서입니다.
 * OpenAPI spec version: v1
 */

export interface PaymentQueryRequest {
  /** 주문번호 */
  orderId?: string;
  /** 결제키 */
  paymentKey?: string;
  /** 결제금액 */
  amount?: number;
}