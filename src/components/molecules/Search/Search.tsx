import { ChangeEvent, FC, useEffect, useState } from 'react';
import * as Styled from './Search.styled';

import { Input, Loading } from '../../atoms';

interface Suggestion {
	label: string;
	value: number;
}

interface SearchProps {
	loading: boolean;
	label: string;
	onSearch: (searchedValue: string) => Promise<Array<Suggestion>>;
	onSelect: (selectedValue: number) => void;
	onClear: () => void;
}

export const Search: FC<SearchProps> = ({ label, loading, onSearch, onSelect, onClear }) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
	const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

	useEffect(() => {
		const handleOutsideClick = () => {
			setSuggestions([]);
		};
		window.addEventListener('click', handleOutsideClick);
		return () => window.removeEventListener('click', handleOutsideClick);
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchTerm(value);

		console.log(searchTimeout);

		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}

		const newSearchTimeout = setTimeout(async () => {
			const _suggestions = await onSearch(value);
			setSuggestions(_suggestions);
		}, 300);

		setSearchTimeout(newSearchTimeout);
	};

	const handleSelectSuggestion = (suggestion: Suggestion) => {
		setSearchTerm(suggestion.label);
		onSelect(suggestion.value);
		setSuggestions([]);
	};

	const handleCleartInput = () => {
		setSearchTerm('');
		setSuggestions([]);
		onClear();
	};

	return (
		<Styled.Container>
			<Input label={label} value={searchTerm} onChange={handleInputChange} onClickIcon={handleCleartInput} />
			<Styled.Dropdown>
				{searchTerm.length > 0 && loading ? (
					<Loading />
				) : suggestions.length > 0 ? (
					<Styled.SuggestionsList>
						{suggestions.map((suggestion) => (
							<Styled.SuggestionItem onClick={() => handleSelectSuggestion(suggestion)}>
								{suggestion.label}
							</Styled.SuggestionItem>
						))}
					</Styled.SuggestionsList>
				) : null}
			</Styled.Dropdown>
		</Styled.Container>
	);
};
