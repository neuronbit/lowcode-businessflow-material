import {ComponentMetadata, Snippet} from '@alilc/lowcode-types';

const ForkMeta: ComponentMetadata = {
  componentName: 'Fork',
  title: '并发',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: 'lowcode-businessflow-material',
    version: '0.1.0',
    exportName: 'Fork',
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
        title: {
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
    advanced: {
      callbacks: {
        onNodeAdd: (e: MouseEvent, currentNode: any) => {
          console.log('abc', currentNode);
          currentNode.id.defaultValue = String(Math.floor(Math.random() * 10000));
        },
        onMoveHook: (currentNode: any) => {
          console.log('move node', currentNode);
          return true;
        },
        onHoverHook: (currentNode: any) => {
          console.log('hover node', currentNode);
          return true;
        }
      },
    },
  },
  category: '并发节点',
  priority: 2
};
const snippets: Snippet[] = [
  {
    title: '并发',
    screenshot: './assets/image/red-circle.png',
    schema: {
      componentName: 'Fork',
      props: {},
    },
  },
];

export default {
  ...ForkMeta,
  snippets,
};
