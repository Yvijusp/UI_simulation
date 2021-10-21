import { ReactComponent as DollarLogo } from './dollar.svg';
import { ReactComponent as ServiceLogo } from './Service.svg';
import { ReactComponent as ExpertLogo } from './Expert.svg';
import { ReactComponent as Engine } from './Engine.svg';
import { ReactComponent as Insurance } from './Insurance.svg';
import { ReactComponent as Oil } from './Oil.svg';
import { ReactComponent as Wheel } from './Wheel.svg';
import { ReactComponent as Diagnostics } from './Diagnostics.svg';
import { ReactComponent as CarBody } from './carbody.svg';
import { ReactComponent as Battery } from './Battery.svg';

import { FC, SVGProps } from 'react';

export type IconName =
  | 'dollar'
  | 'service'
  | 'expert'
  | 'engine'
  | 'insurance'
  | 'oil'
  | 'wheel'
  | 'diagnostics'
  | 'carbody'
  | 'battery';

interface IconProps {
  name: string;
}

const Icon: FC<IconProps & SVGProps<SVGSVGElement>> = ({ name, ...props }) => {
  switch (name) {
    case 'dollar':
      return <DollarLogo {...props} />;
    case 'service':
      return <ServiceLogo {...props} />;
    case 'expert':
      return <ExpertLogo {...props} />;
    case 'engine':
      return <Engine {...props} />;
    case 'insurance':
      return <Insurance {...props} />;
    case 'oil':
      return <Oil {...props} />;
    case 'wheel':
      return <Wheel {...props} />;
    case 'diagnostics':
      return <Diagnostics {...props} />;
    case 'carbody':
      return <CarBody {...props} />;
    case 'battery':
      return <Battery {...props} />;

    default:
      return null;
  }
};

export default Icon;
