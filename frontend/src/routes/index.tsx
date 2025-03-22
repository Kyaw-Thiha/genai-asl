// import { api, apiClient } from '@/lib/api'
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Index,
})

const fetcher = (path: string) => fetch(path).then((res) => res.json());

function Index() {

  const { data: testing, isLoading, isError } = useQuery({
    queryKey: [""],
    // queryFn: () => api.useRoot__get(),
    queryFn: () => fetcher("http://localhost:8000/"),
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Something went wrong...</p>;

  console.log(testing);

  return (
    <div className="p-2 min-h-screen">
      <h3 className='bg-blue-700'>Welcome Home!</h3>
      {testing["message"]}
      {testing?.status}
    </div>
  )
}

