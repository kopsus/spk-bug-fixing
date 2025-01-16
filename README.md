```bash
npm install
```
## create file .env
```bash
DATABASE_URL=DATABASE_URL="mysql://user_db:password_db@localhost:3306/db_name"
JWT_SECRET=rahasia
NEXT_PUBLIC_API_URL=/api
```
## migrate database
before migrate, make sure database server is running
running database local server using xampp or laragon
```bash
npx prisma migrate dev
```
```bash
npm run dev
open http://localhost:3000
```
