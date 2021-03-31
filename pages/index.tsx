import { InferGetStaticPropsType } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled";

const List = styled.ul`
  list:style:square;
`;

const ListItem = styled.li`
  padding:10px;
  text-transform:capitalize;
  margin: 40px 0;
  cursor: pointer;
  color:#252525;
  &:hover {
    background:#f0f0f0
  }
`;

const PostTitle = styled.h2`
  margin:0;
  font-size:24px;
`;


const title: string="Into the Rabbithole";

export default function Home({posts,
}:InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Jarred Stiger Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">{title}</a>
        </h1>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
            </ListItem>
          ))}
        </List>

      </main>

    </div>
  )
}



export type Post = {
  userId: number;
  id:number;
  title: string;
  body:string;
}



export const getStaticProps = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  const posts: Post[] = await res.json();
  
  return {
    props: {
      posts,
    },

  };

}