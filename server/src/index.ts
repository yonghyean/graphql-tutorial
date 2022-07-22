import { ApolloServer } from "apollo-server";

// ApolloServer는 스키마와 리졸버가 반드시 필요함
const server = new ApolloServer({});

// listen 함수로 웹 서버 실행
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
