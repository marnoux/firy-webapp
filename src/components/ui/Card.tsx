import React, { FC } from 'react';
import styled from 'styled-components';

const Card: FC<{ className: string }> = (props) => {
	return <CardDiv className={props.className}>{props.children}</CardDiv>;
};

export default Card;

const CardDiv = styled.div`
	width: 100vw;
	background: #272727;
	box-shadow: 0 1px 4px var(--main);
	border-radius: 10px;
	max-width: 468px;
`;
