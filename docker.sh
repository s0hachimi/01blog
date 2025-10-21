docker run --name my-postgres \
  -e POSTGRES_USER=sohachimi \
  -e POSTGRES_PASSWORD=123456 \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -d postgres

#   -v pgdata:/var/lib/postgresql/data \

docker exec -it my-postgres psql -U sohachimi -d mydatabase
