import React from 'react'
import { ReactComponent as IconBootstrap } from '../Img/bootstrap.svg';
import { ReactComponent as IconC } from '../Img/c.svg';
import { ReactComponent as IconCss } from '../Img/css.svg';
import { ReactComponent as IconDocker } from '../Img/docker.svg';
import { ReactComponent as IconFirebase } from '../Img/firebase.svg';
import { ReactComponent as IconHtml } from '../Img/html.svg';
import { ReactComponent as IconJavaScript } from '../Img/javascript.svg';
import { ReactComponent as IconMui } from '../Img/mui.svg';
import { ReactComponent as IconMysql } from '../Img/mysql.svg';
import { ReactComponent as IconNodeJs } from '../Img/nodejs.svg';
import { ReactComponent as IconReact } from '../Img/react.svg';
import { ReactComponent as IconStyled } from '../Img/styled.svg';
import { ReactComponent as IconTypeScript } from '../Img/typescript.svg';
const propIcons = {
    height: 50,
    width : 50    
}
const iconsCategories  = {
    1: <IconBootstrap {...propIcons}/>,
    2: <IconC {...propIcons}/>,
    3: <IconCss {...propIcons}/>,
    4: <IconDocker {...propIcons}/>,
    5: <IconFirebase {...propIcons}/>,
    6: <IconHtml {...propIcons}/>,
    7: <IconJavaScript {...propIcons}/>,
    8: <IconMui {...propIcons}/>,
    9: <IconMysql {...propIcons}/>,
    10: <IconNodeJs {...propIcons}/>,
    11: <IconReact {...propIcons}/>,
    12: <IconStyled {...propIcons}/>,
    13: <IconTypeScript {...propIcons}/>
  };
  const IconsCategories = ({ id }) => {
    return <>{iconsCategories[id]}</>;
  };
export default IconsCategories;