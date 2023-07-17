import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { useRouter } from 'next/router';

export default function Team({
  imgUrl,
  fundraiserId,
  fundraiserName,
}: {
  imgUrl: string;
  fundraiserId: number;
  fundraiserName: string;
}) {
  const router = useRouter();

  const handleMoveTeam = () => {
    router.push(`group/${fundraiserId}`);
  };

  return (
    <TeamBox onClick={handleMoveTeam}>
      <TeamImg>
        <img src={imgUrl} />
        <span>{fundraiserName}</span>
      </TeamImg>
    </TeamBox>
  );
}

const TeamBox = styled.div`
  padding: 0px 0;

  span {
    color: ${colors.gray900};
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.01px;
  }
`;

const TeamImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
