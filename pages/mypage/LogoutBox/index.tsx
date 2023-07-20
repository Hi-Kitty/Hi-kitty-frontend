import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from '../../../styles/colors';

export default function LogoutBox() {
  const router = useRouter();

  const showToast = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success('로그아웃 되었습니다.');
  };

  const handleLogout = (e: React.MouseEvent) => {
    showToast(e);
    setTimeout(() => {
      localStorage.clear();
      router.push('/login');
    }, 2000);
  };

  return (
    <>
      <Logout>
        <p onClick={handleLogout}>로그아웃</p>
      </Logout>
      <ToastContainer />
    </>
  );
}

const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 103px 17px 62px 0;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.gray800};
    cursor: pointer;

    &:hover {
      color: ${colors.black};
      transition: color 0.1s ease-in-out;
    }
  }
`;
