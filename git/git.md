## Step 1: Create a GitHub Account
https://github.com/

## Step 2: Create New Repository
Once logged in, you should see a + icon on the top left of the screen. Click it and select `new repository`. Name the repository something relevant to what you're working on and make it public. Then, click the `create repository` button.

## Step 3: Find Your Newly Created Repository
Navigate over to your profile and click on the `repositories` tab. Find the newly created repository and select it. Copy the url from the section that says `quick setup` and navigate over to CMD.

## Step 4: Copy the git repository
Once in CMD, do the following:  `git clone [your url here]`. This should clone over the repository from the website to your computer. If all worked, you should find a folder that's called the same thing as what you called the repository on GitHub. Go ahead and cd into that directory. This will be your project workspace. Let's go ahead and make this an official git workspace. While inside that folder, type: `git init`. This command tells git that this workspace will be a git workspace. Basically, git allows for the modification, revision, and saving of your code, not only on your local machine, but in the cloud.

## Step 5: Ready To Commit To GitHub
Once you are ready to commit your current project on your local machine so it creates a timeline of changes, navigate to CMD and type: `git status`. If files are in green, that means things have been added or modified. If they're in red, that means things have been deleted. Now, go ahead and type: `git add .`. This adds all the filed that have been worked on to be ready to be committed. This process is also known as staging. Next, we will type: `git commit -m "[your commit message]"`. This will create a point on the timeline with you're message. It's good practice to name it something relevant to what you did.

## Step 6: Ready To Push To GitHub
Once you're ready to push to GitHub, aka Google Cloud for code, type: `git remote add origin [same url here]`. This will tell git that it will push your code to your specific repository on GitHub. Then type: `git push origin master`. This will upload your code to GitHub and if you go and check your GitHub repository, you'll see stuff has been added.

## Step 7: Repeat Step 5 and 6
