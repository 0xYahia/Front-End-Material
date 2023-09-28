Introduction to VCS, Git & GitHub:
What is version control?:
Version control is a system that records changes to a file or set of files over time so that you can recall
specific versions later.
#-----------------------------------------------------------------------------------------------------------------------#
History of Git:
Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing
to its initial development.

There three main types of version control systems:
1: Local Version Control (LVC)
=> A Local VCS entails one database on your hard disk that stores changes to files.
2: Centralized Version Control (CVC)
=> This system entails a single server storing all changes and file versions, which can be accessed by various clients.
work on the files live.
3: Distributed Version Control (DVC)
#-----------------------------------------------------------------------------------------------------------------------#
Git Architecture:
Working Directory: The actual files reside here. It holds the actual files.
Git Repository: The metadata and object database for the project. This is the place where Git stores the snapshots
of the project’s files.

Requirements:
1: Track Everything: track data and metadata
2: OS Independent: works on Linux, Mac, Windows, etc.
3: Unique ID: every object has a unique ID
4: Track History: track history of changes
5: No content change: once an object is stored, it cannot be changed

Git objects: items git will track and store
1: Blob: a file (track content and metadata)
2: Tree: a directory (Folder) (track content and metadata)
3: Commit: a snapshot of the project (track content and metadata)
4: Tagged annotation: a label for a commit (track metadata)

Three trees architecture:
1: Working Directory: the actual files reside here
2: Staging Area (Index): files ready to be committed
3: Git Repository: metadata and object database for the project

commit: a snapshot of the project
work flow: working directory -> staging area -> git repository
#-----------------------------------------------------------------------------------------------------------------------#
What is useful from staging area?:
1: You can review your changes before committing
2: You can commit related changes in one go
3: You can decide which changes to commit
#-----------------------------------------------------------------------------------------------------------------------#
Untracked files: files that are not tracked by git (files that are not in the staging area or git repository)
When i write git add . it will add all files in the working directory to the staging area
When i write git add -A it will add all files in the working directory to the staging area
When i write git add -u it will add all tracked files in the working directory to the staging area
Via SHA-1 hash: git add 6b2d0c5 to be tracked
Tracked files: files that are tracked by git (files that are in the staging area or git repository)

git commit: commit changes in the staging area to the git repository to initialize new version of the project
#-----------------------------------------------------------------------------------------------------------------------#
There two types of status files:
1: Untracked files (U): files that are not tracked by git (files that are not in the staging area or git repository)
2: Tracked files (): files that are tracked by git (files that are in the staging area or git repository)
There two types of tracked files:
1: Unmodified files (): files that are tracked by git and not modified. file in the working directory is the same as in repository
2: Modified files (M): files that are tracked by git and modified. file in the working directory is different from in repository
#-----------------------------------------------------------------------------------------------------------------------#
First-Time Git Setup:
Identity:
git config --global user.name "Yahia"
git config --global user.email "mohamedyahia207545@gmail.com"
#-----------------------------------------------------------------------------------------------------------------------#
git init: initialize git repository in the working directory
git status: show the status of files in the working directory

Show files:
git ls: show the files in the working directory
git ls-files: show the files in the staging area
git ls-files -s: show the files in the staging area with their SHA-1 hash
git ls-files -s -t: show the files in the staging area with their SHA-1 hash and their status
git ls-files -s -t -v: show the files in the staging area with their SHA-1 hash and their status and their mode
find .git/objects -type f: show the files in the git repository
#-----------------------------------------------------------------------------------------------------------------------#
git add: add files from the working directory to the staging area (from untracked files to tracked files)
git cat-file -t 6b2d0c5: show the type of the file with SHA-1 hash 6b2d0c5
git cat-file -p 6b2d0c5: show the content of the file with SHA-1 hash 6b2d0c5
git cat-file -s 6b2d0c5: show the size of the file with SHA-1 hash 6b2d0c5
#-----------------------------------------------------------------------------------------------------------------------#
NOTE: When i submit commit, git will take a snapshot of the project and store it in the git repository
and will crete three objects (blob, tree, commit) and will store them in the git repository
blob: a file (track content and metadata)
tree: a directory (Folder) (track content and metadata)
commit: commit object is wrapper around tree object (track content and metadata)
and it has a pointer to the parent commit (tree object)
#-----------------------------------------------------------------------------------------------------------------------#
git status -s: show the status of files in the working directory in short format
git log: show the history of commits
#-----------------------------------------------------------------------------------------------------------------------#
root commit: the first commit in the git repository and it has no parent commit (null)
NOTE: the group of commits that have the same parent commit is called branch
and this branch is called master branch by default
#-----------------------------------------------------------------------------------------------------------------------#
HEAD: a pointer to the last commit in the current branch (master branch by default)

