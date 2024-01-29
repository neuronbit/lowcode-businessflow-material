export { default as Line } from './components/line';
export { default as AutoTask } from './components/auto-task';
export { default as ScriptTask } from './components/script-task';
export { default as Start } from './components/start';
export { default as End } from './components/end';
export { default as Decision } from './components/decision';
export { default as SwitchTask  } from './components/switch-task';
export { default as Flow } from './components/flow';
export { default as Fork } from './components/fork';
export { default as Join } from './components/join';
//添加了 component 一定要在这里 export才能在画布上渲染出来
const bizCssPrefix = 'bizpack';

export {
  bizCssPrefix
}
