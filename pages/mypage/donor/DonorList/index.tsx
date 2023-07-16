import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { CompleteResponse } from '../../../../orval/model';
import commaNumber from '../../../../utils/commaNumber';
import convertDateYear from '../../../../utils/convertDateYear';

interface DonorListProps {
  donorlist: CompleteResponse[];
}

export default function DonorList({ donorlist }: DonorListProps) {
  return (
    <>
      {donorlist?.map(donor => (
        <DonationList key={donor.orderId}>
          <DonationWrapper>
            <DonationListSet>
              <DonationDate>{convertDateYear(String(donor.createdAt))}</DonationDate>
              <ListRow>
                <ListName>후원명</ListName>
                <ListValue>{donor.orderName}</ListValue>
              </ListRow>
              <ListRow>
                <ListName>후원단체</ListName>
                <ListValue>{donor.fundraiserName}</ListValue>
              </ListRow>
              <ListRow>
                <ListName>후원금액</ListName>
                <ListValue>
                  <span>{commaNumber(Number(donor.amount))}원</span>
                </ListValue>
              </ListRow>
            </DonationListSet>
          </DonationWrapper>
        </DonationList>
      ))}
    </>
  );
}

const DonationList = styled.div`
  padding-top: 15px;
`;

const DonationWrapper = styled.div`
  margin: 0 17px;
`;

const DonationListSet = styled.div`
  margin-bottom: 29px;
`;

const DonationDate = styled.h3`
  margin-bottom: 22px;
  font-size: 16px;
  font-weight: 50;
  color: #000;
  letter-spacing: -0.07px;
`;

const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const ListName = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.064px;
  color: ${colors.gray700};
`;

const ListValue = styled.p`
  color: #000;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.064px;

  span {
    font-weight: 500;
    color: ${colors.pink500};
  }
`;