git diff: show the difference between the working directory and the staging area
git diff --staged: show the difference between the staging area and the git repository
git diff --cached: show the difference between the staging area and the git repository
git log --oneline: show the history of commits in one line
git log --oneline -2: show the last two commits in one line
git log --oneline --graph: show the history of commits in one line with graph
git show 6b2d0c5: show the commit with SHA-1 hash 6b2d0c5 and its changes
git diff 6b2d0c5..5b2d0c5: show the difference between the commit with SHA-1 hash 6b2d0c5
and the commit with SHA-1 hash 5b2d0c5
git mv file1 file2: rename file1 to file2
#-----------------------------------------------------------------------------------------------------------------------#
Undoing Changes:
git rm -rf file1: remove fileName from the working directory and the staging area
git rm --cached file1: remove fileName from the staging area
git restore fileName: restore fileName from the staging area to the working directory (last commit in staging area)
git restore --staged fileName: restore fileName from the repository to the staging area (last commit in repository)
git commit -am "message": add all modified files to the staging area and commit them
git commit --amend: edit the last commit message
#-----------------------------------------------------------------------------------------------------------------------#
How to back forward to the specific version (commit) of the project:
To do that i will move HEAD pointer to this (version) commit in the current branch
git reset HEAD~1: move HEAD pointer to the parent commit of the current commit from the repository to the staging area
git reset --hard HEAD~1: move HEAD pointer to the parent commit of the current commit from the repository to the working directory directly
git reset --hard HEAD~2: move HEAD pointer to the parent commit of the parent commit of the current commit from the repository to the working directory directly
git reset --hard 6b2d0c5: move HEAD pointer to the commit with SHA-1 hash 6b2d0c5 from the repository to the working directory directly

git reflog: show the history of commits and the history of HEAD pointer

How to fast forward to the specific version (commit) of the project:
To do that i will move HEAD pointer to this (version) commit in the current branch
git reset --hard 6b2d0c5: move HEAD pointer to the commit with SHA-1 hash 6b2d0c5 from the repository to the working directory directly
git reset --hard HEAD@{1}: move HEAD pointer to the commit with SHA-1 hash 6b2d0c5 from the repository to the working directory directly
#-----------------------------------------------------------------------------------------------------------------------#
Tag:
git commit -am "last update": add all modified files to the staging area and commit them
git tag -a v1.0 -m "message": add tag v1.0 to the last commit with message
#-----------------------------------------------------------------------------------------------------------------------#
Branching:
git branch testing: create new branch called testing
git checkout -b testing: create new branch called testing and switch to it
git branch: show all branches
git switch testing: switch to testing branch
git checkout testing: switch to testing branch
git branch --merged: show all branches that are merged to the current branch (master branch by default)
git branch -d testing: delete testing branch
git branch -D testing: delete testing branch even if it has unmerged commits
git merge testing: merge testing branch to the current branch (master branch by default)
#-----------------------------------------------------------------------------------------------------------------------#
git config --global alias.sw switch: create alias sw for switch command
git config --global alias.graph "log --oneline --decorate --graph --all": create alias graph for log --oneline --graph --all command

NOTE: Merged via i move master with the pointer to the last commit in testing branch
#-----------------------------------------------------------------------------------------------------------------------#
Divergent Destroys:
Three way merge: If each branch has a commit that the other branch doesn't have
git merge testing: merge testing branch to the current branch (master branch by default)
#-----------------------------------------------------------------------------------------------------------------------#
Working with Remote:
git remote: show all remote repositories
git remote -v: show all remote repositories with their URLs (fetch and push)
git branch -r: show all remote branches
git branch -a: show all local and remote branches

If i want add remote:
git remote add origin: add remote repository called origin
git fetch origin: fetch all commits from origin repository to the local repository but doesn't merge them
git merge origin: merge all commits from origin repository to the local repository
git pull origin: fetch and merge all commits from origin repository to the local repository

If i have local branch called feature and i write git status and i see that branch none (not tracking any remote branch)
git push -u feature origin: push feature branch to origin repository and set up tracking between them

git branch -v: show all local branches with last commit message
git branch -vv: show all local branches with last commit message and their tracking branches (remote branches)
#-----------------------------------------------------------------------------------------------------------------------#
What different between git and GitHub:
git: is a version control system (VCS) that allows us to track our project and collaborate with other developers
GitHub: is a hoisting service for git repositories that allows us to share our project with other developers
git branch -M main: rename master branch to main branch
#-----------------------------------------------------------------------------------------------------------------------#
What is the difference between SSH and HTTPS:
SSH: is a secure protocol that provides authentication and encryption
HTTPS: is a secure protocol that provides encryption

NOTE: We use SSH to authenticate with GitHub if i want contribute to a project and i want to push my changes to the project
#-----------------------------------------------------------------------------------------------------------------------#
How to create SSH key in Linux:
1: ssh-keygen -t ed25519 -C "your_email@example.com"
2: eval "$(ssh-agent -s)"
3: cat ~/.ssh/id_ed25519.pub
4: copy the key and paste it in the GitHub account
#-----------------------------------------------------------------------------------------------------------------------#
How can i contribute to a project:
1: fork the project
2: clone the project to my local machine
3: add your remote repository to the project
4: add the remote of the original project to the project to keep track of the changes
5: make changes to the project
6: push the changes to your remote repository
7: create a pull request to the original project
#-----------------------------------------------------------------------------------------------------------------------#
