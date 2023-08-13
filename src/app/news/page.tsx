import CardNews from "@/components/card-new";
import { getAllNews } from "@/services/news.service";

async function getNews() {
    const {data} = await getAllNews();    
    return data
  }
   
  export default async function News() {
    const news = await getNews()
   
    return (
      <div>
        <h1 className="text-2xl font-bold">Новости</h1>
        {news.map((project:any) => (
          <CardNews project={project}/>
        ))}
      </div>
    )
  }