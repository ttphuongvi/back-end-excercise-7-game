const faker = require("faker");
const fs = require("fs");
/* Generate Images */

const ListGame = [
  {
    id: 1,
    release: "2019-12-11",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404087414834/qua-cau.png?width=1383&height=598",
    caption: "Qua cầu",
    description:
      "Trò chơi này có một gia đình đang ở trên một vách đá cao và cố gắng đến vách đá đối diện thông qua một khúc gỗ lớn, mỗi người trong số họ có một thời gian di chuyển khác nhau.",
    link: "https://codepen.io/HunorMarton/full/xxOMQKg",
  },
  {
    id: 2,
    release: "2018-04-06",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041372672090132/ban-chim.png?width=1383&height=600",
    caption: "Bắn chim",
    description:
      "SHOOT DUCK là một trò chơi săn chim phiêu lưu mạo hiểm mới được phát hành, bây giờ bạn có thể trải nghiệm cuộc sống thực sự săn chim trên thiết bị di động!",
    link: "https://codepen.io/elad2412/full/DBeNNZ",
  },
  {
    id: 3,
    release: "2021-06-01",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041403433091092/giai-do-kinh-di.png?width=1321&height=618",
    caption: "Giải đố kinh dị",
    description:
      "Firework là game giải đố kinh dị lấy cảm hứng từ phương Đông. Cũng giống như Detention, trò chơi này sẽ mang đến một cốt truyện đầy ám ảnh và bầu không khí rùng rợn khó quên.",
    link: "https://codepen.io/jcoulterdesign/full /WNxjVbW",
  },
  {
    id: 4,
    release: "2019-16-05",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041373582258196/doan-hinh-giong-nhau.png?width=1348&height=618",
    caption: "Tìm hình giống nhau",
    description:
      "Tìm hình giống nhau là một game giải trí nhẹ nhàng dành cho các em nhỏ giúp rèn luyện khả năng ghi nhớ thông qua việc lật mở các ô để tìm đúng các cặp hình giống nhau. ",
    link: "https://codepen.io/leemartin/full/VwQQVZQ",
  },
  {
    id: 5,
    release: "2018-10-11",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041372953116732/co-vua.png?width=1313&height=619",
    caption: "Cờ vua",
    description:
      "Cờ vua là một trò chơi chiến thuật dành cho hai người rất phổ biến. Để thắng ván cờ, bạn phải 'chiếu hết' đối thủ bằng cách di chuyển các quân cờ sao cho quân Vua của đối phương rơi vào thế đe doạ...",
    link: "https://codepen.io/jakealbaugh/full/JjRGQPY",
  },
  {
    id: 7,
    release: "2016-12-01",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404456517632/quay-so-trung-thuong.png?width=1339&height=619",
    caption: "Quay số trúng thưởng",
    description:
      "Quay số trúng thưởng là trình tạo số ngẫu nhiên. Bộ chọn mục danh sách ngẫu nhiên (bạn có thể tạo danh sách của riêng mình và nhận giá trị ngẫu nhiên từ nó).",
    link: "https://codepen.io/AdrianSandu/embed/MyBQYz?height=538&theme-id=dark&default-tab=result",
  },
  {
    id: 8,
    release: "2021-09-13",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041403860942878/oan-tu-ti.png?width=1315&height=619",
    caption: "Oẳn tù tì",
    description:
      "Oẳn tù tì không chỉ là một trò chơi may rủi, mà là một hệ thống chiến lược với nền tảng tâm lý vững chắc.Bạn có thể khai thác hành vi của đối thủ của bạn không? Chỉ có một cách để tìm hiểu! Chơi ngay!",
    link: "https://codepen.io/alvaromontoro/full/BaaBYyz",
  },
  {
    caption: "Gắp bóng",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041374681153546/gap-bong.png?width=1330&height=618",
    description:
      "Klemas là một ứng dụng trò chơi gắp thú bông trực tuyến, nơi bạn có thể thưởng thức các trò chơi gắp thú bông được ưa chuộng và máy gắp thú bông UFO trong trò chơi điện tử ở mọi lúc, mọi nơi.",
    release: "2022-06-09",
    link: "https://codepen.io/jkantner/full/abOBdgV",
    id: 9,
  },
  {
    caption: "Thám hiểm",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404674613248/tham-hiem.png?width=1311&height=619",
    description:
      " Trò chơi kết hợp phiêu lưu với kiến thức khoa học để truyền đạt thông tin cho bé trong môi trường vừa học vừa chơi lý tưởng.",
    release: "2022-06-09",
    link: "https://codepen.io/jcoulterdesign/full/NOMeEb",
    id: 10,
  },
];
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.findName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    number--;
  }
  return persons;
};

const person = generatePersonsData(10);
// console.log(person);

fs.writeFileSync(
  "./db.json",
  JSON.stringify({ users: person, games: ListGame })
);
