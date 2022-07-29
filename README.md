# BACKEND TECHNICAL TEST LEANWARE

---

## CONTENT OF THIS FILE

* Introduction
* Installation
* Deployment

---

## INTRODUCTION

This is the backend for the technical test

---

## INSTALLATION

install the npm packages `npm install`.

Initialize the `postgreSQL` and `pgadmin` images to manage the database `docker-compose up -d`.

To run pgadmin go to localhost:5050 and login with the credentials `admin@mail.com` and `root`.

Register a new server with the desired name and with connection to `postgreSQL` as host with the credentials `root` and `admin123`.

Configure the `.env` file using the `.envExample` file as an example, with the desired `port` for execution in `development mode` and the `database information` contained in the `docker-compose.yml` file

Use the command `npm run migrations:run` to generate the database structure.

To run in development mode use the command `npm run dev`.

---

## DEPLOYMENT


