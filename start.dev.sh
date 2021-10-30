echo 'run yarn install ---------------------------'
yarn install
echo 'run yarn build typescript ------------------'
yarn build
echo 'run yarn migration:run ---------------------'
yarn migration:run
echo 'run yarn lint ------------------------------'
yarn lint
