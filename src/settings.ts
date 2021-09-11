import { IconType } from 'react-icons/lib';

export type Navigation = {
  icon?: IconType;
  title?: string;
  linkTo: string;
};

//博客的配置
export interface Settings {
  navigations: Navigation[];
}

import { AiTwotoneHome, AiFillGithub } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiAboutDotMe } from 'react-icons/si';

const settings: Settings = {
  navigations: [
    {
      icon: AiTwotoneHome,
      linkTo: '/',
    },
    {
      icon: RiArticleLine,
      linkTo: '/blog',
    },
    {
      icon: SiAboutDotMe,
      linkTo: '/about',
    },
    {
      icon: AiFillGithub,
      linkTo: 'https://github.com/Yiuman',
    },
  ],
};

export default settings;
