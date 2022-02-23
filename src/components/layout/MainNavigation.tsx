import Link from 'next/link';
import Logo from './Logo';
import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MainNavigation: FC = () => {
	const router = useRouter();

	return (
		<Header>
			<Link href='/'>
				<a>
					<h1>Firy</h1>
					<Logo />
				</a>
			</Link>
			<NavRight>
				<ul>
					<li>
						<Link href='/account/signup'>
							<a>Sign Up</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a>Second</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a>Third</a>
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
	& ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		text-align: center;
	}

	& li {
		float: left;
	}

	& li a {
		display: block;
		padding: 14px 16px;
		text-decoration: none;
	}

	& li a:hover:not(.active) {
		background-color: #00ffcc88;
		border-radius: 12.5px 5px 12.5px 5px;
		transition: 500ms;
	}

	& .active {
		background-color: #00ffcc;
	}
`;

const NavRight = styled.div`
	display: block;
	float: right;
	padding: 8px;
`;
