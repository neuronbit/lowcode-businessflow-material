import {createElement} from 'react';
import {Node} from '@antv/x6';
import {Card} from "@alifd/next";
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
  width: 304,
  height: 110,
  shape: 'react-shape',
  tools: [{
    name: 'button-remove',
  }],
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
    const name = node.prop<string>('name');
    const type = node.prop<string>('type');
    const bean = node.prop<string>('bean');
    const clazz = node.prop<string>('clazz');
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
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '2px solid #9254de',
          borderRadius: 4,
          background: '#efdbfd',
        }}
      >
        <Card free style={{width: 300}}>
          <Card.Header title={name} subTitle={type}/>
          <Card.Divider/>
          <Card.Content>
            {bean}.{clazz}
          </Card.Content>
        </Card>
      </div>
    )
  },
});

export default SwitchTask;
