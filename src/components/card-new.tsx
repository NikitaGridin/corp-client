"use client"

import { useState } from 'react';
import instance from '@/axios/axios.client';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
export default function CardNews({ project }: any) {
  const [isLiked, setIsLiked] = useState(project.currentUserLiked === '1');
  const [likesCount, setLikesCount] = useState(project.likesCount);

  const handleLike = async () => {
    const newsId = project.news_id;

    if (isLiked) {
      await instance.post('news/removeLike', { newsId });
      setLikesCount(likesCount - 1);
    } else {
      await instance.post('news/setLike', { newsId });
      setLikesCount(likesCount + 1);
    }

    setIsLiked(!isLiked);
  };

  return (
    <div key={project.news_id} className="border border-black mb-10">
          <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
      <h2>{project.news_title}</h2>
      <div>{project.news_description}</div>
      <div>Просмотров {project.viewsCount}</div>

      <Tooltip title={isLiked ? 'Убрать лайк' : 'Лайкнуть'}>
        <Button onClick={handleLike} shape="round" icon={isLiked ? <HeartFilled /> : <HeartOutlined />}>
            <span>
            {likesCount}
            </span>
        </Button>
      </Tooltip>
    </div>
  );
}
