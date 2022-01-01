import styled from 'styled-components';

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
	}
`;

export { Container };
