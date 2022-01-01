import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.header`
	height: 80px;
	background-color: white;

	.content {
		margin: auto;
		height: 100%;
		width: 100%;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-betweenx;

		.logo {
			width: 132px;
		}
		nav {
			flex: 1;
			display: flex;
			align-items: center;
		}
		nav ul {
			margin: auto;
			list-style:none;
			li {
				display: inline;
			}
		}

		.right-el {
			width: 200px;
		}
	}
`;

const ItemContainer = styled.li`
	cursor: pointer;
	font-weight: 500;
	padding: 1rem;
`;

const ItemText = styled(motion.span)`
	position: relative;
	overflow: hidden;
	padding: .5rem 0;
`;

const ActiveIndicator = styled(motion.span)`
	height: 2px;
	position: absolute;
	background: #8E75FF;
	width: 100%;
	bottom: 0;
	left: 0;
`;

export {
  Container, ItemContainer, ItemText, ActiveIndicator,
};
