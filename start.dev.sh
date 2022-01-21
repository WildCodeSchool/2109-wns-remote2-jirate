echo 'run build server docker image --------------'
docker build -t server .
echo 'run docker compose -------------------------'
yarn docker:up
echo 'run migrations -----------------------------'
npx prisma migrate dev
echo 'run db:seed --------------------------------'
yarn db:seed