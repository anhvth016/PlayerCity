import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Markup } from 'interweave';


const DisplayNews = () => {
  const [newsId, setNewsId] = useState('');
  const [newsContent, setNewsContent] = useState('');

  const handleClick = () => {
    if (newsId) {
      // T/H có nhập ID bài báo thì Gọi API lấy 1 bài báo theo ID đã nhập
      axios.get(`${process.env.REACT_APP_API_URL}/news/${newsId}`).then((res) => {
        console.log(res);
        setNewsContent(res.data?.detail?.content);
      });
    } else {
      // T/H k nhập ID bài báo thì Gọi API lấy toàn bộ danh sách bài báo r hiển thị bài báo đầu tiên
      axios.get(`${process.env.REACT_APP_API_URL}/news/`).then((res) => {
        console.log(res);
        setNewsContent(res.data[0]?.detail?.content);
      });
    }
  };
  return (
    <>
      <TextField
        id="id"
        name="newsId"
        variant="outlined"
        placeholder="ID bài báo cần hiển thị (Không nhập gì sẽ lấy bài báo đầu tiên trong DB"
        value={newsId}
        onChange={(e) => setNewsId(e.target.value)}
      />
      <Button onClick={handleClick}>
        Test Hiển thị bài báo trong Database
      </Button>
        <div className="content_wrapper">
            {newsContent && <Markup content={newsContent} />}
        </div>
      
    </>
  );
};

export default DisplayNews;
