// 1. TAG_URL: 向 database 要求 tage 的 link, 如 rent
// 2. MEMBER_URL: 向 database 要求 member 的 link, 如 Gary FAN

const TAG_URL = "http://23.235.195.94:8080/legco/motions?tags="

const MEMBER_URL = "http://23.235.195.94:8080/legco/member_vote_records?member_name="

const URL = {"TAG_URL": TAG_URL, "MEMBER_URL": MEMBER_URL}

const PARTY_ARRAY = ["民主黨", "民建聯", "公民黨", "工聯會", "自由黨", "經濟動力", "工黨", "人民力量", "社民連", "新民黨", "公共專業聯盟", "新論壇", "民協", "勞聯", "新同盟", "街工", "西九新動力", "經濟動力", "無黨籍"]

const PARTY_MEMEBER_LIST = {"民主黨": ["胡志偉", "何俊仁", "單仲偕", "黃碧雲", "劉慧卿", "涂謹申"], "民建聯": ["譚耀宗", "葉國謙", "葛珮帆", "梁志祥", "陳鑑林", "鍾樹根", "李慧琼", "黃定光", "何俊賢", "陳克勤", "陳恒鑌", "曾鈺成", "蔣麗芸"], "公民黨": ["梁家傑", "陳家洛", "毛孟靜", "郭家麒", "郭榮鏗"], "工聯會": ["麥美娟", "陳婉嫻", "王國興", "鄧家彪", "黃國健", "郭偉强"], "自由黨": ["易志明", "張宇人", "方剛", "鍾國斌", "田北俊"], "經濟動力": ["梁君彥", "林健鋒", "劉皇發"], "工黨": ["何秀蘭", "張國柱", "李卓人", "張超雄"], "人民力量": ["陳偉業", "陳志全"], "社民連": ["梁國雄"], "新民黨": ["田北辰", "葉劉淑儀"], "公共專業聯盟": ["莫乃光", "梁繼昌"], "新論壇": ["馬逢國"], "民協": ["馮檢基"], "勞聯": ["潘兆平"], "新同盟": ["范國威"], "街工": ["梁耀忠"], "西九新動力": ["梁美芬"], "無黨籍": ["李國麟", "葉建源", "張華峰", "謝偉俊", "謝偉銓", "盧偉國", "姚思榮", "陳健波", "吳亮星", "廖長江", "石禮謙", "林大輝", "梁家騮"]}


const MEMBER_MAPPING = {"梁耀忠": "LEUNG Yiu-chung", "田北辰": "Michael TIEN", "莫乃光": "Charles Peter MOK", "李國麟": "Prof Joseph LEE", "謝偉銓": "Tony TSE", "湯家驊": "Ronny TONG", "王國興": "WONG Kwok-hing", "梁家傑": "Alan LEONG", "陳志全": "CHAN Chi-chuen", "鍾樹根": "Christopher CHUNG", "梁繼昌": "Kenneth LEUNG", "李卓人": "LEE Cheuk-yan", "郭偉强": "KWOK Wai-keung", "何俊賢": "Steven HO", "張宇人": "Tommy CHEUNG", "黃毓民": "WONG Yuk-man", "鍾國斌": "CHUNG Kwok-pan", "麥美娟": "Alice MAK", "梁國雄": "LEUNG Kwok-hung", "林健鋒": "Jeffrey LAM", "陳健波": "CHAN Kin-por", "馬逢國": "MA Fung-kwok", "謝偉俊": "Paul TSE", "范國威": "Gary FAN", "梁志祥": "LEUNG Che-cheung", "何俊仁": "Albert HO", "石禮謙": "Abraham SHEK", "黃定光": "WONG Ting-kwong", "陳鑑林": "CHAN Kam-lam", "葉國謙": "IP Kwok-him", "黃國健": "WONG Kwok-kin", "葉建源": "IP Kin-yuen", "楊岳橋": "Alvin YEUNG", "梁君彥": "Andrew LEUNG", "張超雄": "Dr Fernando CHEUNG", "馮檢基": "Frederick FUNG", "陳婉嫻": "CHAN Yuen-han", "梁美芬": "Dr Priscilla LEUNG", "梁家騮": "Dr LEUNG Ka-lau", "黃碧雲": "Dr Helena WONG", "胡志偉": "WU Chi-wai", "林大輝": "Dr LAM Tai-fai", "陳家洛": "Dr Kenneth CHAN", "潘兆平": "POON Siu-ping", "葛珮帆": "Dr Elizabeth QUAT", "張華峰": "Christopher CHEUNG", "蔣麗芸": "Dr CHIANG Lai-wan", "易志明": "Frankie YICK", "方剛": "Vincent FANG", "涂謹申": "James TO", "葉劉淑儀": "Mrs Regina IP", "曾鈺成": "TSANG Yok-sing", "田北俊": "James TIEN", "姚思榮": "YIU Si-wing", "鄧家彪": "TANG Ka-piu", "毛孟靜": "Claudia MO", "陳恒鑌": "CHAN Han-pan", "劉皇發": "Dr LAU Wong-fat", "張國柱": "CHEUNG Kwok-che", "單仲偕": "SIN Chung-kai", "郭榮鏗": "Dennis KWOK", "李慧琼": "Starry LEE", "郭家麒": "Dr KWOK Ka-ki", "盧偉國": "Ir Dr LO Wai-kwok", "劉慧卿": "Emily LAU", "陳克勤": "CHAN Hak-kan", "譚耀宗": "TAM Yiu-chung", "陳偉業": "Albert CHAN", "廖長江": "Martin LIAO", "何秀蘭": "Cyd HO", "吳亮星": "NG Leung-sing"}
