import {createElement} from 'react'; //这一行不能少，否则无法显示
import {Node} from '@antv/x6';
import { Hourglass } from "styled-icons/bootstrap";

const Join = () => ({
  width: 50,
  height: 50,
  shape: 'react-shape',
  attrs: {
  },
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#A5AFBC',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
        zIndex: 99,
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#A5AFBC',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
        zIndex: 99,
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#A5AFBC',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
        zIndex: 99,
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: '#A5AFBC',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
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
  component(node:Node) {
    return (<div
      style={{
        width: '100%',
        height: '100%',
        border: '2px solid #75102c',
        borderRadius: 8,
        background: '#be4e6d',
      }}
    ><Hourglass style={{color:'white'}}/></div>)
      }
      });

      export default Join;
