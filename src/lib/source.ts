import { createElement } from 'react';
import { docs } from '@/.source';
import { icons } from 'lucide-react';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/learn',
  icon(icon) {
    if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  source: docs.toFumadocsSource()
});
