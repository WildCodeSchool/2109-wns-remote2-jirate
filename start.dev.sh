echo 'remove folder dist -------------------------'
rm -rf dist
echo 'run yarn install ---------------------------'
yarn install
echo 'run yarn build typescript ------------------'
yarn build
echo 'run yarn migration:run ---------------------'
yarn migration:run
echo 'run yarn lint ------------------------------'
yarn lint
echo 'run yarn start:watch -----------------------'
yarn dev:watch