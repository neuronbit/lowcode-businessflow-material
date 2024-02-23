import {createElement} from 'react';
import {Node} from '@antv/x6';
import {Card} from "@alifd/next";
import {join, split, takeRight} from "lodash";
import '../../index.scss';

const AutoTask = () => ({
  width: 164,
  height: 72,
  shape: 'react-shape',
  // tools: [{
  //   name: 'button-remove',
  // }],
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
    const name = node.prop<string>('name') || 'please input name';
    const type = node.prop<string>('type');
    let method = node.prop<string>('method');
    method = method ? join(takeRight(split(method, '.'), 2), '.') : 'not selected';
    return (
      <div className={'task auto-task'}>
        <Card free style={{width: 160, backgroundColor: 'transparent', border: '0px'}}>
          <Card.Header title={name} subTitle={type}
                       style={{margin: '2px', padding: '0px', backgroundColor: 'transparent'}}/>
          <Card.Divider style={{border: '1px solid #0b2e59',}}/>
          <Card.Content style={{margin: '2px', padding: '0px', color: 'white', textAlign: 'center'}}>
            {method}
          </Card.Content>
        </Card>
      </div>
    )
  },
});

export default AutoTask;
