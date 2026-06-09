// 國小 300 單字資料庫
// 30 組 × 10 字。欄位：en(英文) zh(中文) pos(詞性) ex(英文例句) exZh(例句中譯)
// pos: n.名詞 v.動詞 adj.形容詞 adv.副詞 prep.介系詞 pron.代名詞 num.數字 conj.連接詞 int.感嘆詞 phr.片語
window.VOCAB_GROUPS = [
  { id: 1, title: "數字 Numbers (1)", words: [
    { en:"one",   zh:"一", pos:"num.", ex:"I have one little brother at home.", exZh:"我家裡有一個弟弟。" },
    { en:"two",   zh:"二", pos:"num.", ex:"There are two cats sleeping on the sofa.", exZh:"沙發上有兩隻貓在睡覺。" },
    { en:"three", zh:"三", pos:"num.", ex:"We need three more chairs for the party.", exZh:"我們的派對還需要三張椅子。" },
    { en:"four",  zh:"四", pos:"num.", ex:"My family has four people.", exZh:"我家有四個人。" },
    { en:"five",  zh:"五", pos:"num.", ex:"The movie starts at five o'clock.", exZh:"電影五點開始。" },
    { en:"six",   zh:"六", pos:"num.", ex:"I can count to six in Japanese.", exZh:"我會用日語數到六。" },
    { en:"seven", zh:"七", pos:"num.", ex:"There are seven days in a week.", exZh:"一個星期有七天。" },
    { en:"eight", zh:"八", pos:"num.", ex:"My sister is eight years old.", exZh:"我妹妹八歲。" },
    { en:"nine",  zh:"九", pos:"num.", ex:"We have nine new students this year.", exZh:"今年我們有九個新同學。" },
    { en:"ten",   zh:"十", pos:"num.", ex:"I can do ten push-ups now.", exZh:"我現在能做十下伏地挺身。" }
  ]},
  { id: 2, title: "數字 Numbers (2)", words: [
    { en:"eleven",   zh:"十一", pos:"num.", ex:"There are eleven players on a soccer team.", exZh:"一支足球隊有十一名球員。" },
    { en:"twelve",   zh:"十二", pos:"num.", ex:"A year has twelve months.", exZh:"一年有十二個月。" },
    { en:"thirteen", zh:"十三", pos:"num.", ex:"My cousin will be thirteen next week.", exZh:"我表哥下星期就十三歲了。" },
    { en:"twenty",   zh:"二十", pos:"num.", ex:"Twenty students joined the singing contest.", exZh:"二十個學生參加了歌唱比賽。" },
    { en:"thirty",   zh:"三十", pos:"num.", ex:"The bus comes every thirty minutes.", exZh:"公車每三十分鐘來一班。" },
    { en:"forty",    zh:"四十", pos:"num.", ex:"My grandfather is forty years older than me.", exZh:"我爺爺比我大四十歲。" },
    { en:"fifty",    zh:"五十", pos:"num.", ex:"This story book has fifty pages.", exZh:"這本故事書有五十頁。" },
    { en:"hundred",  zh:"一百", pos:"num.", ex:"There are one hundred desks in the hall.", exZh:"大廳裡有一百張桌子。" },
    { en:"first",    zh:"第一", pos:"adj.", ex:"She won first place in the race.", exZh:"她在賽跑中得到第一名。" },
    { en:"second",   zh:"第二", pos:"adj.", ex:"I sit in the second row in class.", exZh:"我在班上坐第二排。" }
  ]},
  { id: 3, title: "顏色 Colors", words: [
    { en:"red",    zh:"紅色",   pos:"adj./n.", ex:"The apple on the table is bright red.", exZh:"桌上的蘋果是鮮紅色的。" },
    { en:"blue",   zh:"藍色",   pos:"adj./n.", ex:"I painted the sky blue in my picture.", exZh:"我把圖畫裡的天空塗成藍色。" },
    { en:"yellow", zh:"黃色",   pos:"adj./n.", ex:"The sunflowers in the garden are yellow.", exZh:"花園裡的向日葵是黃色的。" },
    { en:"green",  zh:"綠色",   pos:"adj./n.", ex:"Frogs are usually green.", exZh:"青蛙通常是綠色的。" },
    { en:"black",  zh:"黑色",   pos:"adj./n.", ex:"He is wearing a black jacket today.", exZh:"他今天穿著黑色的外套。" },
    { en:"white",  zh:"白色",   pos:"adj./n.", ex:"There are white clouds in the sky.", exZh:"天空中有白色的雲。" },
    { en:"pink",   zh:"粉紅色", pos:"adj./n.", ex:"My little sister loves her pink dress.", exZh:"我妹妹很喜歡她的粉紅色洋裝。" },
    { en:"brown",  zh:"棕色",   pos:"adj./n.", ex:"The bear has thick brown fur.", exZh:"那隻熊有厚厚的棕色毛。" },
    { en:"orange", zh:"橘色",   pos:"adj./n.", ex:"I drew an orange fish in the sea.", exZh:"我畫了一條橘色的魚在海裡。" },
    { en:"purple", zh:"紫色",   pos:"adj./n.", ex:"Grapes can be green or purple.", exZh:"葡萄可以是綠色或紫色的。" }
  ]},
  { id: 4, title: "寵物與農場動物 Animals (1)", words: [
    { en:"dog",     zh:"狗",   pos:"n.", ex:"My dog likes to run in the park.", exZh:"我的狗喜歡在公園裡跑。" },
    { en:"cat",     zh:"貓",   pos:"n.", ex:"The cat is sleeping under the table.", exZh:"貓正在桌子底下睡覺。" },
    { en:"fish",    zh:"魚",   pos:"n.", ex:"We have three fish in the tank.", exZh:"我們的魚缸裡有三條魚。" },
    { en:"bird",    zh:"鳥",   pos:"n.", ex:"A small bird is singing on the tree.", exZh:"一隻小鳥在樹上唱歌。" },
    { en:"rabbit",  zh:"兔子", pos:"n.", ex:"The rabbit eats carrots every day.", exZh:"兔子每天都吃紅蘿蔔。" },
    { en:"cow",     zh:"牛",   pos:"n.", ex:"The cow gives us fresh milk.", exZh:"牛提供我們新鮮的牛奶。" },
    { en:"pig",     zh:"豬",   pos:"n.", ex:"The pig is rolling in the mud.", exZh:"豬在泥巴裡打滾。" },
    { en:"horse",   zh:"馬",   pos:"n.", ex:"He rides a horse on the farm.", exZh:"他在農場騎馬。" },
    { en:"duck",    zh:"鴨子", pos:"n.", ex:"The ducks are swimming in the pond.", exZh:"鴨子在池塘裡游泳。" },
    { en:"chicken", zh:"雞",   pos:"n.", ex:"The chicken laid an egg this morning.", exZh:"母雞今天早上下了一顆蛋。" }
  ]},
  { id: 5, title: "野生動物 Animals (2)", words: [
    { en:"lion",     zh:"獅子", pos:"n.", ex:"The lion is the king of the animals.", exZh:"獅子是動物之王。" },
    { en:"tiger",    zh:"老虎", pos:"n.", ex:"A tiger has orange fur with black stripes.", exZh:"老虎有橘色的毛和黑色的條紋。" },
    { en:"bear",     zh:"熊",   pos:"n.", ex:"The bear sleeps all winter long.", exZh:"熊整個冬天都在睡覺。" },
    { en:"elephant", zh:"大象", pos:"n.", ex:"The elephant uses its long nose to drink water.", exZh:"大象用長長的鼻子喝水。" },
    { en:"monkey",   zh:"猴子", pos:"n.", ex:"The monkey is climbing up the tree.", exZh:"猴子正在爬樹。" },
    { en:"panda",    zh:"熊貓", pos:"n.", ex:"The panda loves to eat bamboo.", exZh:"熊貓喜歡吃竹子。" },
    { en:"snake",    zh:"蛇",   pos:"n.", ex:"We saw a long snake in the grass.", exZh:"我們在草叢裡看到一條長長的蛇。" },
    { en:"frog",     zh:"青蛙", pos:"n.", ex:"The frog jumped into the water.", exZh:"青蛙跳進水裡。" },
    { en:"fox",      zh:"狐狸", pos:"n.", ex:"The fox is a very clever animal.", exZh:"狐狸是一種很聰明的動物。" },
    { en:"zebra",    zh:"斑馬", pos:"n.", ex:"A zebra has black and white stripes.", exZh:"斑馬身上有黑白條紋。" }
  ]},
  { id: 6, title: "身體部位 Body", words: [
    { en:"head",  zh:"頭",   pos:"n.", ex:"I wear a hat on my head when it is cold.", exZh:"天冷時我會戴帽子在頭上。" },
    { en:"hair",  zh:"頭髮", pos:"n.", ex:"She has long black hair.", exZh:"她有一頭長長的黑髮。" },
    { en:"eye",   zh:"眼睛", pos:"n.", ex:"I close my eyes when I make a wish.", exZh:"許願的時候我會閉上眼睛。" },
    { en:"ear",   zh:"耳朵", pos:"n.", ex:"Rabbits have two long ears.", exZh:"兔子有兩隻長長的耳朵。" },
    { en:"nose",  zh:"鼻子", pos:"n.", ex:"The clown has a big red nose.", exZh:"小丑有一個大大的紅鼻子。" },
    { en:"mouth", zh:"嘴巴", pos:"n.", ex:"Please cover your mouth when you cough.", exZh:"咳嗽的時候請摀住嘴巴。" },
    { en:"hand",  zh:"手",   pos:"n.", ex:"Wash your hands before dinner.", exZh:"晚餐前要洗手。" },
    { en:"foot",  zh:"腳",   pos:"n.", ex:"My left foot hurts after the game.", exZh:"比賽後我的左腳很痛。" },
    { en:"leg",   zh:"腿",   pos:"n.", ex:"This table has four legs.", exZh:"這張桌子有四隻腳。" },
    { en:"arm",   zh:"手臂", pos:"n.", ex:"He carried the box with both arms.", exZh:"他用雙臂抱著箱子。" }
  ]},
  { id: 7, title: "家庭 Family", words: [
    { en:"father",      zh:"爸爸", pos:"n.", ex:"My father cooks breakfast on Sundays.", exZh:"我爸爸星期天會做早餐。" },
    { en:"mother",      zh:"媽媽", pos:"n.", ex:"My mother reads me a story every night.", exZh:"我媽媽每晚念故事給我聽。" },
    { en:"brother",     zh:"兄弟", pos:"n.", ex:"My brother is good at basketball.", exZh:"我哥哥很會打籃球。" },
    { en:"sister",      zh:"姊妹", pos:"n.", ex:"My sister and I share a room.", exZh:"我和姊姊共用一個房間。" },
    { en:"baby",        zh:"嬰兒", pos:"n.", ex:"The baby is sleeping in her bed.", exZh:"寶寶正在她的床上睡覺。" },
    { en:"grandfather", zh:"祖父", pos:"n.", ex:"My grandfather tells funny stories.", exZh:"我爺爺會說有趣的故事。" },
    { en:"grandmother", zh:"祖母", pos:"n.", ex:"My grandmother makes delicious soup.", exZh:"我奶奶煮的湯很好喝。" },
    { en:"family",      zh:"家庭", pos:"n.", ex:"My family goes hiking every weekend.", exZh:"我家每個週末都去爬山。" },
    { en:"uncle",       zh:"叔叔", pos:"n.", ex:"My uncle works in a big city.", exZh:"我叔叔在大城市工作。" },
    { en:"aunt",        zh:"阿姨", pos:"n.", ex:"My aunt gave me a nice gift.", exZh:"我阿姨送了我一個很棒的禮物。" }
  ]},
  { id: 8, title: "水果 Fruit", words: [
    { en:"apple",      zh:"蘋果", pos:"n.", ex:"An apple a day keeps me healthy.", exZh:"一天一蘋果讓我保持健康。" },
    { en:"banana",     zh:"香蕉", pos:"n.", ex:"Monkeys love to eat bananas.", exZh:"猴子喜歡吃香蕉。" },
    { en:"orange",     zh:"柳橙", pos:"n.", ex:"I drink fresh orange juice in the morning.", exZh:"我早上喝新鮮的柳橙汁。" },
    { en:"grape",      zh:"葡萄", pos:"n.", ex:"These grapes are sweet and juicy.", exZh:"這些葡萄又甜又多汁。" },
    { en:"watermelon", zh:"西瓜", pos:"n.", ex:"We eat watermelon on hot summer days.", exZh:"炎熱的夏天我們會吃西瓜。" },
    { en:"strawberry", zh:"草莓", pos:"n.", ex:"She put a strawberry on top of the cake.", exZh:"她在蛋糕上放了一顆草莓。" },
    { en:"lemon",      zh:"檸檬", pos:"n.", ex:"The lemon tastes very sour.", exZh:"檸檬嚐起來很酸。" },
    { en:"pear",       zh:"梨子", pos:"n.", ex:"This pear is soft and sweet.", exZh:"這梨子又軟又甜。" },
    { en:"mango",      zh:"芒果", pos:"n.", ex:"Mango is my favorite summer fruit.", exZh:"芒果是我最喜歡的夏天水果。" },
    { en:"guava",      zh:"芭樂", pos:"n.", ex:"Guava is a common fruit in Taiwan.", exZh:"芭樂是台灣常見的水果。" }
  ]},
  { id: 9, title: "食物 Food", words: [
    { en:"rice",      zh:"米飯", pos:"n.", ex:"We eat rice with almost every meal.", exZh:"我們幾乎每餐都吃米飯。" },
    { en:"noodle",    zh:"麵",   pos:"n.", ex:"I had a big bowl of noodles for lunch.", exZh:"我午餐吃了一大碗麵。" },
    { en:"bread",     zh:"麵包", pos:"n.", ex:"She put butter on the bread.", exZh:"她在麵包上塗奶油。" },
    { en:"egg",       zh:"蛋",   pos:"n.", ex:"I eat a boiled egg every morning.", exZh:"我每天早上吃一顆水煮蛋。" },
    { en:"meat",      zh:"肉",   pos:"n.", ex:"The dog is eating its meat.", exZh:"狗正在吃牠的肉。" },
    { en:"hamburger", zh:"漢堡", pos:"n.", ex:"He ordered a hamburger and some fries.", exZh:"他點了一個漢堡和一些薯條。" },
    { en:"hot dog",   zh:"熱狗", pos:"n.", ex:"We ate hot dogs at the baseball game.", exZh:"我們在棒球比賽時吃熱狗。" },
    { en:"pizza",     zh:"披薩", pos:"n.", ex:"Let's share a pizza after school.", exZh:"放學後我們一起吃披薩吧。" },
    { en:"cake",      zh:"蛋糕", pos:"n.", ex:"We made a cake for her birthday.", exZh:"我們為她的生日做了一個蛋糕。" },
    { en:"cookie",    zh:"餅乾", pos:"n.", ex:"Grandma baked some chocolate cookies.", exZh:"奶奶烤了一些巧克力餅乾。" }
  ]},
  { id: 10, title: "飲料與餐點 Drinks & Meals", words: [
    { en:"water",     zh:"水",   pos:"n.", ex:"Remember to drink enough water every day.", exZh:"記得每天喝足夠的水。" },
    { en:"milk",      zh:"牛奶", pos:"n.", ex:"I drink a glass of milk before bed.", exZh:"我睡前會喝一杯牛奶。" },
    { en:"juice",     zh:"果汁", pos:"n.", ex:"This apple juice tastes great.", exZh:"這蘋果汁很好喝。" },
    { en:"tea",       zh:"茶",   pos:"n.", ex:"My grandfather drinks tea every afternoon.", exZh:"我爺爺每天下午都喝茶。" },
    { en:"coffee",    zh:"咖啡", pos:"n.", ex:"My mother needs coffee in the morning.", exZh:"我媽媽早上需要咖啡。" },
    { en:"breakfast", zh:"早餐", pos:"n.", ex:"Breakfast is the most important meal.", exZh:"早餐是最重要的一餐。" },
    { en:"lunch",     zh:"午餐", pos:"n.", ex:"We have lunch at noon.", exZh:"我們中午吃午餐。" },
    { en:"dinner",    zh:"晚餐", pos:"n.", ex:"The whole family eats dinner together.", exZh:"全家人一起吃晚餐。" },
    { en:"soup",      zh:"湯",   pos:"n.", ex:"The hot soup is good on a cold day.", exZh:"在寒冷的日子喝熱湯很棒。" },
    { en:"candy",     zh:"糖果", pos:"n.", ex:"Don't eat too much candy.", exZh:"不要吃太多糖果。" }
  ]},
  { id: 11, title: "文具 School Items", words: [
    { en:"pen",      zh:"原子筆", pos:"n.", ex:"I write my name with a blue pen.", exZh:"我用藍筆寫我的名字。" },
    { en:"pencil",   zh:"鉛筆",   pos:"n.", ex:"My pencil is too short to use.", exZh:"我的鉛筆太短不能用了。" },
    { en:"eraser",   zh:"橡皮擦", pos:"n.", ex:"Can I borrow your eraser?", exZh:"我可以借你的橡皮擦嗎？" },
    { en:"ruler",    zh:"尺",     pos:"n.", ex:"Use a ruler to draw a straight line.", exZh:"用尺畫一條直線。" },
    { en:"book",     zh:"書",     pos:"n.", ex:"This book is about space and stars.", exZh:"這本書是關於太空和星星的。" },
    { en:"notebook", zh:"筆記本", pos:"n.", ex:"I write new words in my notebook.", exZh:"我把新單字寫在筆記本裡。" },
    { en:"bag",      zh:"書包",   pos:"n.", ex:"My school bag is very heavy today.", exZh:"我的書包今天很重。" },
    { en:"crayon",   zh:"蠟筆",   pos:"n.", ex:"The little boy drew a sun with a crayon.", exZh:"小男孩用蠟筆畫了一個太陽。" },
    { en:"marker",   zh:"麥克筆", pos:"n.", ex:"She wrote on the board with a marker.", exZh:"她用麥克筆寫在黑板上。" },
    { en:"glue",     zh:"膠水",   pos:"n.", ex:"I used glue to fix the paper.", exZh:"我用膠水把紙黏好。" }
  ]},
  { id: 12, title: "教室 Classroom", words: [
    { en:"teacher",   zh:"老師", pos:"n.", ex:"Our teacher is kind and patient.", exZh:"我們的老師既親切又有耐心。" },
    { en:"student",   zh:"學生", pos:"n.", ex:"Every student must finish the homework.", exZh:"每個學生都要完成作業。" },
    { en:"desk",      zh:"書桌", pos:"n.", ex:"Please keep your desk clean.", exZh:"請保持你的書桌乾淨。" },
    { en:"chair",     zh:"椅子", pos:"n.", ex:"He pushed in his chair before leaving.", exZh:"他離開前把椅子推進去。" },
    { en:"board",     zh:"黑板", pos:"n.", ex:"The teacher wrote the date on the board.", exZh:"老師把日期寫在黑板上。" },
    { en:"door",      zh:"門",   pos:"n.", ex:"Please close the door quietly.", exZh:"請輕輕地把門關上。" },
    { en:"window",    zh:"窗戶", pos:"n.", ex:"Open the window to let in fresh air.", exZh:"打開窗戶讓新鮮空氣進來。" },
    { en:"clock",     zh:"時鐘", pos:"n.", ex:"The clock on the wall is ten minutes fast.", exZh:"牆上的時鐘快了十分鐘。" },
    { en:"classroom", zh:"教室", pos:"n.", ex:"Our classroom is on the second floor.", exZh:"我們的教室在二樓。" },
    { en:"school",    zh:"學校", pos:"n.", ex:"I walk to school with my friends.", exZh:"我和朋友一起走路上學。" }
  ]},
  { id: 13, title: "衣物 Clothes", words: [
    { en:"shirt",   zh:"襯衫", pos:"n.", ex:"He is wearing a clean white shirt.", exZh:"他穿著一件乾淨的白襯衫。" },
    { en:"T-shirt", zh:"T恤",  pos:"n.", ex:"I wear a T-shirt when it is hot.", exZh:"天熱的時候我穿T恤。" },
    { en:"pants",   zh:"長褲", pos:"n.", ex:"These pants are too long for me.", exZh:"這條長褲對我來說太長了。" },
    { en:"skirt",   zh:"裙子", pos:"n.", ex:"She bought a new blue skirt.", exZh:"她買了一件新的藍裙子。" },
    { en:"dress",   zh:"洋裝", pos:"n.", ex:"The girl wore a pretty dress to the party.", exZh:"那女孩穿著漂亮的洋裝去派對。" },
    { en:"coat",    zh:"外套", pos:"n.", ex:"Put on your coat before going out.", exZh:"出門前穿上你的外套。" },
    { en:"hat",     zh:"帽子", pos:"n.", ex:"He wears a hat to keep the sun off.", exZh:"他戴帽子遮太陽。" },
    { en:"shoes",   zh:"鞋子", pos:"n.", ex:"My new shoes are very comfortable.", exZh:"我的新鞋子很舒服。" },
    { en:"socks",   zh:"襪子", pos:"n.", ex:"I can't find my other sock.", exZh:"我找不到我的另一隻襪子。" },
    { en:"gloves",  zh:"手套", pos:"n.", ex:"She wears gloves to keep her hands warm.", exZh:"她戴手套讓手保暖。" }
  ]},
  { id: 14, title: "房屋與房間 House & Rooms", words: [
    { en:"house",       zh:"房子", pos:"n.", ex:"They live in a small house near the river.", exZh:"他們住在河邊的一間小房子。" },
    { en:"home",        zh:"家",   pos:"n.", ex:"I feel happy when I am at home.", exZh:"在家裡我覺得很開心。" },
    { en:"room",        zh:"房間", pos:"n.", ex:"My room is full of books.", exZh:"我的房間裡都是書。" },
    { en:"bedroom",     zh:"臥室", pos:"n.", ex:"I do my homework in my bedroom.", exZh:"我在臥室裡寫功課。" },
    { en:"bathroom",    zh:"浴室", pos:"n.", ex:"Please turn off the bathroom light.", exZh:"請關掉浴室的燈。" },
    { en:"kitchen",     zh:"廚房", pos:"n.", ex:"Mom is cooking in the kitchen.", exZh:"媽媽正在廚房做菜。" },
    { en:"living room", zh:"客廳", pos:"n.", ex:"We watch TV in the living room.", exZh:"我們在客廳看電視。" },
    { en:"garden",      zh:"花園", pos:"n.", ex:"There are many flowers in the garden.", exZh:"花園裡有很多花。" },
    { en:"yard",        zh:"院子", pos:"n.", ex:"The children are playing in the yard.", exZh:"孩子們在院子裡玩。" },
    { en:"wall",        zh:"牆壁", pos:"n.", ex:"He hung a map on the wall.", exZh:"他在牆上掛了一張地圖。" }
  ]},
  { id: 15, title: "家具與用品 Furniture", words: [
    { en:"bed",      zh:"床",   pos:"n.", ex:"I make my bed every morning.", exZh:"我每天早上整理床鋪。" },
    { en:"table",    zh:"桌子", pos:"n.", ex:"Please put the dishes on the table.", exZh:"請把碗盤放在桌上。" },
    { en:"sofa",     zh:"沙發", pos:"n.", ex:"The cat is sleeping on the sofa.", exZh:"貓在沙發上睡覺。" },
    { en:"lamp",     zh:"檯燈", pos:"n.", ex:"I turn on the lamp when I read.", exZh:"我看書時會打開檯燈。" },
    { en:"TV",       zh:"電視", pos:"n.", ex:"Don't watch TV too late at night.", exZh:"晚上不要看電視看太晚。" },
    { en:"phone",    zh:"電話", pos:"n.", ex:"My father is talking on the phone.", exZh:"我爸爸正在講電話。" },
    { en:"computer", zh:"電腦", pos:"n.", ex:"I use the computer to do my project.", exZh:"我用電腦做我的報告。" },
    { en:"box",      zh:"盒子", pos:"n.", ex:"There are old toys in the box.", exZh:"盒子裡有舊玩具。" },
    { en:"cup",      zh:"杯子", pos:"n.", ex:"Pour the milk into the cup.", exZh:"把牛奶倒進杯子裡。" },
    { en:"key",      zh:"鑰匙", pos:"n.", ex:"I lost the key to my room.", exZh:"我把房間的鑰匙弄丟了。" }
  ]},
  { id: 16, title: "玩具與遊戲 Toys & Play", words: [
    { en:"toy",     zh:"玩具",   pos:"n.", ex:"The baby is playing with a new toy.", exZh:"寶寶正在玩新玩具。" },
    { en:"ball",    zh:"球",     pos:"n.", ex:"He kicked the ball into the goal.", exZh:"他把球踢進球門。" },
    { en:"doll",    zh:"洋娃娃", pos:"n.", ex:"The girl gave her doll a name.", exZh:"那女孩幫她的洋娃娃取了名字。" },
    { en:"kite",    zh:"風箏",   pos:"n.", ex:"We flew a kite in the park.", exZh:"我們在公園放風箏。" },
    { en:"balloon", zh:"氣球",   pos:"n.", ex:"The red balloon floated into the sky.", exZh:"紅氣球飄向天空。" },
    { en:"game",    zh:"遊戲",   pos:"n.", ex:"This game is fun to play with friends.", exZh:"這個遊戲和朋友一起玩很好玩。" },
    { en:"robot",   zh:"機器人", pos:"n.", ex:"He built a robot out of paper boxes.", exZh:"他用紙箱做了一個機器人。" },
    { en:"bike",    zh:"腳踏車", pos:"n.", ex:"I ride my bike to the library.", exZh:"我騎腳踏車去圖書館。" },
    { en:"card",    zh:"卡片",   pos:"n.", ex:"I made a card for Teacher's Day.", exZh:"我為教師節做了一張卡片。" },
    { en:"gift",    zh:"禮物",   pos:"n.", ex:"She opened her birthday gift happily.", exZh:"她開心地打開生日禮物。" }
  ]},
  { id: 17, title: "天氣與大自然 Weather & Nature", words: [
    { en:"sun",    zh:"太陽", pos:"n.", ex:"The sun is shining brightly today.", exZh:"今天太陽很亮。" },
    { en:"moon",   zh:"月亮", pos:"n.", ex:"The moon is round and bright tonight.", exZh:"今晚月亮又圓又亮。" },
    { en:"star",   zh:"星星", pos:"n.", ex:"We counted the stars in the night sky.", exZh:"我們數著夜空中的星星。" },
    { en:"sky",    zh:"天空", pos:"n.", ex:"The sky turns orange at sunset.", exZh:"日落時天空變成橘色。" },
    { en:"rain",   zh:"雨",   pos:"n.", ex:"The rain stopped after lunch.", exZh:"午餐後雨停了。" },
    { en:"wind",   zh:"風",   pos:"n.", ex:"The strong wind blew my hat away.", exZh:"強風把我的帽子吹走了。" },
    { en:"snow",   zh:"雪",   pos:"n.", ex:"The children played in the white snow.", exZh:"孩子們在白雪中玩耍。" },
    { en:"cloud",  zh:"雲",   pos:"n.", ex:"A big cloud covered the sun.", exZh:"一大片雲遮住了太陽。" },
    { en:"tree",   zh:"樹",   pos:"n.", ex:"Birds build their nests in the tree.", exZh:"鳥兒在樹上築巢。" },
    { en:"flower", zh:"花",   pos:"n.", ex:"She picked a flower for her mother.", exZh:"她摘了一朵花給媽媽。" }
  ]},
  { id: 18, title: "時間與星期 Time & Days", words: [
    { en:"day",       zh:"日子",   pos:"n.",      ex:"Today is a sunny and warm day.", exZh:"今天是個晴朗溫暖的日子。" },
    { en:"week",      zh:"星期",   pos:"n.",      ex:"We have art class twice a week.", exZh:"我們一星期有兩堂美術課。" },
    { en:"today",     zh:"今天",   pos:"n./adv.", ex:"Today is my best friend's birthday.", exZh:"今天是我最好朋友的生日。" },
    { en:"Sunday",    zh:"星期日", pos:"n.",      ex:"We visit my grandparents on Sunday.", exZh:"我們星期日去看祖父母。" },
    { en:"Monday",    zh:"星期一", pos:"n.",      ex:"School starts again on Monday.", exZh:"學校星期一又開始上課。" },
    { en:"Tuesday",   zh:"星期二", pos:"n.",      ex:"We have English class every Tuesday.", exZh:"我們每星期二有英文課。" },
    { en:"Wednesday", zh:"星期三", pos:"n.",      ex:"I go swimming on Wednesday afternoon.", exZh:"我星期三下午去游泳。" },
    { en:"Thursday",  zh:"星期四", pos:"n.",      ex:"The library is closed on Thursday.", exZh:"圖書館星期四休館。" },
    { en:"Friday",    zh:"星期五", pos:"n.",      ex:"We watch a movie on Friday night.", exZh:"我們星期五晚上看電影。" },
    { en:"Saturday",  zh:"星期六", pos:"n.",      ex:"I sleep late on Saturday morning.", exZh:"星期六早上我會睡晚一點。" }
  ]},
  { id: 19, title: "月份與季節 Months & Seasons", words: [
    { en:"month",   zh:"月份", pos:"n.", ex:"February is the shortest month.", exZh:"二月是最短的月份。" },
    { en:"year",    zh:"年",   pos:"n.", ex:"There are twelve months in a year.", exZh:"一年有十二個月。" },
    { en:"spring",  zh:"春天", pos:"n.", ex:"Flowers bloom in the spring.", exZh:"花在春天綻放。" },
    { en:"summer",  zh:"夏天", pos:"n.", ex:"We swim a lot in the summer.", exZh:"夏天我們常游泳。" },
    { en:"fall",    zh:"秋天", pos:"n.", ex:"Leaves turn yellow in the fall.", exZh:"秋天樹葉變黃。" },
    { en:"winter",  zh:"冬天", pos:"n.", ex:"It is cold and dry in the winter.", exZh:"冬天又冷又乾。" },
    { en:"January", zh:"一月", pos:"n.", ex:"The new year begins in January.", exZh:"新的一年從一月開始。" },
    { en:"May",     zh:"五月", pos:"n.", ex:"Mother's Day is in May.", exZh:"母親節在五月。" },
    { en:"morning", zh:"早上", pos:"n.", ex:"I brush my teeth every morning.", exZh:"我每天早上刷牙。" },
    { en:"night",   zh:"晚上", pos:"n.", ex:"The stars come out at night.", exZh:"星星在晚上出現。" }
  ]},
  { id: 20, title: "動作動詞 Action Verbs (1)", words: [
    { en:"go",    zh:"去",   pos:"v.", ex:"Let's go to the park after school.", exZh:"放學後我們去公園吧。" },
    { en:"come",  zh:"來",   pos:"v.", ex:"Please come to my house tomorrow.", exZh:"明天請來我家。" },
    { en:"run",   zh:"跑",   pos:"v.", ex:"I run around the playground every day.", exZh:"我每天繞著操場跑。" },
    { en:"walk",  zh:"走路", pos:"v.", ex:"We walk the dog after dinner.", exZh:"晚餐後我們去遛狗。" },
    { en:"jump",  zh:"跳",   pos:"v.", ex:"The cat can jump very high.", exZh:"那隻貓能跳得很高。" },
    { en:"sit",   zh:"坐",   pos:"v.", ex:"Please sit down and be quiet.", exZh:"請坐下並保持安靜。" },
    { en:"stand", zh:"站",   pos:"v.", ex:"We stand up when the teacher comes in.", exZh:"老師進來時我們會站起來。" },
    { en:"eat",   zh:"吃",   pos:"v.", ex:"We eat lunch at twelve o'clock.", exZh:"我們十二點吃午餐。" },
    { en:"drink", zh:"喝",   pos:"v.", ex:"Drink some water after you run.", exZh:"跑步後喝點水。" },
    { en:"sleep", zh:"睡覺", pos:"v.", ex:"Children should sleep early.", exZh:"小孩子應該早睡。" }
  ]},
  { id: 21, title: "動作動詞 Action Verbs (2)", words: [
    { en:"read",   zh:"閱讀", pos:"v.", ex:"I like to read books before bed.", exZh:"我喜歡睡前看書。" },
    { en:"write",  zh:"寫",   pos:"v.", ex:"Please write your name on the paper.", exZh:"請在紙上寫你的名字。" },
    { en:"sing",   zh:"唱歌", pos:"v.", ex:"We sing songs in music class.", exZh:"我們在音樂課唱歌。" },
    { en:"dance",  zh:"跳舞", pos:"v.", ex:"She loves to dance to the music.", exZh:"她喜歡隨著音樂跳舞。" },
    { en:"play",   zh:"玩",   pos:"v.", ex:"The kids play games at recess.", exZh:"孩子們下課時玩遊戲。" },
    { en:"look",   zh:"看",   pos:"v.", ex:"Look at the beautiful rainbow!", exZh:"看那美麗的彩虹！" },
    { en:"listen", zh:"聽",   pos:"v.", ex:"Please listen to your teacher.", exZh:"請聽老師說話。" },
    { en:"open",   zh:"打開", pos:"v.", ex:"Open your books to page ten.", exZh:"把書翻到第十頁。" },
    { en:"close",  zh:"關閉", pos:"v.", ex:"Please close the window, it is cold.", exZh:"請關上窗戶，很冷。" },
    { en:"draw",   zh:"畫畫", pos:"v.", ex:"He likes to draw cars and trains.", exZh:"他喜歡畫汽車和火車。" }
  ]},
  { id: 22, title: "形容詞 Adjectives (1)", words: [
    { en:"big",   zh:"大的",      pos:"adj.", ex:"An elephant is a very big animal.", exZh:"大象是很大的動物。" },
    { en:"small", zh:"小的",      pos:"adj.", ex:"A mouse is a small animal.", exZh:"老鼠是很小的動物。" },
    { en:"tall",  zh:"高的",      pos:"adj.", ex:"The basketball player is very tall.", exZh:"那位籃球員很高。" },
    { en:"short", zh:"矮的/短的", pos:"adj.", ex:"My hair is shorter than yours.", exZh:"我的頭髮比你的短。" },
    { en:"long",  zh:"長的",      pos:"adj.", ex:"The giraffe has a long neck.", exZh:"長頸鹿有長長的脖子。" },
    { en:"fat",   zh:"胖的",      pos:"adj.", ex:"The cat got fat after eating too much.", exZh:"那隻貓吃太多變胖了。" },
    { en:"thin",  zh:"瘦的",      pos:"adj.", ex:"This book is thin and light.", exZh:"這本書又薄又輕。" },
    { en:"old",   zh:"老的/舊的", pos:"adj.", ex:"My grandparents live in an old house.", exZh:"我的祖父母住在一間老房子。" },
    { en:"young", zh:"年輕的",    pos:"adj.", ex:"She is too young to go to school.", exZh:"她年紀太小還不能上學。" },
    { en:"new",   zh:"新的",      pos:"adj.", ex:"I got a new bike for my birthday.", exZh:"我生日收到一台新腳踏車。" }
  ]},
  { id: 23, title: "形容詞 Adjectives (2)", words: [
    { en:"happy", zh:"快樂的", pos:"adj.", ex:"I am happy to see my old friends.", exZh:"看到老朋友我很開心。" },
    { en:"sad",   zh:"難過的", pos:"adj.", ex:"He felt sad when his pet was sick.", exZh:"他的寵物生病時他很難過。" },
    { en:"hot",   zh:"熱的",   pos:"adj.", ex:"The soup is too hot to drink now.", exZh:"這湯太燙了現在不能喝。" },
    { en:"cold",  zh:"冷的",   pos:"adj.", ex:"Wear a coat, the wind is cold.", exZh:"穿上外套，風很冷。" },
    { en:"good",  zh:"好的",   pos:"adj.", ex:"She is a good singer.", exZh:"她是個很好的歌手。" },
    { en:"bad",   zh:"壞的",   pos:"adj.", ex:"The weather is bad today.", exZh:"今天天氣很糟。" },
    { en:"fast",  zh:"快的",   pos:"adj.", ex:"Cheetahs can run very fast.", exZh:"獵豹能跑得很快。" },
    { en:"slow",  zh:"慢的",   pos:"adj.", ex:"The old turtle is very slow.", exZh:"那隻老烏龜走得很慢。" },
    { en:"clean", zh:"乾淨的", pos:"adj.", ex:"Keep your hands clean before eating.", exZh:"吃東西前要保持手乾淨。" },
    { en:"dirty", zh:"髒的",   pos:"adj.", ex:"His shoes are dirty after the rain.", exZh:"雨後他的鞋子髒了。" }
  ]},
  { id: 24, title: "運動 Sports", words: [
    { en:"basketball", zh:"籃球", pos:"n.", ex:"We play basketball after school.", exZh:"我們放學後打籃球。" },
    { en:"baseball",   zh:"棒球", pos:"n.", ex:"He hit the baseball over the fence.", exZh:"他把棒球打過了圍牆。" },
    { en:"soccer",     zh:"足球", pos:"n.", ex:"Our soccer team won the game.", exZh:"我們的足球隊贏了比賽。" },
    { en:"tennis",     zh:"網球", pos:"n.", ex:"She plays tennis every weekend.", exZh:"她每個週末打網球。" },
    { en:"swim",       zh:"游泳", pos:"v.", ex:"I learned to swim last summer.", exZh:"我去年夏天學會游泳。" },
    { en:"running",    zh:"跑步", pos:"n.", ex:"Running is good for your health.", exZh:"跑步對健康有益。" },
    { en:"jump rope",  zh:"跳繩", pos:"n.", ex:"We jump rope during the break.", exZh:"我們下課時跳繩。" },
    { en:"ride",       zh:"騎乘", pos:"v.", ex:"He likes to ride his bike to school.", exZh:"他喜歡騎腳踏車上學。" },
    { en:"win",        zh:"贏",   pos:"v.", ex:"Our class hopes to win the contest.", exZh:"我們班希望贏得比賽。" },
    { en:"team",       zh:"隊伍", pos:"n.", ex:"Everyone on the team works hard.", exZh:"隊上每個人都很努力。" }
  ]},
  { id: 25, title: "職業與人 Jobs & People", words: [
    { en:"doctor", zh:"醫生", pos:"n.", ex:"The doctor helps sick people get better.", exZh:"醫生幫助生病的人康復。" },
    { en:"nurse",  zh:"護士", pos:"n.", ex:"The nurse is very kind to the children.", exZh:"護士對孩子們很親切。" },
    { en:"farmer", zh:"農夫", pos:"n.", ex:"The farmer grows rice and corn.", exZh:"農夫種稻米和玉米。" },
    { en:"cook",   zh:"廚師", pos:"n.", ex:"The cook made a wonderful dinner.", exZh:"廚師做了一頓很棒的晚餐。" },
    { en:"police", zh:"警察", pos:"n.", ex:"The police help keep the city safe.", exZh:"警察幫忙維護城市安全。" },
    { en:"driver", zh:"司機", pos:"n.", ex:"The bus driver said good morning to us.", exZh:"公車司機跟我們說早安。" },
    { en:"boy",    zh:"男孩", pos:"n.", ex:"The boy is reading a comic book.", exZh:"那男孩正在看漫畫。" },
    { en:"girl",   zh:"女孩", pos:"n.", ex:"The girl is drawing a picture.", exZh:"那女孩正在畫畫。" },
    { en:"man",    zh:"男人", pos:"n.", ex:"The man is walking his dog.", exZh:"那個男人正在遛狗。" },
    { en:"woman",  zh:"女人", pos:"n.", ex:"The woman is buying fruit at the market.", exZh:"那位女士正在市場買水果。" }
  ]},
  { id: 26, title: "交通工具 Transportation", words: [
    { en:"car",     zh:"汽車",   pos:"n.", ex:"My father drives a blue car.", exZh:"我爸爸開一輛藍色的車。" },
    { en:"bus",     zh:"公車",   pos:"n.", ex:"I take the bus to school every day.", exZh:"我每天搭公車上學。" },
    { en:"train",   zh:"火車",   pos:"n.", ex:"The train is faster than the bus.", exZh:"火車比公車快。" },
    { en:"boat",    zh:"船",     pos:"n.", ex:"We rode a small boat on the lake.", exZh:"我們在湖上划小船。" },
    { en:"ship",    zh:"輪船",   pos:"n.", ex:"The big ship is sailing across the sea.", exZh:"大船正航行過海洋。" },
    { en:"plane",   zh:"飛機",   pos:"n.", ex:"The plane flew high above the clouds.", exZh:"飛機飛在雲層之上。" },
    { en:"taxi",    zh:"計程車", pos:"n.", ex:"We took a taxi to the train station.", exZh:"我們搭計程車去火車站。" },
    { en:"truck",   zh:"卡車",   pos:"n.", ex:"The truck is carrying many boxes.", exZh:"卡車載著很多箱子。" },
    { en:"MRT",     zh:"捷運",   pos:"n.", ex:"We take the MRT to the museum.", exZh:"我們搭捷運去博物館。" },
    { en:"scooter", zh:"機車",   pos:"n.", ex:"My mother rides a scooter to work.", exZh:"我媽媽騎機車上班。" }
  ]},
  { id: 27, title: "場所 Places", words: [
    { en:"park",       zh:"公園",   pos:"n.", ex:"We have a picnic in the park.", exZh:"我們在公園野餐。" },
    { en:"zoo",        zh:"動物園", pos:"n.", ex:"We saw many animals at the zoo.", exZh:"我們在動物園看到很多動物。" },
    { en:"store",      zh:"商店",   pos:"n.", ex:"I bought a notebook at the store.", exZh:"我在商店買了一本筆記本。" },
    { en:"market",     zh:"市場",   pos:"n.", ex:"Mom buys fresh fish at the market.", exZh:"媽媽在市場買新鮮的魚。" },
    { en:"hospital",   zh:"醫院",   pos:"n.", ex:"The hospital is next to the park.", exZh:"醫院在公園旁邊。" },
    { en:"library",    zh:"圖書館", pos:"n.", ex:"I borrow books from the library.", exZh:"我在圖書館借書。" },
    { en:"restaurant", zh:"餐廳",   pos:"n.", ex:"We had dinner at a Japanese restaurant.", exZh:"我們在一家日本餐廳吃晚餐。" },
    { en:"bank",       zh:"銀行",   pos:"n.", ex:"My father went to the bank this morning.", exZh:"我爸爸今天早上去了銀行。" },
    { en:"beach",      zh:"海灘",   pos:"n.", ex:"We built a sandcastle on the beach.", exZh:"我們在海灘上堆沙堡。" },
    { en:"city",       zh:"城市",   pos:"n.", ex:"Taipei is a busy and big city.", exZh:"台北是個忙碌的大城市。" }
  ]},
  { id: 28, title: "感覺 Feelings", words: [
    { en:"love",    zh:"愛",     pos:"v./n.", ex:"I love my family very much.", exZh:"我非常愛我的家人。" },
    { en:"like",    zh:"喜歡",   pos:"v.",    ex:"I like to play with my dog.", exZh:"我喜歡和我的狗玩。" },
    { en:"angry",   zh:"生氣的", pos:"adj.",  ex:"He was angry when he lost the game.", exZh:"他輸了比賽時很生氣。" },
    { en:"hungry",  zh:"餓的",   pos:"adj.",  ex:"I am hungry after the long walk.", exZh:"走了很久後我餓了。" },
    { en:"thirsty", zh:"渴的",   pos:"adj.",  ex:"I feel thirsty after playing sports.", exZh:"運動後我覺得口渴。" },
    { en:"tired",   zh:"累的",   pos:"adj.",  ex:"She was tired after the long trip.", exZh:"長途旅行後她很累。" },
    { en:"afraid",  zh:"害怕的", pos:"adj.",  ex:"The little boy is afraid of the dark.", exZh:"小男孩怕黑。" },
    { en:"excited", zh:"興奮的", pos:"adj.",  ex:"We are excited about the school trip.", exZh:"我們對校外教學感到興奮。" },
    { en:"fine",    zh:"很好的", pos:"adj.",  ex:"I feel fine after a good rest.", exZh:"好好休息後我覺得很好。" },
    { en:"sorry",   zh:"抱歉的", pos:"adj.",  ex:"I am sorry for being late.", exZh:"我很抱歉遲到了。" }
  ]},
  { id: 29, title: "方位與介系詞 Directions", words: [
    { en:"up",    zh:"上面",    pos:"adv.",     ex:"The balloon went up into the sky.", exZh:"氣球升上天空。" },
    { en:"down",  zh:"下面",    pos:"adv.",     ex:"Please sit down on the floor.", exZh:"請坐在地板上。" },
    { en:"in",    zh:"在…裡面", pos:"prep.",    ex:"The cat is sleeping in the box.", exZh:"貓在盒子裡睡覺。" },
    { en:"on",    zh:"在…上面", pos:"prep.",    ex:"The book is on the desk.", exZh:"書在桌上。" },
    { en:"under", zh:"在…下面", pos:"prep.",    ex:"The ball rolled under the bed.", exZh:"球滾到床底下。" },
    { en:"left",  zh:"左邊",    pos:"n./adj.",  ex:"Turn left at the next corner.", exZh:"在下個轉角左轉。" },
    { en:"right", zh:"右邊",    pos:"n./adj.",  ex:"The store is on your right.", exZh:"商店在你的右邊。" },
    { en:"here",  zh:"這裡",    pos:"adv.",     ex:"Please put your bag here.", exZh:"請把你的包包放在這裡。" },
    { en:"there", zh:"那裡",    pos:"adv.",     ex:"My friend is waiting over there.", exZh:"我朋友在那裡等。" },
    { en:"near",  zh:"在…附近", pos:"prep.",    ex:"The school is near my home.", exZh:"學校在我家附近。" }
  ]},
  { id: 30, title: "常用字與招呼 Common Words", words: [
    { en:"hello",     zh:"你好", pos:"int.", ex:"She said hello to her new classmate.", exZh:"她跟新同學打招呼說你好。" },
    { en:"goodbye",   zh:"再見", pos:"int.", ex:"We waved goodbye to our friends.", exZh:"我們向朋友揮手道別。" },
    { en:"yes",       zh:"是的", pos:"adv.", ex:"Yes, I would love to join you.", exZh:"好的，我很樂意加入你們。" },
    { en:"no",        zh:"不",   pos:"adv.", ex:"No, thank you, I am full.", exZh:"不用了，謝謝，我吃飽了。" },
    { en:"please",    zh:"請",   pos:"adv.", ex:"Please pass me the salt.", exZh:"請把鹽遞給我。" },
    { en:"thank you", zh:"謝謝", pos:"phr.", ex:"Thank you for helping me today.", exZh:"謝謝你今天幫我。" },
    { en:"name",      zh:"名字", pos:"n.",   ex:"May I ask your name?", exZh:"我可以問你的名字嗎？" },
    { en:"friend",    zh:"朋友", pos:"n.",   ex:"A good friend is always there for you.", exZh:"好朋友總是在你身邊。" },
    { en:"color",     zh:"顏色", pos:"n.",   ex:"What is your favorite color?", exZh:"你最喜歡的顏色是什麼？" },
    { en:"number",    zh:"數字", pos:"n.",   ex:"Please write your phone number here.", exZh:"請在這裡寫你的電話號碼。" }
  ]}
];

// 攤平成 1~300 編號清單
window.VOCAB_FLAT = (function(){
  const arr = [];
  let n = 1;
  window.VOCAB_GROUPS.forEach(g => {
    g.words.forEach(w => {
      arr.push({ no: n++, en: w.en, zh: w.zh, pos: w.pos, ex: w.ex, exZh: w.exZh, groupId: g.id, groupTitle: g.title });
    });
  });
  return arr;
})();
