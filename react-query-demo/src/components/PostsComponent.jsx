import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};
export default function PostsComponent () {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['fetchPosts'],
        queryFn: fetchPosts,

        cacheTime: 1000 * 60 * 5,           
        staleTime: 1000 * 30,                
        refetchOnWindowFocus: false,         
        keepPreviousData: true, 
    });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}