import { CommandItemProps } from '../CommandItem'

export const commands: { [key: string]: CommandItemProps[] } = {
	init: [
		{
			command: 'git init',
			description: 'Create an empty Git repository',
			details:
				'You can also use git init [repository name] to init git in child repository.',
		},
		{
			command: 'git clone [GitHub]',
			description: 'Clone a GitHub repository',
		},
		{
			command: 'git remote add origin [GitHub]',
			description: 'Add new remote repository',
		},
		{
			command: 'git push -u origin [branch]',
			description: 'Connect and push branch to origin',
		},
	],
	remote: [
		{
			command: 'git remote add origin [GitHub]',
			description: 'Add new remote repository',
		},
		{
			command: 'git push -u origin main',
			description: 'connect local repository to origin and push to main',
		},
		{
			command: 'git remote prune origin',
			description:
				'Remove local branches that have no remote-tracking references',
		},
		{
			command: 'git remote -v',
			description: 'Show remote name and URL',
		},
		{
			command: 'git remote set-url origin [GitHub]',
			description: 'Change remote URL',
		},
		{
			command: 'git remote rename origin [new name]',
			description: 'Rename remote',
			details: 'This command renames remote named origin to a new name',
		},
		{
			command: 'git remote rm origin',
			description: 'Remove remote',
			details:
				'This command do not delete the remote repository from the server. It simply removes the remote and its references from your local repository.',
		},
	],
	branch: [
		{
			command: 'git branch',
			description: 'List all local branches',
		},
		{
			command: 'git branch -a',
			description: 'List all branches',
		},
		{
			command: 'git branch [new branch]',
			description: 'Create new branch',
		},
		{
			command: 'git branch -m [newName]',
			description: 'Rename branch',
			details:
				'You can also rename another branch with: git branch -m [prevName] [newName]',
		},
		{
			command: 'git push -u origin [branch]',
			description: 'Push branch to remote',
			details: 'git push --set-upstream origin [branch]',
		},
		{
			command: 'git branch -d [branch]',
			description: 'Delete branch',
		},
		{
			command: 'git branch -D [branch]',
			description: "Delete branch even if it hasn't merged to main",
		},
		{
			command: 'git push origin :[branch]',
			description: 'Delete branch from remote',
		},
		{
			command: 'git checkout [branch / commit]',
			description: 'Checkout branch or commit',
		},
		{
			command: 'git checkout -b [branch]',
			description: 'Create branch and checkout to it',
		},
		{
			command: 'git checkout -',
			description: 'Return to HEAD',
		},
		{
			command: 'git checkout -- [files]',
			description: 'Remove unstaged changes?',
		},
	],
	commit: [
		{
			command: 'git add .',
			description: 'Stage all changes',
		},
		{
			command: 'git commit -m "[message]"',
			description: 'Commit changes with message',
		},
		{
			command: 'git commit -am "[message]"',
			description: 'git add . + git commit with message',
		},
		{
			command: 'git commit --amend -m  "[message]"',
			description: 'Rewrite last commit message',
		},
	],
	changes: [
		{
			command: 'git fetch',
			description: 'Fetch new changes from remote',
		},
		{
			command: 'git fetch --prune',
			description:
				'Fetch new changes from remote and remove local branches that have no remote-tracking references',
		},
		{
			command: 'git merge [branch]',
			description: 'Merge from local branch',
		},
		{
			command: 'git merge --squash [branch]',
			description: 'Merge from local branch as single commit',
		},
		{
			command: 'git merge --abort',
			description: 'Abort in-progress merge',
		},
		{
			command: 'git pull',
			description: 'Fetch and merge from remote',
		},
		{
			command: 'git pull origin [branch]',
			description: 'Pull from remote branch',
		},
		{
			command: 'git pull --squash',
			description: 'Pull from remote as single commit',
		},
		{
			command: 'git pull -r',
			description:
				'Local changes are reapplied on top of the remote changes (rebase)',
		},
		{
			command: 'git push',
			description: 'Push commits to remote',
		},
		{
			command: 'git push -f',
			description: 'Force push to remote (overwrite git history)',
		},
	],
	stash: [
		{
			command: 'git stash',
			description: 'Stash current changes',
		},
		{
			command: 'git stash list',
			description: 'List all stashes',
		},
		{
			command: 'git stash pop',
			description: 'Restore most recent stash',
		},
		{
			command: 'git stash drop',
			description: 'Delete most recent stash',
		},
		{
			command: 'git stash clear',
			description: 'Clear all stashes',
		},
	],
	reset: [
		{
			command: 'git reset [commit]',
			description: 'Reset to commit and keep changes',
		},
		{
			command: 'git reset --hard [commit]',
			description: 'Reset to commit and discard changes',
		},
		{
			command: 'git reset --hard origin/main',
			description: 'Reset to main branch from remote and discard changes',
		},
		{
			command: 'git reset HEAD^',
			description: 'Reset last local commit',
		},
		{
			command: 'git reset HEAD~[n]',
			description: 'Reset n amount of local commits',
		},
		{
			command: 'git reset --merge HEAD~1',
			description: 'Undo merge',
		},
		{
			command: 'git restore .',
			description: 'Discard all changes',
		},
		{
			command: 'git restore --staged .',
			description: 'Unstage all staged',
		},
		{
			command: 'git revert [commit]',
			description:
				'Reset commit and add the changes to current repository',
		},
	],
	info: [
		{
			command: 'git status',
			description: 'Show current status',
			details:
				'Status: Branch is up to date, ahead or behind. Files are created, modified or deleted. Files are staged, unstaged, untracked.',
		},
		{
			command: 'git show [commit]',
			description: 'Show commit info',
		},
		{
			command: 'git show [branch]',
			description: 'Show last commit info',
		},
		{
			command: 'git diff (branch)',
			description: 'Show diff between current to selected branch',
		},
		{
			command: 'git diff [first branch] [second branch]',
			description: 'Show diff between branches',
		},
		{
			command: 'git log --oneline --graph',
			description: 'Show commit history in oneline with graph',
		},
		{
			command: 'git log --reverse',
			description: 'Show commit history in reverse',
		},
	],
}

export const ignore = {
	Switch: [
		{
			command: 'git switch -c [branch]',
			description: 'Create a new branch and switch to it',
		},
		{
			command: 'git switch [branch]',
			description: 'Switch to branch',
			details:
				'Switch command cannot switch to commit. It can only switch to branches',
		},
		{
			command: 'git switch -',
			description: 'Return to HEAD',
		},
	],
	Custom: [
		{
			command: "git config --global alias.ca 'commit -am'",
			description: 'create alias (shortcut for commands)',
		},
		{
			command: "git ca 'new commit' ",
			description: "shortcut from alias: git commit -am 'new commit'",
		},
	],
	Random: [
		{
			command: 'git config --get remote.origin.url',
			description: 'Show current remote url',
		},
	],
	Learn: [
		{
			command: 'git bisect [start / bad / good / reset]',
			description:
				'Binary search between commits to find when a bug was created',
		},
	],
	OnHold: [
		{
			command: 'git log -p [file path]',
			description: 'Git log changes and commits related to this file.',
		},
		{
			command: 'git rebase',
			description: '?',
		},
		{
			command: 'git rebase --force-with-lease',
			description:
				"Makes sure you didn't change anything harmful? Doog for rewriting commit message of pushed commit. Shouldn't be dangerous?",
		},
	],
}
