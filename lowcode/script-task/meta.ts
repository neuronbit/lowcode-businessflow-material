import { ComponentMetadata, Snippet } from '@alilc/lowcode-engine';

const ScriptTaskMeta: ComponentMetadata = {
  componentName: 'ScriptTask',
  title: '脚本节点',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: 'compileflow-material',
    version: '0.1.0',
    exportName: 'ScriptTask',
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
            'en-US': 'type',
            'zh-CN': '类型',
          },
        },
        name: 'type',
        setter: {
          componentName: 'SelectSetter',
          isRequired: true,
          props: {
            mode: 'single',
            defaultValue: 'spring-bean',
            options: [{label: 'Java Bean', value: 'java-bean'}, {label: 'Spring Bean', value: 'spring-bean'}]
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bean',
            'zh-CN': 'Bean名称',
          },
        },
        name: 'bean',
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
            'en-US': 'method',
            'zh-CN': '方法',
          },
        },
        propType: 'string',
        name: 'method',
        setter: 'MethodSetter',
      },
    ],
    supports: {
      style: false,
      loop: false,
      condition: false
    },
    component: {},
  },
  category: '事件节点',
  priority: 1
};
const snippets: Snippet[] = [
  {
    title: '脚本节点',
    screenshot: '',
    schema: {
      componentName: 'ScriptTask',
      props: {},
    },
  },
];

export default {
  ...ScriptTaskMeta,
  snippets,
};
