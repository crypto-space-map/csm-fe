import Discord from 'assets/icons/social-panel/discord.svg';
import TelegramIcon from 'assets/icons/social-panel/telegram.svg';
import Twitter from 'assets/icons/social-panel/twitter.svg';

export const socialPanelLinks = [
  { title: 'Telegram chat', href: 'https://t.me/cryptospacemap', icon: TelegramIcon },
  { title: 'Telegram channel', href: 'https://t.me/csmann', icon: TelegramIcon },
  { title: 'Discord', href: 'https://discord.gg/xcGuzKgEkj', icon: Discord },
  { title: 'Twitter', href: 'https://twitter.com/CsmCrypto', icon: Twitter },
] as const;

export const footerLinks = [
  { title: 'About CSM', href: 'http://cryptospacemap.com/' },
  { title: 'Legal information', href: 'http://cryptospacemap.com/' },
];
