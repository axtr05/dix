FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000


for week 7

for week 5 use Execute Windows batch command

https://chatgpt.com/share/691a801c-4a8c-8013-bd02-93200aa5fd54 

week 8 how to do is there
