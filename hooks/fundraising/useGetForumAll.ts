import { useQuery } from 'react-query';
import { getForumAll } from '../../api/fundraising/main';

export default function useGetForumAll() {
  return useQuery({
    // refetchInterval: 1000,
    queryKey: ['board'],
    queryFn: async () => {
      const data = await getForumAll();
      console.log('ForumData', data);
      return data;
    },
  });
}
