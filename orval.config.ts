import { defineConfig } from 'orval';

const SWAAGER_DOCUMENT = 'http://hikitty.ap-northeast-2.elasticbeanstalk.com/v3/api-docs';

export default defineConfig({
  kitty: {
    input: SWAAGER_DOCUMENT,
    output: {
      mode: 'tags-split',
      target: 'orval/api',
      schemas: 'orval/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './api/axios.ts',
          name: 'customInstance',
        },
      },
    },
    // hooks: {
    //   afterAllFilesWrite: 'prettier --write',
    // },
  },
});
