import React from 'react';
import { Block, InitialPage, GenerateAdviceButton } from '../../components';
import { rem } from '../../helpers';
import { useAdviceGeneratorHelper } from './adviceGenerator.helper';
import { icons, images } from '../../assets';
export const AdviceGeneratorScreen: React.FC = () => {
	const { resources, handleGenerateAdviceOnClick, generatedAdvice } = useAdviceGeneratorHelper();
	return (
		<InitialPage style={{ backgroundColor: 'var(--dark-blue)' }}>
			<Block
				stack
				style={{
					height: '100%',
					justifyContent: 'space-evenly',
					display: 'flex',
					flexDirection: 'column',
					flex: '0px',
				}}
			>
				<Block align={{ horizontal: 'center' }}>
					<Block
						style={{
							maxWidth: rem(800),
							backgroundColor: `var(--dark-grayish-blue)`,
							borderRadius: rem(20),
							padding: rem(24),
						}}
						align={{ horizontal: 'center' }}
					>
						<Block stack style={{ position: 'relative' }} align={{ horizontal: 'center' }}>
							<Block stack style={{ marginBottom: rem(24) }} align={{ horizontal: 'center' }}>
								<h4
									style={{
										color: 'var(--neon-green)',
										fontSize: rem(12),
										letterSpacing: rem(3),
										textTransform: 'uppercase',
									}}
								>
									{resources.adviceTitle} #{generatedAdvice.id}
								</h4>
								<h5
									style={{
										color: 'var(--light-cyan)',
										marginTop: rem(16),
										textAlign: 'center',
										fontSize: rem(24),
										letterSpacing: rem(3),
										textTransform: 'capitalize',
									}}
								>
									"{generatedAdvice.advice}"
								</h5>
							</Block>

							<Block style={{ marginBottom: rem(12) }} align={{ vertical: 'end' }}>
								<img src={images.patternDividerDesktop} alt="x" />
							</Block>

							<Block style={{ position: 'absolute', bottom: rem(-50) }} align={{ horizontal: 'center' }}>
								<GenerateAdviceButton onClick={handleGenerateAdviceOnClick} />
							</Block>
						</Block>
					</Block>
				</Block>
			</Block>
		</InitialPage>
	);
};
