import Head from 'next/head';

type LayoutProps = React.PropsWithChildren<{
  title: string;

  description?: string;
}>;
export const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </div>
  );
};
