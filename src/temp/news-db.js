

const NewsDb = {
	news: [
		{
			published_date: Date.now(), // millsecond
			football_tournament: "Ngoại hạng Anh",
			title: "Manchester United",
			description:
				"MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?",
			newsThmb:
				"https://www.24h.com.vn/bong-da/truc-tiep-hop-bao-mu-dau-crystal-palace-ten-hag-noi-gi-ve-mount-amrabat-c48a1505895.html",
		},
		{
			published_date: Date.now() + 8000, // millsecond
			football_tournament: "Bóng đá Tây Ban Nha",
			title: "Manchester United",
			description:
				"MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?",
		},
		{
			published_date: Date.now() + 1000, // millsecond
			football_tournament: "Bóng đá Bồ Ban Nha",
			title: "Manchester United",
			description:
				"MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?",
		},
		// {
		// 	published_date: Date.now() + 1000, // millsecond
		// 	football_tournament: "Bóng đá Bồ Ban Nha",
		// 	title: "Manchester United",
		// 	description:
		// 		"MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?",
		// },
		// {
		// 	published_date: Date.now() + 1000, // millsecond
		// 	football_tournament: "Bóng đá Bồ Ban Nha",
		// 	title: "Manchester United",
		// 	description:
		// 		"MU thắng tưng bừng: Mount chỉ đá 45 phút bị thay ra, tình hình ra sao?",
		// },
	],
};

export const pause = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

export const getNewsDb = async () => {
    await pause(2000); // Pause 2s giả lập thời gian đợi dữ liệu trả về.
    return NewsDb;
}
