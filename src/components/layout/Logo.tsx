import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
	return <Image width={100} height={75} src='/logo-light.svg' alt='The logo for Firy'></Image>;
};

export default Logo;
