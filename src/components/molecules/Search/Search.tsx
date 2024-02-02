import { ChangeEvent, FC, useState } from 'react';
import * as Styled from './Search.styled';

import { Button, Input } from '../../atoms';

interface Suggestion {
	label: string;
	value: number;
}

interface SearchProps {
	onSearch: (searchedValue: string) => Promise<Array<Suggestion>>;
	onSelect: (selectedValue: number) => void;
}

export const Search: FC<SearchProps> = ({ onSearch, onSelect }) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
	const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

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

	return (
		<Styled.Container>
			<Input value={searchTerm} onChange={handleInputChange} />
			{/* <Button variant='text' label='Search' onClick={() => onSelect(searchTerm)} /> */}
			{suggestions.length > 0 ? (
				<Styled.Dropdown>
					<Styled.SuggestionsList>
						{suggestions.map((suggestion) => (
							<Styled.SuggestionItem onClick={() => handleSelectSuggestion(suggestion)}>
								{suggestion.label}
							</Styled.SuggestionItem>
						))}
					</Styled.SuggestionsList>
				</Styled.Dropdown>
			) : null}
		</Styled.Container>
	);
};
