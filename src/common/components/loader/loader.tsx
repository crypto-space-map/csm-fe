import { HTMLAttributes } from 'react';

import { COLOR_PALLETTE } from 'global/pallette';

import { StyledLoader } from './styled';

export const Loader = (props: HTMLAttributes<SVGElement>) => (
  <StyledLoader
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="33"
    viewBox="0 0 40 33"
    fill="none"
    {...props}>
    <path
      d="M32.6284 18.2577L23.2251 2.4209L5.47754 19.0144L6.84345 20.4753L22.7749 5.57991L30.874 19.2203C30.5672 19.4477 30.2774 19.6996 30.0045 19.9762C29.5536 20.4332 29.1657 20.9406 28.8408 21.4985C28.5226 22.0496 28.2739 22.6444 28.0949 23.2829C27.9225 23.9213 27.8363 24.5833 27.8363 25.2689C27.8363 25.9544 27.9225 26.6164 28.0949 27.2549C28.2739 27.8867 28.5226 28.4815 28.8408 29.0393C29.1657 29.5904 29.5536 30.0945 30.0045 30.5515C30.4554 31.0085 30.9527 31.4017 31.4964 31.731C32.0467 32.0536 32.6335 32.3023 33.2568 32.477C33.8867 32.6585 34.5398 32.7492 35.2161 32.7492C36.098 32.7492 36.95 32.5946 37.7722 32.2855C38.5944 31.9763 39.337 31.5327 40.0001 30.9547L38.4883 28.4344C38.0706 28.8914 37.5766 29.2443 37.0064 29.4929C36.4361 29.7349 35.8394 29.8559 35.2161 29.8559C34.5862 29.8559 33.9961 29.7349 33.4458 29.4929C32.8954 29.251 32.4147 28.9217 32.0036 28.505C31.5925 28.0883 31.2676 27.6044 31.0289 27.0533C30.7902 26.4954 30.6709 25.9006 30.6709 25.2689C30.6709 24.6371 30.7902 24.0423 31.0289 23.4845C31.2676 22.9199 31.5925 22.4327 32.0036 22.0227C32.4147 21.606 32.8954 21.2767 33.4458 21.0347C33.9961 20.7928 34.5862 20.6718 35.2161 20.6718C35.8394 20.6718 36.4361 20.7961 37.0064 21.0448C37.5766 21.2867 38.0706 21.6362 38.4883 22.0933L40.0001 19.5729C39.337 18.9882 38.5944 18.5446 37.7722 18.2422C36.95 17.933 36.098 17.7784 35.2161 17.7784C34.5398 17.7784 33.8867 17.8692 33.2568 18.0506C33.0431 18.1106 32.8336 18.1796 32.6284 18.2577Z"
      fill={COLOR_PALLETTE.MAIN_BLUE}
    />
    <circle cx="23.0483" cy="4.26823" r="4.26823" fill={COLOR_PALLETTE.MAIN_BLUE} />
    <circle cx="7.68281" cy="19.634" r="7.68281" fill={COLOR_PALLETTE.MAIN_BLUE} />
    <circle cx="35.3108" cy="25.2966" r="2.81077" fill={COLOR_PALLETTE.MAIN_BLUE} />
  </StyledLoader>
);
