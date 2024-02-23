import {createElement} from 'react';
import {Node} from '@antv/x6';
import {Card} from "@alifd/next";
import {split, join, takeRight} from "lodash";

// import {find} from "lodash";
//
// interface EnumItem {
//   enumValue: string;
//   enumDesc: string;
// }
//
// interface PortAttr {
//   value: EnumItem;
// }
//
// interface PortProps {
//   id:string;
//   group:string;
//   attrs: PortAttr;
// }

const SwitchTask = () => ({
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
        attrs: {
          value: {enumValue: 'default', enumDesc: 'default'}
        }
      },
      {
        id: 'l',
        group: 'left',
      },
    ],
  },
  component(node: Node) {
    const name = node.prop<string>('name')||'please input name';
    const type = node.prop<string>('type');
    let method = node.prop<string>('method');
    method = method ? join(takeRight(split(method, '.'), 2), '.') : 'not selected';
    // let enums: EnumItem[] = node.prop<EnumItem[]>('enums');
    // let ports: PortProps[] = node.prop<any>('ports').items;
    // console.log('enums in the node props ', enums)
    // console.log('ports in the node props ', ports)
    //
    // if (!enums) {
    //   console.log('1')
    //   enums = [{enumValue: 'default', enumDesc: 'default'}];
    // } else {
    //   console.log('2')
    //   if (!find(enums, value => value.enumValue == 'default')) {
    //     enums.push({enumValue: 'default', enumDesc: 'default'});
    //   }
    // }
    //
    // const portsOnBottom = node.getPortsByGroup('bottom');
    // for (const portMetadata of portsOnBottom) {
    //   let value: any = portMetadata.attrs.value;
    //   if (!find(enums, v => v.enumValue == value.enumValue)) {
    //     node.removePort(portMetadata);
    //   }
    // }
    //
    // const portValues: any[] = portsOnBottom.map(pm => pm.attrs.value);
    // console.log('values of the ports ', portValues)
    // for (const enumItem of enums) {
    //   if (!find(portValues,ei => ei.enumValue == enumItem.enumValue)) {
    //     let id:string = "p_"+enumItem.enumValue.toLowerCase();
    //     console.log('add port to node', id);
    //    // node.addPort({id: id, group: 'bottom', attrs: {value: enumItem}})
    //     ports.push( {id: id, group: 'bottom', attrs: {value: enumItem}});
    //   }
    // }

    return (
      <div className={'task switch-task'}>
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

export default SwitchTask;
