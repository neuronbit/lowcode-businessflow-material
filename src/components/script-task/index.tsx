import {createElement} from 'react';
import {Node} from '@antv/x6';
import {Button, Card} from "@alifd/next";

const ScriptTask = () => ({
  width: 304,
  height: 110,
  shape: 'react-shape',
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#027AFF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
              opacity: '1'
            },
          },
        },
        zIndex: 99,
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#027AFF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
              opacity: '1'
            },
          },
        },
        zIndex: 99,
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#027AFF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
              opacity: '1'
            },
          },
        },
        zIndex: 99,
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 5,
            magnet: true,
            stroke: '#027AFF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
              opacity: '1'
            },
          },
        },
        zIndex: 99,
      },
    },
    items: [
      {
        id: 't',
        group: 'top',
      },
      {
        id: 'r',
        group: 'right',
      },
      {
        id: 'b',
        group: 'bottom',
      },
      {
        id: 'l',
        group: 'left',
      },
    ],
  },
  component(node: Node) {
    const name = node.prop<string>('name');
    const type = node.prop<string>('type');
    const bean = node.prop<string>('bean');
    const clazz = node.prop<string>('clazz');
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '2px solid #193FBAFF',
          borderRadius: 4,
          background: '#c3ccec',
        }}
      >
        <Card free style={{width: 300}}>
          <Card.Header title={name} subTitle={type} extra={<Button type={"primary"} warning={true}>删除</Button>}/>
          <Card.Divider/>
          <Card.Content>
            {bean}.{clazz}
          </Card.Content>
        </Card>
      </div>
    )
  },
});

export default ScriptTask;
