import { createGlobalStyle } from 'styled-components';
import RobotoBold from '~/assets/fonts/Roboto-Bold.ttf';
import RobotoLight from '~/assets/fonts/Roboto-Light.ttf';
import RobotoMedium from '~/assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from '~/assets/fonts/Roboto-Regular.ttf';
import RobotoThin from '~/assets/fonts/Roboto-Thin.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoLight});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoMedium';
    src: url(${RobotoMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoThin';
    src: url(${RobotoThin});
    font-weight: 500;
    font-style: normal;
  }

  * {
      margin: 0;
      padding: 0;
  }
`;
