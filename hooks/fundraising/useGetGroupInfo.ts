import { useQuery } from 'react-query';
import { getGroupInfo } from '../../api/fundraising/groupInfoAPI';

export default function useGetGroupInfo(fundraiserId: number) {
  return useQuery({
    queryKey: ['fundraiser', String(fundraiserId)],
    queryFn: async () => {
      const data = await getGroupInfo(fundraiserId);
      return data;
    },
    enabled: !!fundraiserId,
  });
}
