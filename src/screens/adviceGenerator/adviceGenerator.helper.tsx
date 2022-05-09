import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSpeechSynthesis } from 'react-speech-kit';

interface AdviceGeneratorProps {
	resources: AdviceGeneratorResources;
	handleGenerateAdviceOnClick: () => void;
	generatedAdvice: { id: string; advice: string };
}

export interface AdviceGeneratorResources {
	adviceTitle: string;
}

export const useAdviceGeneratorHelper = (): AdviceGeneratorProps => {
	//Advice control variables
	const [generatedAdvice, setGeneratedAdvice] = useState<{ id: string; advice: string }>({ id: '', advice: '' });
	//Text2Speech control variables
	const { speak } = useSpeechSynthesis();
	const voices = speechSynthesis.getVoices();

	//Generates a first Advice as soon as App mounts
	useEffect(() => {
		axios.get('https://api.adviceslip.com/advice', { headers: { accept: 'application/json' } }).then((res) => {
			setGeneratedAdvice(res.data.slip);
		});
	}, []);

	//generateAdvice on Click function
	const handleGenerateAdviceOnClick = () => {
		axios.get('https://api.adviceslip.com/advice', { headers: { accept: 'application/json' } }).then((res) => {
			setGeneratedAdvice(res.data.slip);
			speak({ text: res.data.slip.advice, voice: voices[0] });
		});
	};

	//Screen Resources
	const resources = useMemo((): AdviceGeneratorResources => {
		return {
			adviceTitle: 'Advice',
		};
	}, []);

	return {
		resources,
		handleGenerateAdviceOnClick,
		generatedAdvice,
	};
};
