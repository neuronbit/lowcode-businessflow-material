import {ComponentMetadata, Snippet} from '@alilc/lowcode-engine';

const DecisionMeta: ComponentMetadata = {
  componentName: 'Decision',
  title: '判断节点',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: 'lowcode-businessflow-material',
    version: '0.1.0',
    exportName: 'Decision',
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
          },
          initialValue: 'spring-bean',
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
        setter: {
          componentName: 'MethodSetter',
          props: {
            returnType: 'boolean'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Description',
            'zh-CN': '说明',
          },
        },
        propType: 'string',
        name: 'desc',
        setter: 'TextAreaSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Params',
            'zh-CN': '入参',
          },
        },
        name: 'params',
        setter: {
          componentName: "ArraySetter",
          props: {
            itemSetter: {
              componentName: "ObjectSetter",
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'Name',
                          'zh-CN': '名称',
                        },
                      },
                      name: 'paramName',
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
                          'en-US': 'Class Type',
                          'zh-CN': '类型',
                        },
                      },
                      name: 'paramType',
                      setter: {
                        componentName: 'ClazzSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'Description',
                          'zh-CN': '描述',
                        },
                      },
                      name: 'paramDesc',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: false,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'Value Source',
                          'zh-CN': '参数值来源',
                        },
                      },
                      name: 'paramSource',
                      setter: {
                        componentName: 'ParamSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                  ]
                }
              }
            }
          }
        },
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
    title: '判断节点',
    screenshot: '',
    schema: {
      componentName: 'Decision',
      props: {},
    },
  },
];

export default {
  ...DecisionMeta,
  snippets,
};
