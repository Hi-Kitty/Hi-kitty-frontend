import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export default function Heart({ donerName, donerProfileUrl }: { donerName: string; donerProfileUrl: string }) {
  return (
    <HeartContent>
      <li>
        <span>
          <img src={donerProfileUrl} />
        </span>
        <p>{donerName}</p>
      </li>
    </HeartContent>
  );
}

const HeartContent = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  span {
    background-image: unset;
    margin: 7px;
    display: block;
    width: 58px;
    height: 55px;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
    color: ${colors.gray900};
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    line-height: 22px;
  }
`;
