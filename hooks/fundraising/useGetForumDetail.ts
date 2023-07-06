import { useQuery } from 'react-query';
import { getForumContent } from '../../api/fundraising/main';

export default function useGetForumDetail(boardId: number) {
  return useQuery({
    queryKey: ['board'],
    queryFn: async () => {
      const data = await getForumContent(boardId);
      console.log('ForumData', data);
      return data;
    },
    enabled: !!boardId,
  });
}
