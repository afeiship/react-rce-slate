import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

/**
 * @usage:
 * Editor.addMark(editor,'color', '#f00')
 */

export default NxSlatePlugin.define({
  id: 'color',
  serialize: {
    input: (el, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.color) {
        return jsx('text', { color: el.style.color }, children);
      }
    },
    output: ({ el }, node) => {
      el.style.color = node.color;
      return el;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    const { color } = leaf;
    return (
      <span style={{ color }} {...attributes}>
        {children}
      </span>
    );
  }
});
