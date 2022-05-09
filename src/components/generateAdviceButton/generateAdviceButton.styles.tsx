import styled from 'styled-components';

const CustomGenerateAdviceButton = styled.button`
	cursor: pointer;
	background-color: var(--neon-green);
	border: none;
	width: 2.625rem;
	height: 2.625rem;
	border-radius: 50%;
	:hover {
		color: var(--discover-blue-dark);
		border-color: var(--discover-blue-dark);
		box-shadow: 0px 0px 10px 6px rgba(148, 250, 172, 0.65);
	}
`;

export default CustomGenerateAdviceButton;
