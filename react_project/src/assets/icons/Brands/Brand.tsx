import { ReactComponent as Brand1 } from './logoipsum1.svg';
import { ReactComponent as Brand2 } from './logoipsum2.svg';
import { ReactComponent as Brand3 } from './logoipsum3.svg';
import { ReactComponent as Brand4 } from './logoipsum4.svg';
import { ReactComponent as Brand5 } from './logoipsum5.svg';

import { FC, SVGProps } from 'react';

export type BrandName = 'brand1' | 'brand2' | 'brand3' | 'brand4' | 'brand5';

interface BrandProps {
  name: string;
}

const Brand: FC<BrandProps & SVGProps<SVGSVGElement>> = ({
  name,
  ...props
}) => {
  switch (name) {
    case 'brand1':
      return <Brand1 {...props} />;
    case 'brand2':
      return <Brand2 {...props} />;
    case 'brand3':
      return <Brand3 {...props} />;
    case 'brand4':
      return <Brand4 {...props} />;
    case 'brand5':
      return <Brand5 {...props} />;
    default:
      return null;
  }
};

export default Brand;
