import Loading from '@/src/components/common/Loading';
import { Layout } from '@/src/components/Layout';
import { gql, useQuery } from '@apollo/client';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const GET_MOVIE = gql`
  query {
    movies {
      id
      name
    }
  }
`;

export interface IMovie {
  id: number;
  name: string;
  rating: number;
}

export interface IMovieData {
  movie: IMovie;
}

export interface IMovieVars {
  id: number;
}

export interface IMoviesData {
  movies: IMovie[];
}

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<IMoviesData>(GET_MOVIE);
  return (
    <Layout title="grapql 튜토리얼">
      {loading ? (
        <Loading />
      ) : (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Movie List</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th isNumeric>rating</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.movies?.map((movie) => {
                return (
                  <Tr key={movie.id}>
                    <Td>{movie.id}</Td>
                    <Td>{movie.name} </Td>
                    <Td isNumeric>{movie.rating || 0}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Layout>
  );
};

export default Home;
