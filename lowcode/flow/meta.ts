import { ComponentMetadata, Snippet } from '@alilc/lowcode-engine';

const FlowMeta: ComponentMetadata = {
  componentName: 'Flow',
  title: 'Flow',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: 'lowcode-businessflow-material',
    version: '0.1.0',
    exportName: 'Flow',
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
            defaultValue: 'process',
            options: [{label: 'process', value: 'process'}]
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'desc',
            'zh-CN': '描述',
          },
        },
        name: 'desc',
        setter: {
          componentName: 'TextAreaSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Parameters',
            'zh-CN': '入参',
          },
        },
        name: 'params',
        setter: {
          componentName: "ArraySetter",
          props: {
            itemSetter: {
              componentName : "ObjectSetter",
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
                          'en-US': 'Parameter Type',
                          'zh-CN': '参数类型',
                        },
                      },
                      name: 'paramType',
                      setter: {
                        componentName: 'ClazzSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                  ],
                },
              }
            }
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Exception Handler',
            'zh-CN': '异常处理器',
          },
        },
        name: 'exceptionHandler',
        setter: {
          componentName: 'ObjectSetter',
          props: {
              config: {
                items:[
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
                    setter: 'MethodSetter'
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
                  {
                    title: {
                      label: {
                        type: 'i18n',
                        'en-US': 'Returns',
                        'zh-CN': '出参',
                      },
                    },
                    name: 'returns',
                    setter: {
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
                              name: 'returnName',
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
                                  'en-US': 'Data Type',
                                  'zh-CN': '参数类型',
                                },
                              },
                              name: 'returnType',
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
                              name: 'returnDesc',
                              setter: {
                                componentName: 'StringSetter',
                                isRequired: false,
                                initialValue: '',
                              },
                            },
                          ]
                        }
                      }
                    },
                  },
                ]
              }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Stop On',
            'zh-CN': '终止检查器',
          },
        },
        name: 'stopOnChecker',
        setter: {
          componentName: 'ObjectSetter',
          props: {
              config: {
                items:[
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
                    setter: 'MethodSetter'
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
                  {
                    title: {
                      label: {
                        type: 'i18n',
                        'en-US': 'Returns',
                        'zh-CN': '出参',
                      },
                    },
                    name: 'returns',
                    setter: {
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
                              name: 'returnName',
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
                                  'en-US': 'Data Type',
                                  'zh-CN': '参数类型',
                                },
                              },
                              name: 'returnType',
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
                              name: 'returnDesc',
                              setter: {
                                componentName: 'StringSetter',
                                isRequired: false,
                                initialValue: '',
                              },
                            },
                          ]
                        }
                      }
                    },
                  },
                ]
              }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'Finally Handler',
            'zh-CN': 'Finally处理器',
          },
        },
        name: 'finallyHandler',
        setter: {
          componentName: 'ObjectSetter',
          props: {
              config: {
                items:[
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
                    setter: 'MethodSetter'
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
                  {
                    title: {
                      label: {
                        type: 'i18n',
                        'en-US': 'Returns',
                        'zh-CN': '出参',
                      },
                    },
                    name: 'returns',
                    setter: {
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
                              name: 'returnName',
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
                                  'en-US': 'Data Type',
                                  'zh-CN': '参数类型',
                                },
                              },
                              name: 'returnType',
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
                              name: 'returnDesc',
                              setter: {
                                componentName: 'StringSetter',
                                isRequired: false,
                                initialValue: '',
                              },
                            },
                          ]
                        }
                      }
                    },
                  },
                ]
              }
          }
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
  //category: '事件节点',
  priority: 1
};
const snippets: Snippet[] = [
  {
    title: '自动节点',
    screenshot: '',
    schema: {
      componentName: 'Flow',
      props: {},
    },
  },
];

export default {
  ...FlowMeta,
  snippets,
};
