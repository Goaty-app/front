.PHONY: up down build logs ps restart stop start
.DEFAULT_GOAL := clean

up:
	docker compose up -d 

down:
	docker compose down --remove-orphans

build:
	docker compose build --no-cache

logs:
	docker compose logs -f

ps:
	docker compose ps

restart:
	docker compose restart

stop:
	docker compose stop
	
clean:
	docker volume prune -f
	docker network prune -f
	docker system prune -f