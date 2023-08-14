import CardNews from "@/components/card-new"
import { getAllNews } from "@/services/news.service"
import { NextPage } from "next"

async function getNews() {
    const { data } = await getAllNews()
    return data
}
const News: NextPage = async () => {
    const news = await getNews()

    return (
        <div>
            <h1 className="text-2xl font-bold">Новости</h1>
            {news.map((project: any) => (
                <CardNews project={project} />
            ))}
        </div>
    )
}

export default News
