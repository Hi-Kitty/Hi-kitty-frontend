import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { globalStyles } from '../styles/Globalstyle';
import { Global } from '@emotion/react';
import { reset } from '../styles/style';
import styled from '@emotion/styled';
import '../public/static/fonts/style.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const STALE_TIME = 10 * 60 * 1000;
  const CACHE_TIME = 10 * 60 * 1000;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: STALE_TIME,
            cacheTime: CACHE_TIME,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <>
      {globalStyles}
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>하이키티</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Global styles={reset} />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

const Wrapper = styled.div`
  width: 500px;
  max-width: 420px;
  min-height: 100vh;
  background-color: white;
`;
