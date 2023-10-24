# reserver
An application for reserving rooms after scanning a QR code made with Next.js 13 and Django Rest Framework.

## To run

In frontend/reserver create .env.local file and fill it based on .env.local.example file.

Then run:
```shell
Frontend/reserver:
npm install
npm run dev

Backend/reserver:
pip install -r requirements.txt
python manage.py migrate
python manage.py migrate --run-syncdb

Create superuser
python manage.py createsuperuser

Runserver
python manage.py runserver
```
server will start on localhost with the PORT given in .env.local file.

In order for an account to be designated as a room account, follow these steps: first, create a 'Rooms' group in the Django admin panel and add the account to it. Next, create a room in the Django admin panel, set the name, and choose the correct user. After signing in, you will see a QR code.
