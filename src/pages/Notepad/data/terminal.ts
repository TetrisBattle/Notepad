import { CommandInfo } from '../CommandItem'

export const commands: CommandInfo[] = [
	{
		command: 'start [file / dir]',
		description: 'Open file or directory',
	},
	{
		command: 'dir > file.txt',
		description: 'Create file',
	},
	{
		command: 'mkdir [dirName]',
		description: 'Create directory',
	},
	{
		command: 'del [file / dir]',
		description: 'Delete directory',
	},
	{
		command: 'dir | findstr [text]',
		description: 'Filter',
		details:
			'dir *.png lists all png files. Works the same way as grep in linux',
	},
	{
		command: 'attrib',
		description: 'List all attributes in directory',
		details: '+a : archive, +r : read-only, +h : hidden, +s : system',
	},
	{
		command: 'attrib [file]',
		description: 'Show files attribute',
	},
	{
		command: 'attrib +r [file]',
		description: 'Make file read-only',
	},
	{
		command: 'attrib -r [file]',
		description: 'Remove read-only from file',
	},
	{
		command: 'type [file]',
		description: 'Print file content',
	},
	{
		command: 'echo "text" > [file] ',
		description: 'Create and write "text" to file',
	},
	{
		command: 'echo "text" >> [file]  ',
		description: 'Add "text" to file',
	},
	{
		command: 'cp [file] [dir]  ',
		description: 'Copy file to directory',
	},
	{
		command: 'cp [file] [dir]/[newName] ',
		description: 'Copy file to directory  with different name',
	},
	{
		command: 'mv [file] [dir]',
		description: 'Move file to dir',
	},
	{
		command: 'ren [file] [newName]',
		description: 'Rename',
	},
]
