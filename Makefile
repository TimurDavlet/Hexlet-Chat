start-frontend:
	make -C frontend start

start-backend:
	npx start-server -p 5001

start-server:
	npx start-server -s ./frontend/build

build:
	npm run build --prefix frontend