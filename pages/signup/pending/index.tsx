import { useRouter } from 'next/router';
import Form from '../Form';

export default function SignupPending() {
  const router = useRouter();

  const handleMoveFundraising = () => {
    router.push('/fundraising');
  };

  return (
    <Form
      mainTitle="이메일을 전송했습니다."
      miniTitle="메일함을 확인해주세요."
      title="모금페이지로 이동"
      onClick={handleMoveFundraising}
    />
  );
}
