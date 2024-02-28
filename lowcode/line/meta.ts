import {ComponentMetadata, Snippet} from '@alilc/lowcode-engine';

const LineMeta: ComponentMetadata = {
  componentName: 'Line',
  title: '连接线',
  docUrl: '',
  screenshot: '',
  tags: ['edge'],
  devMode: 'proCode',
  npm: {
    package: 'lowcode-businessflow-material',
    version: '0.1.0',
    exportName: 'Line',
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
            'en-US': 'Expression',
            'zh-CN': '表达式',
          },
        },
        name: 'decisionExpression',
        setter: {
          componentName: 'SelectSetter',
          isRequired: true,
          props: {
            mode: 'single',
            defaultValue: 'true',
            options: [{label: 'True', value: 'true'}, {label: 'False', value: 'false'}] //TODO shunyun 2024/1/22: auto remove the selected option
          },
          initialValue: '',
        },
        condition: {
          type: "JSFunction",
          value: "condition(target) {\n" +
            "          const isDecision = target.getProps().getPropValue(\"isDecision\");\n " +
            "         console.log('condition eval on target', isDecision);\n" +
            "          return decision == true;\n" +
            "        }"
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Expression',
            'zh-CN': '表达式',
          },
        },
        name: 'switchCase',
        setter: {
          componentName: 'StringSetter',//TODO shunyun 2024/1/22: select, options from task
          isRequired: true,
          initialValue: '',
        },
        condition: {
          type: "JSFunction",
          value: "condition(target) {\n" +
            "          const isSwitch = target.getProps().getPropValue(\"isSwitch\");\n " +
            "         console.log('condition eval on target', isSwitch);\n" +
            "          return isSwitch == true;\n" +
            "        }"
        },
      },
    ],
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
