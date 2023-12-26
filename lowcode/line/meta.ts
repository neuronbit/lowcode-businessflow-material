import { ComponentMetadata, Snippet } from '@alilc/lowcode-engine';

const LineMeta: ComponentMetadata = {
  componentName: 'Line',
  title: '连接线',
  docUrl: '',
  screenshot: '',
  tags: ['edge'],
  devMode: 'proCode',
  npm: {
    package: 'compileflow-material',
    version: '0.1.0',
    exportName: 'Line',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: {
      style: false,
      loop: false,
      condition: false
    }
  }
};
const snippets: Snippet[] = [
  {
    title: '连接线',
    screenshot: '',
    schema: {
      componentName: 'Line',
      props: {},
    },
  },
];

export default {
  ...LineMeta,
  snippets,
};
