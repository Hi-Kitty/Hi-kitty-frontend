import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export default function Heart() {
  return (
    <HeartContent>
      <ul>
        <li>
          <span>
            <img src="/images/cat.svg" alt="heart" />
          </span>
          <p>양키티</p>
        </li>
      </ul>
    </HeartContent>
  );
}

const HeartContent = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    line-height: 2;
    display: flex;
    width: 100%;
    list-style: none;
    font-size: 18px;
    color: ${colors.gray900};
    gap: 7px;
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
