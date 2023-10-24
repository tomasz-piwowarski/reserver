# reserver
An application for reserving rooms after scanning a QR code made with Next.js 13 and Django Rest Framework.

## To run

In frontend/reserver create .env.local file and file it based on .env.local.example file.

Then run:
```shell
Frontend/reserver:
npm install
npm run dev

Backend:
env\Scripts\activate

Backend/reserver:
pip install -r backend/requirements.txt
py manage.py runserver
```
server will start on localhost with the PORT given in .env.local file.

In order for an account to be treated as a room account, you must create a Rooms group in the Django admin panel and add it to it.
