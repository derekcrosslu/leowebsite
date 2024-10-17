import dynamic from 'next/dynamic';
import { VimeoEmbedProps } from './types';

export const VimeoEmbed = dynamic<VimeoEmbedProps>(
  () => import('./vimeo-embed').then((mod) => mod.VimeoEmbed),
  {
    loading: () => (
      <div className='animate-pulse bg-gray-700 aspect-square'></div>
    ),
  }
);

export type { VimeoEmbedProps };
