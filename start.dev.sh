echo 'remove folder dist -------------------------'
rm -rf dist
echo 'run yarn install ---------------------------'
yarn install
echo 'run docker compose -------------------------'
yarn docker:up
echo 'run migrations -----------------------------'
npx prisma migrate dev
echo 'run db:seed --------------------------------'
yarn db:seed
echo 'run generate codegen -----------------------'
yarn generate
echo 'run yarn lint ------------------------------'
yarn lint:fix
echo 'run yarn dev -------------------------------'
yarn dev