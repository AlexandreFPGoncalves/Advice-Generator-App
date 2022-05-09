import React from 'react';
import { icons } from '../../assets';
import CustomGenerateAdviceButton from './generateAdviceButton.styles';
interface GenerateAdviceButtonProps {
	onClick?: any;
}

export const GenerateAdviceButton: React.FC<GenerateAdviceButtonProps> = ({ onClick }) => {
	return (
		<CustomGenerateAdviceButton onClick={onClick}>
			<img style={{ display: 'block', margin: 'auto' }} src={icons.iconDice} alt="x" />
		</CustomGenerateAdviceButton>
	);
};
