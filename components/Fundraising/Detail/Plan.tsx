import styled from '@emotion/styled';
import commaNumber from '../../../utils/commaNumber';

export default function Plan({ reason, amount }: { reason: string; amount: number }) {
  const trimmedReason = reason.length < 24 ? reason : reason.slice(0, 25) + '...';

  return (
    <PlanContent>
      <PlanBox>
        <Plans>
          <PlanList>
            <Reason>{trimmedReason}</Reason>
            <Amount>{commaNumber(amount)}원</Amount>
          </PlanList>
        </Plans>
      </PlanBox>
    </PlanContent>
  );
}

const PlanContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #232323;
  text-align: left;
  line-height: 1.875;
  word-break: break-all;
  margin-left: -9px;
`;

const PlanBox = styled.div`
  width: 100%;
`;

const Plans = styled.div``;

const PlanList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  color: #666666;
  line-height: 1.875;
  word-break: break-all;
  letter-spacing: -0.02px;
`;

const Reason = styled.span`
  padding: 8px;
  text-align: left;
  vertical-align: top;
  font-weight: 320;
  letter-spacing: -0.02px;
`;

const Amount = styled.span`
  padding: 8px;
  text-align: right;
  vertical-align: top;
  font-weight: 320;
  letter-spacing: -0.02px;
`;
