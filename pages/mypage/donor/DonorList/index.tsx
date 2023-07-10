import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { CompleteResponse } from '../../../../orval/model';

interface DonorListProps {
  donorlist: CompleteResponse[];
}

export default function DonorList({ donorlist }: DonorListProps) {
  return (
    <>
      {donorlist.map(donor => (
        <DonationList key={donor.orderId}>
          <DonationWrapper>
            <DonationListSet>
              <DonationDate>{donor.createdAt}</DonationDate>
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
                  <span>{donor.amount}원</span>
                </ListValue>
              </ListRow>
            </DonationListSet>
          </DonationWrapper>
        </DonationList>
      ))}
    </>
  );
}

const DonationList = styled.div``;

const DonationWrapper = styled.div`
  margin: 0 17px;
`;

const DonationListSet = styled.div`
  margin-bottom: 29px;
`;

const DonationDate = styled.div`
  margin-bottom: 22px;
  font-size: 16px;
  font-weight: 550;
  color: #000;
`;

const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const ListName = styled.div`
  display: inline;
  font-size: 16px;
  color: #606367;
`;

const ListValue = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 500;
  color: #000;

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.pink500};
  }
`;
