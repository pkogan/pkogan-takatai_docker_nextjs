FROM node:18.16.0-alpine3.18
RUN mkdir -p /app
RUN mkdir -p /app/test
COPY /app /app
WORKDIR /app/test
RUN  npm install
CMD ["npm", "run", "dev"]

#descargar imagen node
#docker pull node:18.16.0-alpine3.18
#para crear la imagen nextjs_dev
#docker build -t nextjs_dev .
#para crear contenedor ver identificar nombre
#docker run -dit --name c1_nextjs_dev -v ./app:/app -p 3000:3000 nextjs_dev 
#para parar docker
#docker stop c1_nextjs_dev
#para arrancar docker
#docker start c1_nextjs_dev
#para shell
#docker exec -it c1_nextjs_dev sh 
#npx create-next-app@latest test --ts --eslint
#cd test/
#npm run dev
#instalar libreria openai
#npm install openai