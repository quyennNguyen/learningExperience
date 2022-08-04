SOURCE: https://www.youtube.com/watch?v=RGOj5yH7evk&t=234s

***

### WHAT IS VERSION CONTROL SYSTEM?
##### Version Control, or Revision Control / Source Control / Source Code Management, is the management of changes to computer programs, documents, large web sites, and other collections of information. It basically records all the changes of your codes so that you and/or your team members can recall the specific versions of the codes over the time. This helps you track your codes (what you do and when you do it) as well as track down bugs.
##### Git is the most widely used free and open source Version Control System in software development.

***

### TERMS:
* GitHub: is the website that hosts your Git repositories online.
* CLI: is Command Line Interface.
* Terminal, or Command Line,: is the interface for text commands.
* Code Editor: is the word processor, or text editor, for writing code.
* repository: is your project, or the folder where your project is kept. repo: is short for repository
* directory: is folder, in general.
* pr: stands for pull request

***

### WHAT IS SSH?
##### SSH, stands for Secure Shell Protocol, provides a secure channel over an unsecured network; in other words, it helps you connect and aunthenticate to remote servers and services.
##### When setting up SSH, you need to (1) generate a SSH private key to use on your local machine and (2) add a SSH public key to the remote server that hosts your Git repo to enable SSH access for your account. The keys are used to authenticate Git operations over SSH.
##### 1. Private Key:
##### A private key needs a passphrase to further secure the authentication.
##### Whenever you use the key, you need to enter the passphrase. If you don't want to enter the passphrase everytime you use the key, you can add the key to the SSH agent.
##### The SSH agent manages your SSH private key and remembers your passphrase.
##### To generate a SSH private key:
##### a. Check for existing key: ls -la ~/.ssh
##### b. If there is no existing key, generate a private key with your GitHub account's email address: ssh-keygen -t ed25519 -C "email address"
##### c. Add your passphrase (the passphrase will be hidden on the Command Line)
##### d. Start the SSH agent manually: eval "$(ssh-agent -s)"
##### d. Add your key to the SSH agent: ssh-add ~/.ssh/id_ed25519
##### 2. Public Key:
##### To add a SSH public key to your account:
##### a. Copy the public key to your clipboard: clip < ~/.ssh/id_ed25519.pub
##### b. In GitHub/Settings/Access/SSH and GPG keys/New SSH key, add a title for your key pair and paste the public key, then add SSH key
##### 3. Test SSH Connection: ssh -T git@github.com

***
    
### GIT COMMANDS:
* cd <directory's name>: to change from the current directory to the specified directory
* cd = cd ~: to get to home directory
* cd ..: to get to one level above the current directory
* ls -la: to list all files and folders, including hidden ones, that are saved in Git commits
* .git: is the hidden folder that stores all the changes/updates/deletes of your files that are saved in Git commits
* git --version: to check Git's version
* git status: to show all the changed/updated/deleted files that are not yet saved in Git commits
* git log: to show a log of all Git commits in reverrse chronological order
* clear: to clear the CLI window
* press Q key: to exit the list

* git clone <repo's SSH>: to bring a remote repo where your project is hosted (remotely) into a local repo on your local machine (locally)
* git init: to initialize a new empty Git repo or to convert the curent directory into a Git repo
* git add <file's name>: to inform Git to track changes/updates/deletes of the specified files in the current directory; you can use <.> for <file's name> to track all (modified/updated/untracked) files in the current directory
* git commit -m "Message 1 (usually for what you do and when you do it)", -m "Message 2 (usually for further description)": to save changes/updates/deletes of all files in the current directory in Git
* git commit -am "message": to simultaneously add and save changes/updates/deletes of modified files only in the current directory in Git; this is a short cut for git add and git commit
* git remote add origin <repo's SSH>: to add a reference to the remote repo to set up the connection between the current local repo and the remote repo
* git remote -v: to check if there's any remote repo that is connected to the local repo you are working on
* git push origin <branch'name>: to upload Git commits from the specified branch of the current directory from the local repo to the remote repo
* git pull origin <branch'name>: to download Git commits from the specified branch of the current directory from the remote repo to the local repo
* -u, or --set-upstream,: can be added to git push or git pull before origin <branch'name> to set the specified branch of the current directory as a default branch so that everytime you want to push or pull Git commits from current directory, you can use git push or git pull without typing out origin <branch'name>

* git branch: to list all branches in the current directory
* git branch -d <branch'name>: to delete the specified branch in the current directory
* git checkout <branch'name>: to switch from the current branch to the specified branch in the current directory
* git checkout -b <branch'name>: to create a new branch and switch to that branch from the current branch in the current directory
* git diff <branch'name>: to show the difference between the current branch and the specified branch in the current directory
* git merge <branch'name>: to merge Git commits from the current branch to the specified branch in the current directory; if there're any merge conflicts, you have to fix them then commit the results.

* git reset <file's name>: to unstage any uncommited changes/updates/deletes of the specified file in the current directory
* git reset HEAD, or git reset HEAD~<pointer's index>: to unstage any uncommited and commited changes/updates/deletes of all files in the current directory; the index starts with 0, HEAD = HEAD~0, so after HEAD is HEAD~1,..., HEAD means the pointer to the latest commit, HEAD~1 means the pointer to one commit before the latest commit
* git reset <commit's hash number>: to unstage any commited changes/updates/deletes of all files in the current directory after the specified commit; the codes will still be there but not saved in Git commits
* git reset --hard <commit's hash number>: is the same as git reset <commit's hash number> except that the codes will be completely removed
