import { meta } from '@k-link/ds';
import { LinksGroupProps } from './LinksGroup/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { type: 'gatsby', label: 'Contribute', link: '/pages/contributing/' },
      { type: 'gatsby', label: 'About Klink UI', link: '/pages/about/' },
      { type: 'gatsby', label: 'Changelog', link: '/pages/changelog/' },
      { type: 'link', label: 'Releases', link: meta.gitHubLinks.releases },
    ],
  },

  {
    title: 'Community',
    data: [
      { type: 'link', label: 'Chat on Discord', link: meta.discordLink },
      { type: 'link', label: 'Follow on Twitter', link: meta.twitterLink },
      { type: 'link', label: 'Follow on Github', link: 'https://github.com/rtivital' },
      {
        type: 'link',
        label: 'GitHub discussions',
        link: meta.gitHubLinks.discussions,
      },
    ],
  },
  {
    title: 'Project',
    data: [
      { type: 'link', label: 'Klink UI', link: meta.uiLink },
      { type: 'link', label: 'Documentation', link: meta.docsLink },
      { type: 'link', label: 'Github organization', link: meta.gitHubLinks.organization },
      { type: 'link', label: 'npm organization', link: meta.npmLink },
    ],
  },
];
