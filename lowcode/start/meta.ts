import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const StartMeta: ComponentMetadata = {
  componentName: 'Start',
  title: '开始',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: 'lowcode-businessflow-material',
    version: '0.1.0',
    exportName: 'Start',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': '名称',
          },
        },
        name: 'name',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title:{
          label: {
            type: 'i18n',
            'en-US': 'tag',
            'zh-CN': 'tag',
          },
        },
        name: 'tag',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        }
      }
    ],
    supports: {
      style: false,
      loop: false,
      condition: false
    },
    component: {},
  },
  category: '事件节点',
  priority: 2
};
const snippets: Snippet[] = [
  {
    title: '开始',
    screenshot: './assets/image/green-circle.png',
    schema: {
      componentName: 'Start',
      props: {},
    },
  },
];

export default {
  ...StartMeta,
  snippets,
};
