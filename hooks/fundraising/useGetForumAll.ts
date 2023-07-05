import { useQuery } from 'react-query';
import { getForumAll } from '../../api/fundraising/main';

export default function useGetForumAll() {
  const { data: ForumData } = useQuery({
    // refetchInterval: 1000,
    queryKey: ['board'],
    queryFn: () => {
      return getForumAll();
    },
  });

  return { ForumData: ForumData };
}
