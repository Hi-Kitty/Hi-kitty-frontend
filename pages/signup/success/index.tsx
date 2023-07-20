import { useRouter } from 'next/router';
import Form from '../Form';

export default function SignupSuccess() {
  const router = useRouter();

  const handleMoveLogin = () => {
    router.push('/login');
  };

  return (
    <Form
      mainTitle="가입이 완료되었습니다!"
      miniTitle="하이키티와 키치한 동행 함께해요."
      title="로그인"
      onClick={handleMoveLogin}
    />
  );
}
