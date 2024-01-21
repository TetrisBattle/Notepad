import { CommandItemProps } from '../CommandItem'

export const commands: CommandItemProps[][] = [
	[
		{
			command: '//g',
			description: 'Global',
			details: 'Target everywhere from text',
		},
		{
			command: '//i',
			description: 'Case sensitive',
			details: 'Have to match with lower- or uppercase',
		},
		{
			command: '//m',
			description: 'Multiline',
			details: 'Target all lines in a text',
		},
		{
			command: '//gim',
			description: 'Global & case sensitive & multiline',
		},
	],
	[
		{
			command: '/\\s/g ',
			description: 'Match white spaces (spaces, tabs and line breaks)',
		},
		{
			command: '/\\d/g ',
			description: 'Match digits (numbers 0-9)',
		},
		{
			command: '/\\D/g',
			description: 'Match everything except digits (numbers 0-9)',
		},
		{
			command: '/\\w/g',
			description: 'Match words (alphanumeric and underscore "_")',
		},
		{
			command: '/\\W/g',
			description:
				'Match everything except words (alphanumeric and underscore "_")',
		},
	],
	[
		{
			command: '/asd+/g ',
			description: 'Match "asd" and every "d" after it, like "asddddd"',
		},
		{
			command: '/asd?/g ',
			description: 'Match "as" or "asd", "d" is optional',
		},
		{
			command: '/asd*/g ',
			description:
				'Match "as", "asd", "asddd", combination of + and ? expressions',
		},
		{
			command: '/asd./g ',
			description:
				'Match "asd" and any letter after it except for line break',
		},
		{
			command: '/asd\\./g ',
			description:
				'Match "asd.", special characters will be treated as string with "\\" sign',
		},
	],
	[
		{
			command: '/.asd./g',
			description:
				'Match "asd" and any letter before and after it except for line break',
		},
		{
			command: '/as.d/g  ',
			description:
				'Match "as?d", question mark can be any character except for line break',
		},
		{
			command: '/asd../g ',
			description:
				'Match "asd" and two letters after it except for line break',
		},
	],
	[
		{
			command: '/[cm]ode/g',
			description:
				'Start by "c" or "m" and ends with "ode", like "code" or "mode"',
		},
		{
			command: '/[a-z]/g',
			description: 'Match lowercase letters between a-z',
		},
		{
			command: '/[a-zA-Z]/g',
			description: 'Match lowercase and uppercase letters between a-z',
		},
		{
			command: '/[0-9]/g',
			description: 'Match numbers between 0-9',
		},
	],
	[
		{
			command: '/t|The/g',
			description: 'Match "t" or "The"',
		},
		{
			command: '/(t|T)he/g',
			description:
				'Match "t" or "T" that ends with "he", like "the" or "The"',
		},
	],
	[
		{
			command: '/(a|s){2}/g',
			description:
				'Have to contain 2x "a" or "s", like "as", "sa", "aa", "ss"',
		},
		{
			command: '/asd{2,3}/g',
			description: 'Match "asdd" or "asddd"',
		},
		{
			command: '/(asd){2,3}/g',
			description: 'Match "asdasd" or "asdasdasd"',
		},
	],
	[
		{
			command: '/^Asd/g',
			description: 'String have to start with "Asd"',
		},
		{
			command: '/asd$/g',
			description: 'String have to end with "asd"',
		},
	],
	[
		{
			command: '/(?<=asd)./g',
			description: 'Match character after "asd" (positive look behind)',
		},
		{
			command: '/(?<!asd)./g',
			description:
				'Match everything except a character after "asd" (negative look behind)',
		},
	],
	[
		{
			command: '/.(?=asd)/g',
			description: 'Match character before "asd" (positive look ahead)',
		},
		{
			command: '/.(?!asd)/g',
			description:
				'Match everything except a character before "asd" (negative look ahead)',
		},
	],
	[
		{
			command: '/\\w{4}/g',
			description: 'Match alphanumeric that has 4 characters in a row',
		},
		{
			command: '/\\w{4,}/g',
			description:
				'Match alphanumeric that has 4 or more characters in a row',
		},
		{
			command: '/\\w{4,5}/g',
			description:
				'Match alphanumeric that has 4 or 5 characters in a row',
		},
	],
	[
		{
			command: '/(asd)|(dsa)/g',
			description: 'Match "asd" or "dsa". "()" sign creates a group',
		},
		{
			command: '/(?<group1>asd)|?<group1>(dsa)/g',
			description: 'Groups can be named. (group1), (group2)',
		},
	],
]
