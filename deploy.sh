echo 'Deploying to gh-pages...'

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

rm -rf build || exit 0
yarn run build

REPO=`git config remote.origin.url`
SSH_REPO={$repo/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages branch
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Clean out existing contents
rm -rf out/**/* || exit 0

cp -r ./app out/

cd out

git add .
git commit -m "Deploy to Github Pages: ${SHA}"

git push $SSH_REPO $TARGET_BRANCH


