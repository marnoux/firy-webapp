import Link from 'next/link';
import Logo from './Logo';
import { FC } from 'react';
import styled from 'styled-components';

const MainNavigation: FC = () => {
	return (
		<Header>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<NavRight>
				<ul>
					<li>
						<Link href='/'>
							<a>First</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a>Second</a>
						</Link>
					</li>
				</ul>
			</NavRight>
			<hr />
		</Header>
	);
};

export default MainNavigation;

const Header = styled.header`
	display: inline;

	& ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	}

	& li {
		float: left;
	}

	& li a {
		display: block;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	& li a:hover:not(.active) {
		background-color: #111;
	}

	& .active {
		background-color: #04aa6d;
	}
`;

const NavRight = styled.div`
	display: block;
	padding: 8px;
	float: right;
`;
