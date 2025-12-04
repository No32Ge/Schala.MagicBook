// 词性类型映射
export const posTypes = {
    "n": { "en": "noun", "cn": "名词" },
    "v": { "en": "verb", "cn": "动词" },
    "adj": { "en": "adjective", "cn": "形容词" },
    "adv": { "en": "adverb", "cn": "副词" },
    "prep": { "en": "preposition", "cn": "介词" },
    "conj": { "en": "conjunction", "cn": "连词" },
    "pron": { "en": "pronoun", "cn": "代词" },
    "det": { "en": "determiner", "cn": "限定词" },
    "int": { "en": "interjection", "cn": "感叹词" },
    "phr": { "en": "phrase", "cn": "短语" },
    "S": { "en": "sentence", "cn": "句子" }
};

// 语法类别映射
export const gramTypes = {
    "S": { "en": "Sentence Structure", "cn": "句子结构" },
    "T": { "en": "Tense", "cn": "时态" },
    "C": { "en": "Clause", "cn": "从句" },
    "P": { "en": "Punctuation", "cn": "标点" },
    "W": { "en": "Word Form / Morphology", "cn": "词形变化" },
    "O": { "en": "Others", "cn": "其他" }
};


export const originalArticleData = [
  {
    "id": "how_stock_market_works",
    "title": "How the Stock Market Works",
    "info": {
      "author": "TED-Ed",
      "source": "Video Transcript",
      "level": "B2",
      "tags": [
        "economics",
        "finance",
        "history",
        "business",
        "investment"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "In the 1600s, the Dutch East India Company employed hundreds of ships to trade gold, porcelain, spices, and silks around the globe. But running this massive operation wasn't cheap. In order to fund their expensive voyages, the company turned to private citizens, individuals who could invest money to support the trip in exchange for a share of the ship's profits. This practice allowed the company to afford even grander voyages, increasing profits for both themselves and their savvy investors. Selling these shares in coffee houses and shipping ports across the continent, the Dutch East India Company unknowingly invented the world's first stock market.",
        "cn": "17世纪，荷兰东印度公司雇佣了数百艘船只在全球范围内交易黄金、瓷器、香料和丝绸。但经营这庞大的业务并不便宜。为了资助昂贵的航行，公司转向私人公民，这些人可以投资资金支持航行，以换取船只利润的一份。这种做法使公司能够负担得起更宏大的航行，为他们自己和精明的投资者增加了利润。荷兰东印度公司在欧洲大陆的咖啡馆和航运港口出售这些股份，不知不觉中发明了世界上第一个股票市场。",
        "vocab": [
          {
            "word": "porcelain",
            "ph": "/ˈpɔːrsəlɪn/",
            "pos": "n",
            "mean": "瓷器",
            "ex": "The museum has a fine collection of Chinese porcelain.",
            "tr": "博物馆收藏了精美的中国瓷器。",
            "match": [
              "porcelain"
            ]
          },
          {
            "word": "voyage",
            "ph": "/ˈvɔɪɪdʒ/",
            "pos": "n",
            "mean": "航行；（尤指海上的）长途旅行",
            "ex": "The voyage across the Atlantic took six weeks.",
            "tr": "横渡大西洋的航行花了六周时间。",
            "match": [
              "voyages"
            ]
          },
          {
            "word": "savvy",
            "ph": "/ˈsævi/",
            "pos": "adj",
            "mean": "精明的；有见识的",
            "ex": "Savvy investors know when to sell.",
            "tr": "精明的投资者知道何时抛售。",
            "match": [
              "savvy"
            ]
          },
          {
            "word": "unknowingly",
            "ph": "/ʌnˈnoʊɪŋli/",
            "pos": "adv",
            "mean": "不知不觉地；没意识到地",
            "ex": "She unknowingly broke the rules.",
            "tr": "她不知不觉地违反了规则。",
            "match": [
              "unknowingly"
            ]
          },
          {
            "type": "vocab",
            "word": "Dutch",
            "ph": "/dʌtʃ/",
            "pos": "adj",
            "mean": "荷兰的；与荷兰相关的",
            "ex": "The Dutch merchants were known for their global trade networks.",
            "tr": "荷兰商人以其全球贸易网络闻名。",
            "match": [
              "Dutch"
            ]
          },
          {
            "type": "vocab",
            "word": "massive",
            "ph": "/ˈmæsɪv/",
            "pos": "adj",
            "mean": "巨大的；规模庞大的",
            "ex": "They launched a massive plan to expand their trading routes.",
            "tr": "他们启动了一个庞大的计划来扩展贸易路线。",
            "match": [
              "massive"
            ]
          },
          {
            "type": "vocab",
            "word": "operation",
            "ph": "/ˌɑːpəˈreɪʃən/",
            "pos": "n",
            "mean": "运营；运作；经营活动（文中指商业活动）",
            "ex": "The company’s entire operation depended on overseas trade.",
            "tr": "公司的整个运营依赖海外贸易。",
            "match": [
              "operation"
            ]
          },
          {
            "type": "vocab",
            "word": "support",
            "ph": "/səˈpɔːrt/",
            "pos": "v",
            "mean": "支持；资助",
            "ex": "Investors support the company by providing necessary funds.",
            "tr": "投资者通过提供必要资金来支持公司。",
            "match": [
              "support"
            ]
          },
          {
            "type": "vocab",
            "word": "profits",
            "ph": "/ˈprɑːfɪts/",
            "pos": "n",
            "mean": "利润；收益",
            "ex": "Higher demand led to increased profits for everyone involved.",
            "tr": "更高的需求让所有参与者的利润都增加了。",
            "match": [
              "profits"
            ]
          },
          {
            "type": "vocab",
            "word": "practice",
            "ph": "/ˈpræktɪs/",
            "pos": "n",
            "mean": "做法；惯例；实践（文中指商业做法）",
            "ex": "This practice changed how people owned parts of companies.",
            "tr": "这种做法改变了人们持有公司股份的方式。",
            "match": [
              "practice"
            ]
          },
          {
            "type": "vocab",
            "word": "continent",
            "ph": "/ˈkɑːntɪnənt/",
            "pos": "n",
            "mean": "洲；大陆",
            "ex": "Their products were sold across the entire continent.",
            "tr": "他们的商品在整片大陆上销售。",
            "match": [
              "continent"
            ]
          },
          {
            "type": "vocab",
            "word": "stock market",
            "ph": "/stɑːk ˈmɑːrkɪt/",
            "pos": "n phr",
            "mean": "股票市场；证券交易所",
            "ex": "The stock market allows people to buy and sell shares of companies.",
            "tr": "股票市场让人们可以买卖公司的股份。",
            "match": [
              "stock market"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "Since then, companies have been collecting funds from willing investors to support all kinds of businesses. And today, the stock market has schools, careers, and even whole television channels dedicated to understanding it. But the modern stock market is significantly more complicated than its original incarnation. So how do companies and investors use the market today? Let's imagine a new coffee company that decides to launch on the market. First, the company will advertise itself to big investors. If they think the company is a good idea, they get the first crack at investing and then sponsor the company's initial public offering, or IPO. This launches the company onto the official public market, where any company or individual who believes the business could be profitable might buy a stock.",
        "cn": "从那时起，公司一直在向有意愿的投资者筹集资金，以支持各种业务。今天，股票市场有专门研究它的学校、职业，甚至整个电视频道。但现代股票市场比其最初的化身要复杂得多。那么，公司和投资者今天如何使用市场呢？让我们想象一家决定上市的新咖啡公司。首先，公司会向大投资者宣传自己。如果他们认为这家公司是个好主意，他们就会获得投资的优先权，然后赞助该公司的首次公开募股（IPO）。这将公司推向正式的公开市场，任何认为该业务可能盈利的公司或个人都可以购买股票。",
        "vocab": [
          {
            "word": "dedicated to",
            "ph": "/ˈdedɪkeɪtɪd tuː/",
            "pos": "adj phr",
            "mean": "致力于；专门用于",
            "ex": "This channel is dedicated to science fiction movies.",
            "tr": "这个频道专门播放科幻电影。",
            "match": [
              "dedicated to"
            ]
          },
          {
            "word": "incarnation",
            "ph": "/ˌɪnkɑːrˈneɪʃn/",
            "pos": "n",
            "mean": "化身；（某种形式的）显现",
            "ex": "This is the latest incarnation of the software.",
            "tr": "这是该软件的最新版本。",
            "match": [
              "incarnation"
            ]
          },
          {
            "word": "get the first crack at",
            "ph": "/ɡet ðə fɜːrst kræk æt/",
            "pos": "idiom",
            "mean": "获得首次机会；捷足先登",
            "ex": "Members get the first crack at buying tickets.",
            "tr": "会员有优先购买门票的机会。",
            "match": [
              "get the first crack at"
            ]
          },
          {
            "word": "IPO",
            "ph": "/ˌaɪ piː ˈoʊ/",
            "pos": "abbr",
            "mean": "首次公开募股 (Initial Public Offering)",
            "ex": "The company raised millions in its IPO.",
            "tr": "该公司在首次公开募股中筹集了数百万美元。",
            "match": [
              "initial public offering",
              "IPO"
            ]
          },
          {
            "word": "launch",
            "ph": "/lɔːntʃ/",
            "pos": "v",
            "mean": "上市；推出；发射",
            "ex": "They plan to launch the new product next month.",
            "tr": "他们计划下个月推出新产品。",
            "match": [
              "launches",
              "launch"
            ]
          },
          {
            "type": "vocab",
            "word": "funds",
            "ph": "/fʌndz/",
            "pos": "n",
            "mean": "资金；钱款",
            "ex": "The startup raised enough funds to begin production.",
            "tr": "这家初创企业筹集到了足够资金开始生产。",
            "match": [
              "funds"
            ]
          },
          {
            "type": "vocab",
            "word": "significantly",
            "ph": "/sɪɡˈnɪfɪkəntli/",
            "pos": "adv",
            "mean": "显著地；大大地",
            "ex": "The market has significantly changed over the past decade.",
            "tr": "市场在过去十年里发生了显著变化。",
            "match": [
              "significantly"
            ]
          },
          {
            "type": "vocab",
            "word": "sponsor",
            "ph": "/ˈspɑːnsər/",
            "pos": "v",
            "mean": "赞助；发起（文中指投资支持IPO）",
            "ex": "Banks often sponsor companies before their public offering.",
            "tr": "银行通常在公司上市前提供赞助支持。",
            "match": [
              "sponsor"
            ]
          },
          {
            "type": "vocab",
            "word": "initial",
            "ph": "/ɪˈnɪʃəl/",
            "pos": "adj",
            "mean": "最初的；初始的",
            "ex": "Their initial plan was to open ten stores nationwide.",
            "tr": "他们最初的计划是在全国开十家店。",
            "match": [
              "initial"
            ]
          },
          {
            "type": "vocab",
            "word": "profitable",
            "ph": "/ˈprɑːfɪtəbəl/",
            "pos": "adj",
            "mean": "有利润的；赚钱的",
            "ex": "If a business becomes profitable, more investors will join.",
            "tr": "如果企业变得有利可图，会有更多投资者加入。",
            "match": [
              "profitable"
            ]
          },
          {
            "type": "vocab",
            "word": "demand",
            "ph": "/dɪˈmænd/",
            "pos": "n",
            "mean": "需求；需求量",
            "ex": "As demand for those stocks increases, so does their price.",
            "tr": "随着这些股票的需求增加，它们的价格也随之上涨。",
            "match": [
              "demand"
            ]
          },
          {
            "type": "vocab",
            "word": "so does",
            "ph": "/səʊ dʌz/",
            "pos": "conj",
            "mean": "（表示前述情况同样适用）……也一样",
            "ex": "As demand for those stocks increases, so does their price.",
            "tr": "随着这些股票的需求增加，它们的价格也一样上涨。",
            "match": [
              "so does"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "Buying stocks makes those investors partial owners in the business. Their investment helps the company to grow, and as it becomes more successful, more buyers may see potential and start buying stocks. As demand for those stocks increases, so does their price, increasing the cost for prospective buyers and raising the value of the company's stocks people already own.",
        "cn": "购买股票使这些投资者成为企业的部分所有者。他们的投资有助于公司的成长，随着公司变得更加成功，更多的买家可能会看到潜力并开始购买股票。随着对这些股票的需求增加，它们的价格也会上涨，从而增加了潜在买家的成本，并提高了人们已经拥有的公司股票的价值。",
        "vocab": [
          {
            "word": "partial",
            "ph": "/ˈpɑːrʃl/",
            "pos": "adj",
            "mean": "部分的",
            "ex": "The project was only a partial success.",
            "tr": "这个项目只是部分成功。",
            "match": [
              "partial"
            ]
          },
          {
            "word": "prospective",
            "ph": "/prəˈspektɪv/",
            "pos": "adj",
            "mean": "潜在的；预期的",
            "ex": "We are interviewing prospective employees.",
            "tr": "我们正在面试潜在的员工。",
            "match": [
              "prospective"
            ]
          },
          {
            "type": "vocab",
            "word": "so does",
            "ph": "/səʊ dʌz/",
            "pos": "conj",
            "mean": "（表示前述情况同样适用）……也一样",
            "ex": "As demand for those stocks increases, so does their price.",
            "tr": "随着这些股票的需求增加，它们的价格也一样上涨。",
            "match": [
              "so does"
            ]
          },
          {
            "type": "vocab",
            "word": "demand",
            "ph": "/dɪˈmænd/",
            "pos": "n",
            "mean": "需求；需求量",
            "ex": "As demand for those stocks increases, so does their price.",
            "tr": "随着这些股票的需求增加，它们的价格也随之上涨。",
            "match": [
              "demand"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "For the company, this increased interest helps fund new initiatives and also boosts its overall market value by showing how many people are willing to invest in their idea. However, if for some reason a company starts to seem less profitable, the reverse can also happen. If investors think their stock value is going to decline, they'll sell their stocks with the hopes of making a profit before the company loses more value. As stocks are sold and demand for the stock goes down, the stock price falls, and with it, the company's market value.",
        "cn": "对于公司来说，这种增加的兴趣有助于资助新计划，并通过展示有多少人愿意投资他们的想法来提升其整体市场价值。然而，如果由于某种原因一家公司开始显得利润下降，相反的情况也会发生。如果投资者认为他们的股票价值将要下跌，他们就会抛售股票，希望在公司损失更多价值之前获利。随着股票被抛售，对股票的需求下降，股价也会下跌，公司的市场价值也随之下降。",
        "vocab": [
          {
            "word": "initiative",
            "ph": "/ɪˈnɪʃətɪv/",
            "pos": "n",
            "mean": "新方案；倡议；主动权",
            "ex": "The government announced a new initiative to reduce crime.",
            "tr": "政府宣布了一项减少犯罪的新举措。",
            "match": [
              "initiatives"
            ]
          },
          {
            "word": "boost",
            "ph": "/buːst/",
            "pos": "v",
            "mean": "促进；增加；提升",
            "ex": "The news boosted his confidence.",
            "tr": "这个消息增强了他的信心。",
            "match": [
              "boosts"
            ]
          },
          {
            "word": "reverse",
            "ph": "/rɪˈvɜːrs/",
            "pos": "n",
            "mean": "相反的情况",
            "ex": "I thought he would be angry, but the reverse was true.",
            "tr": "我以为他会生气，但事实恰恰相反。",
            "match": [
              "reverse"
            ]
          },
          {
            "word": "decline",
            "ph": "/dɪˈklaɪn/",
            "pos": "v",
            "mean": "下降；衰退",
            "ex": "Sales declined by 10% last quarter.",
            "tr": "上季度销售额下降了10%。",
            "match": [
              "decline"
            ]
          },
          {
            "type": "vocab",
            "word": "overall",
            "ph": "/ˈoʊvərˌɔːl/",
            "pos": "adj",
            "mean": "总体的；整体的",
            "ex": "This increased interest helps fund new initiatives and also boosts its overall market value.",
            "tr": "这种增加的兴趣有助于资助新的计划，并且提升其整体市场价值。",
            "match": [
              "overall"
            ]
          },
          {
            "type": "vocab",
            "word": "with it",
            "ph": "/wɪð ɪt/",
            "pos": "phr",
            "mean": "随之；跟着一起（变化）",
            "ex": "The stock price falls, and with it, the company's market value.",
            "tr": "股价下跌，公司市场价值也随之下降。",
            "match": [
              "with it"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "This can leave investors with big losses, unless the company starts to look profitable again. This seesaw of supply and demand is influenced by many factors. Companies are under the unavoidable influence of market forces, such as the fluctuating price of materials, changes in production technology, and the shifting costs of labor.",
        "cn": "这可能会让投资者遭受巨大损失，除非公司重新开始看起来有利可图。这种供需的拉锯战受到许多因素的影响。公司受到市场力量不可避免的影响，例如材料价格的波动、生产技术的变化以及劳动力成本的变动。",
        "vocab": [
          {
            "word": "seesaw",
            "ph": "/ˈsiːsɔː/",
            "pos": "n",
            "mean": "跷跷板；（局势的）拉锯、交替",
            "ex": "The match was a seesaw battle until the end.",
            "tr": "这场比赛直到最后都是一场拉锯战。",
            "match": [
              "seesaw"
            ]
          },
          {
            "word": "fluctuate",
            "ph": "/ˈflʌktʃueɪt/",
            "pos": "v",
            "mean": "波动；起伏",
            "ex": "Vegetable prices fluctuate according to the season.",
            "tr": "蔬菜价格随季节波动。",
            "match": [
              "fluctuating"
            ]
          },
          {
            "word": "shift",
            "ph": "/ʃɪft/",
            "pos": "v",
            "mean": "转移；改变",
            "ex": "Public opinion is shifting regarding this issue.",
            "tr": "关于这个问题的公众舆论正在发生转变。",
            "match": [
              "shifting"
            ]
          },
          {
            "type": "vocab",
            "word": "supply",
            "ph": "/səˈplaɪ/",
            "pos": "n",
            "mean": "供给；供应量",
            "ex": "This seesaw of supply and demand is influenced by many factors.",
            "tr": "供求之间的此种拉锯受多种因素影响。",
            "match": [
              "supply"
            ]
          },
          {
            "type": "vocab",
            "word": "influence",
            "ph": "/ˈɪnfluəns/",
            "pos": "v/n",
            "mean": "影响",
            "ex": "This seesaw of supply and demand is influenced by many factors.",
            "tr": "供求关系的拉锯受到许多因素影响。",
            "match": [
              "influenced",
              "influence"
            ]
          },
          {
            "type": "vocab",
            "word": "labor",
            "ph": "/ˈleɪbər/",
            "pos": "n",
            "mean": "劳动力；劳动",
            "ex": "The shifting costs of labor.",
            "tr": "劳动力成本的变化。",
            "match": [
              "labor"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Investors may be worried about changes in leadership, bad publicity, or larger factors like new laws and trade policies. And of course, plenty of investors are simply ready to sell valuable stocks and pursue personal interests. All these variables cause day-to-day noise in the market, which can make companies appear more or less successful, and in the stock market, appearing to lose value often leads to losing investors, and in turn, losing actual value.",
        "cn": "投资者可能会担心领导层的变动、负面宣传或像新法律和贸易政策这样的更大因素。当然，许多投资者只是准备出售有价值的股票并追求个人利益。所有这些变量都会导致市场中的日常噪音，这可能使公司看起来或多或少有些成功，而在股票市场中，看似失去价值通常会导致失去投资者，进而失去实际价值。",
        "vocab": [
          {
            "word": "publicity",
            "ph": "/pʌbˈlɪsəti/",
            "pos": "n",
            "mean": "宣传；公众关注",
            "ex": "The movie received a lot of bad publicity.",
            "tr": "这部电影受到了很多负面宣传。",
            "match": [
              "publicity"
            ]
          },
          {
            "word": "variable",
            "ph": "/ˈveriəbl/",
            "pos": "n",
            "mean": "变量；可变因素",
            "ex": "There are too many variables to predict the outcome accurately.",
            "tr": "变量太多，无法准确预测结果。",
            "match": [
              "variables"
            ]
          },
          {
            "word": "in turn",
            "ph": "/ɪn tɜːrn/",
            "pos": "phr",
            "mean": "反过来；转而；依次",
            "ex": "Stress causes illness, which in turn causes more stress.",
            "tr": "压力导致疾病，而疾病反过来又导致更大的压力。",
            "match": [
              "in turn"
            ]
          },
          {
            "type": "vocab",
            "word": "leadership",
            "ph": "/ˈliːdərʃɪp/",
            "pos": "n",
            "mean": "领导层；领导能力",
            "ex": "Investors may be worried about changes in leadership, bad publicity, or larger factors like new laws and trade policies.",
            "tr": "投资者可能会担心领导层的变化、不良的宣传，或像新法律和贸易政策这样的更大因素。",
            "match": [
              "leadership"
            ]
          },
          {
            "type": "vocab",
            "word": "factor",
            "ph": "/ˈfæktər/",
            "pos": "n",
            "mean": "因素；要素",
            "ex": "Investors may be worried about changes in leadership, bad publicity, or larger factors like new laws and trade policies.",
            "tr": "投资者可能会担心领导层变化、不良宣传，或者像新法律和贸易政策这样的更大因素。",
            "match": [
              "factors"
            ]
          },
          {
            "type": "vocab",
            "word": "pursue",
            "ph": "/pərˈsuː/",
            "pos": "v",
            "mean": "追求；从事",
            "ex": "Plenty of investors are simply ready to sell valuable stocks and pursue personal interests.",
            "tr": "许多投资者只是准备出售有价值的股票，并追求个人利益。",
            "match": [
              "pursue"
            ]
          },
          {
            "type": "vocab",
            "word": "appear",
            "ph": "/əˈpɪər/",
            "pos": "v",
            "mean": "显得；出现",
            "ex": "All these variables cause day-to-day noise in the market, which can make companies appear more or less successful.",
            "tr": "所有这些变量会导致市场中的日常波动，这可能使公司显得更成功或不那么成功。",
            "match": [
              "appear",
              "appearing"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "Human confidence in the market has the power to trigger everything from economic booms to financial crises, and this difficult-to-track variable is why most professionals promote reliable long-term investing over trying to make quick cash. However, experts are constantly building tools in efforts to increase their chances of success in this highly unpredictable system.",
        "cn": "人们对市场的信心有能力引发从经济繁荣到金融危机的一切，而这个难以追踪的变量就是为什么大多数专业人士提倡可靠的长期投资，而不是试图赚快钱。然而，专家们正在不断构建工具，努力在这个高度不可预测的系统中增加成功的机会。",
        "vocab": [
          {
            "word": "trigger",
            "ph": "/ˈtrɪɡər/",
            "pos": "v",
            "mean": "引发；触发",
            "ex": "Certain foods can trigger an allergic reaction.",
            "tr": "某些食物会引发过敏反应。",
            "match": [
              "trigger"
            ]
          },
          {
            "word": "boom",
            "ph": "/buːm/",
            "pos": "n",
            "mean": "繁荣；激增",
            "ex": "The technology boom created many new jobs.",
            "tr": "技术繁荣创造了许多新工作。",
            "match": [
              "booms"
            ]
          },
          {
            "word": "long-term",
            "ph": "/ˌlɔːŋ ˈtɜːrm/",
            "pos": "adj",
            "mean": "长期的",
            "ex": "We need a long-term solution to the problem.",
            "tr": "我们需要该问题的长期解决方案。",
            "match": [
              "long-term"
            ]
          },
          {
            "word": "unpredictable",
            "ph": "/ˌʌnprɪˈdɪktəbl/",
            "pos": "adj",
            "mean": "不可预测的",
            "ex": "The weather here is very unpredictable.",
            "tr": "这里的天气非常不可预测。",
            "match": [
              "unpredictable"
            ]
          },
          {
            "type": "vocab",
            "word": "economic",
            "ph": "/ˌiːkəˈnɑːmɪk/",
            "pos": "adj",
            "mean": "经济的",
            "ex": "Human confidence in the market has the power to trigger everything from economic booms to financial crises.",
            "tr": "人们对市场的信心有能力触发从经济繁荣到金融危机的一切。",
            "match": [
              "economic"
            ]
          },
          {
            "type": "vocab",
            "word": "crisis",
            "ph": "/ˈkraɪsɪs/",
            "pos": "n",
            "mean": "危机",
            "ex": "Human confidence in the market has the power to trigger everything from economic booms to financial crises.",
            "tr": "人们对市场的信心有能力触发从经济繁荣到金融危机的一切。",
            "match": [
              "crises"
            ]
          },
          {
            "type": "vocab",
            "word": "promote",
            "ph": "/prəˈmoʊt/",
            "pos": "v",
            "mean": "提倡；促进",
            "ex": "Most professionals promote reliable long-term investing over trying to make quick cash.",
            "tr": "大多数专业人士提倡可靠的长期投资，而不是试图快速赚钱。",
            "match": [
              "promote"
            ]
          },
          {
            "type": "vocab",
            "word": "reliable",
            "ph": "/rɪˈlaɪəbl/",
            "pos": "adj",
            "mean": "可靠的",
            "ex": "Most professionals promote reliable long-term investing over trying to make quick cash.",
            "tr": "大多数专业人士提倡可靠的长期投资，而不是试图快速赚钱。",
            "match": [
              "reliable"
            ]
          },
          {
            "type": "vocab",
            "word": "expert",
            "ph": "/ˈekspɜːrt/",
            "pos": "n",
            "mean": "专家",
            "ex": "However, experts are constantly building tools in efforts to increase their chances of success.",
            "tr": "然而，专家们不断构建工具，以提高他们在这个高度不可预测系统中的成功机会。",
            "match": [
              "experts"
            ]
          },
          {
            "type": "vocab",
            "word": "effort",
            "ph": "/ˈefərt/",
            "pos": "n",
            "mean": "努力",
            "ex": "Experts are constantly building tools in efforts to increase their chances of success.",
            "tr": "专家们不断构建工具，以努力提高他们的成功几率。",
            "match": [
              "efforts"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "But the stock market is not just for the rich and powerful. With the dawn of the Internet, everyday investors can buy stocks in many of the exact same ways a large investor would. And as more people educate themselves about this complex system, they too can trade stocks, support the businesses they believe in, and pursue their financial goals. The first step is getting invested.",
        "cn": "但股票市场不仅仅是为富人和权贵准备的。随着互联网的曙光出现，普通投资者可以用许多与大投资者完全相同的方式购买股票。随着越来越多的人自学这个复杂的系统，他们也可以交易股票，支持他们相信的企业，并追求他们的财务目标。第一步就是开始投资。",
        "vocab": [
          {
            "word": "dawn",
            "ph": "/dɔːn/",
            "pos": "n",
            "mean": "黎明；开端",
            "ex": "We are witnessing the dawn of a new era.",
            "tr": "我们正在见证一个新时代的开端。",
            "match": [
              "dawn"
            ]
          },
          {
            "word": "everyday",
            "ph": "/ˈevrideɪ/",
            "pos": "adj",
            "mean": "日常的；普通的",
            "ex": "These are problems that affect everyday people.",
            "tr": "这些是影响普通人的问题。",
            "match": [
              "everyday"
            ]
          },
          {
            "type": "vocab",
            "word": "educate",
            "ph": "/ˈedjʊkeɪt/",
            "pos": "v",
            "mean": "教育；使掌握知识",
            "ex": "As more people educate themselves about this complex system, they too can trade stocks and pursue their financial goals.",
            "tr": "随着更多人学习掌握这个复杂系统，他们也可以交易股票并追求自己的财务目标。",
            "match": [
              "educate"
            ]
          },
          {
            "type": "vocab",
            "word": "complex",
            "ph": "/ˈkɑːmpleks/",
            "pos": "adj",
            "mean": "复杂的",
            "ex": "As more people educate themselves about this complex system, they too can trade stocks and support the businesses they believe in.",
            "tr": "随着更多人学习掌握这个复杂系统，他们也可以交易股票并支持自己相信的企业。",
            "match": [
              "complex"
            ]
          },
          {
            "type": "vocab",
            "word": "support",
            "ph": "/səˈpɔːrt/",
            "pos": "v",
            "mean": "支持",
            "ex": "They too can trade stocks and support the businesses they believe in.",
            "tr": "他们也可以交易股票，并支持自己相信的企业。",
            "match": [
              "support"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      },
      "abbr": {
        "en": "abbreviation",
        "cn": "缩写"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "how_machines_learn",
    "title": "How Machines Learn: The Three Types of AI",
    "info": {
      "author": "TED-Ed",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "technology",
        "AI",
        "computer science",
        "machine learning",
        "future"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "Today, artificial intelligence helps doctors diagnose patients, pilots fly commercial aircraft, and city planners predict traffic. But no matter what these AIs are doing, the computer scientists who design them likely don't know exactly how they're doing it. This is because artificial intelligence is often self-taught, working off a simple set of instructions to create a unique array of rules and strategies. So how exactly does a machine learn?",
        "cn": "如今，人工智能帮助医生诊断病人，帮助飞行员驾驶商用飞机，帮助城市规划者预测交通。但是，无论这些人工智能在做什么，设计它们的计算机科学家可能都不知道它们确切是如何做到的。这是因为人工智能通常是自学的，根据一套简单的指令工作，创造出一系列独特的规则和策略。那么机器究竟是如何学习的呢？",
        "vocab": [
          {
            "word": "diagnose",
            "ph": "/ˌdaɪəɡˈnoʊs/",
            "pos": "v",
            "mean": "诊断（疾病）",
            "ex": "Doctors use various tests to diagnose the disease.",
            "tr": "医生使用各种测试来诊断这种疾病。",
            "match": [
              "diagnose"
            ]
          },
          {
            "word": "commercial aircraft",
            "ph": "/kəˈmɜːrʃl ˈerkræft/",
            "pos": "n phr",
            "mean": "商用飞机；民航客机",
            "ex": "Pilots undergo rigorous training to fly commercial aircraft.",
            "tr": "飞行员经过严格训练才能驾驶商用飞机。",
            "match": [
              "commercial aircraft"
            ]
          },
          {
            "word": "self-taught",
            "ph": "/ˌself ˈtɔːt/",
            "pos": "adj",
            "mean": "自学的；自修的",
            "ex": "He is a self-taught musician.",
            "tr": "他是一位自学成才的音乐家。",
            "match": [
              "self-taught"
            ]
          },
          {
            "word": "array",
            "ph": "/əˈreɪ/",
            "pos": "n",
            "mean": "一系列；大量；阵列",
            "ex": "The store offers a wide array of products.",
            "tr": "这家商店提供各种各样的产品。",
            "match": [
              "array"
            ]
          },
          {
            "type": "vocab",
            "word": "work off",
            "ph": "/wɜːrk ɔːf/",
            "pos": "phr v",
            "mean": "基于某物运作；以…为依据",
            "ex": "The robot works off a basic program but can improve its skills over time.",
            "tr": "这个机器人以一个基础程序为依据运作，但能随着时间提升技能。",
            "match": [
              "working off"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "There are many different ways to build self-teaching programs, but they all rely on the three basic types of machine learning: unsupervised learning, supervised learning, and reinforcement learning. To see these in action, let's imagine researchers are trying to pull information from a set of medical data containing thousands of patient profiles.",
        "cn": "构建自学程序有许多不同的方法，但它们都依赖于三种基本类型的机器学习：无监督学习、监督学习和强化学习。为了看看这些方法的实际应用，让我们想象研究人员正试图从包含数千份患者档案的一组医疗数据中提取信息。",
        "vocab": [
          {
            "word": "rely on",
            "ph": "/rɪˈlaɪ ɒn/",
            "pos": "phr v",
            "mean": "依赖；依靠",
            "ex": "We rely on technology for communication.",
            "tr": "我们依靠技术进行交流。",
            "match": [
              "rely on"
            ]
          },
          {
            "word": "unsupervised learning",
            "ph": "/ˌʌnˈsuːpərvaɪzd ˈlɜːrnɪŋ/",
            "pos": "n phr",
            "mean": "无监督学习（机器学习的一种）",
            "ex": "Unsupervised learning finds hidden patterns in data without labels.",
            "tr": "无监督学习在没有标签的数据中发现隐藏的模式。",
            "match": [
              "Unsupervised learning"
            ]
          },
          {
            "word": "supervised learning",
            "ph": "/ˈsuːpərvaɪzd ˈlɜːrnɪŋ/",
            "pos": "n phr",
            "mean": "监督学习",
            "ex": "Supervised learning requires labeled data for training.",
            "tr": "监督学习需要带标签的数据进行训练。",
            "match": [
              "supervised learning"
            ]
          },
          {
            "word": "reinforcement learning",
            "ph": "/ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/",
            "pos": "n phr",
            "mean": "强化学习",
            "ex": "Reinforcement learning is often used in robotics and gaming.",
            "tr": "强化学习常用于机器人技术和游戏。",
            "match": [
              "reinforcement learning"
            ]
          },
          {
            "word": "profile",
            "ph": "/ˈproʊfaɪl/",
            "pos": "n",
            "mean": "档案；概况",
            "ex": "The database contains profiles of all employees.",
            "tr": "数据库包含所有员工的档案。",
            "match": [
              "profiles"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "First up, unsupervised learning. This approach would be ideal for analyzing all the profiles to find general similarities and useful patterns. Maybe certain patients have similar disease presentations, or perhaps a treatment produces specific sets of side effects. This broad pattern-seeking approach can be used to identify similarities between patient profiles and find emerging patterns, all without human guidance.",
        "cn": "首先是无监督学习。这种方法非常适合分析所有档案，以发现普遍的相似之处和有用的模式。也许某些患者有相似的疾病表现，或者某种治疗产生特定的副作用组合。这种广泛的模式搜索方法可用于识别患者档案之间的相似之处并发现新兴模式，所有这些都无需人工指导。",
        "vocab": [
          {
            "word": "ideal for",
            "ph": "/aɪˈdiːəl fɔːr/",
            "pos": "adj phr",
            "mean": "对…理想的；非常适合…",
            "ex": "This weather is ideal for a picnic.",
            "tr": "这种天气非常适合野餐。",
            "match": [
              "ideal for"
            ]
          },
          {
            "word": "similarity",
            "ph": "/ˌsɪməˈlærəti/",
            "pos": "n",
            "mean": "相似之处",
            "ex": "There is a striking similarity between the two paintings.",
            "tr": "这两幅画之间有惊人的相似之处。",
            "match": [
              "similarities"
            ]
          },
          {
            "word": "side effect",
            "ph": "/ˈsaɪd ɪfekt/",
            "pos": "n phr",
            "mean": "副作用",
            "ex": "Drowsiness is a common side effect of this medication.",
            "tr": "嗜睡是这种药物常见的副作用。",
            "match": [
              "side effects"
            ]
          },
          {
            "word": "emerging",
            "ph": "/ɪˈmɜːrdʒɪŋ/",
            "pos": "adj",
            "mean": "新兴的；出现的",
            "ex": "We need to pay attention to emerging technologies.",
            "tr": "我们需要关注新兴技术。",
            "match": [
              "emerging"
            ]
          },
          {
            "word": "guidance",
            "ph": "/ˈɡaɪdns/",
            "pos": "n",
            "mean": "指导；引导",
            "ex": "She succeeded under the guidance of her mentor.",
            "tr": "在导师的指导下，她成功了。",
            "match": [
              "guidance"
            ]
          },
          {
            "type": "vocab",
            "word": "approach",
            "ph": "/əˈproʊtʃ/",
            "pos": "n",
            "mean": "方法；途径",
            "ex": "This new approach could help computers learn faster and make fewer mistakes.",
            "tr": "这种新方法可以帮助计算机学习得更快，并减少错误。",
            "match": [
              "approach",
              "approach"
            ]
          },
          {
            "type": "vocab",
            "word": "presentation",
            "ph": "/ˌprɛzənˈteɪʃən/",
            "pos": "n",
            "mean": "（疾病的）表现；呈现方式",
            "ex": "Doctors study the presentation of a disease to choose the right treatment.",
            "tr": "医生会研究疾病的表现来选择正确的治疗方法。",
            "match": [
              "presentations"
            ]
          },
          {
            "type": "vocab",
            "word": "produce",
            "ph": "/prəˈduːs/",
            "pos": "v",
            "mean": "产生；制造",
            "ex": "The new drug produces fewer side effects than the old one.",
            "tr": "这种新药比旧药产生更少的副作用。",
            "match": [
              "produces"
            ]
          },
          {
            "type": "vocab",
            "word": "identify",
            "ph": "/aɪˈdɛntɪfaɪ/",
            "pos": "v",
            "mean": "识别；确认",
            "ex": "Scientists use data to identify which treatment works best.",
            "tr": "科学家用数据来识别哪种治疗方法效果最好。",
            "match": [
              "identify"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "But let's imagine doctors are looking for something more specific. These physicians want to create an algorithm for diagnosing a particular condition. They begin by collecting two sets of data, medical images and test results from both healthy patients and those diagnosed with the condition. Then, they input this data into a program designed to identify features shared by the sick patients, but not the healthy patients. Based on how frequently it sees certain features, the program will assign values to those features diagnostic significance, generating an algorithm for diagnosing future patients.",
        "cn": "但让我们想象一下，医生们正在寻找更具体的东西。这些医生想要创建一种算法来诊断特定的疾病。他们首先收集两组数据，分别来自健康患者和被诊断患有该疾病患者的医学图像和测试结果。然后，他们将这些数据输入到一个程序中，该程序旨在识别患病患者共有但健康患者没有的特征。根据它看到某些特征的频率，程序将为这些特征分配诊断意义值，生成用于诊断未来患者的算法。",
        "vocab": [
          {
            "word": "algorithm",
            "ph": "/ˈælɡərɪðəm/",
            "pos": "n",
            "mean": "算法",
            "ex": "The search engine uses a complex algorithm to rank results.",
            "tr": "搜索引擎使用复杂的算法对结果进行排名。",
            "match": [
              "algorithm"
            ]
          },
          {
            "word": "input",
            "ph": "/ˈɪnpʊt/",
            "pos": "v",
            "mean": "输入",
            "ex": "Please input your password to continue.",
            "tr": "请输入密码以继续。",
            "match": [
              "input"
            ]
          },
          {
            "word": "feature",
            "ph": "/ˈfiːtʃər/",
            "pos": "n",
            "mean": "特征；特点",
            "ex": "The new car has several safety features.",
            "tr": "这款新车有几个安全功能。",
            "match": [
              "features"
            ]
          },
          {
            "word": "diagnostic",
            "ph": "/ˌdaɪəɡˈnɑːstɪk/",
            "pos": "adj",
            "mean": "诊断的",
            "ex": "The doctor ordered some diagnostic tests.",
            "tr": "医生安排了一些诊断测试。",
            "match": [
              "diagnostic"
            ]
          },
          {
            "word": "significance",
            "ph": "/sɪɡˈnɪfɪkəns/",
            "pos": "n",
            "mean": "重要性；意义",
            "ex": "The discovery has great scientific significance.",
            "tr": "这一发现具有重大的科学意义。",
            "match": [
              "significance"
            ]
          },
          {
            "type": "vocab",
            "word": "physician",
            "ph": "/fɪˈzɪʃən/",
            "pos": "n",
            "mean": "医生；内科医生",
            "ex": "A physician must analyze symptoms carefully before making a decision.",
            "tr": "内科医生必须在做决定前仔细分析症状。",
            "match": [
              "physicians"
            ]
          },
          {
            "type": "vocab",
            "word": "shared by",
            "ph": "/ʃɛrd baɪ/",
            "pos": "phr",
            "mean": "由…共享；为…共同具备",
            "ex": "These symptoms are shared by many patients with the same illness.",
            "tr": "这些症状为许多相同疾病的患者所共同具有。",
            "match": [
              "shared by"
            ]
          },
          {
            "type": "vocab",
            "word": "frequently",
            "ph": "/ˈfriːkwəntli/",
            "pos": "adv",
            "mean": "频繁地；经常",
            "ex": "The system frequently checks new data to improve accuracy.",
            "tr": "该系统经常检查新数据以提升准确性。",
            "match": [
              "frequently"
            ]
          },
          {
            "type": "vocab",
            "word": "assign",
            "ph": "/əˈsaɪn/",
            "pos": "v",
            "mean": "分配；赋予（某意义或价值）",
            "ex": "The program assigns a score to each feature to measure its importance.",
            "tr": "程序为每个特征分配一个分数来衡量其重要性。",
            "match": [
              "assign"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "However, unlike unsupervised learning, doctors and computer scientists have an active role in what happens next. Doctors will make the final diagnosis and check the accuracy of the algorithm's prediction. Then computer scientists can use the updated data sets to adjust the program's parameters and improve its accuracy. This hands-on approach is called supervised learning.",
        "cn": "然而，与无监督学习不同，医生和计算机科学家在接下来的过程中扮演着积极的角色。医生将做出最终诊断并检查算法预测的准确性。然后计算机科学家可以使用更新的数据集来调整程序的参数并提高其准确性。这种亲身实践的方法被称为监督学习。",
        "vocab": [
          {
            "word": "active role",
            "ph": "/ˈæktɪv roʊl/",
            "pos": "n phr",
            "mean": "积极作用；主动角色",
            "ex": "Parents should play an active role in their children's education.",
            "tr": "父母应该在孩子的教育中发挥积极作用。",
            "match": [
              "active role"
            ]
          },
          {
            "word": "accuracy",
            "ph": "/ˈækjərəsi/",
            "pos": "n",
            "mean": "准确性；精确度",
            "ex": "We need to ensure the accuracy of the data.",
            "tr": "我们需要确保数据的准确性。",
            "match": [
              "accuracy"
            ]
          },
          {
            "word": "parameter",
            "ph": "/pəˈræmɪtər/",
            "pos": "n",
            "mean": "参数；界限",
            "ex": "The researchers set the parameters for the study.",
            "tr": "研究人员设定了研究的参数。",
            "match": [
              "parameters"
            ]
          },
          {
            "word": "hands-on",
            "ph": "/ˌhændz ˈɑːn/",
            "pos": "adj",
            "mean": "亲身实践的；实际操作的",
            "ex": "The course provides hands-on experience with the equipment.",
            "tr": "这门课程提供设备的实际操作经验。",
            "match": [
              "hands-on"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Now let's say these doctors want to design another algorithm to recommend treatment plans. Since these plans will be implemented in stages and they may change depending on each individual's response to treatment, the doctors decide to use reinforcement learning. This program uses an iterative approach to gather feedback about which medications, dosages and treatments are most effective. Then it compares that data against each patient's profile to create their unique optimal treatment plan. As the treatments progress and the program receives more feedback, it can constantly update the plan for each patient.",
        "cn": "现在假设这些医生想要设计另一种算法来推荐治疗方案。由于这些方案将分阶段实施，并且可能会根据每个人对治疗的反应而变化，医生决定使用强化学习。该程序使用迭代方法来收集关于哪些药物、剂量和治疗最有效的反馈。然后，它将该数据与每个患者的档案进行比较，以创建他们独特的最佳治疗方案。随着治疗的进行和程序收到更多反馈，它可以不断更新每个患者的方案。",
        "vocab": [
          {
            "word": "implement",
            "ph": "/ˈɪmplɪment/",
            "pos": "v",
            "mean": "实施；执行",
            "ex": "The government promised to implement the new policy.",
            "tr": "政府承诺实施新政策。",
            "match": [
              "implemented"
            ]
          },
          {
            "word": "iterative",
            "ph": "/ˈɪtərətɪv/",
            "pos": "adj",
            "mean": "迭代的；重复的",
            "ex": "Software development is often an iterative process.",
            "tr": "软件开发通常是一个迭代过程。",
            "match": [
              "iterative"
            ]
          },
          {
            "word": "dosage",
            "ph": "/ˈdoʊsɪdʒ/",
            "pos": "n",
            "mean": "剂量",
            "ex": "The correct dosage depends on the patient's weight.",
            "tr": "正确的剂量取决于患者的体重。",
            "match": [
              "dosages"
            ]
          },
          {
            "word": "optimal",
            "ph": "/ˈɑːptɪml/",
            "pos": "adj",
            "mean": "最佳的；最优的",
            "ex": "We need to find the optimal solution to this problem.",
            "tr": "我们需要找到这个问题的最佳解决方案。",
            "match": [
              "optimal"
            ]
          },
          {
            "type": "vocab",
            "word": "in stages",
            "ph": "/ɪn ˈsteɪdʒɪz/",
            "pos": "phr",
            "mean": "分阶段地；逐步地",
            "ex": "The project will be completed in stages to ensure everything works properly.",
            "tr": "为了确保一切正常运作，这个项目将分阶段完成。",
            "match": [
              "in stages"
            ]
          },
          {
            "type": "vocab",
            "word": "reinforcement",
            "ph": "/ˌriːɪnˈfɔːrsmənt/",
            "pos": "n",
            "mean": "强化学习（文中语境）；加强",
            "ex": "Reinforcement helps the system improve by rewarding the best decisions.",
            "tr": "强化学习通过奖励最佳决策来帮助系统改进。",
            "match": [
              "reinforcement"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "None of these three techniques are inherently smarter than any other. While some require more or less human intervention, they all have their own strengths and weaknesses, which make them best suited for certain tasks. However, by using them together, researchers can build complex AI systems where individual programs can supervise and teach each other.",
        "cn": "这三种技术本身并不比其他技术更聪明。虽然有些需要更多或更少的人工干预，但它们都有各自的优点和缺点，这使它们最适合某些任务。然而，通过将它们结合使用，研究人员可以构建复杂的AI系统，其中各个程序可以互相监督和教导。",
        "vocab": [
          {
            "word": "inherently",
            "ph": "/ɪnˈherəntli/",
            "pos": "adv",
            "mean": "天生地；固有地",
            "ex": "Skydiving is an inherently risky activity.",
            "tr": "跳伞是一项天生就有风险的活动。",
            "match": [
              "inherently"
            ]
          },
          {
            "word": "intervention",
            "ph": "/ˌɪntərˈvenʃn/",
            "pos": "n",
            "mean": "干预；介入",
            "ex": "Early intervention is key to treating the disorder.",
            "tr": "早期干预是治疗这种疾病的关键。",
            "match": [
              "intervention"
            ]
          },
          {
            "word": "suited for",
            "ph": "/ˈsuːtɪd fɔːr/",
            "pos": "phr",
            "mean": "适合于",
            "ex": "He is well suited for the job.",
            "tr": "他很适合这份工作。",
            "match": [
              "suited for"
            ]
          },
          {
            "word": "complex",
            "ph": "/kəmˈpleks/",
            "pos": "adj",
            "mean": "复杂的",
            "ex": "The human brain is a complex organ.",
            "tr": "人脑是一个复杂的器官。",
            "match": [
              "complex"
            ]
          },
          {
            "type": "vocab",
            "word": "supervise",
            "ph": "/ˈsuːpərvaɪz/",
            "pos": "v",
            "mean": "监督；指导",
            "ex": "Experienced engineers supervise new AI models to ensure they learn correctly.",
            "tr": "有经验的工程师监督新的 AI 模型以确保它们正确学习。",
            "match": [
              "supervise"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "For example, when our unsupervised learning program finds groups of patients that are similar, it could send that data to a connected supervised learning program. That program could then incorporate this information into its predictions. Or perhaps dozens of reinforcement learning programs might simulate potential patient outcomes to collect feedback about different treatment plans.",
        "cn": "例如，当我们的无监督学习程序发现相似的患者群体时，它可以将该数据发送给连接的监督学习程序。然后，该程序可以将此信息纳入其预测中。或者，几十个强化学习程序可能会模拟潜在的患者结果，以收集关于不同治疗方案的反馈。",
        "vocab": [
          {
            "word": "incorporate",
            "ph": "/ɪnˈkɔːrpəreɪt/",
            "pos": "v",
            "mean": "包含；合并；吸收",
            "ex": "We need to incorporate customer feedback into the design.",
            "tr": "我们需要将客户反馈纳入设计中。",
            "match": [
              "incorporate"
            ]
          },
          {
            "word": "simulate",
            "ph": "/ˈsɪmjuleɪt/",
            "pos": "v",
            "mean": "模拟；模仿",
            "ex": "The computer model simulates climate change.",
            "tr": "计算机模型模拟气候变化。",
            "match": [
              "simulate"
            ]
          },
          {
            "word": "potential",
            "ph": "/pəˈtenʃl/",
            "pos": "adj",
            "mean": "潜在的；可能的",
            "ex": "We identified several potential problems.",
            "tr": "我们确定了几个潜在的问题。",
            "match": [
              "potential"
            ]
          },
          {
            "word": "outcome",
            "ph": "/ˈaʊtkʌm/",
            "pos": "n",
            "mean": "结果；后果",
            "ex": "We are waiting for the outcome of the election.",
            "tr": "我们正在等待选举结果。",
            "match": [
              "outcomes"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "There are numerous ways to create these machine learning systems. And perhaps the most promising models are those that mimic the relationship between neurons in the brain. These artificial neural networks can use millions of connections to tackle difficult tasks like image recognition, speech recognition and even language translation. However, the more self-directed these models become, the harder it is for computer scientists to determine how these self-taught algorithms arrive at their solution.",
        "cn": "创建这些机器学习系统的方法数不胜数。也许最有希望的模型是那些模仿大脑中神经元之间关系的模型。这些人工神经网络可以使用数百万个连接来处理图像识别、语音识别甚至语言翻译等困难任务。然而，这些模型变得越自主，计算机科学家就越难确定这些自学算法是如何得出解决方案的。",
        "vocab": [
          {
            "word": "numerous",
            "ph": "/ˈnuːmərəs/",
            "pos": "adj",
            "mean": "许多的；无数的",
            "ex": "He has numerous awards for his work.",
            "tr": "他的作品获得了无数奖项。",
            "match": [
              "numerous"
            ]
          },
          {
            "word": "mimic",
            "ph": "/ˈmɪmɪk/",
            "pos": "v",
            "mean": "模仿",
            "ex": "The robot can mimic human gestures.",
            "tr": "机器人可以模仿人类的手势。",
            "match": [
              "mimic"
            ]
          },
          {
            "word": "neural network",
            "ph": "/ˈnʊrəl ˈnetwɜːrk/",
            "pos": "n phr",
            "mean": "神经网络",
            "ex": "Neural networks are inspired by the human brain.",
            "tr": "神经网络的灵感来自人脑。",
            "match": [
              "neural networks"
            ]
          },
          {
            "word": "tackle",
            "ph": "/ˈtækl/",
            "pos": "v",
            "mean": "处理；解决（难题）",
            "ex": "We need to tackle this problem immediately.",
            "tr": "我们需要立即解决这个问题。",
            "match": [
              "tackle"
            ]
          },
          {
            "word": "self-directed",
            "ph": "/ˌself dəˈrektɪd/",
            "pos": "adj",
            "mean": "自主的；自我导向的",
            "ex": "Self-directed learning requires discipline.",
            "tr": "自主学习需要自律。",
            "match": [
              "self-directed"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "Researchers are already looking at ways to make machine learning more transparent. But as AI becomes more involved in our everyday lives, these enigmatic decisions have increasingly large impacts on our work, health and safety. So as machines continue learning to investigate, negotiate and communicate, we must also consider how to teach them to teach each other to operate ethically.",
        "cn": "研究人员已经在寻找使机器学习更加透明的方法。但随着人工智能越来越多地参与我们的日常生活，这些神秘的决策对我们的工作、健康和安全产生越来越大的影响。因此，随着机器继续学习调查、谈判和沟通，我们还必须考虑如何教它们互相教导以合乎道德地运作。",
        "vocab": [
          {
            "word": "transparent",
            "ph": "/trænsˈpærənt/",
            "pos": "adj",
            "mean": "透明的；易懂的",
            "ex": "The company promises to be transparent about its finances.",
            "tr": "公司承诺在财务方面保持透明。",
            "match": [
              "transparent"
            ]
          },
          {
            "word": "enigmatic",
            "ph": "/ˌenɪɡˈmætɪk/",
            "pos": "adj",
            "mean": "神秘的；难以理解的",
            "ex": "She gave me an enigmatic smile.",
            "tr": "她给了我一个神秘的微笑。",
            "match": [
              "enigmatic"
            ]
          },
          {
            "word": "negotiate",
            "ph": "/nɪˈɡoʊʃieɪt/",
            "pos": "v",
            "mean": "谈判；协商",
            "ex": "They are trying to negotiate a peace treaty.",
            "tr": "他们正试图协商和平条约。",
            "match": [
              "negotiate"
            ]
          },
          {
            "word": "ethically",
            "ph": "/ˈeθɪkli/",
            "pos": "adv",
            "mean": "合乎道德地",
            "ex": "Businesses should act ethically.",
            "tr": "企业应合乎道德地行事。",
            "match": [
              "ethically"
            ]
          },
          {
            "type": "vocab",
            "word": "investigate",
            "ph": "/ɪnˈvɛstəˌɡeɪt/",
            "pos": "v",
            "mean": "调查；研究",
            "ex": "AI systems can investigate huge datasets to uncover hidden facts.",
            "tr": "AI 系统可以调查海量数据以发现隐藏的信息。",
            "match": [
              "investigate"
            ]
          },
          {
            "type": "vocab",
            "word": "operate",
            "ph": "/ˈɑːpəˌreɪt/",
            "pos": "v",
            "mean": "运行；运作",
            "ex": "Machines must operate safely when interacting with humans.",
            "tr": "机器在与人类互动时必须安全地运行。",
            "match": [
              "operate"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "Today's computers can pilot spacecraft and perform surgery. But according to computer scientist Alan Turing, the real test of a computer's intelligence is basic small talk. Check out this video to find out why.",
        "cn": "今天的计算机可以驾驶航天器并进行手术。但根据计算机科学家艾伦·图灵的说法，计算机智能的真正考验是基本的闲聊。点击这个视频找出原因。",
        "vocab": [
          {
            "word": "pilot",
            "ph": "/ˈpaɪlət/",
            "pos": "v",
            "mean": "驾驶（飞机、飞船等）",
            "ex": "He learned to pilot a helicopter.",
            "tr": "他学会了驾驶直升机。",
            "match": [
              "pilot"
            ]
          },
          {
            "word": "spacecraft",
            "ph": "/ˈspeɪskræft/",
            "pos": "n",
            "mean": "航天器；宇宙飞船",
            "ex": "The spacecraft landed safely on Mars.",
            "tr": "航天器安全降落在火星上。",
            "match": [
              "spacecraft"
            ]
          },
          {
            "word": "small talk",
            "ph": "/ˈsmɔːl tɔːk/",
            "pos": "n phr",
            "mean": "闲聊；寒暄",
            "ex": "He's not very good at small talk.",
            "tr": "他不太擅长闲聊。",
            "match": [
              "small talk"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      },
      "abbr": {
        "en": "abbreviation",
        "cn": "缩写"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "cybersecurity_job_story",
    "title": "My First Cybersecurity Job Fucking Sucked",
    "info": {
      "author": "Tech Content Creator",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "cybersecurity",
        "career",
        "work experience",
        "salary negotiation",
        "personal story"
      ],
      "link": "https://example.com/original-source",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "My first cybersecurity job was actually not what I thought it was gonna be. It was not what anyone told me cybersecurity was gonna be. And yeah, there should just be more information, more transparency out there around these entry-level \"cybersecurity jobs.\"",
        "cn": "我的第一份网络安全工作实际上和我当初想的完全不一样。它和任何人告诉我的网络安全工作也完全不一样。而且，是的，关于这些入门级的“网络安全工作”，外界应该有更多的信息和透明度。",
        "vocab": [
          {
            "word": "gonna be",
            "ph": "/ˈɡənə biː/",
            "pos": "phr",
            "mean": "（非正式）将会是 (going to be)",
            "ex": "This party is gonna be awesome.",
            "tr": "这个派对将会超赞的。",
            "match": [
              "gonna be"
            ]
          },
          {
            "word": "transparency",
            "ph": "/trænˈspærənsi/",
            "pos": "n",
            "mean": "透明度",
            "ex": "The company values transparency in all its business dealings.",
            "tr": "该公司在所有商业往来中都重视透明度。",
            "match": [
              "transparency"
            ]
          },
          {
            "word": "entry-level",
            "ph": "/ˈentri ˈlevl/",
            "pos": "adj",
            "mean": "入门级的",
            "ex": "He's looking for an entry-level position in marketing.",
            "tr": "他正在寻找一个市场营销方面的入门级职位。",
            "match": [
              "entry-level"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "So I got my first cybersecurity job like a year after I graduated college. Had a hard time finding a job, went on LinkedIn, posted on LinkedIn. This dude who ran an MSP (managed service provider) saw it and was like, \"Do you want to work for my MSP?\" And I was like, \"Sure, I'm desperate.\" Long story short—if you want the longer explanation, there's a video on my channel—but yeah, posted on LinkedIn, MSP owner saw it, hired me to work for his MSP.",
        "cn": "所以我在大学毕业大约一年后得到了我的第一份网络安全工作。找工作很困难，我上了领英，在领英上发了帖子。一个经营MSP（管理服务提供商）的哥们看到了，然后就说：“你想为我的MSP工作吗？” 我当时就说：“当然，我急需工作。” 长话短说——如果你想要更长的解释，我频道上有个视频——但总之，在领英上发帖，MSP老板看到了，就雇我去他的MSP工作。",
        "vocab": [
          {
            "word": "have a hard time",
            "ph": "/hæv ə hɑːrd taɪm/",
            "pos": "idiom",
            "mean": "经历困难时期",
            "ex": "She's having a hard time adjusting to her new school.",
            "tr": "她正经历着适应新学校的困难时期。",
            "match": [
              "Had a hard time"
            ]
          },
          {
            "word": "dude",
            "ph": "/duːd/",
            "pos": "n",
            "mean": "（非正式）哥们；家伙",
            "ex": "Hey dude, what's up?",
            "tr": "嘿，哥们，怎么样？",
            "match": [
              "dude"
            ]
          },
          {
            "word": "MSP (managed service provider)",
            "ph": "/ˌem es ˈpiː/",
            "pos": "n",
            "mean": "管理服务提供商",
            "ex": "Our company outsources its IT support to a local MSP.",
            "tr": "我们公司将其IT支持外包给了一家本地的管理服务提供商。",
            "match": [
              "MSP"
            ]
          },
          {
            "word": "desperate",
            "ph": "/ˈdespərət/",
            "pos": "adj",
            "mean": "（因急需而）不顾一切的；绝望的",
            "ex": "After losing his job, he was desperate for any kind of work.",
            "tr": "失业后，他急需任何类型的工作。",
            "match": [
              "desperate"
            ]
          },
          {
            "word": "long story short",
            "ph": "/lɔːŋ ˈstɔːri ʃɔːrt/",
            "pos": "idiom",
            "mean": "长话短说",
            "ex": "We had a lot of issues with the car, but long story short, we finally made it home.",
            "tr": "我们的车出了很多问题，但长话短说，我们最终还是到家了。",
            "match": [
              "Long story short"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "While I was working for his MSP, I was also doing a day job as an information technology teacher. So he kind of brought me on, didn't pay me for six months because I had to “learn the ropes” or whatever. Yeah, just did a bunch of help desk with no pay. And then six months later, I got paid $25 an hour to do help desk.",
        "cn": "在为他的MSP工作的同时，我还有一份信息技术老师的日间工作。所以他算是把我招进来了，但六个月没给我发工资，因为我得“摸清门道”什么的。是的，就是白干了一堆服务台的工作。然后六个月后，我才拿到每小时25美元的报酬来做服务台。",
        "vocab": [
          {
            "word": "day job",
            "ph": "/ˈdeɪ dʒɒb/",
            "pos": "n phr",
            "mean": "（相对于副业或爱好的）本职工作",
            "ex": "He's a musician at night, but his day job is an accountant.",
            "tr": "他晚上是音乐家，但他的本职工作是会计。",
            "match": [
              "day job"
            ]
          },
          {
            "word": "bring someone on",
            "ph": "/brɪŋ ˈsʌmwʌn ɒn/",
            "pos": "phr v",
            "mean": "招募某人",
            "ex": "The company decided to bring on a new marketing specialist.",
            "tr": "公司决定招募一位新的市场专员。",
            "match": [
              "brought me on"
            ]
          },
          {
            "word": "learn the ropes",
            "ph": "/lɜːrn ðə roʊps/",
            "pos": "idiom",
            "mean": "摸清门道；熟悉工作",
            "ex": "It took him a few weeks to learn the ropes at his new job.",
            "tr": "他花了几周时间才熟悉了新工作的门道。",
            "match": [
              "learn the ropes"
            ]
          },
          {
            "word": "or whatever",
            "ph": "/ɔːr wɒtˈevər/",
            "pos": "phr",
            "mean": "（非正式）诸如此类",
            "ex": "We can watch a movie, play a game, or whatever.",
            "tr": "我们可以看电影、玩游戏，或者做些别的事。",
            "match": [
              "or whatever"
            ]
          },
          {
            "word": "help desk",
            "ph": "/ˈhelp desk/",
            "pos": "n",
            "mean": "（技术）服务台",
            "ex": "If you have a problem with your computer, you should call the IT help desk.",
            "tr": "如果你的电脑有问题，你应该打电话给IT服务台。",
            "match": [
              "help desk"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "But also, if you’re at a small company, you know, you have to wear a lot of hats. So I was doing help desk, security stuff, setting up SIEMs, security tool testing, testing EDRs, setting up detection rules, going to conferences, sales engineering, analyzing vulnerabilities and then communicating them to clients… and still doing help desk—all while getting paid $52,000 a year.",
        "cn": "而且，如果你在一家小公司，你知道，你得身兼数职。所以我当时在做服务台、安全方面的东西、搭建SIEM、安全工具测试、测试EDR、设置检测规则、参加会议、销售工程、分析漏洞然后与客户沟通……还一直在做服务台——所有这些工作，年薪只有52000美元。",
        "vocab": [
          {
            "word": "wear a lot of hats",
            "ph": "/wer ə lɒt əv hæts/",
            "pos": "idiom",
            "mean": "身兼数职",
            "ex": "As a small business owner, she has to wear a lot of hats, from marketing to accounting.",
            "tr": "作为一名小企业主，她必须身兼数职，从市场营销到会计都要管。",
            "match": [
              "wear a lot of hats"
            ]
          },
          {
            "word": "stuff",
            "ph": "/stʌf/",
            "pos": "n",
            "mean": "（非正式）东西；事情",
            "ex": "I have a lot of stuff to do this weekend.",
            "tr": "我这个周末有很多事情要做。",
            "match": [
              "stuff"
            ]
          },
          {
            "word": "SIEM (Security Information and Event Management)",
            "ph": "/sɪm/",
            "pos": "n",
            "mean": "安全信息和事件管理系统",
            "ex": "The security team uses a SIEM to monitor network activity for threats.",
            "tr": "安全团队使用SIEM来监控网络活动以发现威胁。",
            "match": [
              "SIEMs"
            ]
          },
          {
            "word": "EDR (Endpoint Detection and Response)",
            "ph": "/ˌiː diː ˈɑːr/",
            "pos": "n",
            "mean": "终端检测与响应系统",
            "ex": "Our company installed a new EDR solution to protect employee laptops.",
            "tr": "我们公司安装了一个新的EDR解决方案来保护员工的笔记本电脑。",
            "match": [
              "EDRs"
            ]
          },
          {
            "word": "vulnerability",
            "ph": "/ˌvʌlnərəˈbɪləti/",
            "pos": "n",
            "mean": "漏洞；弱点",
            "ex": "The software update fixed a critical security vulnerability.",
            "tr": "软件更新修复了一个严重的安全漏洞。",
            "match": [
              "vulnerabilities"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "So I was working like four hours a night on help desk with no pay. Six months later, got hired under contract at $52,000 a year, then was doing all the stuff I listed. And then I was like, \"Hey, I can't afford to live. $52,000 in the US doesn’t get you very far.\" So I asked, \"Is there a way I could get a raise so I can afford to live?\" Because at the time I was living in my parents’ basement—you can’t really afford anything on that salary. Can’t pay bills, can’t pay rent.",
        "cn": "所以当时我每晚在服务台白干四小时。六个月后，以每年52000美元的合同被雇佣，然后就在做我列出的所有事情。再然后我就想，“嘿，我活不下去了。在美国52000美元根本干不了什么。” 于是我问：“有没有可能给我加薪，好让我能活下去？” 因为那时我住在我父母的地下室——靠那点薪水你真的什么也负担不起。付不起账单，付不起房租。",
        "vocab": [
          {
            "word": "under contract",
            "ph": "/ˈʌndər ˈkɒntrækt/",
            "pos": "phr",
            "mean": "签有合同",
            "ex": "The athlete is under contract with the team for another three years.",
            "tr": "那位运动员与该队还有三年的合同。",
            "match": [
              "under contract"
            ]
          },
          {
            "word": "afford to live",
            "ph": "/əˈfɔːrd tuː lɪv/",
            "pos": "phr v",
            "mean": "负担得起生活",
            "ex": "With rising prices, many people are struggling to afford to live in the city.",
            "tr": "随着物价上涨，许多人在城市里难以负担生活。",
            "match": [
              "afford to live"
            ]
          },
          {
            "word": "not get you very far",
            "ph": "/nɒt ɡet juː ˈveri fɑːr/",
            "pos": "idiom",
            "mean": "干不了什么；没什么用",
            "ex": "A little bit of knowledge on this subject won't get you very far; you need to be an expert.",
            "tr": "对这个学科只有一点点知识没什么用；你需要成为专家。",
            "match": [
              "doesn’t get you very far"
            ]
          },
          {
            "word": "raise",
            "ph": "/reɪz/",
            "pos": "n",
            "mean": "加薪",
            "ex": "He asked his boss for a raise after working there for a year.",
            "tr": "在那里工作一年后，他向老板提出了加薪请求。",
            "match": [
              "raise"
            ]
          },
          {
            "word": "basement",
            "ph": "/ˈbeɪsmənt/",
            "pos": "n",
            "mean": "地下室",
            "ex": "They converted their basement into a home gym.",
            "tr": "他们把地下室改造成了家庭健身房。",
            "match": [
              "basement"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "So I said, \"Hey, could I perhaps get a raise for all the stuff I'm doing?\" And he was like, \"Yeah, yeah, we don’t have it in the budget, we’ll talk about it, blah blah blah.\" That went on for like four months. So naturally, I started applying to other jobs.",
        "cn": "于是我说：“嘿，鉴于我做的所有这些事，我或许能加薪吗？” 他就说：“嗯，嗯，我们预算里没这笔钱，我们会讨论的，诸如此类。” 这事拖了大概四个月。所以我很自然地，就开始申请其他工作了。",
        "vocab": [
          {
            "word": "perhaps",
            "ph": "/pərˈhæps/",
            "pos": "adv",
            "mean": "或许",
            "ex": "Perhaps we can meet for lunch tomorrow.",
            "tr": "或许我们明天可以一起吃午饭。",
            "match": [
              "perhaps"
            ]
          },
          {
            "word": "in the budget",
            "ph": "/ɪn ðə ˈbʌdʒɪt/",
            "pos": "phr",
            "mean": "在预算内",
            "ex": "A new coffee machine is not in the budget this year.",
            "tr": "今年预算里没有买新咖啡机的计划。",
            "match": [
              "in the budget"
            ]
          },
          {
            "word": "blah blah blah",
            "ph": "/blɑː blɑː blɑː/",
            "pos": "phr",
            "mean": "诸如此类（表示不重要或不耐烦）",
            "ex": "He went on about his vacation, the hotel, the food, blah blah blah.",
            "tr": "他不停地讲他的假期、酒店、食物，诸如此类。",
            "match": [
              "blah blah blah"
            ]
          },
          {
            "word": "go on",
            "ph": "/ɡoʊ ɒn/",
            "pos": "phr v",
            "mean": "持续",
            "ex": "The meeting seemed to go on forever.",
            "tr": "那场会议好像永远开不完似的。",
            "match": [
              "went on"
            ]
          },
          {
            "word": "apply to",
            "ph": "/əˈplaɪ tuː/",
            "pos": "phr v",
            "mean": "申请",
            "ex": "She decided to apply to several universities.",
            "tr": "她决定申请几所大学。",
            "match": [
              "applying to"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "I got a job offer from another MSP the day we were flying back from a conference. So I sent him the job offer and said, \"Hey, these guys need an answer today. They’re going to pay me $75,000 a year to be a GRC analyst, in a sense. I need to make more money, so just letting you know—they sent me an offer.\"",
        "cn": "就在我们从一个会议飞回来的那天，我收到了另一家MSP的工作录用。于是我把录用通知发给他，说：“嘿，这些人今天就要答复。他们准备付我每年75000美元，让我当一名GRC分析师，某种意义上是这样。我需要赚更多钱，所以就是让你知道一下——他们给了我一份录用通知。”",
        "vocab": [
          {
            "word": "job offer",
            "ph": "/dʒɒb ˈɔːfər/",
            "pos": "n phr",
            "mean": "工作录用通知",
            "ex": "After the final interview, she received a job offer from the company.",
            "tr": "最后一轮面试后，她收到了公司的工作录用通知。",
            "match": [
              "job offer"
            ]
          },
          {
            "word": "conference",
            "ph": "/ˈkɒnfərəns/",
            "pos": "n",
            "mean": "会议",
            "ex": "He is attending a business conference in another city.",
            "tr": "他正在另一个城市参加一个商务会议。",
            "match": [
              "conference"
            ]
          },
          {
            "word": "GRC analyst",
            "ph": "/ˌdʒiː ɑːr ˈsiː ˈænəlɪst/",
            "pos": "n phr",
            "mean": "治理、风险与合规分析师",
            "ex": "As a GRC analyst, her job is to ensure the company follows industry regulations.",
            "tr": "作为一名GRC分析师，她的工作是确保公司遵守行业法规。",
            "match": [
              "GRC analyst"
            ]
          },
          {
            "word": "in a sense",
            "ph": "/ɪn ə sens/",
            "pos": "phr",
            "mean": "在某种意义上",
            "ex": "In a sense, he was right, but he didn't see the whole picture.",
            "tr": "在某种意义上，他是对的，但他没有看到全局。",
            "match": [
              "in a sense"
            ]
          },
          {
            "word": "just letting you know",
            "ph": "/dʒʌst ˈletɪŋ juː noʊ/",
            "pos": "phr",
            "mean": "就是让你知道一下",
            "ex": "I'm heading out now, just letting you know.",
            "tr": "我现在要出门了，就是让你知道一下。",
            "match": [
              "just letting you know"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "And then he was like, \"Oh, we can actually match that. I’ll start paying you $75,000 a year.\" We magically just got money. So that’s how that got negotiated. I stayed with that MSP, he paid me $75,000 a year, and then I moved on to other things after that.",
        "cn": "然后他就说：“哦，我们其实可以匹配那个薪资。我开始付你每年75000美元。” 我们就神奇地有了钱。事情就是这么谈妥的。我留在了那家MSP，他付我每年75000美元，那之后我又去做了别的事情。",
        "vocab": [
          {
            "word": "match",
            "ph": "/mætʃ/",
            "pos": "v",
            "mean": "匹配（薪资等）",
            "ex": "If you get a better offer, my company might be able to match it.",
            "tr": "如果你得到更好的录用条件，我的公司也许能匹配。",
            "match": [
              "match"
            ]
          },
          {
            "word": "magically",
            "ph": "/ˈmædʒɪkli/",
            "pos": "adv",
            "mean": "神奇地",
            "ex": "The missing keys magically reappeared on the kitchen counter.",
            "tr": "丢失的钥匙神奇地重新出现在了厨房台面上。",
            "match": [
              "magically"
            ]
          },
          {
            "word": "negotiate",
            "ph": "/nɪˈɡoʊʃieɪt/",
            "pos": "v",
            "mean": "谈判；协商",
            "ex": "He was able to negotiate a higher salary before accepting the job.",
            "tr": "在接受工作前，他成功地谈下了一个更高的薪水。",
            "match": [
              "negotiated"
            ]
          },
          {
            "word": "move on to",
            "ph": "/muːv ɒn tuː/",
            "pos": "phr v",
            "mean": "转向；继续前进到",
            "ex": "After finishing the first task, let's move on to the next one.",
            "tr": "完成第一个任务后，我们继续下一个吧。",
            "match": [
              "moved on to"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "But yeah, all the while, I was configuring EDRs, SIEMs, security tool testing, doing vulnerability scanning, some penetration testing for compliance, finding vulnerabilities in client systems from our SIEM, then communicating that to them to try and upsell cybersecurity services.",
        "cn": "但是，是的，一直以来，我都在配置EDR、SIEM、做安全工具测试、进行漏洞扫描、为合规性做一些渗透测试、从我们的SIEM中发现客户系统的漏洞，然后与他们沟通，试图向上销售网络安全服务。",
        "vocab": [
          {
            "word": "all the while",
            "ph": "/ɔːl ðə waɪl/",
            "pos": "phr",
            "mean": "一直以来",
            "ex": "He was pretending to listen, but all the while he was thinking about his vacation.",
            "tr": "他假装在听，但其实一直都在想他的假期。",
            "match": [
              "all the while"
            ]
          },
          {
            "word": "configure",
            "ph": "/kənˈfɪɡjər/",
            "pos": "v",
            "mean": "配置",
            "ex": "You need to configure the new software before you can use it.",
            "tr": "在使用新软件前，你需要先配置它。",
            "match": [
              "configuring"
            ]
          },
          {
            "word": "vulnerability scanning",
            "ph": "/ˌvʌlnərəˈbɪləti ˈskænɪŋ/",
            "pos": "n phr",
            "mean": "漏洞扫描",
            "ex": "Regular vulnerability scanning is a key part of network security.",
            "tr": "定期的漏洞扫描是网络安全的关键部分。",
            "match": [
              "vulnerability scanning"
            ]
          },
          {
            "word": "penetration testing",
            "ph": "/ˌpenəˈtreɪʃn ˈtestɪŋ/",
            "pos": "n phr",
            "mean": "渗透测试",
            "ex": "The company hired a firm to perform penetration testing on their new application.",
            "tr": "该公司雇佣了一家公司对他们的新应用进行渗透测试。",
            "match": [
              "penetration testing"
            ]
          },
          {
            "word": "compliance",
            "ph": "/kəmˈplaɪəns/",
            "pos": "n",
            "mean": "合规性",
            "ex": "All our products are in compliance with international safety standards.",
            "tr": "我们所有的产品都符合国际安全标准。",
            "match": [
              "compliance"
            ]
          },
          {
            "word": "upsell",
            "ph": "/ˈʌpsel/",
            "pos": "v",
            "mean": "向上销售（劝说顾客买更贵的东西）",
            "ex": "The car salesman tried to upsell me to a more expensive model.",
            "tr": "汽车销售员试图劝我买一款更贵的车型。",
            "match": [
              "upsell"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "So yeah, definitely a journey. And definitely not what I thought. When I thought I was getting into cybersecurity, I thought I’d be sitting behind a desk looking at logs all day—which in a bigger company, yeah sure, if you're in a SOC. But if you're at a very small company—and I’ve always worked for very small companies—you wear a lot of hats, and you just do a lot of things. It’s good for learning, but then you're like, \"I need money to live.\" Sometimes money outweighs learning.",
        "cn": "所以，是的，这绝对是一段旅程。而且绝对不是我想的那样。当我以为我要进入网络安全领域时，我以为我会整天坐在办公桌后面看日志——在更大的公司里，是的，当然，如果你在SOC（安全运营中心）。但如果你在一家非常小的公司——而我一直都在为非常小的公司工作——你就得身兼数职，做很多事情。这对学习有好处，但然后你就会想：“我需要钱来生活。” 有时候，金钱比学习更重要。",
        "vocab": [
          {
            "word": "journey",
            "ph": "/ˈdʒɜːrni/",
            "pos": "n",
            "mean": "旅程（也可比喻经历）",
            "ex": "Learning a new language is a long but rewarding journey.",
            "tr": "学习一门新语言是一段漫长但有益的旅程。",
            "match": [
              "journey"
            ]
          },
          {
            "word": "get into",
            "ph": "/ɡet ˈɪntuː/",
            "pos": "phr v",
            "mean": "进入（某个领域）",
            "ex": "She was excited to get into the field of renewable energy.",
            "tr": "她对能进入可再生能源领域感到兴奋。",
            "match": [
              "getting into"
            ]
          },
          {
            "word": "log",
            "ph": "/lɔːɡ/",
            "pos": "n",
            "mean": "（系统）日志",
            "ex": "The system administrator checked the server logs for any errors.",
            "tr": "系统管理员检查了服务器日志以查找任何错误。",
            "match": [
              "logs"
            ]
          },
          {
            "word": "SOC (Security Operations Center)",
            "ph": "/sɒk/",
            "pos": "n",
            "mean": "安全运营中心",
            "ex": "A SOC analyst monitors security alerts 24/7.",
            "tr": "安全运营中心分析师全天候监控安全警报。",
            "match": [
              "SOC"
            ]
          },
          {
            "word": "outweigh",
            "ph": "/ˌaʊtˈweɪ/",
            "pos": "v",
            "mean": "比…更重要",
            "ex": "For this job, the benefits far outweigh the long hours.",
            "tr": "对这份工作而言，福利远比长工作时间更重要。",
            "match": [
              "outweighs"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "So yeah, it’s just not really what I thought it was. Doesn’t mean it’s bad—just means it’s different. But now, as everyone knows, I’ve been doing content stuff, tech content, which has started to actually pay more than my monthly salary at my current job. So that’s great, really like that. You know, there’s a bright side to most things.",
        "cn": "所以，是的，它真的不是我想的那样。但这不意味着它不好——只是意味着它不一样。但现在，大家都知道，我一直在做内容方面的东西，科技内容，而这实际上已经开始比我目前工作的月薪付得更多了。所以那太棒了，真的很喜欢。你知道，大多数事情都有光明的一面。",
        "vocab": [
          {
            "word": "doesn't mean...",
            "ph": "/ˈdʌznt miːn/",
            "pos": "phr",
            "mean": "这不意味着…",
            "ex": "Just because he's quiet, it doesn't mean he's unfriendly.",
            "tr": "他安静不意味着他不友好。",
            "match": [
              "Doesn’t mean"
            ]
          },
          {
            "word": "content",
            "ph": "/ˈkɒntent/",
            "pos": "n",
            "mean": "（媒体）内容",
            "ex": "She creates educational content for her YouTube channel.",
            "tr": "她为她的YouTube频道创作教育内容。",
            "match": [
              "content"
            ]
          },
          {
            "word": "salary",
            "ph": "/ˈsæləri/",
            "pos": "n",
            "mean": "薪水",
            "ex": "He was offered a higher salary at the new company.",
            "tr": "新公司给了他更高的薪水。",
            "match": [
              "salary"
            ]
          },
          {
            "word": "bright side",
            "ph": "/braɪt saɪd/",
            "pos": "n phr",
            "mean": "光明的一面",
            "ex": "Even though he lost the game, he tried to look on the bright side and focus on what he learned.",
            "tr": "尽管他输了比赛，他还是努力往好的方面看，专注于他学到的东西。",
            "match": [
              "bright side"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 12,
        "en": "So yeah, that’s just the story about how my first cybersecurity paycheck fucking sucked. And they definitely don’t pay you as much as you think they’re going to pay you.",
        "cn": "所以，是的，那只是关于我第一份网络安全薪水有多他妈的烂的故事。而且他们绝对不会付你想象中那么多的钱。",
        "vocab": [
          {
            "word": "paycheck",
            "ph": "/ˈpeɪtʃek/",
            "pos": "n",
            "mean": "薪水支票；薪水",
            "ex": "He looks forward to his paycheck at the end of every month.",
            "tr": "他盼望着每个月底的薪水。",
            "match": [
              "paycheck"
            ]
          },
          {
            "word": "suck",
            "ph": "/sʌk/",
            "pos": "v",
            "mean": "（粗俗俚语）烂透了",
            "ex": "This movie really sucks; let's watch something else.",
            "tr": "这部电影真的烂透了，我们看点别的吧。",
            "match": [
              "sucked"
            ]
          },
          {
            "word": "as much as you think",
            "ph": "/æz mʌtʃ æz juː θɪŋk/",
            "pos": "phr",
            "mean": "像你想象的那么多",
            "ex": "The job isn't as much fun as you think it is.",
            "tr": "这份工作没你想象的那么有趣。",
            "match": [
              "as much as you think"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 13,
        "en": "Yeah, so that’s it. Sorry, it’s a little rambly—I’m just at this park. I’m traveling, scootering around the city, found a park, popped a squat, figured I’d film a video.",
        "cn": "是的，就是这样。抱歉，有点啰嗦——我只是在这个公园里。我正在旅行，骑着滑板车在城里转悠，发现一个公园，随便找个地方一蹲，就想着拍个视频。",
        "vocab": [
          {
            "word": "that's it",
            "ph": "/ðæts ɪt/",
            "pos": "phr",
            "mean": "就是这样",
            "ex": "I've explained everything. So, that's it.",
            "tr": "我已经解释了所有事。所以，就是这样。",
            "match": [
              "that’s it"
            ]
          },
          {
            "word": "rambly",
            "ph": "/ˈræmbli/",
            "pos": "adj",
            "mean": "（讲话）啰嗦的；漫无边际的",
            "ex": "His speech was a bit rambly and hard to follow.",
            "tr": "他的演讲有点啰嗦，很难跟上思路。",
            "match": [
              "rambly"
            ]
          },
          {
            "word": "scooter",
            "ph": "/ˈskuːtər/",
            "pos": "v",
            "mean": "骑滑板车",
            "ex": "The kids love to scooter around the neighborhood.",
            "tr": "孩子们喜欢在社区里骑滑板车转悠。",
            "match": [
              "scootering"
            ]
          },
          {
            "word": "pop a squat",
            "ph": "/pɒp ə skwɒt/",
            "pos": "idiom",
            "mean": "（俚语）随便找个地方蹲下/坐下",
            "ex": "Let's just pop a squat on the grass and enjoy the sun.",
            "tr": "我们就在草地上随便坐下，享受阳光吧。",
            "match": [
              "popped a squat"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 14,
        "en": "So yeah, make sure to like, subscribe, punch all the buttons in the face as always… and I’ll see you in the next one.",
        "cn": "所以，是的，确保点赞、订阅、像往常一样把所有按钮都给捶一遍……我们下个视频见。",
        "vocab": [
          {
            "word": "make sure to",
            "ph": "/meɪk ʃʊər tuː/",
            "pos": "phr",
            "mean": "务必；确保",
            "ex": "Please make sure to lock the door when you leave.",
            "tr": "离开时请务必锁门。",
            "match": [
              "make sure to"
            ]
          },
          {
            "word": "subscribe",
            "ph": "/səbˈskraɪb/",
            "pos": "v",
            "mean": "订阅",
            "ex": "If you like the content, don't forget to subscribe to the channel.",
            "tr": "如果你喜欢这些内容，别忘了订阅这个频道。",
            "match": [
              "subscribe"
            ]
          },
          {
            "word": "punch something in the face",
            "ph": "/pʌntʃ ˈsʌmθɪŋ ɪn ðə feɪs/",
            "pos": "idiom",
            "mean": "（夸张俚语）猛击；狠狠地按",
            "ex": "He was so frustrated with the vending machine that he wanted to punch it in the face.",
            "tr": "他对那台自动售货机感到非常沮丧，很想给它一拳。",
            "match": [
              "punch all the buttons in the face"
            ]
          },
          {
            "word": "see you in the next one",
            "ph": "/siː juː ɪn ðə nekst wʌn/",
            "pos": "phr",
            "mean": "下个（视频）见",
            "ex": "Thanks for watching, and I'll see you in the next one.",
            "tr": "感谢收看，我们下个视频见。",
            "match": [
              "see you in the next one"
            ]
          }
        ],
        "gram": []
      }
    ],
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "F": {
        "en": "Figurative Language",
        "cn": "修辞"
      },
      "R": {
        "en": "Rhetoric",
        "cn": "修辞手法"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    },
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    }
  },
  {
    "id": "you_are_not_late",
    "title": "You Are Not Late, You Are Loading",
    "info": {
      "author": "Unknown",
      "source": "Motivational Speech Transcript",
      "level": "C1",
      "tags": [
        "motivation",
        "perspective",
        "success",
        "self-improvement",
        "psychology"
      ],
      "link": "https://example.com/original-source",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "You ever notice how no one says it directly? But somehow the world makes you feel like if you didn't make it by 30, your life is basically a discount sale. It's like society has this invisible scoreboard. And the moment you cross 30, the referee blows a whistle like, \"Alright buddy, time's up. Hand in your dreams.\"",
        "cn": "你有没有注意到，没有人会直说？但不知何故，这个世界让你觉得，如果你30岁还没成功，你的人生基本上就是一场清仓大甩卖。就好像社会有一个无形的记分牌。一旦你过了30岁，裁判就会吹响哨子，好像在说：‘好了，伙计，时间到。交出你的梦想吧。’",
        "vocab": [
          {
            "word": "make it",
            "ph": "/meɪk ɪt/",
            "pos": "idiom",
            "mean": "成功",
            "ex": "After years of hard work, she finally made it as a successful novelist.",
            "tr": "经过多年的努力，她终于成功地成为了一名成功的小说家。",
            "match": [
              "make it"
            ]
          },
          {
            "word": "discount sale",
            "ph": "/ˈdɪskaʊnt seɪl/",
            "pos": "n phr",
            "mean": "清仓大甩卖",
            "ex": "I bought this jacket for half price at a huge discount sale.",
            "tr": "我是在一次大型清仓大甩卖时半价买的这件夹克。",
            "match": [
              "discount sale"
            ]
          },
          {
            "word": "invisible",
            "ph": "/ɪnˈvɪzəbl/",
            "pos": "adj",
            "mean": "无形的",
            "ex": "He felt like he was fighting against an invisible enemy.",
            "tr": "他感觉自己仿佛在与一个无形的敌人战斗。",
            "match": [
              "invisible"
            ]
          },
          {
            "word": "scoreboard",
            "ph": "/ˈskɔːrbɔːrd/",
            "pos": "n",
            "mean": "记分牌",
            "ex": "The final score was displayed on the giant scoreboard.",
            "tr": "最终比分显示在巨大的记分牌上。",
            "match": [
              "scoreboard"
            ]
          },
          {
            "word": "referee",
            "ph": "/ˌrefəˈriː/",
            "pos": "n",
            "mean": "裁判",
            "ex": "The referee blew his whistle to signal the end of the game.",
            "tr": "裁判吹响哨子，示意比赛结束。",
            "match": [
              "referee"
            ]
          },
          {
            "word": "time's up",
            "ph": "/taɪmz ʌp/",
            "pos": "idiom",
            "mean": "时间到",
            "ex": "The teacher announced, 'Time's up, please put your pens down.'",
            "tr": "老师宣布：‘时间到，请放下你们的笔。’",
            "match": [
              "time's up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "But here's the plot twist no one expects: You're not late. You're just early in a different story. Let me explain.",
        "cn": "但这是一个没人预料到的剧情反转：你没有迟到。你只是在另一个故事里来得早了。我来解释一下。",
        "vocab": [
          {
            "word": "plot twist",
            "ph": "/plɒt twɪst/",
            "pos": "n phr",
            "mean": "剧情反转",
            "ex": "The movie's plot twist at the end shocked the entire audience.",
            "tr": "电影结尾的剧情反转震惊了所有观众。",
            "match": [
              "plot twist"
            ]
          },
          {
            "word": "expect",
            "ph": "/ɪkˈspekt/",
            "pos": "v",
            "mean": "预料",
            "ex": "I didn't expect to see you here today!",
            "tr": "我没预料到今天会在这里见到你！",
            "match": [
              "expects"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "We live in a world where someone becomes famous at 19 for eating spicy noodles on camera. And suddenly everyone else feels like they've failed at life. Like, bro, I can't even handle mild spice. How was I supposed to compete?",
        "cn": "我们生活在一个19岁的人因为在镜头前吃辣面而出名的世界。然后突然之间，其他所有人都感觉自己的人生失败了。就像，哥们，我连微辣都受不了。我该怎么竞争？",
        "vocab": [
          {
            "word": "spicy",
            "ph": "/ˈspaɪsi/",
            "pos": "adj",
            "mean": "辣的",
            "ex": "He challenged himself to eat the restaurant's spiciest noodles.",
            "tr": "他挑战自己去吃那家餐厅最辣的面条。",
            "match": [
              "spicy"
            ]
          },
          {
            "word": "fail at life",
            "ph": "/feɪl æt laɪf/",
            "pos": "phr",
            "mean": "人生失败",
            "ex": "Just because you lost your job doesn't mean you've failed at life.",
            "tr": "你丢了工作不代表你的人生就失败了。",
            "match": [
              "failed at life"
            ]
          },
          {
            "word": "bro",
            "ph": "/broʊ/",
            "pos": "n",
            "mean": "（俚语）哥们",
            "ex": "Hey bro, can you help me with this?",
            "tr": "嘿，哥们，能帮我一下这个吗？",
            "match": [
              "bro"
            ]
          },
          {
            "word": "handle",
            "ph": "/ˈhændl/",
            "pos": "v",
            "mean": "处理；应对",
            "ex": "She knows how to handle difficult customers with patience.",
            "tr": "她知道如何有耐心地应对难缠的顾客。",
            "match": [
              "handle"
            ]
          },
          {
            "word": "mild",
            "ph": "/maɪld/",
            "pos": "adj",
            "mean": "温和的",
            "ex": "I prefer my food with just a mild spice.",
            "tr": "我更喜欢我的食物只带一点微辣。",
            "match": [
              "mild"
            ]
          },
          {
            "word": "compete",
            "ph": "/kəmˈpiːt/",
            "pos": "v",
            "mean": "竞争",
            "ex": "She had to compete against hundreds of other applicants for the job.",
            "tr": "她必须和几百名其他申请者竞争这份工作。",
            "match": [
              "compete"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "Every time you scroll, it feels like the entire planet is winning except you. Someone your age bought a house. Someone younger than you bought two houses. And you're sitting there proud because you finally fixed your sleep schedule for one day.",
        "cn": "每次你刷手机，都感觉好像除了你，整个地球都在赢。一个和你同龄的人买了房子。一个比你年轻的人买了两套房子。而你却坐在那里，因为终于把自己的睡眠时间调整好了一天而感到自豪。",
        "vocab": [
          {
            "word": "scroll",
            "ph": "/skroʊl/",
            "pos": "v",
            "mean": "（在屏幕上）滚动，刷（手机）",
            "ex": "He spent hours just scrolling through social media.",
            "tr": "他花了好几个小时就在刷社交媒体。",
            "match": [
              "scroll"
            ]
          },
          {
            "word": "sleep schedule",
            "ph": "/sliːp ˈskedʒuːl/",
            "pos": "n phr",
            "mean": "睡眠时间表",
            "ex": "Maintaining a consistent sleep schedule is important for your health.",
            "tr": "保持一个固定的睡眠时间表对你的健康很重要。",
            "match": [
              "sleep schedule"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "But here's the truth: You didn't miss your moment. Your moment is being built quietly.",
        "cn": "但真相是：你没有错过你的时刻。你的时刻正在被悄悄地构建。",
        "vocab": [
          {
            "word": "miss one's moment",
            "ph": "/mɪs wʌnz ˈmoʊmənt/",
            "pos": "phr",
            "mean": "错过时机",
            "ex": "He hesitated for too long and missed his moment to ask her out.",
            "tr": "他犹豫了太久，错过了约她出去的时机。",
            "match": [
              "miss your moment"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Behind all the comparison and noise, see, we were trained to think speed equals success. That if you're not fast, you're finished. But speed is just a flex. Depth is the real power.",
        "cn": "在所有比较和噪音的背后，你看，我们被训练去认为速度等于成功。如果你不够快，你就完蛋了。但速度只是一种炫耀。深度才是真正的力量。",
        "vocab": [
          {
            "word": "comparison",
            "ph": "/kəmˈpærɪsn/",
            "pos": "n",
            "mean": "比较",
            "ex": "Constant comparison with others can lead to unhappiness.",
            "tr": "不断地与他人比较会导致不快乐。",
            "match": [
              "comparison"
            ]
          },
          {
            "word": "equal",
            "ph": "/ˈiːkwəl/",
            "pos": "v",
            "mean": "等于",
            "ex": "In this equation, X equals Y plus Z.",
            "tr": "在这个等式中，X等于Y加Z。",
            "match": [
              "equals"
            ]
          },
          {
            "word": "flex",
            "ph": "/fleks/",
            "pos": "n",
            "mean": "（俚语）炫耀",
            "ex": "Buying that expensive car was just a flex to show off his wealth.",
            "tr": "买那辆昂贵的车只是为了炫耀他的财富。",
            "match": [
              "flex"
            ]
          },
          {
            "word": "depth",
            "ph": "/depθ/",
            "pos": "n",
            "mean": "深度",
            "ex": "His new book has a surprising emotional depth.",
            "tr": "他的新书有着令人惊讶的情感深度。",
            "match": [
              "Depth"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "Think about it. When you were younger, you wanted everything fast. Fast results. Fast money. Fast answers. Fast Wi-Fi. (Still valid today.) But fast success is like fast food. Looks good, feels good, but collapses under pressure.",
        "cn": "想想看。你年轻的时候，什么都想要快的。快的结果。快的钱。快的答案。快的Wi-Fi。（今天仍然有效。）但快速的成功就像快餐。看起来不错，感觉很好，但在压力下就会崩溃。",
        "vocab": [
          {
            "word": "result",
            "ph": "/rɪˈzʌlt/",
            "pos": "n",
            "mean": "结果",
            "ex": "The final result of the experiment was unexpected.",
            "tr": "实验的最终结果出人意料。",
            "match": [
              "results"
            ]
          },
          {
            "word": "valid",
            "ph": "/ˈvælɪd/",
            "pos": "adj",
            "mean": "有效的；有根据的",
            "ex": "Your passport is no longer valid; you need to renew it.",
            "tr": "你的护照不再有效了；你需要更新它。",
            "match": [
              "valid"
            ]
          },
          {
            "word": "collapse under pressure",
            "ph": "/kəˈlæps ˈʌndər ˈpreʃər/",
            "pos": "idiom",
            "mean": "在压力下崩溃",
            "ex": "The young athlete collapsed under the pressure of the championship match.",
            "tr": "那位年轻运动员在冠军赛的压力下崩溃了。",
            "match": [
              "collapses under pressure"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "Real success? It cooks slow. Like those dishes your mom makes that take hours. But slap 100 times harder. You are that dish.",
        "cn": "真正的成功？它是慢炖出来的。就像你妈妈做的那些需要花好几个小时的菜。但味道要好上100倍。你就是那道菜。",
        "vocab": [
          {
            "word": "cook slow",
            "ph": "/kʊk sloʊ/",
            "pos": "phr",
            "mean": "慢炖",
            "ex": "To make the meat really tender, you have to cook it slow for several hours.",
            "tr": "为了让肉变得非常嫩，你必须慢炖好几个小时。",
            "match": [
              "cooks slow"
            ]
          },
          {
            "word": "slap",
            "ph": "/slæp/",
            "pos": "v",
            "mean": "（俚语，用于食物）味道极好；超赞",
            "ex": "This pizza is amazing; it really slaps.",
            "tr": "这个披萨太棒了，味道超赞。",
            "match": [
              "slap"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "And here's another thing no one talks about: Nobody tells you how many people peak early and then fall flat because their confidence was built on applause, not on identity.",
        "cn": "还有一件没人谈论的事：没人告诉你，有多少人年少成名，然后一败涂地，因为他们的自信是建立在掌声之上，而不是身份认同之上。",
        "vocab": [
          {
            "word": "peak early",
            "ph": "/piːk ˈɜːrli/",
            "pos": "phr v",
            "mean": "过早达到顶峰",
            "ex": "Many child actors peak early and struggle to find success as adults.",
            "tr": "许多童星过早达到顶峰，成年后却难以找到成功。",
            "match": [
              "peak early"
            ]
          },
          {
            "word": "fall flat",
            "ph": "/fɔːl flæt/",
            "pos": "idiom",
            "mean": "彻底失败",
            "ex": "His attempt at a joke completely fell flat; no one laughed.",
            "tr": "他想讲个笑话，但彻底失败了，没人笑。",
            "match": [
              "fall flat"
            ]
          },
          {
            "word": "applause",
            "ph": "/əˈplɔːz/",
            "pos": "n",
            "mean": "掌声",
            "ex": "The audience gave the performers a long round of applause.",
            "tr": "观众为表演者们献上了长久的一轮掌声。",
            "match": [
              "applause"
            ]
          },
          {
            "word": "identity",
            "ph": "/aɪˈdentəti/",
            "pos": "n",
            "mean": "身份认同",
            "ex": "Finding your own identity is an important part of growing up.",
            "tr": "找到你自己的身份认同是成长的重要部分。",
            "match": [
              "identity"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "Life is not a race. It's a rhythm. And yours is not late. It's layered.",
        "cn": "人生不是一场赛跑。它是一种节奏。而你的节奏不是晚了。它是富有层次的。",
        "vocab": [
          {
            "word": "race",
            "ph": "/reɪs/",
            "pos": "n",
            "mean": "赛跑",
            "ex": "He tried to turn his career into a race against his colleagues.",
            "tr": "他试图把自己的职业生涯变成一场与同事的赛跑。",
            "match": [
              "race"
            ]
          },
          {
            "word": "rhythm",
            "ph": "/ˈrɪðəm/",
            "pos": "n",
            "mean": "节奏",
            "ex": "It's important to find your own working rhythm and not compare yourself to others.",
            "tr": "重要的是找到你自己的工作节奏，而不是和别人比较。",
            "match": [
              "rhythm"
            ]
          },
          {
            "word": "layered",
            "ph": "/ˈleɪərd/",
            "pos": "adj",
            "mean": "有层次的",
            "ex": "Her personality is very layered; there's more to her than you first see.",
            "tr": "她的个性非常富有层次；她比你初见时要复杂得多。",
            "match": [
              "layered"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "Let me give you a simple example. Have you ever tried to open a stubborn jar? You twist it, twist it again. Nothing. Someone else comes, taps it twice, opens it easily. And you feel weak like, \"Wow. Okay.\"",
        "cn": "我给你举个简单的例子。你试过打开一个拧不开的罐子吗？你拧它，再拧一次。没用。别人过来，敲两下，轻松打开了。然后你感觉自己很弱，心想：“哇。好吧。”",
        "vocab": [
          {
            "word": "stubborn",
            "ph": "/ˈstʌbərn/",
            "pos": "adj",
            "mean": "顽固的；拧不开的",
            "ex": "I couldn't open the stubborn lid of the jar.",
            "tr": "我打不开那个拧不开的罐子盖。",
            "match": [
              "stubborn"
            ]
          },
          {
            "word": "jar",
            "ph": "/dʒɑːr/",
            "pos": "n",
            "mean": "罐子",
            "ex": "She opened a jar of pickles.",
            "tr": "她打开了一罐泡菜。",
            "match": [
              "jar"
            ]
          },
          {
            "word": "twist",
            "ph": "/twɪst/",
            "pos": "v",
            "mean": "拧",
            "ex": "You need to twist the cap to open the bottle.",
            "tr": "你需要拧一下瓶盖才能打开瓶子。",
            "match": [
              "twist"
            ]
          },
          {
            "word": "tap",
            "ph": "/tæp/",
            "pos": "v",
            "mean": "轻敲",
            "ex": "She was tapping her fingers on the desk impatiently.",
            "tr": "她不耐烦地用手指敲着桌子。",
            "match": [
              "taps"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 12,
        "en": "But you know what actually happened? All the work was done by you. They just showed up at the right moment. That's your life. You've been building pressure, strength, experience, depth. You're not stuck. You're marinating.",
        "cn": "但你知道实际发生了什么吗？所有的工作都是你做的。他们只是在正确的时刻出现而已。那就是你的人生。你一直在积累压力、力量、经验、深度。你没有停滞不前。你正在腌制入味。",
        "vocab": [
          {
            "word": "show up",
            "ph": "/ʃoʊ ʌp/",
            "pos": "phr v",
            "mean": "出现",
            "ex": "He didn't show up for the meeting, and no one knew why.",
            "tr": "他没有出席会议，没人知道为什么。",
            "match": [
              "showed up"
            ]
          },
          {
            "word": "depth",
            "ph": "/depθ/",
            "pos": "n",
            "mean": "深度",
            "ex": "His new book has a surprising emotional depth.",
            "tr": "他的新书有着令人惊讶的情感深度。",
            "match": [
              "depth"
            ]
          },
          {
            "word": "stuck",
            "ph": "/stʌk/",
            "pos": "adj",
            "mean": "卡住的；停滞不前的",
            "ex": "I feel stuck in this boring job and need a change.",
            "tr": "我感觉被困在这份无聊的工作里，需要改变。",
            "match": [
              "stuck"
            ]
          },
          {
            "word": "marinate",
            "ph": "/ˈmærɪneɪt/",
            "pos": "v",
            "mean": "腌制（此处比喻酝酿、准备）",
            "ex": "Instead of rushing, he let the ideas marinate in his mind for a few days.",
            "tr": "他没有急于求成，而是让那些想法在他的脑海里酝酿了好几天。",
            "match": [
              "marinating"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 13,
        "en": "You know who wasn't late? Colonel Sanders, 65 when KFC took off. Vera Wang, 40 when she designed her first dress. Morgan Freeman, 52 when he got his first breakout role. Imagine if they said, \"Nah, it's too late. Pass me the remote.\"",
        "cn": "你知道谁不晚吗？桑德斯上校，65岁时肯德基才起飞。王薇薇，40岁时设计了她的第一件婚纱。摩根·弗里曼，52岁时才得到他第一个突破性的角色。想象一下，如果他们说：“算了，太晚了。把遥控器给我吧。”",
        "vocab": [
          {
            "word": "take off",
            "ph": "/teɪk ɔːf/",
            "pos": "phr v",
            "mean": "（事业）起飞；大获成功",
            "ex": "Her acting career really took off after that movie.",
            "tr": "那部电影之后，她的演艺事业真正起飞了。",
            "match": [
              "took off"
            ]
          },
          {
            "word": "breakout role",
            "ph": "/ˈbreɪkaʊt roʊl/",
            "pos": "n phr",
            "mean": "突破性的角色",
            "ex": "That was the breakout role that made him a Hollywood star.",
            "tr": "那是让他成为好莱坞明星的那个突破性角色。",
            "match": [
              "breakout role"
            ]
          },
          {
            "word": "nah",
            "ph": "/næ/",
            "pos": "int",
            "mean": "（非正式）不",
            "ex": "A: 'Want to go to the movies?' B: 'Nah, I'm too tired.'",
            "tr": "A：“想去看电影吗？” B：“不了，我太累了。”",
            "match": [
              "Nah"
            ]
          },
          {
            "word": "remote",
            "ph": "/rɪˈmoʊt/",
            "pos": "n",
            "mean": "遥控器",
            "ex": "Can you pass me the TV remote?",
            "tr": "能把电视遥控器递给我吗？",
            "match": [
              "remote"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 14,
        "en": "They didn't bloom late. They bloomed when they were finally ready. And maybe that's you. Maybe you had to go through all that confusion. All those wrong turns. All those silent years, not because you were failing, but because life was preparing you for something bigger than what your 20-year-old self could handle.",
        "cn": "他们不是开花晚了。他们是在他们终于准备好时才开花的。也许你也是这样。也许你必须经历所有那些困惑。所有那些弯路。所有那些沉寂的岁月，不是因为你在失败，而是因为生活在为你准备一些比你20岁的自己所能承受的更宏大的事情。",
        "vocab": [
          {
            "word": "bloom",
            "ph": "/bluːm/",
            "pos": "v",
            "mean": "开花（此处比喻成功）",
            "ex": "She was a talented artist who didn't truly bloom until she was in her fifties.",
            "tr": "她是一位才华横溢的艺术家，直到五十多岁才真正大放异彩。",
            "match": [
              "bloom",
              "bloomed"
            ]
          },
          {
            "word": "confusion",
            "ph": "/kənˈfjuːʒn/",
            "pos": "n",
            "mean": "困惑",
            "ex": "There was a lot of confusion about the new rules.",
            "tr": "关于新规则有很多困惑。",
            "match": [
              "confusion"
            ]
          },
          {
            "word": "wrong turn",
            "ph": "/rɔːŋ tɜːrn/",
            "pos": "n phr",
            "mean": "弯路；错误的转折",
            "ex": "Taking that job was a wrong turn in his career.",
            "tr": "接受那份工作是他职业生涯中的一个弯路。",
            "match": [
              "wrong turns"
            ]
          },
          {
            "word": "handle",
            "ph": "/ˈhændl/",
            "pos": "v",
            "mean": "处理；承受",
            "ex": "She knows how to handle difficult customers with patience.",
            "tr": "她知道如何有耐心地应对难缠的顾客。",
            "match": [
              "handle"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 15,
        "en": "You ever noticed people who succeed early get shaken by the smallest failure? One bad comment and they spiral. One bad day and they vanish. But you? You've already lived through storms. You don't break easily. You bend, you complain, you eat biryani, but you come back. That's your superpower.",
        "cn": "你有没有注意到那些早早成功的人，会被最小的失败所动摇？一句差评，他们就陷入螺旋。糟糕的一天，他们就消失了。但你呢？你已经经历过风暴了。你不会轻易被打垮。你会弯曲，你会抱怨，你会吃印度香饭，但你会回来。那就是你的超能力。",
        "vocab": [
          {
            "word": "shaken",
            "ph": "/ˈʃeɪkən/",
            "pos": "adj",
            "mean": "被动摇的",
            "ex": "He was visibly shaken after the accident.",
            "tr": "事故过后，他显然受到了惊吓。",
            "match": [
              "shaken"
            ]
          },
          {
            "word": "spiral",
            "ph": "/ˈspaɪrəl/",
            "pos": "v",
            "mean": "（情绪）螺旋式恶化",
            "ex": "After losing his job, he started to spiral into depression.",
            "tr": "失业后，他开始螺旋式地陷入抑郁。",
            "match": [
              "spiral"
            ]
          },
          {
            "word": "vanish",
            "ph": "/ˈvænɪʃ/",
            "pos": "v",
            "mean": "消失",
            "ex": "The magician made the rabbit vanish in a puff of smoke.",
            "tr": "魔术师让兔子在一阵烟雾中消失了。",
            "match": [
              "vanish"
            ]
          },
          {
            "word": "bend",
            "ph": "/bend/",
            "pos": "v",
            "mean": "弯曲",
            "ex": "The strong winds made the trees bend.",
            "tr": "强风使树木弯曲。",
            "match": [
              "bend"
            ]
          },
          {
            "word": "superpower",
            "ph": "/ˈsuːpərpaʊər/",
            "pos": "n",
            "mean": "超能力",
            "ex": "If you could have any superpower, what would it be?",
            "tr": "如果你能拥有任何超能力，你想要什么？",
            "match": [
              "superpower"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 16,
        "en": "Here's something funny. When we think we're behind, we start acting like life is a race against our own imagination. A fictional version of ourselves we created at 17. \"I should have been rich by now. I should have figured it out. I should have been in a different place.\"",
        "cn": "有件好笑的事。当我们认为自己落后时，我们就开始表现得好像人生是一场与我们自己想象力的赛跑。一个我们在17岁时创造出来的虚构版本的自己。“我现在本该有钱了。我本该搞定一切了。我本该在另一个地方了。”",
        "vocab": [
          {
            "word": "be behind",
            "ph": "/biː bɪˈhaɪnd/",
            "pos": "phr",
            "mean": "落后",
            "ex": "He felt like he was falling behind in his studies.",
            "tr": "他感觉自己在学业上落后了。",
            "match": [
              "behind"
            ]
          },
          {
            "word": "fictional",
            "ph": "/ˈfɪkʃənl/",
            "pos": "adj",
            "mean": "虚构的",
            "ex": "Sherlock Holmes is a famous fictional detective.",
            "tr": "夏洛克·福尔摩斯是一位著名的虚构侦探。",
            "match": [
              "fictional"
            ]
          },
          {
            "word": "figure it out",
            "ph": "/ˈfɪɡjər ɪt aʊt/",
            "pos": "phr v",
            "mean": "搞定；弄明白",
            "ex": "Don't worry, we'll figure it out together.",
            "tr": "别担心，我们会一起搞定的。",
            "match": [
              "figured it out"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 17,
        "en": "Says who? 17-year-old you? The same person who thought they would grow up and buy a Lamborghini with 200 rupees? Let that version go.",
        "cn": "谁说的？17岁的你？那个以为自己长大后能用200卢比买一辆兰博基尼的同一个人？放过那个版本的自己吧。",
        "vocab": [
          {
            "word": "says who?",
            "ph": "/sez huː/",
            "pos": "idiom",
            "mean": "（用于挑衅）谁说的？你算老几？",
            "ex": "\"You can't do that!\" \"Says who?\"",
            "tr": "“你不能那么做！”“谁说的？”",
            "match": [
              "Says who?"
            ]
          },
          {
            "word": "rupee",
            "ph": "/ˈruːpiː/",
            "pos": "n",
            "mean": "卢比（印度等国货币单位）",
            "ex": "A cup of chai on the street costs only a few rupees.",
            "tr": "街边的一杯印度奶茶只需要几个卢比。",
            "match": [
              "rupees"
            ]
          },
          {
            "word": "let go",
            "ph": "/let ɡoʊ/",
            "pos": "phr v",
            "mean": "放手；放过",
            "ex": "It's time to let go of the past and focus on the future.",
            "tr": "是时候放下过去，专注于未来了。",
            "match": [
              "Let that version go"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 18,
        "en": "Because here's the truth: You don't owe anything to the person you used to be. But you owe everything to the person you're becoming. And that person is waking up.",
        "cn": "因为真相是：你对过去的自己不亏欠任何东西。但你对正在成为的自己亏欠一切。而那个人正在醒来。",
        "vocab": [
          {
            "word": "owe",
            "ph": "/oʊ/",
            "pos": "v",
            "mean": "亏欠",
            "ex": "I feel like I owe you an apology for what I said.",
            "tr": "我觉得我为我说的话亏欠你一个道歉。",
            "match": [
              "owe"
            ]
          },
          {
            "word": "wake up",
            "ph": "/weɪk ʌp/",
            "pos": "phr v",
            "mean": "醒来（此处比喻觉醒）",
            "ex": "It's time for people to wake up and see what's really happening.",
            "tr": "是时候人们该觉醒，看看真正发生了什么。",
            "match": [
              "waking up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 19,
        "en": "But there's one thing you must understand, and no one likes hearing this: Environment wins over willpower. You can read the best books, follow all the gurus, watch motivational videos every morning. But if every time you sit with people who tell you, \"Be realistic, it's too late. You should stop dreaming,\" then you're basically charging your phone with 1% battery and calling it progress.",
        "cn": "但有一件事你必须明白，而且没人喜欢听这个：环境胜过意志力。你可以读最好的书，关注所有的大师，每天早上看励志视频。但如果每次你都和那些告诉你“现实点，太晚了。你应该别做梦了”的人坐在一起，那么你基本上就是在用1%的电量给手机充电，还称之为进步。",
        "vocab": [
          {
            "word": "willpower",
            "ph": "/ˈwɪlpaʊər/",
            "pos": "n",
            "mean": "意志力",
            "ex": "It takes a lot of willpower to quit smoking.",
            "tr": "戒烟需要很大的意志力。",
            "match": [
              "willpower"
            ]
          },
          {
            "word": "guru",
            "ph": "/ˈɡuːruː/",
            "pos": "n",
            "mean": "（某一领域的）大师；专家",
            "ex": "He is considered a marketing guru in the industry.",
            "tr": "他被认为是行业内的营销大师。",
            "match": [
              "gurus"
            ]
          },
          {
            "word": "motivational",
            "ph": "/ˌmoʊtɪˈveɪʃənl/",
            "pos": "adj",
            "mean": "励志的",
            "ex": "She starts her day by listening to a motivational podcast.",
            "tr": "她以听一个励志播客开始她的一天。",
            "match": [
              "motivational"
            ]
          },
          {
            "word": "realistic",
            "ph": "/ˌriːəˈlɪstɪk/",
            "pos": "adj",
            "mean": "现实的",
            "ex": "You need to set realistic goals that you can actually achieve.",
            "tr": "你需要设定你能够真正实现的现实目标。",
            "match": [
              "realistic"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 20,
        "en": "Your environment is programming you. Softly, quietly, repeatedly, like a leaking tap shaping a stone. You don't have to cut people off. You just have to choose whose voice enters your mind. If someone constantly tells you your dreams are unrealistic, just smile politely and remember: They're not talking about your limits. They're talking about theirs.",
        "cn": "你的环境正在编程你。轻柔地，安静地，重复地，就像漏水的水龙头塑造一块石头。你不必切断与人的联系。你只需要选择谁的声音能进入你的思想。如果有人不断告诉你你的梦想不现实，只需礼貌地微笑，并记住：他们不是在谈论你的极限。他们是在谈论他们的。",
        "vocab": [
          {
            "word": "program",
            "ph": "/ˈproʊɡræm/",
            "pos": "v",
            "mean": "编程；设定",
            "ex": "Society can program us to believe certain things from a young age.",
            "tr": "社会可以从我们年幼时就编程我们去相信某些事情。",
            "match": [
              "programming"
            ]
          },
          {
            "word": "leaking tap",
            "ph": "/ˈliːkɪŋ tæp/",
            "pos": "n phr",
            "mean": "漏水的水龙头",
            "ex": "The constant drip of the leaking tap drove him crazy.",
            "tr": "漏水的水龙头持续的滴水声让他快疯了。",
            "match": [
              "leaking tap"
            ]
          },
          {
            "word": "cut someone off",
            "ph": "/kʌt ˈsʌmwʌn ɔːf/",
            "pos": "phr v",
            "mean": "与某人断绝来往",
            "ex": "Sometimes, for your own mental health, you have to cut off toxic people.",
            "tr": "有时候，为了你自己的心理健康，你必须与有毒的人切断联系。",
            "match": [
              "cut people off"
            ]
          },
          {
            "word": "unrealistic",
            "ph": "/ˌʌnrɪəˈlɪstɪk/",
            "pos": "adj",
            "mean": "不现实的",
            "ex": "Setting a goal to become a millionaire in one month is unrealistic.",
            "tr": "设定一个月内成为百万富翁的目标是不现实的。",
            "match": [
              "unrealistic"
            ]
          },
          {
            "word": "limit",
            "ph": "/ˈlɪmɪt/",
            "pos": "n",
            "mean": "极限",
            "ex": "He's always testing the limits of his own physical endurance.",
            "tr": "他总是在测试自己身体耐力的极限。",
            "match": [
              "limits"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 21,
        "en": "Here's what nobody tells you about real transformation: It happens quietly. No applause, no spotlight, no \"bro you're changing.\" Nothing. It's that boring part of the movie where the hero trains alone. Fails alone, gets back up alone. But when he returns, he's unrecognizable.",
        "cn": "关于真正的转变，没人告诉你的是：它悄然发生。没有掌声，没有聚光灯，没有“哥们你变了”。什么都没有。就像电影里英雄独自训练的那个无聊部分。独自失败，独自站起来。但当他回归时，他已判若两人。",
        "vocab": [
          {
            "word": "transformation",
            "ph": "/ˌtrænsfərˈmeɪʃn/",
            "pos": "n",
            "mean": "转变",
            "ex": "The city has undergone a complete transformation in the last decade.",
            "tr": "在过去十年里，这座城市经历了彻底的转变。",
            "match": [
              "transformation"
            ]
          },
          {
            "word": "applause",
            "ph": "/əˈplɔːz/",
            "pos": "n",
            "mean": "掌声",
            "ex": "The audience gave the performers a long round of applause.",
            "tr": "观众为表演者们献上了长久的一轮掌声。",
            "match": [
              "applause"
            ]
          },
          {
            "word": "spotlight",
            "ph": "/ˈspɒtlaɪt/",
            "pos": "n",
            "mean": "聚光灯",
            "ex": "As a famous actor, he was always in the public spotlight.",
            "tr": "作为一名著名演员，他总是在公众的聚光灯下。",
            "match": [
              "spotlight"
            ]
          },
          {
            "word": "get back up",
            "ph": "/ɡet bæk ʌp/",
            "pos": "phr v",
            "mean": "（跌倒后）重新站起来",
            "ex": "Life will knock you down, but the important thing is to always get back up.",
            "tr": "生活会把你击倒，但重要的是要永远重新站起来。",
            "match": [
              "gets back up"
            ]
          },
          {
            "word": "unrecognizable",
            "ph": "/ˌʌnrekəɡˈnaɪzəbl/",
            "pos": "adj",
            "mean": "认不出的；判若两人的",
            "ex": "After losing so much weight, he was almost unrecognizable to his old friends.",
            "tr": "减了那么多体重后，他的老朋友们几乎都认不出他了。",
            "match": [
              "unrecognizable"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 22,
        "en": "That's you right now. You feel invisible? Good. You feel lost? Perfect. You feel like no one sees your effort? Even better. Because silence is where legends are built. The world celebrates the breakthrough. But it ignores the rebuilding. What you're doing now, this messy, confusing, unglamorous inner work—that's the real transformation.",
        "cn": "那就是现在的你。你感觉自己被无视？很好。你感觉迷失？完美。你感觉没人看到你的努力？甚至更好。因为寂静是传奇诞生的地方。世界庆祝突破。但它忽略了重建。你现在所做的，这凌乱、困惑、毫无光彩的内在功课——那才是真正的转变。",
        "vocab": [
          {
            "word": "invisible",
            "ph": "/ɪnˈvɪzəbl/",
            "pos": "adj",
            "mean": "无形的；被无视的",
            "ex": "As a new employee, she often felt invisible in large meetings.",
            "tr": "作为一名新员工，她在大хing会议中常常感觉自己被无视。",
            "match": [
              "invisible"
            ]
          },
          {
            "word": "legend",
            "ph": "/ˈledʒənd/",
            "pos": "n",
            "mean": "传奇",
            "ex": "He is a living legend in the world of basketball.",
            "tr": "他是篮球界一个活着的传奇。",
            "match": [
              "legends"
            ]
          },
          {
            "word": "breakthrough",
            "ph": "/ˈbreɪkθruː/",
            "pos": "n",
            "mean": "突破",
            "ex": "The scientist's discovery was a major breakthrough in cancer research.",
            "tr": "那位科学家的发现在癌症研究领域是一个重大突破。",
            "match": [
              "breakthrough"
            ]
          },
          {
            "word": "messy",
            "ph": "/ˈmesi/",
            "pos": "adj",
            "mean": "凌乱的",
            "ex": "The process of learning can often be messy and nonlinear.",
            "tr": "学习的过程常常可能是凌乱和非线性的。",
            "match": [
              "messy"
            ]
          },
          {
            "word": "unglamorous",
            "ph": "/ʌnˈɡlæmərəs/",
            "pos": "adj",
            "mean": "没有魅力的；平凡的",
            "ex": "Cleaning the house is an unglamorous but necessary chore.",
            "tr": "打扫房子是一件平凡但必要的家务。",
            "match": [
              "unglamorous"
            ]
          },
          {
            "word": "inner work",
            "ph": "/ˈɪnər wɜːrk/",
            "pos": "n phr",
            "mean": "内在功课；内心修行",
            "ex": "Therapy and meditation are important parts of his inner work.",
            "tr": "心理治疗和冥想是他内心修行的重要部分。",
            "match": [
              "inner work"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 23,
        "en": "So if you feel like you're late, let me say this clearly: You are not late. You are loading. And when you return, you're not going to come back as who you were. You're going to come back as someone even you won't recognize.",
        "cn": "所以如果你感觉自己晚了，让我清楚地说明：你没有晚。你正在加载。而当你回归时，你不会再是过去的那个你。你将会以一个连你自己都认不出的身份回归。",
        "vocab": [
          {
            "word": "clearly",
            "ph": "/ˈklɪərli/",
            "pos": "adv",
            "mean": "清楚地",
            "ex": "He explained the instructions so clearly that everyone understood.",
            "tr": "他把说明解释得非常清楚，每个人都听懂了。",
            "match": [
              "clearly"
            ]
          },
          {
            "word": "loading",
            "ph": "/ˈloʊdɪŋ/",
            "pos": "v",
            "mean": "加载（此处比喻准备、积蓄力量）",
            "ex": "Please wait a moment while the game is loading.",
            "tr": "请稍等片刻，游戏正在加载。",
            "match": [
              "loading"
            ]
          },
          {
            "word": "come back as",
            "ph": "/kʌm bæk æz/",
            "pos": "phr v",
            "mean": "以…的身份回归",
            "ex": "After his long journey, he came back as a changed man.",
            "tr": "长途旅行归来后，他判若两人。",
            "match": [
              "come back as"
            ]
          },
          {
            "word": "recognize",
            "ph": "/ˈrekəɡnaɪz/",
            "pos": "v",
            "mean": "认出",
            "ex": "I didn't recognize him at first with his new haircut.",
            "tr": "他剪了新发型，我第一眼没认出他。",
            "match": [
              "recognize"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 24,
        "en": "Not louder. Deeper. Not faster. Stronger. Not desperate. Destined.",
        "cn": "不是更响亮。而是更深沉。不是更快。而是更强壮。不是绝望。而是注定。",
        "vocab": [
          {
            "word": "deeper",
            "ph": "/ˈdiːpər/",
            "pos": "adj",
            "mean": "更深的",
            "ex": "His understanding of the subject became deeper after years of study.",
            "tr": "经过多年的学习，他对这门学科的理解变得更深了。",
            "match": [
              "Deeper"
            ]
          },
          {
            "word": "stronger",
            "ph": "/ˈstrɔːŋɡər/",
            "pos": "adj",
            "mean": "更强壮的",
            "ex": "Regular exercise will make your muscles stronger.",
            "tr": "定期锻炼会让你的肌肉更强壮。",
            "match": [
              "Stronger"
            ]
          },
          {
            "word": "desperate",
            "ph": "/ˈdespərət/",
            "pos": "adj",
            "mean": "绝望的",
            "ex": "After losing his job, he felt desperate and alone.",
            "tr": "失业后，他感到绝望和孤独。",
            "match": [
              "desperate"
            ]
          },
          {
            "word": "destined",
            "ph": "/ˈdestɪnd/",
            "pos": "adj",
            "mean": "命中注定的",
            "ex": "From a young age, it was clear she was destined for greatness.",
            "tr": "从小时候起，就很明显她注定会成就一番伟业。",
            "match": [
              "Destined"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 25,
        "en": "Your story doesn't end in the dark. It begins there. And when you rise, you won't need to announce it. The world will notice. Because some people succeed early, but the ones who succeed later? They don't just rise. They redefine the entire game.",
        "cn": "你的故事不会在黑暗中结束。它从那里开始。而当你崛起时，你不需要宣告。世界会注意到。因为有些人成功得早，但那些后来成功的人呢？他们不止是崛起。他们重新定义了整个游戏。",
        "vocab": [
          {
            "word": "rise",
            "ph": "/raɪz/",
            "pos": "v",
            "mean": "崛起；升起",
            "ex": "After years of struggle, she finally began to rise in her profession.",
            "tr": "经过多年的奋斗，她终于在自己的专业领域开始崛起。",
            "match": [
              "rise"
            ]
          },
          {
            "word": "announce",
            "ph": "/əˈnaʊns/",
            "pos": "v",
            "mean": "宣告",
            "ex": "The company will announce its quarterly earnings next week.",
            "tr": "该公司将于下周公布其季度收益。",
            "match": [
              "announce"
            ]
          },
          {
            "word": "redefine",
            "ph": "/ˌriːdɪˈfaɪn/",
            "pos": "v",
            "mean": "重新定义",
            "ex": "Her groundbreaking research helped to redefine the field of physics.",
            "tr": "她开创性的研究帮助重新定义了物理学领域。",
            "match": [
              "redefine"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 26,
        "en": "And that might be exactly who you are.",
        "cn": "而那可能正是你的本色。",
        "vocab": [
          {
            "word": "exactly",
            "ph": "/ɪɡˈzæktli/",
            "pos": "adv",
            "mean": "确切地；正是",
            "ex": "That's exactly what I was trying to say!",
            "tr": "那正是我刚才想说的！",
            "match": [
              "exactly"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "cybersecurity_from_scratch_guide",
    "title": "Starting Cybersecurity From Scratch: A NoBS Guide",
    "info": {
      "author": "Maddie",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "cybersecurity",
        "career advice",
        "certifications",
        "networking",
        "personal branding"
      ],
      "link": "https://example.com/original-source",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "If I had to start cybersecurity from scratch, what would I do? Now for me, I learned the extremely hard way. I was actually unemployed for about a year and a half. I did everything I could to try and land a job in cybersecurity, and then I finally landed one—and I didn't even apply.",
        "cn": "如果我必须从零开始学习网络安全，我会怎么做？对我来说，我学得异常艰难。我实际上失业了大约一年半。我尽我所能地去尝试，想在网络安全领域找到一份工作，然后我最终找到了一份——而且我甚至都没有申请。",
        "vocab": [
          {
            "word": "from scratch",
            "ph": "/frəm skrætʃ/",
            "pos": "idiom",
            "mean": "从零开始",
            "ex": "He built his successful business from scratch.",
            "tr": "他白手起家，建立了他成功的企业。",
            "match": [
              "from scratch"
            ]
          },
          {
            "word": "the hard way",
            "ph": "/ðə hɑːrd weɪ/",
            "pos": "idiom",
            "mean": "通过艰难的方式",
            "ex": "Some people have to learn lessons the hard way, through their own mistakes.",
            "tr": "有些人必须通过自己的错误，以艰难的方式吸取教训。",
            "match": [
              "the extremely hard way"
            ]
          },
          {
            "word": "unemployed",
            "ph": "/ˌʌnɪmˈplɔɪd/",
            "pos": "adj",
            "mean": "失业的",
            "ex": "After the factory closed, many workers in the town were unemployed.",
            "tr": "工厂关闭后，镇上许多工人都失业了。",
            "match": [
              "unemployed"
            ]
          },
          {
            "word": "land a job",
            "ph": "/lænd ə dʒɒb/",
            "pos": "idiom",
            "mean": "找到一份工作",
            "ex": "It took him six months, but he finally managed to land a job in his field.",
            "tr": "花了他六个月时间，但他最终还是设法在自己的领域找到了一份工作。",
            "match": [
              "land a job",
              "landed one"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "So here are some things I would do if I could start over and maybe speed up the unemployment journey for past me—and maybe for current you.",
        "cn": "所以，如果我能重新来过，这里有一些我会做的事情，也许能为过去的我——也可能为现在的你——加速失业之旅的进程。",
        "vocab": [
          {
            "word": "start over",
            "ph": "/stɑːrt ˈoʊvər/",
            "pos": "phr v",
            "mean": "重新开始",
            "ex": "After the project failed, the team had to start over from the beginning.",
            "tr": "项目失败后，团队不得不从头开始。",
            "match": [
              "start over"
            ]
          },
          {
            "word": "speed up",
            "ph": "/spiːd ʌp/",
            "pos": "phr v",
            "mean": "加速",
            "ex": "Can you try to speed up the process? We're running out of time.",
            "tr": "你能试着加速这个过程吗？我们快没时间了。",
            "match": [
              "speed up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "I have a bachelor's degree in cybersecurity, a boot camp certificate, Security+, and A+. I got all that and then landed a job. After landing the job, I got AZ-900 and Network+. I skipped Network+ in the beginning because I hated networking, and I was doing cybersecurity stuff without even knowing what a subnet was. So, yeah—definitely don’t skip networking. More on that in a second.",
        "cn": "我有一个网络安全学士学位，一个训练营证书，Security+和A+。我拿到了所有这些，然后找到了一份工作。找到工作后，我又考了AZ-900和Network+。我一开始跳过了Network+，因为我讨厌网络，而且我当时甚至不知道子网是什么就在做网络安全方面的事情。所以，是的——绝对不要跳过网络。稍后会详细说明。",
        "vocab": [
          {
            "word": "bachelor's degree",
            "ph": "/ˈbætʃələrz dɪˈɡriː/",
            "pos": "n phr",
            "mean": "学士学位",
            "ex": "She earned a bachelor's degree in economics from a top university.",
            "tr": "她在一所顶尖大学获得了经济学学士学位。",
            "match": [
              "bachelor's degree"
            ]
          },
          {
            "word": "boot camp",
            "ph": "/ˈbuːt kæmp/",
            "pos": "n",
            "mean": "（编程、技能）训练营",
            "ex": "He attended a coding boot camp to switch careers and become a developer.",
            "tr": "他参加了一个编程训练营以转换职业，成为一名开发人员。",
            "match": [
              "boot camp"
            ]
          },
          {
            "word": "skip",
            "ph": "/skɪp/",
            "pos": "v",
            "mean": "跳过",
            "ex": "If you don't like a chapter, you can just skip it and move to the next one.",
            "tr": "如果你不喜欢某一章，你可以直接跳过它，进入下一章。",
            "match": [
              "skipped",
              "skip"
            ]
          },
          {
            "word": "subnet",
            "ph": "/ˈsʌbnet/",
            "pos": "n",
            "mean": "子网",
            "ex": "The network administrator divided the large network into several smaller subnets.",
            "tr": "网络管理员将大型网络分成了几个较小的子网。",
            "match": [
              "subnet"
            ]
          },
          {
            "word": "more on that in a second",
            "ph": "/mɔːr ɒn ðæt ɪn ə ˈsekənd/",
            "pos": "phr",
            "mean": "稍后会详细说明",
            "ex": "I have a big announcement, but more on that in a second.",
            "tr": "我有一个重大宣布，但稍后会详细说明。",
            "match": [
              "More on that in a second"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "To get into cybersecurity, you don’t really need a degree necessarily. If I could go back and do it, I would not do a boot camp, and I would not get a bachelor’s degree. The things they teach you in cybersecurity in college are very outdated and are, in my opinion, a bit of a waste of time—but that’s just me.",
        "cn": "要进入网络安全领域，你不一定真的需要一个学位。如果我能回去重来，我不会去训练营，也不会去读学士学位。他们在大学里教你的网络安全知识非常过时，在我看来，有点浪费时间——但这只是我个人的看法。",
        "vocab": [
          {
            "word": "necessarily",
            "ph": "/ˌnesəˈserəli/",
            "pos": "adv",
            "mean": "必然地；必定（常用于否定句）",
            "ex": "A higher price doesn't necessarily mean higher quality.",
            "tr": "更高的价格并不一定意味着更高的质量。",
            "match": [
              "necessarily"
            ]
          },
          {
            "word": "outdated",
            "ph": "/ˌaʊtˈdeɪtɪd/",
            "pos": "adj",
            "mean": "过时的",
            "ex": "The company's technology is severely outdated and needs an upgrade.",
            "tr": "公司的技术严重过时，需要升级。",
            "match": [
              "outdated"
            ]
          },
          {
            "word": "a waste of time",
            "ph": "/ə weɪst əv taɪm/",
            "pos": "idiom",
            "mean": "浪费时间",
            "ex": "Waiting in that long line was a complete waste of time.",
            "tr": "在那么长的队伍里等待完全是浪费时间。",
            "match": [
              "a waste of time"
            ]
          },
          {
            "word": "that's just me",
            "ph": "/ðæts dʒʌst miː/",
            "pos": "phr",
            "mean": "那只是我个人的看法",
            "ex": "I don't enjoy big parties, but that's just me.",
            "tr": "我不喜欢大型派对，但这只是我个人的看法。",
            "match": [
              "that’s just me"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "So you’re like, “Maddie, college—ew. Boot camps—ew. What do I do then?” Well, I’ll show you.",
        "cn": "所以你可能会想：“麦迪，大学——恶心。训练营——恶心。那我该怎么办？” 嗯，我来告诉你。",
        "vocab": [
          {
            "word": "ew",
            "ph": "/iːuː/",
            "pos": "int",
            "mean": "（表示厌恶）恶心",
            "ex": "Ew, there's a spider in my shoe!",
            "tr": "恶心，我鞋里有只蜘蛛！",
            "match": [
              "ew"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "This is the cybersecurity roadmap. It’s on roadmap.sh—just look up “cybersecurity roadmap” in your browser and you’ll see it. Literally following this exactly and checking things off one by one is going to get you really far, in my opinion. This has the same concepts as Security+, but laid out visually.",
        "cn": "这就是网络安全路线图。它在roadmap.sh上——只要在你的浏览器里查一下“cybersecurity roadmap”你就能看到。在我看来，完全精确地遵循这个路线图，并逐一完成事项，会让你走得很远。这包含了和Security+相同的概念，但是是可视化地呈现出来的。",
        "vocab": [
          {
            "word": "roadmap",
            "ph": "/ˈroʊdmæp/",
            "pos": "n",
            "mean": "路线图",
            "ex": "The company presented its product roadmap for the next five years.",
            "tr": "该公司展示了其未来五年的产品路线图。",
            "match": [
              "roadmap"
            ]
          },
          {
            "word": "look up",
            "ph": "/lʊk ʌp/",
            "pos": "phr v",
            "mean": "查找",
            "ex": "If you don't know the word, you should look it up in a dictionary.",
            "tr": "如果你不认识这个词，你应该在字典里查一下。",
            "match": [
              "look up"
            ]
          },
          {
            "word": "check things off",
            "ph": "/tʃek θɪŋz ɔːf/",
            "pos": "phr v",
            "mean": "（在清单上）勾掉",
            "ex": "It's so satisfying to check things off your to-do list.",
            "tr": "在待办事项清单上勾掉项目是件非常令人满足的事。",
            "match": [
              "checking things off"
            ]
          },
          {
            "word": "one by one",
            "ph": "/wʌn baɪ wʌn/",
            "pos": "phr",
            "mean": "逐一地",
            "ex": "The teacher called the students' names one by one.",
            "tr": "老师逐一地叫了学生们的名字。",
            "match": [
              "one by one"
            ]
          },
          {
            "word": "get you far",
            "ph": "/ɡet juː fɑːr/",
            "pos": "phr v",
            "mean": "让你走得远；让你取得很大成功",
            "ex": "Hard work and a positive attitude will get you far in life.",
            "tr": "努力工作和积极的态度会让你在生活中走得很远。",
            "match": [
              "get you really far"
            ]
          },
          {
            "word": "lay out",
            "ph": "/leɪ aʊt/",
            "pos": "phr v",
            "mean": "布置；呈现",
            "ex": "The report lays out the company's financial performance in detail.",
            "tr": "该报告详细地呈现了公司的财务表现。",
            "match": [
              "laid out"
            ]
          },
          {
            "word": "visually",
            "ph": "/ˈvɪʒuəli/",
            "pos": "adv",
            "mean": "可视化地",
            "ex": "The data was presented visually using charts and graphs.",
            "tr": "数据通过图表被可视化地呈现出来。",
            "match": [
              "visually"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "If you want to delay getting Security+, or just want to dip your toe in, I’d definitely recommend following this roadmap. Not to say you don’t need Security+—you do, for HR and to get past non-technical hiring managers—but literally all of this is awesome foundation.",
        "cn": "如果你想延迟考取Security+，或者只是想浅尝辄止，我绝对推荐遵循这个路线图。不是说你不需要Security+——你需要，为了应付人力资源和通过非技术背景的招聘经理——但说真的，所有这些都是极好的基础。",
        "vocab": [
          {
            "word": "delay",
            "ph": "/dɪˈleɪ/",
            "pos": "v",
            "mean": "延迟",
            "ex": "We had to delay our trip due to bad weather.",
            "tr": "由于天气不好，我们不得不延迟我们的旅行。",
            "match": [
              "delay"
            ]
          },
          {
            "word": "dip one's toe in",
            "ph": "/dɪp wʌnz toʊ ɪn/",
            "pos": "idiom",
            "mean": "浅尝辄止；初步尝试",
            "ex": "He decided to dip his toe in the stock market by investing a small amount of money.",
            "tr": "他决定通过投资少量资金来初步尝试一下股市。",
            "match": [
              "dip your toe in"
            ]
          },
          {
            "word": "not to say",
            "ph": "/nɒt tuː seɪ/",
            "pos": "phr",
            "mean": "不是说",
            "ex": "He's a bit quiet, not to say he's unfriendly.",
            "tr": "他有点安静，但不是说他不友好。",
            "match": [
              "Not to say"
            ]
          },
          {
            "word": "get past",
            "ph": "/ɡet pæst/",
            "pos": "phr v",
            "mean": "通过；越过",
            "ex": "You need a special keycard to get past this security door.",
            "tr": "你需要一张特殊的钥匙卡才能通过这扇安全门。",
            "match": [
              "get past"
            ]
          },
          {
            "word": "foundation",
            "ph": "/faʊnˈdeɪʃn/",
            "pos": "n",
            "mean": "基础",
            "ex": "This course provides a solid foundation in mathematics.",
            "tr": "这门课程为数学打下了坚实的基础。",
            "match": [
              "foundation"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "So we have: - Cybersecurity fundamental IT skills - Computer hardware components - Connection types and their functions - OS-independent troubleshooting - Understand basics of popular suites - Basics of computer networking (which I said is very important)",
        "cn": "所以我们有：- 网络安全基础IT技能 - 计算机硬件组件 - 连接类型及其功能 - 独立于操作系统的故障排除 - 理解流行套件的基础知识 - 计算机网络基础（我说过这个非常重要）",
        "vocab": [
          {
            "word": "fundamental",
            "ph": "/ˌfʌndəˈmentl/",
            "pos": "adj",
            "mean": "基础的",
            "ex": "Understanding the fundamental principles is crucial for mastering any subject.",
            "tr": "理解基本原理对于掌握任何学科都至关重要。",
            "match": [
              "fundamental"
            ]
          },
          {
            "word": "component",
            "ph": "/kəmˈpoʊnənt/",
            "pos": "n",
            "mean": "组件",
            "ex": "He learned how to assemble all the different components of the computer.",
            "tr": "他学会了如何组装电脑的所有不同组件。",
            "match": [
              "components"
            ]
          },
          {
            "word": "OS-independent",
            "ph": "/ˌoʊˈes ˌɪndɪˈpendənt/",
            "pos": "adj",
            "mean": "独立于操作系统的",
            "ex": "The new software is OS-independent and can run on both Windows and MacOS.",
            "tr": "这款新软件独立于操作系统，可以在Windows和MacOS上运行。",
            "match": [
              "OS-independent"
            ]
          },
          {
            "word": "troubleshooting",
            "ph": "/ˈtrʌblʃuːtɪŋ/",
            "pos": "n",
            "mean": "故障排除",
            "ex": "He's very good at troubleshooting computer problems.",
            "tr": "他非常擅长排除电脑故障。",
            "match": [
              "troubleshooting"
            ]
          },
          {
            "word": "suite",
            "ph": "/swiːt/",
            "pos": "n",
            "mean": "（软件）套件",
            "ex": "He installed the new office suite on his computer.",
            "tr": "他在电脑上安装了新的办公套件。",
            "match": [
              "suites"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "And then for networking, we have: - Basics of subnetting (very important—I didn’t know subnetting myself, even with a cybersecurity degree, which shows how weird college is) - Public vs. private IP addresses - Local hosts, subnet mask, default gateway, CIDR - Understanding terminology: DHCP, DNS, IP, NAT, VLAN, router vs. switch - Really good to know: network topologies, how packets are made, how each layer stacks upon itself within the OSI model",
        "cn": "然后是网络方面，我们有：- 子网划分基础（非常重要——我自己都不懂子网划分，即使有网络安全学位，这显示了大学有多奇怪）- 公网 vs. 私网IP地址 - 本地主机、子网掩码、默认网关、CIDR - 理解术语：DHCP、DNS、IP、NAT、VLAN、路由器 vs. 交换机 - 最好了解：网络拓扑、数据包如何生成、OSI模型中每一层如何相互堆叠",
        "vocab": [
          {
            "word": "subnetting",
            "ph": "/ˈsʌbnetɪŋ/",
            "pos": "n",
            "mean": "子网划分",
            "ex": "Subnetting is an essential skill for any network administrator.",
            "tr": "子网划分是任何网络管理员的必备技能。",
            "match": [
              "subnetting"
            ]
          },
          {
            "word": "IP address",
            "ph": "/ˌaɪˈpiː əˈdres/",
            "pos": "n phr",
            "mean": "IP地址",
            "ex": "Every device connected to the internet has a unique IP address.",
            "tr": "每个连接到互联网的设备都有一个唯一的IP地址。",
            "match": [
              "IP addresses",
              "IP"
            ]
          },
          {
            "word": "gateway",
            "ph": "/ˈɡeɪtweɪ/",
            "pos": "n",
            "mean": "网关",
            "ex": "The default gateway is the router that connects your local network to the internet.",
            "tr": "默认网关是连接你本地网络到互联网的路由器。",
            "match": [
              "gateway"
            ]
          },
          {
            "word": "terminology",
            "ph": "/ˌtɜːrmɪˈnɒlədʒi/",
            "pos": "n",
            "mean": "术语",
            "ex": "It's important to understand the basic terminology of any new field you study.",
            "tr": "理解你所学的任何新领域的基本术语是很重要的。",
            "match": [
              "terminology"
            ]
          },
          {
            "word": "topology",
            "ph": "/təˈpɒlədʒi/",
            "pos": "n",
            "mean": "拓扑",
            "ex": "A star network topology connects all devices to a central hub.",
            "tr": "星型网络拓扑将所有设备连接到一个中心集线器。",
            "match": [
              "topologies"
            ]
          },
          {
            "word": "packet",
            "ph": "/ˈpækɪt/",
            "pos": "n",
            "mean": "（数据）包",
            "ex": "Information is sent over the internet in small units called packets.",
            "tr": "信息通过互联网以称为数据包的小单位发送。",
            "match": [
              "packets"
            ]
          },
          {
            "word": "OSI model",
            "ph": "/ˌoʊ es ˈaɪ ˈmɒdl/",
            "pos": "n phr",
            "mean": "OSI模型（开放系统互连模型）",
            "ex": "The OSI model is a conceptual framework that standardizes the functions of a telecommunication system.",
            "tr": "OSI模型是一个将电信系统功能标准化的概念框架。",
            "match": [
              "OSI model"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "The OSI model comes in extremely clutch when you’re trying to understand all these concepts. And it’s actually down below under “Understanding the OSI Model”—yes, very important. Over here we have troubleshooting tools—very important—like `ipconfig`, `ping`, `dig`. That stuff is really important in troubleshooting. I hope that stuff really comes in clutch—not to say “clutch” again, that’s kind of cringe—but it does.",
        "cn": "当你想理解所有这些概念时，OSI模型会非常管用。它实际上就在下面的“理解OSI模型”部分——是的，非常重要。这边我们有故障排除工具——非常重要——比如`ipconfig`、`ping`、`dig`。那些东西在故障排除中非常重要。我希望那些东西真的能派上大用场——不想再说“管用”了，那有点尬——但它确实管用。",
        "vocab": [
          {
            "word": "come in clutch",
            "ph": "/kʌm ɪn klʌtʃ/",
            "pos": "idiom",
            "mean": "（俚语）在关键时刻派上用场",
            "ex": "My backup battery really came in clutch when my phone died.",
            "tr": "我手机没电时，我的备用电池真的在关键时刻派上了用场。",
            "match": [
              "comes in extremely clutch",
              "comes in clutch"
            ]
          },
          {
            "word": "down below",
            "ph": "/daʊn bɪˈloʊ/",
            "pos": "phr",
            "mean": "在下面",
            "ex": "You'll find the contact information down below in the description box.",
            "tr": "你可以在下面的描述框里找到联系信息。",
            "match": [
              "down below"
            ]
          },
          {
            "word": "troubleshooting",
            "ph": "/ˈtrʌblʃuːtɪŋ/",
            "pos": "n",
            "mean": "故障排除",
            "ex": "He's very good at troubleshooting computer problems.",
            "tr": "他非常擅长排除电脑故障。",
            "match": [
              "troubleshooting"
            ]
          },
          {
            "word": "cringe",
            "ph": "/krɪndʒ/",
            "pos": "adj",
            "mean": "（俚语）尴尬的；令人不适的",
            "ex": "His attempt at stand-up comedy was so bad it was cringe.",
            "tr": "他的单口喜剧表演太差了，简直令人尴尬。",
            "match": [
              "cringe"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "And then: - Authentication methodologies: Kerberos, LDAP, SSO, RADIUS (also really important). Once you keep scrolling down, you get into more security-focused stuff: - DDoS, Evil Twin, Deauth attacks, SIEM, Yara rules, Kali, Kill Chain, Diamond Model—things of that nature.",
        "cn": "然后是：- 身份验证方法论：Kerberos、LDAP、SSO、RADIUS（也非常重要）。一旦你继续向下滚动，你就会进入更侧重于安全的东西：- DDoS、邪恶双胞胎、Deauth攻击、SIEM、Yara规则、Kali、杀伤链、钻石模型——诸如此类的东西。",
        "vocab": [
          {
            "word": "authentication",
            "ph": "/ɔːˌθentɪˈkeɪʃn/",
            "pos": "n",
            "mean": "身份验证",
            "ex": "Two-factor authentication adds an extra layer of security to your account.",
            "tr": "双因素认证为你的账户增加了一层额外的安全保障。",
            "match": [
              "Authentication"
            ]
          },
          {
            "word": "methodology",
            "ph": "/ˌmeθəˈdɒlədʒi/",
            "pos": "n",
            "mean": "方法论",
            "ex": "The research paper clearly explains the methodology used in the study.",
            "tr": "该研究论文清楚地解释了研究中使用的方法论。",
            "match": [
              "methodologies"
            ]
          },
          {
            "word": "get into",
            "ph": "/ɡet ˈɪntuː/",
            "pos": "phr v",
            "mean": "进入（某个主题或领域）",
            "ex": "The conversation started with small talk, but then we got into deeper topics.",
            "tr": "对话以闲聊开始，但后来我们进入了更深层次的话题。",
            "match": [
              "get into"
            ]
          },
          {
            "word": "security-focused",
            "ph": "/sɪˈkjʊərəti ˈfoʊkəst/",
            "pos": "adj",
            "mean": "侧重于安全的",
            "ex": "The company is hiring for a new, security-focused software development role.",
            "tr": "该公司正在招聘一个新的、侧重于安全的软件开发职位。",
            "match": [
              "security-focused"
            ]
          },
          {
            "word": "things of that nature",
            "ph": "/θɪŋz əv ðæt ˈneɪtʃər/",
            "pos": "phr",
            "mean": "诸如此类的东西",
            "ex": "The museum displays old tools, pottery, and other things of that nature.",
            "tr": "博物馆展出古老的工具、陶器和诸如此类的其他东西。",
            "match": [
              "things of that nature"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 12,
        "en": "So I’d just say, go through literally all of this. Cloud concepts—super good: S3, Dropbox, Google Drive, OneDrive, AWS, GCP, Azure. I’d just go through this and check everything off as you’re learning.",
        "cn": "所以我只想说，把所有这些都过一遍。云概念——超级棒：S3、Dropbox、Google Drive、OneDrive、AWS、GCP、Azure。我建议你把这个过一遍，边学边把每样东西都勾掉。",
        "vocab": [
          {
            "word": "go through",
            "ph": "/ɡoʊ θruː/",
            "pos": "phr v",
            "mean": "过一遍；完成",
            "ex": "Let's go through the checklist one more time to make sure we haven't forgotten anything.",
            "tr": "我们再把清单过一遍，确保没有忘记任何东西。",
            "match": [
              "go through"
            ]
          },
          {
            "word": "concept",
            "ph": "/ˈkɒnsept/",
            "pos": "n",
            "mean": "概念",
            "ex": "The concept of infinity can be difficult to grasp.",
            "tr": "无穷大的概念可能很难理解。",
            "match": [
              "concepts"
            ]
          },
          {
            "word": "check off",
            "ph": "/tʃek ɔːf/",
            "pos": "phr v",
            "mean": "（在清单上）勾掉",
            "ex": "It's so satisfying to check off items on your to-do list.",
            "tr": "在待办事项清单上勾掉项目是件非常令人满足的事。",
            "match": [
              "check everything off"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 13,
        "en": "You can go to roadmap.sh and click it—it takes you to a bunch of roadmaps for roles, which is very useful: AI engineer, software architect, game developer, technical writer… and then skill-based roadmaps. Yeah, I’d definitely recommend this.",
        "cn": "你可以去roadmap.sh然后点击它——它会带你到一大堆针对不同角色的路线图，这非常有用：AI工程师、软件架构师、游戏开发者、技术文档撰写人……然后还有基于技能的路线图。是的，我绝对推荐这个。",
        "vocab": [
          {
            "word": "a bunch of",
            "ph": "/ə bʌntʃ əv/",
            "pos": "phr",
            "mean": "（非正式）一大堆",
            "ex": "I have a bunch of emails to answer before I can leave.",
            "tr": "我走之前有一大堆邮件要回复。",
            "match": [
              "a bunch of"
            ]
          },
          {
            "word": "role",
            "ph": "/roʊl/",
            "pos": "n",
            "mean": "角色；职位",
            "ex": "She was recently promoted to a leadership role in the company.",
            "tr": "她最近被提升到公司的一个领导职位。",
            "match": [
              "roles"
            ]
          },
          {
            "word": "architect",
            "ph": "/ˈɑːrkɪtekt/",
            "pos": "n",
            "mean": "架构师",
            "ex": "As a software architect, he designs the overall structure of the application.",
            "tr": "作为一名软件架构师，他设计应用程序的整体结构。",
            "match": [
              "architect"
            ]
          },
          {
            "word": "skill-based",
            "ph": "/skɪl beɪst/",
            "pos": "adj",
            "mean": "基于技能的",
            "ex": "The company is moving towards a more skill-based hiring process.",
            "tr": "该公司正转向一个更基于技能的招聘流程。",
            "match": [
              "skill-based"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 14,
        "en": "Now for certifications, I’d highly recommend Security+ as your base. Definitely get Security+. Go back and get Network+ if you want, but if you can actually prove you know the foundational stuff of networking and OSs, then I think you’re pretty much golden as long as you have Security+.",
        "cn": "现在说到证书，我强烈推荐Security+作为你的基础。一定要考到Security+。如果你想，可以回头去考Network+，但如果你能真正证明你懂网络和操作系统的基础知识，那么我认为只要你有了Security+，你就基本稳了。",
        "vocab": [
          {
            "word": "certification",
            "ph": "/ˌsɜːrtɪfɪˈkeɪʃn/",
            "pos": "n",
            "mean": "认证；证书",
            "ex": "He earned a certification in project management.",
            "tr": "他获得了项目管理方面的认证。",
            "match": [
              "certifications"
            ]
          },
          {
            "word": "base",
            "ph": "/beɪs/",
            "pos": "n",
            "mean": "基础",
            "ex": "A strong understanding of the basics provides a good base for advanced learning.",
            "tr": "对基础知识的扎实理解为高级学习提供了良好的基础。",
            "match": [
              "base"
            ]
          },
          {
            "word": "prove",
            "ph": "/pruːv/",
            "pos": "v",
            "mean": "证明",
            "ex": "You need to prove your identity with a valid ID card.",
            "tr": "你需要用有效的身份证件来证明你的身份。",
            "match": [
              "prove"
            ]
          },
          {
            "word": "foundational",
            "ph": "/faʊnˈdeɪʃənl/",
            "pos": "adj",
            "mean": "基础的",
            "ex": "This course covers the foundational concepts of programming.",
            "tr": "这门课程涵盖了编程的基础概念。",
            "match": [
              "foundational"
            ]
          },
          {
            "word": "pretty much",
            "ph": "/ˈprɪti mʌtʃ/",
            "pos": "phr",
            "mean": "几乎；差不多",
            "ex": "I'm pretty much done with my work for today.",
            "tr": "我今天的活儿差不多干完了。",
            "match": [
              "pretty much"
            ]
          },
          {
            "word": "golden",
            "ph": "/ˈɡoʊldən/",
            "pos": "adj",
            "mean": "（俚语）稳了的；处境极好的",
            "ex": "Once you pass this final exam, you're golden for graduation.",
            "tr": "一旦你通过了这场期末考试，你毕业就稳了。",
            "match": [
              "golden"
            ]
          },
          {
            "word": "as long as",
            "ph": "/æz lɔːŋ æz/",
            "pos": "conj",
            "mean": "只要",
            "ex": "You can go to the party, as long as you finish your homework first.",
            "tr": "你可以去派对，只要你先完成作业。",
            "match": [
              "as long as"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 15,
        "en": "One thing I believe people in the cybersecurity industry and community really don’t speak up enough about is how much you need to know M365 administration. At least in my experience—not to burst your bubble—but you’ll probably have to do help desk before getting into cybersecurity. Cybersecurity is not an entry-level job, contrary to what everyone tells you.",
        "cn": "我认为网络安全行业和社区的人们有一件事说得不够多，那就是你需要多么了解M365管理。至少在我的经验里是这样——不是要给你泼冷水——但在进入网络安全领域之前，你可能得先做服务台。与大家告诉你的相反，网络安全不是一个入门级的工作。",
        "vocab": [
          {
            "word": "speak up about",
            "ph": "/spiːk ʌp əˈbaʊt/",
            "pos": "phr v",
            "mean": "公开谈论",
            "ex": "It's important to speak up about issues you care about.",
            "tr": "公开谈论你关心的问题是很重要的。",
            "match": [
              "speak up enough about"
            ]
          },
          {
            "word": "administration",
            "ph": "/ədˌmɪnɪˈstreɪʃn/",
            "pos": "n",
            "mean": "管理",
            "ex": "Network administration requires a lot of technical skill.",
            "tr": "网络管理需要大量的技术技能。",
            "match": [
              "administration"
            ]
          },
          {
            "word": "burst your bubble",
            "ph": "/bɜːrst jɔːr ˈbʌbl/",
            "pos": "idiom",
            "mean": "给你泼冷水；打破你的幻想",
            "ex": "I hate to burst your bubble, but Santa Claus isn't real.",
            "tr": "我不想给你泼冷水，但圣诞老人不是真的。",
            "match": [
              "burst your bubble"
            ]
          },
          {
            "word": "entry-level job",
            "ph": "/ˈentri ˈlevl dʒɒb/",
            "pos": "n phr",
            "mean": "入门级工作",
            "ex": "He's looking for an entry-level job in the tech industry.",
            "tr": "他正在科技行业寻找一份入门级的工作。",
            "match": [
              "entry-level job"
            ]
          },
          {
            "word": "contrary to",
            "ph": "/ˈkɒntrəri tuː/",
            "pos": "prep",
            "mean": "与…相反",
            "ex": "Contrary to popular belief, tomatoes are actually fruits.",
            "tr": "与普遍看法相反，西红柿其实是水果。",
            "match": [
              "contrary to"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 16,
        "en": "So M365 administration: everyone has M365, everyone needs to provision users, groups, distribution lists, reset passwords, investigate phishing emails. Literally, it’s all very, very boring, but it’s a very good way to get your foot in the door.",
        "cn": "所以M365管理：每个人都有M365，每个人都需要配置用户、组、分发列表、重置密码、调查网络钓鱼邮件。说真的，这一切都非常非常无聊，但这是你踏入这个行业的一个非常好的方式。",
        "vocab": [
          {
            "word": "provision",
            "ph": "/prəˈvɪʒn/",
            "pos": "v",
            "mean": "（IT术语）配置；预备",
            "ex": "The IT department needs to provision a new virtual machine for the project.",
            "tr": "IT部门需要为该项目配置一台新的虚拟机。",
            "match": [
              "provision"
            ]
          },
          {
            "word": "distribution list",
            "ph": "/ˌdɪstrɪˈbjuːʃn lɪst/",
            "pos": "n phr",
            "mean": "（邮件）分发列表",
            "ex": "Please add the new employee to the marketing distribution list.",
            "tr": "请将新员工添加到市场营销分发列表中。",
            "match": [
              "distribution lists"
            ]
          },
          {
            "word": "investigate",
            "ph": "/ɪnˈvestɪɡeɪt/",
            "pos": "v",
            "mean": "调查",
            "ex": "The police are investigating the cause of the accident.",
            "tr": "警方正在调查事故原因。",
            "match": [
              "investigate"
            ]
          },
          {
            "word": "phishing",
            "ph": "/ˈfɪʃɪŋ/",
            "pos": "n",
            "mean": "网络钓鱼",
            "ex": "Never click on suspicious links in emails; it could be a phishing attempt.",
            "tr": "切勿点击邮件中的可疑链接，那可能是网络钓鱼企图。",
            "match": [
              "phishing"
            ]
          },
          {
            "word": "get your foot in the door",
            "ph": "/ɡet jɔːr fʊt ɪn ðə dɔːr/",
            "pos": "idiom",
            "mean": "（在公司或行业中）获得初步的立足点；迈出第一步",
            "ex": "An internship is a great way to get your foot in the door of a competitive industry.",
            "tr": "实习是在一个竞争激烈的行业中迈出第一步的好方法。",
            "match": [
              "get your foot in the door"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 17,
        "en": "I’d highly recommend getting a Microsoft certification—like an Azure certification or something. This one’s good—I haven’t taken it myself because I’ve done M365 administration a lot, so I have the work experience. But if you don’t, or even if you do and just want a cert, the Microsoft 365 Administrator exam seems like something you’d take if you need to prove your M365 admin skills.",
        "cn": "我强烈推荐考一个微软认证——比如Azure认证之类的。这个就很好——我自己没考过，因为我已经做过很多M365管理了，所以我有工作经验。但如果你没有，或者即使你有但只是想要个证书，微软365管理员考试似乎就是你需要考的东西，如果你需要证明你的M365管理技能的话。",
        "vocab": [
          {
            "word": "highly recommend",
            "ph": "/ˈhaɪli ˌrekəˈmend/",
            "pos": "phr v",
            "mean": "强烈推荐",
            "ex": "I highly recommend this book; it's one of the best I've ever read.",
            "tr": "我强烈推荐这本书；它是我读过的最好的书之一。",
            "match": [
              "highly recommend"
            ]
          },
          {
            "word": "cert",
            "ph": "/sɜːrt/",
            "pos": "n",
            "mean": "（非正式）证书 (certification)",
            "ex": "He just got a new cert in cloud computing.",
            "tr": "他刚拿到了一个云计算方面的新证书。",
            "match": [
              "cert"
            ]
          },
          {
            "word": "admin",
            "ph": "/ˈædmɪn/",
            "pos": "n",
            "mean": "（非正式）管理 (administration)",
            "ex": "He works in network admin for a large company.",
            "tr": "他在一家大公司从事网络管理工作。",
            "match": [
              "admin"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 18,
        "en": "If anyone else has better certification suggestions, put them in the comments. And maybe you’re thinking, “Maddie, why haven’t you mentioned A+?” Well, it’s vendor-agnostic, and everyone uses Microsoft—at least in my experience. I haven’t taken A+. My old boss suggested I take A+ while I was analyzing logs, manually threat hunting, and doing sysadmin work, and I was like, “Why would I take that if I’m already doing the work?”",
        "cn": "如果其他人有更好的证书建议，请把它们写在评论里。也许你在想：“麦迪，你为什么没提A+？” 嗯，它是厂商中立的，而每个人都在用微软——至少在我的经验里是这样。我没考过A+。我以前的老板在我分析日志、手动进行威胁搜寻和做系统管理工作时建议我考A+，我当时就想：“如果我已经在了做这些工作，我为什么还要考那个？”",
        "vocab": [
          {
            "word": "suggestion",
            "ph": "/səˈdʒestʃən/",
            "pos": "n",
            "mean": "建议",
            "ex": "Do you have any suggestions for a good place to eat?",
            "tr": "你有什么好吃的地方推荐吗？",
            "match": [
              "suggestions"
            ]
          },
          {
            "word": "vendor-agnostic",
            "ph": "/ˈvendər æɡˈnɒstɪk/",
            "pos": "adj",
            "mean": "厂商中立的（不依赖于特定供应商的技术）",
            "ex": "The certification is vendor-agnostic, which makes it valuable across many different systems.",
            "tr": "该认证是厂商中立的，这使得它在许多不同系统中都很有价值。",
            "match": [
              "vendor-agnostic"
            ]
          },
          {
            "word": "threat hunting",
            "ph": "/θret ˈhʌntɪŋ/",
            "pos": "n phr",
            "mean": "威胁搜寻",
            "ex": "Proactive threat hunting is crucial for identifying advanced cyber attacks.",
            "tr": "主动的威胁搜寻对于识别高级网络攻击至关重要。",
            "match": [
              "threat hunting"
            ]
          },
          {
            "word": "sysadmin",
            "ph": "/ˈsɪsædmɪn/",
            "pos": "n",
            "mean": "（非正式）系统管理员",
            "ex": "If you can't log in, you should contact the sysadmin.",
            "tr": "如果你无法登录，你应该联系系统管理员。",
            "match": [
              "sysadmin"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 19,
        "en": "So yeah—vendor-agnostic. You can go through Professor Messer—you all should know that man by now, he’s a G. He has videos on A+, Security+, Network+, things like that. So if you want to go through A+, watch his videos, take notes—but I wouldn’t suggest wasting your money on the A+. My personal opinion.",
        "cn": "所以，是的——厂商中立。你可以去看Messer教授的视频——你们现在都应该知道那个人了，他是个大佬。他有关于A+、Security+、Network+之类的视频。所以如果你想学A+，看他的视频，做笔记——但我不会建议你在A+上浪费钱。我个人意见。",
        "vocab": [
          {
            "word": "go through",
            "ph": "/ɡoʊ θruː/",
            "pos": "phr v",
            "mean": "过一遍；学习",
            "ex": "Let's go through the checklist one more time.",
            "tr": "我们再把清单过一遍。",
            "match": [
              "go through"
            ]
          },
          {
            "word": "by now",
            "ph": "/baɪ naʊ/",
            "pos": "phr",
            "mean": "到如今；到现在",
            "ex": "You should know the rules by now; you've been here long enough.",
            "tr": "你到现在应该知道规则了；你已经在这里待了足够长的时间。",
            "match": [
              "by now"
            ]
          },
          {
            "word": "G",
            "ph": "/dʒiː/",
            "pos": "n",
            "mean": "（俚语）大佬； gangster (黑帮分子) 的缩写",
            "ex": "He's a true G in the music industry, respected by everyone.",
            "tr": "他是音乐界的真大佬，受到所有人的尊重。",
            "match": [
              "G"
            ]
          },
          {
            "word": "take notes",
            "ph": "/teɪk noʊts/",
            "pos": "phr v",
            "mean": "做笔记",
            "ex": "It's a good idea to take notes during the lecture.",
            "tr": "在讲座期间做笔记是个好主意。",
            "match": [
              "take notes"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 20,
        "en": "Another platform I’d suggest learning on is TryHackMe. TryHackMe is awesome—they’ve sponsored me before; this one isn’t sponsored, I’m just shouting them out because they’re cool. Cybersecurity training platform—you can go through lessons, do CTFs (which stand for Capture the Flag), really hone your cybersecurity skills, and you get these little certifications to prove you’ve completed a learning path. It’s cool.",
        "cn": "另一个我建议的学习平台是TryHackMe。TryHackMe超棒——他们以前赞助过我；这次没有赞助，我只是给他们打个广告，因为他们很酷。一个网络安全培训平台——你可以上课、做CTF（夺旗赛的缩写）、真正磨练你的网络安全技能，而且你还能得到这些小证书来证明你完成了一个学习路径。很酷。",
        "vocab": [
          {
            "word": "sponsor",
            "ph": "/ˈspɒnsər/",
            "pos": "v",
            "mean": "赞助",
            "ex": "The local company agreed to sponsor our soccer team.",
            "tr": "当地公司同意赞助我们的足球队。",
            "match": [
              "sponsored"
            ]
          },
          {
            "word": "shout out",
            "ph": "/ʃaʊt aʊt/",
            "pos": "n/phr v",
            "mean": "（公开）致意；点名感谢",
            "ex": "I want to give a quick shout out to my parents for all their support.",
            "tr": "我想简单地向我的父母致意，感谢他们所有的支持。",
            "match": [
              "shouting them out"
            ]
          },
          {
            "word": "CTF (Capture the Flag)",
            "ph": "/ˌsiː tiː ˈef/",
            "pos": "n",
            "mean": "夺旗赛（一种网络安全竞赛）",
            "ex": "He improved his hacking skills by participating in online CTF competitions.",
            "tr": "他通过参加在线CTF竞赛提高了他的黑客技能。",
            "match": [
              "CTFs"
            ]
          },
          {
            "word": "hone",
            "ph": "/hoʊn/",
            "pos": "v",
            "mean": "磨练",
            "ex": "She practiced every day to hone her skills as a pianist.",
            "tr": "她每天练习，以磨练她作为钢琴家的技巧。",
            "match": [
              "hone"
            ]
          },
          {
            "word": "learning path",
            "ph": "/ˈlɜːrnɪŋ pæθ/",
            "pos": "n phr",
            "mean": "学习路径",
            "ex": "The online course offers a structured learning path for beginners.",
            "tr": "该在线课程为初学者提供了一个结构化的学习路径。",
            "match": [
              "learning path"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 21,
        "en": "There’s also Hack The Box—a very good cybersecurity training platform as well, kind of similar to TryHackMe, but a little more advanced in the CTF and learning department. I’d definitely do TryHackMe for beginners just starting out into intermediate, then transition over to Hack The Box once you get the hang of things.",
        "cn": "还有Hack The Box——也是一个非常好的网络安全培训平台，有点像TryHackMe，但在CTF和学习部门方面更高级一些。我绝对会推荐初学者刚开始向中级过渡时用TryHackMe，一旦你掌握了窍门，再转到Hack The Box。",
        "vocab": [
          {
            "word": "advanced",
            "ph": "/ədˈvænst/",
            "pos": "adj",
            "mean": "高级的",
            "ex": "This is an advanced course for students who have already mastered the basics.",
            "tr": "这是一门为已经掌握了基础知识的学生设计的高级课程。",
            "match": [
              "advanced"
            ]
          },
          {
            "word": "department",
            "ph": "/dɪˈpɑːrtmənt/",
            "pos": "n",
            "mean": "部门；方面",
            "ex": "He's not very skilled in the creativity department.",
            "tr": "他在创造力方面不太擅长。",
            "match": [
              "department"
            ]
          },
          {
            "word": "starting out",
            "ph": "/ˈstɑːrtɪŋ aʊt/",
            "pos": "phr v",
            "mean": "刚开始",
            "ex": "When you're just starting out in your career, it's important to be willing to learn.",
            "tr": "当你刚开始你的职业生涯时，愿意学习是很重要的。",
            "match": [
              "starting out"
            ]
          },
          {
            "word": "intermediate",
            "ph": "/ˌɪntərˈmiːdiət/",
            "pos": "n/adj",
            "mean": "中级（的）",
            "ex": "This class is for students at an intermediate level of English.",
            "tr": "这个班是为中级英语水平的学生开设的。",
            "match": [
              "intermediate"
            ]
          },
          {
            "word": "transition over to",
            "ph": "/trænˈzɪʃn ˈoʊvər tuː/",
            "pos": "phr v",
            "mean": "过渡到",
            "ex": "After mastering the basics, you can transition over to more advanced topics.",
            "tr": "掌握了基础知识后，你就可以过渡到更高级的主题了。",
            "match": [
              "transition over to"
            ]
          },
          {
            "word": "get the hang of",
            "ph": "/ɡet ðə hæŋ əv/",
            "pos": "idiom",
            "mean": "掌握…的窍门",
            "ex": "It took me a while, but I finally got the hang of using the new software.",
            "tr": "花了我一点时间，但我最终还是掌握了使用新软件的窍门。",
            "match": [
              "get the hang of"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 22,
        "en": "I do have a link—I’ll put it in the description—to sign up for Hack The Box. If you use my link and sign up and subscribe to one of the tiers, I do get a little kickback. So if you were going to sign up anyway, use my link—I’d really appreciate it.",
        "cn": "我确实有一个链接——我会把它放在描述里——用于注册Hack The Box。如果你用我的链接注册并订阅了其中一个等级，我确实能得到一点回扣。所以如果你反正都要注册，就用我的链接吧——我会非常感激的。",
        "vocab": [
          {
            "word": "description",
            "ph": "/dɪˈskrɪpʃn/",
            "pos": "n",
            "mean": "（视频下的）描述区",
            "ex": "You can find all the product links in the video description below.",
            "tr": "你可以在下方视频描述区找到所有产品链接。",
            "match": [
              "description"
            ]
          },
          {
            "word": "sign up",
            "ph": "/saɪn ʌp/",
            "pos": "phr v",
            "mean": "注册",
            "ex": "You need to sign up for an account to use the service.",
            "tr": "你需要注册一个账户才能使用该服务。",
            "match": [
              "sign up"
            ]
          },
          {
            "word": "tier",
            "ph": "/tɪər/",
            "pos": "n",
            "mean": "（订阅的）等级",
            "ex": "The streaming service offers several subscription tiers with different features.",
            "tr": "该流媒体服务提供几种具有不同功能的订阅等级。",
            "match": [
              "tiers"
            ]
          },
          {
            "word": "kickback",
            "ph": "/ˈkɪkbæk/",
            "pos": "n",
            "mean": "回扣",
            "ex": "The salesperson received a kickback for every new client he brought in.",
            "tr": "那位销售员每带来一个新客户都能收到一笔回扣。",
            "match": [
              "kickback"
            ]
          },
          {
            "word": "anyway",
            "ph": "/ˈeniweɪ/",
            "pos": "adv",
            "mean": "反正",
            "ex": "I know it's late, but I'm going to finish this book anyway.",
            "tr": "我知道很晚了，但我反正要读完这本书。",
            "match": [
              "anyway"
            ]
          },
          {
            "word": "appreciate",
            "ph": "/əˈpriːʃieɪt/",
            "pos": "v",
            "mean": "感激",
            "ex": "I really appreciate all your help and support.",
            "tr": "我真的很感激你所有的帮助和支持。",
            "match": [
              "appreciate"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 23,
        "en": "Another thing I’d do if I was starting over: you’re learning, you’ve got the fundamentals down, you’ve got some certs, you’re doing labs, you’re taking notes—big one there: take notes of everything you do. After you have all your learnings and notes, I would post them onto LinkedIn and your own blog. I was posting what I was learning on LinkedIn—things I was learning in cybersecurity, Hack The Box, TryHackMe badges, certifications I got. I was literally posting anything and everything cybersecurity, and people started following along for the journey.",
        "cn": "如果我重新开始，我还会做另一件事：你在学习，你掌握了基础，你拿了些证书，你在做实验，你在做笔记——这点很重要：把你做的每件事都记下来。在你有了所有学到的东西和笔记之后，我会把它们发布到领英和你自己的博客上。我当时就在领英上发布我正在学的东西——我在网络安全、Hack The Box、TryHackMe徽章、我获得的证书中学到的东西。我简直是在发布任何和所有关于网络安全的东西，人们开始关注我的这段旅程。",
        "vocab": [
          {
            "word": "get something down",
            "ph": "/ɡet ˈsʌmθɪŋ daʊn/",
            "pos": "phr v",
            "mean": "掌握",
            "ex": "Once you get the basics down, the rest will be much easier.",
            "tr": "一旦你掌握了基础，剩下的就会容易得多。",
            "match": [
              "got the fundamentals down"
            ]
          },
          {
            "word": "big one",
            "ph": "/bɪɡ wʌn/",
            "pos": "n phr",
            "mean": "（非正式）重要的一点",
            "ex": "Remember to be on time. That's a big one for this new boss.",
            "tr": "记住要准时。这对新老板来说是重要的一点。",
            "match": [
              "big one"
            ]
          },
          {
            "word": "badge",
            "ph": "/bædʒ/",
            "pos": "n",
            "mean": "徽章",
            "ex": "After completing the course, he earned a digital badge for his profile.",
            "tr": "完成课程后，他为自己的个人资料赢得了一枚数字徽章。",
            "match": [
              "badges"
            ]
          },
          {
            "word": "anything and everything",
            "ph": "/ˈeniθɪŋ ænd ˈevriθɪŋ/",
            "pos": "phr",
            "mean": "任何及所有东西",
            "ex": "The museum has anything and everything related to local history.",
            "tr": "该博物馆拥有任何及所有与当地历史相关的东西。",
            "match": [
              "anything and everything"
            ]
          },
          {
            "word": "follow along",
            "ph": "/ˈfɒloʊ əˈlɒŋ/",
            "pos": "phr v",
            "mean": "关注；跟随",
            "ex": "Thousands of fans followed along as he documented his journey on social media.",
            "tr": "成千上万的粉丝关注着他在社交媒体上记录的旅程。",
            "match": [
              "following along"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 24,
        "en": "Long story short—I have a longer video on my channel, I’ll link it in the description if you want the full story—but I got the attention of a CEO, and he was like, “Hey, I love your blog, I love your write-ups, your TTPs, your projects, your home lab. Do you want to interview for this position?” And that’s actually how I got my first cybersecurity job. I didn’t apply; I didn’t go through the standard process. I was found on social media.",
        "cn": "长话短说——我频道里有个更长的视频，如果你想知道完整故事，我会把链接放在描述里——但我引起了一位CEO的注意，他当时就说：“嘿，我喜欢你的博客，我喜欢你的文章、你的TTP、你的项目、你的家庭实验室。你想面试这个职位吗？” 我实际上就是这样得到我的第一份网络安全工作的。我没有申请；我没有走标准流程。我是在社交媒体上被发现的。",
        "vocab": [
          {
            "word": "long story short",
            "ph": "/lɔːŋ ˈstɔːri ʃɔːrt/",
            "pos": "idiom",
            "mean": "长话短说",
            "ex": "We had a lot of issues, but long story short, we made it.",
            "tr": "我们遇到了很多问题，但长话短说，我们成功了。",
            "match": [
              "Long story short"
            ]
          },
          {
            "word": "write-up",
            "ph": "/ˈraɪt ʌp/",
            "pos": "n",
            "mean": "（详细的）书面报告；文章",
            "ex": "He published a detailed write-up of his research findings on his blog.",
            "tr": "他在博客上发表了一份关于他研究发现的详细报告。",
            "match": [
              "write-ups"
            ]
          },
          {
            "word": "TTP (Tactics, Techniques, and Procedures)",
            "ph": "/ˌtiː tiː ˈpiː/",
            "pos": "n",
            "mean": "战术、技术和程序（网络安全术语）",
            "ex": "Analyzing the attacker's TTPs can help predict future threats.",
            "tr": "分析攻击者的TTP有助于预测未来的威胁。",
            "match": [
              "TTPs"
            ]
          },
          {
            "word": "home lab",
            "ph": "/hoʊm læb/",
            "pos": "n phr",
            "mean": "家庭实验室",
            "ex": "He built a small home lab to practice his cybersecurity skills.",
            "tr": "他建了一个小型的家庭实验室来练习他的网络安全技能。",
            "match": [
              "home lab"
            ]
          },
          {
            "word": "standard process",
            "ph": "/ˈstændərd ˈproʊses/",
            "pos": "n phr",
            "mean": "标准流程",
            "ex": "Applicants must go through the standard process of submitting a resume and attending an interview.",
            "tr": "申请人必须经过提交简历和参加面试的标准流程。",
            "match": [
              "standard process"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 25,
        "en": "If you don’t post what you know, others will not know that you know it. You have to be loud. You have to be like, “Hey, I know this stuff, I’m doing this stuff, look at what I’m learning—isn’t this so cool? You can learn it too—here’s the write-up, here’s the walkthrough.” Knowledge share, and you’ll garner the attention of recruiters, hiring managers, CEOs. Like, everyone and their mother is—unfortunately—on LinkedIn, so that’s where you have to be posting your content.",
        "cn": "如果你不把你所知道的发布出来，别人就不会知道你知道它。你必须大声说出来。你必须像是说：“嘿，我懂这些东西，我在做这些东西，看我在学什么——这不是很酷吗？你也可以学——这是文章，这是演练。” 知识分享，你就会吸引招聘人员、招聘经理、CEO的注意。就像，每个人和他妈的都在——不幸的是——在领英上，所以你必须在那里发布你的内容。",
        "vocab": [
          {
            "word": "loud",
            "ph": "/laʊd/",
            "pos": "adj",
            "mean": "（比喻）引人注目的；高调的",
            "ex": "To get noticed in a crowded market, your brand has to be loud.",
            "tr": "要在拥挤的市场中被注意到，你的品牌必须高调。",
            "match": [
              "loud"
            ]
          },
          {
            "word": "walkthrough",
            "ph": "/ˈwɔːkθruː/",
            "pos": "n",
            "mean": "（分步）演练；攻略",
            "ex": "He posted a video walkthrough of the difficult game level on YouTube.",
            "tr": "他在YouTube上发布了一个关于那个困难游戏关卡的视频攻略。",
            "match": [
              "walkthrough"
            ]
          },
          {
            "word": "garner",
            "ph": "/ˈɡɑːrnər/",
            "pos": "v",
            "mean": "获得（支持、关注）",
            "ex": "Her new book has garnered a lot of positive reviews.",
            "tr": "她的新书获得了很多好评。",
            "match": [
              "garner"
            ]
          },
          {
            "word": "recruiter",
            "ph": "/rɪˈkruːtər/",
            "pos": "n",
            "mean": "招聘人员",
            "ex": "A recruiter from a top tech company contacted him on LinkedIn.",
            "tr": "一位顶尖科技公司的招聘人员在领英上联系了他。",
            "match": [
              "recruiters"
            ]
          },
          {
            "word": "everyone and their mother",
            "ph": "/ˈevriwʌn ænd ðer ˈmʌðər/",
            "pos": "idiom",
            "mean": "（夸张）每个人；几乎所有人",
            "ex": "It seemed like everyone and their mother was at the concert last night.",
            "tr": "昨晚的音乐会好像所有人都去了。",
            "match": [
              "everyone and their mother"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 26,
        "en": "Having a blog also helps. I actually started posting on Medium—it’s a write-up blog hosting platform. It’s free to sign up, create an account, and start posting your CTF write-ups, your projects, anything. Post about it on LinkedIn: “Hey, here’s this project, here’s the link to my blog,” things like that.",
        "cn": "拥有一个博客也有帮助。我实际上是在Medium上开始发布的——它是一个文章博客托管平台。注册、创建账户，然后开始发布你的CTF文章、你的项目，任何东西，都是免费的。在领英上发帖宣传：“嘿，这是这个项目，这是我博客的链接，”诸如此类。",
        "vocab": [
          {
            "word": "hosting platform",
            "ph": "/ˈhoʊstɪŋ ˈplætfɔːrm/",
            "pos": "n phr",
            "mean": "托管平台",
            "ex": "He chose a reliable hosting platform for his new website.",
            "tr": "他为他的新网站选择了一个可靠的托管平台。",
            "match": [
              "hosting platform"
            ]
          },
          {
            "word": "sign up",
            "ph": "/saɪn ʌp/",
            "pos": "phr v",
            "mean": "注册",
            "ex": "You need to sign up for an account to use the service.",
            "tr": "你需要注册一个账户才能使用该服务。",
            "match": [
              "sign up"
            ]
          },
          {
            "word": "CTF (Capture the Flag)",
            "ph": "/ˌsiː tiː ˈef/",
            "pos": "n",
            "mean": "夺旗赛",
            "ex": "He improved his hacking skills by participating in online CTF competitions.",
            "tr": "他通过参加在线CTF竞赛提高了他的黑客技能。",
            "match": [
              "CTF"
            ]
          },
          {
            "word": "things like that",
            "ph": "/θɪŋz laɪk ðæt/",
            "pos": "phr",
            "mean": "诸如此类",
            "ex": "I enjoy outdoor activities like hiking, camping, and things like that.",
            "tr": "我喜欢户外活动，比如徒步、露营之类的。",
            "match": [
              "things like that"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 27,
        "en": "Another thing you need to do—and what I would do if I could start all over again—is network more. Network online, on Discord, at conferences—literally network your ass off. Network like your job depends on it, because it literally does. I have never gotten a single job by applying. It’s always been through either online networking, social media, referrals, or in-person networking. Literally, it’s all been through human connection. So that is a must when trying to get a job in cybersecurity.",
        "cn": "你需要做的另一件事——也是如果我能重新来过我会做的事——就是多社交。在线上、在Discord上、在会议上社交——真的要拼了命地去社交。像你的工作取决于它一样去社交，因为它真的取决于此。我从来没有通过申请得到过任何一份工作。总是通过线上社交、社交媒体、推荐，或线下社交。真的，全都通过人际关系。所以当你想在网络安全领域找到工作时，这是必须的。",
        "vocab": [
          {
            "word": "network",
            "ph": "/ˈnetwɜːrk/",
            "pos": "v",
            "mean": "建立人脉；社交",
            "ex": "It's important to network with people in your industry.",
            "tr": "与你行业内的人建立人脉很重要。",
            "match": [
              "network"
            ]
          },
          {
            "word": "network your ass off",
            "ph": "/ˈnetwɜːrk jɔːr æs ɔːf/",
            "pos": "idiom",
            "mean": "（粗俗俚语）拼了命地社交",
            "ex": "To build his business, he had to network his ass off at every industry event.",
            "tr": "为了建立他的生意，他不得不在每个行业活动中拼了命地社交。",
            "match": [
              "network your ass off"
            ]
          },
          {
            "word": "depend on",
            "ph": "/dɪˈpend ɒn/",
            "pos": "phr v",
            "mean": "取决于",
            "ex": "Our picnic plan will depend on the weather.",
            "tr": "我们的野餐计划将取决于天气。",
            "match": [
              "depends on"
            ]
          },
          {
            "word": "referral",
            "ph": "/rɪˈfɜːrəl/",
            "pos": "n",
            "mean": "推荐；介绍",
            "ex": "He got the job through a referral from a former colleague.",
            "tr": "他通过一位前同事的推荐得到了这份工作。",
            "match": [
              "referrals"
            ]
          },
          {
            "word": "in-person",
            "ph": "/ɪn ˈpɜːrsn/",
            "pos": "adj",
            "mean": "线下的；亲自的",
            "ex": "After a year of online meetings, they finally had an in-person conference.",
            "tr": "经过一年的在线会议，他们终于举行了一场线下会议。",
            "match": [
              "in-person"
            ]
          },
          {
            "word": "human connection",
            "ph": "/ˈhjuːmən kəˈnekʃn/",
            "pos": "n phr",
            "mean": "人际关系；人与人之间的联系",
            "ex": "In a world of technology, she valued genuine human connection.",
            "tr": "在科技的世界里，她珍视真诚的人际联系。",
            "match": [
              "human connection"
            ]
          },
          {
            "word": "a must",
            "ph": "/ə mʌst/",
            "pos": "n",
            "mean": "必须做的事",
            "ex": "If you visit Paris, seeing the Eiffel Tower is a must.",
            "tr": "如果你去巴黎，看埃菲尔铁塔是必须的。",
            "match": [
              "a must"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 28,
        "en": "Go to DEF CON—that’s a big one—or your local BSides. Literally, any way you can get out, network with people, talk about passion, make connections. That’s going to take you farther than any resume.",
        "cn": "去DEF CON——那是个大活动——或者你本地的BSides。真的，任何你能走出去的方式，和人们社交，谈论热情，建立联系。那会比任何简历都让你走得更远。",
        "vocab": [
          {
            "word": "a big one",
            "ph": "/ə bɪɡ wʌn/",
            "pos": "n phr",
            "mean": "一个大的/重要的（活动等）",
            "ex": "The final exam is coming up; that's the big one.",
            "tr": "期末考试要来了，那可是个大头。",
            "match": [
              "a big one"
            ]
          },
          {
            "word": "local",
            "ph": "/ˈloʊkl/",
            "pos": "adj",
            "mean": "本地的",
            "ex": "We prefer to support local businesses.",
            "tr": "我们更愿意支持本地企业。",
            "match": [
              "local"
            ]
          },
          {
            "word": "get out",
            "ph": "/ɡet aʊt/",
            "pos": "phr v",
            "mean": "走出去",
            "ex": "You've been inside all day; you need to get out and get some fresh air.",
            "tr": "你在室内待了一整天了，你需要出去呼吸点新鲜空气。",
            "match": [
              "get out"
            ]
          },
          {
            "word": "passion",
            "ph": "/ˈpæʃn/",
            "pos": "n",
            "mean": "热情",
            "ex": "She has a real passion for painting.",
            "tr": "她对绘画有真正的热情。",
            "match": [
              "passion"
            ]
          },
          {
            "word": "take you farther",
            "ph": "/teɪk juː ˈfɑːrðər/",
            "pos": "phr v",
            "mean": "让你走得更远",
            "ex": "A good attitude will take you farther in life than just talent alone.",
            "tr": "良好的态度会比单有才能让你在生活中走得更远。",
            "match": [
              "take you farther"
            ]
          },
          {
            "word": "resume",
            "ph": "/ˈrezəmeɪ/",
            "pos": "n",
            "mean": "简历",
            "ex": "He updated his resume before applying for the new job.",
            "tr": "在申请新工作前，他更新了他的简历。",
            "match": [
              "resume"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 29,
        "en": "If I had to start all over in cybersecurity from scratch, I would: - Post everything I was doing - Focus more on actual skills that will help me get into cybersecurity - Not focus too much on pen testing or red teaming—that’s not very practical when you’re trying to get in - Focus more on help desk and M365 administration, hardening Windows security, AD security—things like that—to prove you know security - Be kind of like a sysadmin, then work your way up to a more cybersecurity-focused role - And networking—again, very important. Network as much as possible. Put yourself out there, because you never know who might see your stuff.",
        "cn": "如果我必须从零开始重新学习网络安全，我会：- 发布我做的所有事情 - 更专注于能帮我进入网络安全领域的实际技能 - 不太专注于渗透测试或红队——当你试图入行时那不太实际 - 更专注于服务台和M365管理、加固Windows安全、AD安全——诸如此类——来证明你懂安全 - 有点像个系统管理员，然后逐步晋升到更侧重于网络安全的职位 - 还有社交——再次强调，非常重要。尽可能多地社交。把自己展示出去，因为你永远不知道谁会看到你的东西。",
        "vocab": [
          {
            "word": "all over again",
            "ph": "/ɔːl ˈoʊvər əˈɡen/",
            "pos": "phr",
            "mean": "重新来过",
            "ex": "I made a mistake on the last step, so I have to start all over again.",
            "tr": "我在最后一步上犯了个错，所以我得重新来过。",
            "match": [
              "all over again"
            ]
          },
          {
            "word": "pen testing (penetration testing)",
            "ph": "/pen ˈtestɪŋ/",
            "pos": "n",
            "mean": "渗透测试",
            "ex": "The company hired a specialist to conduct regular pen testing on their systems.",
            "tr": "公司雇佣了一位专家对他们的系统进行定期的渗透测试。",
            "match": [
              "pen testing"
            ]
          },
          {
            "word": "red teaming",
            "ph": "/red ˈtiːmɪŋ/",
            "pos": "n",
            "mean": "红队演练",
            "ex": "Red teaming involves simulating an attack to test an organization's defenses.",
            "tr": "红队演练包括模拟一次攻击来测试一个组织的防御能力。",
            "match": [
              "red teaming"
            ]
          },
          {
            "word": "practical",
            "ph": "/ˈpræktɪkl/",
            "pos": "adj",
            "mean": "实际的",
            "ex": "She gave me some practical advice on how to save money.",
            "tr": "她给了我一些关于如何省钱的实用建议。",
            "match": [
              "practical"
            ]
          },
          {
            "word": "hardening",
            "ph": "/ˈhɑːrdnɪŋ/",
            "pos": "n",
            "mean": "加固",
            "ex": "System hardening is the process of securing a system by reducing its surface of vulnerability.",
            "tr": "系统加固是通过减少其漏洞表面来保护系统的过程。",
            "match": [
              "hardening"
            ]
          },
          {
            "word": "work your way up",
            "ph": "/wɜːrk jɔːr weɪ ʌp/",
            "pos": "phr v",
            "mean": "逐步晋升",
            "ex": "She started as an intern and worked her way up to become the CEO.",
            "tr": "她从实习生做起，一步步晋升为CEO。",
            "match": [
              "work your way up"
            ]
          },
          {
            "word": "put yourself out there",
            "ph": "/pʊt jɔːrˈself aʊt ðer/",
            "pos": "idiom",
            "mean": "把自己展示出去",
            "ex": "If you want to be a successful artist, you have to put yourself out there and show your work.",
            "tr": "如果你想成为一个成功的艺术家，你必须走出去，展示你的作品。",
            "match": [
              "Put yourself out there"
            ]
          },
          {
            "word": "you never know",
            "ph": "/juː ˈnevər noʊ/",
            "pos": "phr",
            "mean": "你永远不知道（世事难料）",
            "ex": "You should apply for the job; you never know, you might get it!",
            "tr": "你应该申请那份工作；世事难料，说不定你就得到了呢！",
            "match": [
              "you never know"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 30,
        "en": "Anyway, that is it for the video. Make sure to like, subscribe, punch all the buttons in the face, and I will see you in the next one.",
        "cn": "总之，本期视频就到这里。确保点赞、订阅、把所有按钮都给捶一遍，我们下个视频见。",
        "vocab": [
          {
            "word": "that is it for",
            "ph": "/ðæt ɪz ɪt fɔːr/",
            "pos": "phr",
            "mean": "…就到这里",
            "ex": "That is it for today's lesson. Class dismissed.",
            "tr": "今天的课就到这里。下课。",
            "match": [
              "that is it for"
            ]
          },
          {
            "word": "punch in the face",
            "ph": "/pʌntʃ ɪn ðə feɪs/",
            "pos": "idiom",
            "mean": "（夸张俚语）猛击",
            "ex": "He was so frustrated with the vending machine that he wanted to punch it in the face.",
            "tr": "他对那台自动售货机感到非常沮沮丧，很想给它一拳。",
            "match": [
              "punch all the buttons in the face"
            ]
          },
          {
            "word": "see you in the next one",
            "ph": "/siː juː ɪn ðə nekst wʌn/",
            "pos": "phr",
            "mean": "下个（视频）见",
            "ex": "Thanks for watching, and I'll see you in the next one.",
            "tr": "感谢收看，我们下个视频见。",
            "match": [
              "see you in the next one"
            ]
          }
        ],
        "gram": []
      }
    ],
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    },
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    }
  },
  {
    "id": "social_media_replacement_effects",
    "title": "What Social Media Replaced in Our Lives",
    "info": {
      "author": "Content Creator",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "social media",
        "psychology",
        "self-improvement",
        "emotions",
        "addiction"
      ],
      "link": "https://example.com/original-source",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "Everyone talks about how social media waste time, but no one actually talks about what it replaced in our lives. When I quit social media, I discovered something shocking. I wasn't just addicted to scrolling. I was using it to feel emotional needs I didn't even know existed.",
        "cn": "每个人都在谈论社交媒体如何浪费时间，但没有人真正谈论它在我们生活中取代了什么。当我戒掉社交媒体时，我发现了一些令人震惊的事情。我不仅仅是对刷手机上瘾。我是在用它来满足我甚至不知道存在的精神需求。",
        "vocab": [
          {
            "word": "waste time",
            "ph": "/weɪst taɪm/",
            "pos": "phr v",
            "mean": "浪费时间",
            "ex": "He tends to waste time watching silly videos online.",
            "tr": "他总是浪费时间在网上看傻乎乎的视频。",
            "match": [
              "waste time"
            ]
          },
          {
            "word": "replace",
            "ph": "/rɪˈpleɪs/",
            "pos": "v",
            "mean": "取代",
            "ex": "Smartphones have replaced many traditional devices like cameras and music players.",
            "tr": "智能手机已经取代了像相机和音乐播放器这样的许多传统设备。",
            "match": [
              "replaced"
            ]
          },
          {
            "word": "addicted to",
            "ph": "/əˈdɪktɪd tuː/",
            "pos": "adj phr",
            "mean": "对…上瘾",
            "ex": "She is completely addicted to that new mobile game.",
            "tr": "她对那个新手机游戏完全上瘾了。",
            "match": [
              "addicted to"
            ]
          },
          {
            "word": "scrolling",
            "ph": "/ˈskroʊlɪŋ/",
            "pos": "n",
            "mean": "（在屏幕上）滚动，刷（手机）",
            "ex": "Mindless scrolling before bed can negatively affect your sleep.",
            "tr": "睡前无意识地刷手机会对你的睡眠产生负面影响。",
            "match": [
              "scrolling"
            ]
          },
          {
            "word": "emotional needs",
            "ph": "/ɪˈmoʊʃənl niːdz/",
            "pos": "n phr",
            "mean": "精神需求",
            "ex": "A healthy relationship should meet the emotional needs of both partners.",
            "tr": "一段健康的关系应该满足双方的精神需求。",
            "match": [
              "emotional needs"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "If you've seen my previous videos, you know that I've been off social media for 5 years now, but it took me years to understand that deleting apps wasn't enough. Social media wasn't just taking my time. It was acting as a band-aid for deeper needs.",
        "cn": "如果你看过我以前的视频，你就会知道我已经戒掉社交媒体5年了，但我花了好几年才明白，删除应用程序是不够的。社交媒体不仅仅是在占用我的时间。它是在为更深层次的需求充当创可贴。",
        "vocab": [
          {
            "word": "previous",
            "ph": "/ˈpriːviəs/",
            "pos": "adj",
            "mean": "以前的",
            "ex": "Please refer to the notes from the previous meeting.",
            "tr": "请参考上次会议的笔记。",
            "match": [
              "previous"
            ]
          },
          {
            "word": "be off",
            "ph": "/biː ɔːf/",
            "pos": "phr v",
            "mean": "离开；戒掉",
            "ex": "He's trying to be off caffeine for a month to see if he feels better.",
            "tr": "他正试图戒掉咖啡因一个月，看看是否感觉会好些。",
            "match": [
              "off"
            ]
          },
          {
            "word": "band-aid",
            "ph": "/ˈbændeɪd/",
            "pos": "n",
            "mean": "创可贴（比喻治标不治本的临时解决办法）",
            "ex": "Just apologizing is a band-aid; you need to address the root of the problem.",
            "tr": "仅仅道歉是治标不治本的；你需要解决问题的根源。",
            "match": [
              "band-aid"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "I used to think that having hundreds of people wish me happy birthday meant that I had stronger connections. Social media wasn't just taking my time. It was replacing real intimacy with shallow connections. It gave me just enough social interactions to feel less lonely, but not enough to actually fulfill my need for genuine connection.",
        "cn": "我过去常常认为，有几百个人祝我生日快乐就意味着我有更强的人际关系。社交媒体不仅仅是在占用我的时间。它是在用肤浅的联系取代真正的亲密关系。它给了我恰到好处的社交互动，让我感觉不那么孤单，但又不足以真正满足我对真诚联系的需求。",
        "vocab": [
          {
            "word": "connection",
            "ph": "/kəˈnekʃn/",
            "pos": "n",
            "mean": "联系；人际关系",
            "ex": "He made many valuable connections at the business conference.",
            "tr": "他在商务会议上建立了许多宝贵的人脉。",
            "match": [
              "connections",
              "connection"
            ]
          },
          {
            "word": "intimacy",
            "ph": "/ˈɪntɪməsi/",
            "pos": "n",
            "mean": "亲密关系",
            "ex": "True friendship is built on trust and emotional intimacy.",
            "tr": "真正的友谊建立在信任和情感的亲密关系之上。",
            "match": [
              "intimacy"
            ]
          },
          {
            "word": "shallow",
            "ph": "/ˈʃæloʊ/",
            "pos": "adj",
            "mean": "肤浅的",
            "ex": "Their conversation was very shallow, only about celebrities and shopping.",
            "tr": "他们的谈话非常肤浅，只涉及名人和购物。",
            "match": [
              "shallow"
            ]
          },
          {
            "word": "fulfill",
            "ph": "/fʊlˈfɪl/",
            "pos": "v",
            "mean": "满足",
            "ex": "He hoped his new job would fulfill his need for a creative challenge.",
            "tr": "他希望他的新工作能满足他对创造性挑战的需求。",
            "match": [
              "fulfill"
            ]
          },
          {
            "word": "genuine",
            "ph": "/ˈdʒenjuɪn/",
            "pos": "adj",
            "mean": "真诚的",
            "ex": "She has a genuine interest in helping others.",
            "tr": "她对帮助他人有真诚的兴趣。",
            "match": [
              "genuine"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "Social media wasn't just distracting me. It was replacing my ability to validate myself. Every like was a tiny hit of external validation, teaching my brain to depend on others for my own self-worth.",
        "cn": "社交媒体不仅仅是在分散我的注意力。它是在取代我自我肯定的能力。每一个点赞都是一次微小的外部认可，教我的大脑依赖他人来获得我自己的自我价值。",
        "vocab": [
          {
            "word": "distract",
            "ph": "/dɪˈstrækt/",
            "pos": "v",
            "mean": "使分心",
            "ex": "The loud noise from the street was distracting me from my work.",
            "tr": "街上传来的巨大噪音让我无法专心工作。",
            "match": [
              "distracting"
            ]
          },
          {
            "word": "validate",
            "ph": "/ˈvælɪdeɪt/",
            "pos": "v",
            "mean": "证实；认可",
            "ex": "It's important to learn how to validate your own feelings without needing others' approval.",
            "tr": "学会自我肯定感受而无需他人认可是很重要的。",
            "match": [
              "validate"
            ]
          },
          {
            "word": "a hit of",
            "ph": "/ə hɪt əv/",
            "pos": "phr",
            "mean": "一小剂（通常指带来快感的东西）",
            "ex": "For him, a morning coffee is a necessary hit of caffeine.",
            "tr": "对他来说，早晨的咖啡是必需的一剂咖啡因。",
            "match": [
              "hit of"
            ]
          },
          {
            "word": "external validation",
            "ph": "/ɪkˈstɜːrnl ˌvælɪˈdeɪʃn/",
            "pos": "n phr",
            "mean": "外部认可",
            "ex": "Relying too much on external validation can be damaging to your self-esteem.",
            "tr": "过度依赖外部认可可能会损害你的自尊。",
            "match": [
              "external validation"
            ]
          },
          {
            "word": "depend on",
            "ph": "/dɪˈpend ɒn/",
            "pos": "phr v",
            "mean": "依赖",
            "ex": "Children depend on their parents for food and shelter.",
            "tr": "孩子们依赖父母提供食物和住所。",
            "match": [
              "depend on"
            ]
          },
          {
            "word": "self-worth",
            "ph": "/self wɜːrθ/",
            "pos": "n",
            "mean": "自我价值",
            "ex": "Your self-worth should not be determined by your job title or salary.",
            "tr": "你的自我价值不应由你的职位或薪水来决定。",
            "match": [
              "self-worth"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Social media wasn't just entertaining me. It was replacing my ability to sit with uncomfortable emotions and process them naturally.",
        "cn": "社交媒体不仅仅是在娱乐我。它是在取代我与不舒服的情绪共处并自然地处理它们的能力。",
        "vocab": [
          {
            "word": "entertain",
            "ph": "/ˌentərˈteɪn/",
            "pos": "v",
            "mean": "娱乐",
            "ex": "The clown's job was to entertain the children at the party.",
            "tr": "小丑的工作是在派对上娱乐孩子们。",
            "match": [
              "entertaining"
            ]
          },
          {
            "word": "sit with",
            "ph": "/sɪt wɪθ/",
            "pos": "phr v",
            "mean": "与（情绪）共处；静观",
            "ex": "Instead of distracting yourself, sometimes it's better to just sit with your sadness for a while.",
            "tr": "与其分散自己的注意力，有时不如静静地与你的悲伤共处一会儿。",
            "match": [
              "sit with"
            ]
          },
          {
            "word": "uncomfortable",
            "ph": "/ʌnˈkʌmfərtəbl/",
            "pos": "adj",
            "mean": "不舒服的",
            "ex": "The silence in the room became uncomfortable.",
            "tr": "房间里的沉默变得令人不舒服。",
            "match": [
              "uncomfortable"
            ]
          },
          {
            "word": "process",
            "ph": "/ˈproʊses/",
            "pos": "v",
            "mean": "（心理上）处理",
            "ex": "It took him a long time to process the grief of losing his friend.",
            "tr": "他花了很长时间才处理好失去朋友的悲痛。",
            "match": [
              "process"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "But here's what really shocked me. When I quit social media, these needs didn't go away. They just became impossible to ignore, and that's when the real work began.",
        "cn": "但真正让我震惊的是这个。当我戒掉社交媒体时，这些需求并没有消失。它们只是变得无法忽视，而那才是真正功课的开始。",
        "vocab": [
          {
            "word": "quit",
            "ph": "/kwɪt/",
            "pos": "v",
            "mean": "戒掉；辞职",
            "ex": "He decided to quit smoking for his health.",
            "tr": "为了健康，他决定戒烟。",
            "match": [
              "quit"
            ]
          },
          {
            "word": "go away",
            "ph": "/ɡoʊ əˈweɪ/",
            "pos": "phr v",
            "mean": "消失",
            "ex": "I hope this headache will go away soon.",
            "tr": "我希望这次头痛能快点消失。",
            "match": [
              "go away"
            ]
          },
          {
            "word": "impossible to ignore",
            "ph": "/ɪmˈpɒsəbl tuː ɪɡˈnɔːr/",
            "pos": "phr",
            "mean": "无法忽视",
            "ex": "The problem has become so big that it is now impossible to ignore.",
            "tr": "问题已经变得如此之大，现在已无法忽视。",
            "match": [
              "impossible to ignore"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "I had to learn how to seek validation from within, because for so long, I measured my worth by the numbers of likes, shares, and comments I received. Each notification provided a fleeting moment of external validation, but ultimately left me feeling empty. But what happens when you stop relying on those external metrics? I had to learn to celebrate my achievements privately, to trust and appreciate myself without waiting for other people's approval, by building internal confidence and practicing self-reflection. I discovered that my worth isn't defined by an online audience, but by the quiet, powerful validation from within.",
        "cn": "我必须学会如何从内在寻求认可，因为在很长一段时间里，我用收到的点赞、分享和评论的数量来衡量我的价值。每一次通知都提供了一个短暂的外部认可瞬间，但最终让我感到空虚。但是，当你停止依赖那些外部指标时会发生什么呢？我必须学会私下庆祝我的成就，在没有等待他人批准的情况下信任和欣赏自己，通过建立内在自信和进行自我反思。我发现我的价值不是由在线观众定义的，而是由内在那种安静而强大的认可定义的。",
        "vocab": [
          {
            "word": "seek validation from within",
            "ph": "/siːk ˌvælɪˈdeɪʃn frəm wɪˈðɪn/",
            "pos": "phr",
            "mean": "从内在寻求认可",
            "ex": "True self-esteem comes from learning to seek validation from within, not from others.",
            "tr": "真正的自尊来自于学会从内在而非他人那里寻求认可。",
            "match": [
              "seek validation from within"
            ]
          },
          {
            "word": "measure one's worth by",
            "ph": "/ˈmeʒər wʌnz wɜːrθ baɪ/",
            "pos": "phr",
            "mean": "用…来衡量某人的价值",
            "ex": "It's a mistake to measure your worth by how much money you make.",
            "tr": "用你赚多少钱来衡量你的价值是错误的。",
            "match": [
              "measured my worth by"
            ]
          },
          {
            "word": "fleeting",
            "ph": "/ˈfliːtɪŋ/",
            "pos": "adj",
            "mean": "短暂的",
            "ex": "Happiness can sometimes feel like a fleeting moment.",
            "tr": "快乐有时感觉就像一个短暂的瞬间。",
            "match": [
              "fleeting"
            ]
          },
          {
            "word": "ultimately",
            "ph": "/ˈʌltɪmətli/",
            "pos": "adv",
            "mean": "最终",
            "ex": "He tried many different careers, but ultimately became a teacher.",
            "tr": "他尝试了很多不同的职业，但最终成为了一名教师。",
            "match": [
              "ultimately"
            ]
          },
          {
            "word": "rely on",
            "ph": "/rɪˈlaɪ ɒn/",
            "pos": "phr v",
            "mean": "依赖",
            "ex": "You can always rely on her to be on time.",
            "tr": "你总可以指望她会准时。",
            "match": [
              "relying on"
            ]
          },
          {
            "word": "metric",
            "ph": "/ˈmetrɪk/",
            "pos": "n",
            "mean": "衡量标准；指标",
            "ex": "Website traffic is an important metric for online businesses.",
            "tr": "网站流量是在线业务的一个重要指标。",
            "match": [
              "metrics"
            ]
          },
          {
            "word": "achievement",
            "ph": "/əˈtʃiːvmənt/",
            "pos": "n",
            "mean": "成就",
            "ex": "Graduating from college was a huge achievement for him.",
            "tr": "大学毕业对他来说是一项巨大的成就。",
            "match": [
              "achievements"
            ]
          },
          {
            "word": "approval",
            "ph": "/əˈpruːvl/",
            "pos": "n",
            "mean": "批准；认可",
            "ex": "He was always seeking his father's approval.",
            "tr": "他总是在寻求他父亲的认可。",
            "match": [
              "approval"
            ]
          },
          {
            "word": "self-reflection",
            "ph": "/self rɪˈflekʃn/",
            "pos": "n",
            "mean": "自我反思",
            "ex": "Journaling can be a useful tool for self-reflection.",
            "tr": "写日记可以成为自我反思的有用工具。",
            "match": [
              "self-reflection"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "Seeking validation from within is only one piece of the puzzle. The second piece of the puzzle is knowing how to process your emotions. I used to use my phone as an escape, a way to distract myself from uncomfortable emotions like boredom, anxiety, but that wasn't processing those emotions. It was just numbing them.",
        "cn": "从内在寻求认可只是拼图的一块。拼图的第二块是知道如何处理你的情绪。我过去常常用我的手机作为一种逃避，一种分散自己注意力、不去感受像无聊、焦虑等不舒服情绪的方式，但那不是在处理那些情绪。那只是在麻痹它们。",
        "vocab": [
          {
            "word": "piece of the puzzle",
            "ph": "/piːs əv ðə ˈpʌzl/",
            "pos": "idiom",
            "mean": "谜题的一块（指问题的一部分）",
            "ex": "The new evidence was the final piece of the puzzle that solved the case.",
            "tr": "新的证据是解开此案的最后一块拼图。",
            "match": [
              "piece of the puzzle"
            ]
          },
          {
            "word": "escape",
            "ph": "/ɪˈskeɪp/",
            "pos": "n",
            "mean": "逃避（的方式）",
            "ex": "For him, reading books is an escape from the stress of daily life.",
            "tr": "对他来说，读书是一种逃避日常生活压力的方式。",
            "match": [
              "escape"
            ]
          },
          {
            "word": "boredom",
            "ph": "/ˈbɔːrdəm/",
            "pos": "n",
            "mean": "无聊",
            "ex": "He started a new hobby to escape the boredom of his routine.",
            "tr": "他开始了一个新爱好以摆脱他日常的无聊。",
            "match": [
              "boredom"
            ]
          },
          {
            "word": "anxiety",
            "ph": "/æŋˈzaɪəti/",
            "pos": "n",
            "mean": "焦虑",
            "ex": "He suffers from anxiety before big exams.",
            "tr": "他在大考前会感到焦虑。",
            "match": [
              "anxiety"
            ]
          },
          {
            "word": "numb",
            "ph": "/nʌm/",
            "pos": "v",
            "mean": "使麻木",
            "ex": "The cold wind began to numb his fingers.",
            "tr": "寒风开始使他的手指麻木。",
            "match": [
              "numbing"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "When I finally put the phone down, I was forced to confront what I was really feeling. Things like journaling, meditating, and talking to loved ones helped me with the discomfort and anxiety I was feeling. Having the space and time away from social media made me discover the biggest lesson, which was how to regulate my emotions without using social media. And that was key.",
        "cn": "当我最终放下手机时，我被迫面对我真正感受到的东西。像写日记、冥想和与亲人交谈这样的事情帮助我处理我感到的不适和焦虑。拥有远离社交媒体的空间和时间让我发现了最重要的一课，那就是如何在不使用社交媒体的情况下调节我的情绪。而那正是关键。",
        "vocab": [
          {
            "word": "put the phone down",
            "ph": "/pʊt ðə foʊn daʊn/",
            "pos": "phr v",
            "mean": "放下手机",
            "ex": "It's important to put the phone down during dinner and talk to your family.",
            "tr": "在晚餐时放下手机和家人交谈是很重要的。",
            "match": [
              "put the phone down"
            ]
          },
          {
            "word": "confront",
            "ph": "/kənˈfrʌnt/",
            "pos": "v",
            "mean": "面对",
            "ex": "You need to confront your fears in order to overcome them.",
            "tr": "你需要面对你的恐惧才能克服它们。",
            "match": [
              "confront"
            ]
          },
          {
            "word": "journaling",
            "ph": "/ˈdʒɜːrnəlɪŋ/",
            "pos": "n",
            "mean": "写日记",
            "ex": "She finds that journaling helps her to process her thoughts and feelings.",
            "tr": "她发现写日记有助于她处理自己的思绪和感受。",
            "match": [
              "journaling"
            ]
          },
          {
            "word": "loved ones",
            "ph": "/lʌvd wʌnz/",
            "pos": "n phr",
            "mean": "亲人",
            "ex": "He spent the holidays surrounded by his loved ones.",
            "tr": "他在亲人的环绕中度过了假期。",
            "match": [
              "loved ones"
            ]
          },
          {
            "word": "discomfort",
            "ph": "/dɪsˈkʌmfərt/",
            "pos": "n",
            "mean": "不适",
            "ex": "He experienced some discomfort in his stomach after the large meal.",
            "tr": "大餐后，他的胃感到一些不适。",
            "match": [
              "discomfort"
            ]
          },
          {
            "word": "regulate",
            "ph": "/ˈreɡjuleɪt/",
            "pos": "v",
            "mean": "调节",
            "ex": "Learning to regulate your emotions is a key part of maturity.",
            "tr": "学会调节你的情绪是成熟的关键部分。",
            "match": [
              "regulate"
            ]
          },
          {
            "word": "key",
            "ph": "/kiː/",
            "pos": "adj",
            "mean": "关键的",
            "ex": "Communication is key to a successful relationship.",
            "tr": "沟通是成功关系的关键。",
            "match": [
              "key"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "Once you understand what social media has been replacing in your life, you realize that filling those needs authentically is both challenging and incredibly rewarding. So ask yourself this, what are you really seeking when you open social media? Let me know in the comments below.",
        "cn": "一旦你理解了社交媒体在你生活中一直在取代什么，你就会意识到，真诚地填补那些需求既具挑战性，又非常有回报。所以问问自己这个问题，当你打开社交媒体时，你真正在寻求什么？在下面的评论中告诉我。",
        "vocab": [
          {
            "word": "once",
            "ph": "/wʌns/",
            "pos": "conj",
            "mean": "一旦",
            "ex": "Once you start, you won't be able to stop.",
            "tr": "你一旦开始，就停不下来了。",
            "match": [
              "Once"
            ]
          },
          {
            "word": "authentically",
            "ph": "/ɔːˈθentɪkli/",
            "pos": "adv",
            "mean": "真诚地；真实地",
            "ex": "It's important to live your life authentically and be true to yourself.",
            "tr": "真实地生活并忠于自己是很重要的。",
            "match": [
              "authentically"
            ]
          },
          {
            "word": "challenging",
            "ph": "/ˈtʃæləndʒɪŋ/",
            "pos": "adj",
            "mean": "有挑战性的",
            "ex": "Climbing that mountain was a very challenging but rewarding experience.",
            "tr": "攀登那座山是一次非常有挑战性但也有回报的经历。",
            "match": [
              "challenging"
            ]
          },
          {
            "word": "rewarding",
            "ph": "/rɪˈwɔːrdɪŋ/",
            "pos": "adj",
            "mean": "有回报的",
            "ex": "Teaching can be a very rewarding career.",
            "tr": "教书可以是一个非常有回报的职业。",
            "match": [
              "rewarding"
            ]
          },
          {
            "word": "seek",
            "ph": "/siːk/",
            "pos": "v",
            "mean": "寻求",
            "ex": "Many people seek fame and fortune, but not all find it.",
            "tr": "许多人寻求名利，但并非所有人都能找到。",
            "match": [
              "seeking"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "2008_financial_crisis_full",
    "title": "The 2008 Financial Crisis: How It Happened",
    "info": {
      "author": "Video Transcript",
      "source": "Economics Explained",
      "level": "C1",
      "tags": [
        "economics",
        "history",
        "finance",
        "money",
        "crisis"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "September 2008, a 158-year-old bank collapsed overnight. $600 billion gone. Retirement accounts vanish. Millions lose jobs. But what if I told you the real cause started with a lie so simple, you could fit it on a billboard? \"Why rent when you can own?\" Cue the upbeat music.",
        "cn": "2008年9月，一家拥有158年历史的银行一夜之间倒闭。6000亿美元化为乌有。退休账户消失。数百万人失业。但如果我告诉你，真正的起因始于一个简单到可以写在广告牌上的谎言呢？“既然可以拥有，为什么要租房？”提示音响起，欢快的音乐随之而来。",
        "vocab": [
          {
            "word": "collapse",
            "ph": "/kəˈlæps/",
            "pos": "v",
            "mean": "倒闭；崩溃",
            "ex": "The company collapsed after the scandal.",
            "tr": "丑闻曝光后，公司倒闭了。",
            "match": [
              "collapsed"
            ]
          },
          {
            "word": "vanish",
            "ph": "/ˈvænɪʃ/",
            "pos": "v",
            "mean": "消失",
            "ex": "All his savings vanished overnight.",
            "tr": "他的所有积蓄一夜之间消失了。",
            "match": [
              "vanish"
            ]
          },
          {
            "word": "cue",
            "ph": "/kjuː/",
            "pos": "v",
            "mean": "提示（某事发生）；给…提示信号",
            "ex": "Cue the lights.",
            "tr": "提示灯光师打灯。",
            "match": [
              "Cue"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "It's 2002. America is still nursing a hangover from the dot-com crash. 9-11 just sucker punched the economy. And Wall Street? Kinda twitchy. But don't worry, the Federal Reserve has a plan. Slash interest rates to basically zero. Boom. Money's cheap. Borrowing is easy. And suddenly, everyone's favorite national pastime isn't baseball anymore. It's buying a house.",
        "cn": "那是2002年。美国仍在从互联网泡沫破裂的宿醉中恢复。9·11事件刚刚重创了经济。华尔街呢？有点焦虑不安。但别担心，美联储有一个计划。将利率大幅削减至基本为零。轰。钱变便宜了。借贷变得容易了。突然间，每个人最喜欢的国民消遣不再是棒球了。而是买房。",
        "vocab": [
          {
            "word": "nurse a hangover",
            "ph": "/nɜːrs ə ˈhæŋoʊvər/",
            "pos": "idiom",
            "mean": "宿醉未醒（比喻从打击中恢复）",
            "ex": "The economy is still nursing a hangover from the recession.",
            "tr": "经济仍在从衰退中恢复。",
            "match": [
              "nursing a hangover"
            ]
          },
          {
            "word": "sucker punch",
            "ph": "/ˈsʌkər pʌntʃ/",
            "pos": "v",
            "mean": "突袭；（冷不防地）重击",
            "ex": "The bad news really sucker punched him.",
            "tr": "这坏消息真的给了他沉重一击。",
            "match": [
              "sucker punched"
            ]
          },
          {
            "word": "twitchy",
            "ph": "/ˈtwɪtʃi/",
            "pos": "adj",
            "mean": "焦虑的；紧张不安的",
            "ex": "Investors are getting twitchy about the market volatility.",
            "tr": "投资者对市场波动感到紧张不安。",
            "match": [
              "twitchy"
            ]
          },
          {
            "word": "slash",
            "ph": "/slæʃ/",
            "pos": "v",
            "mean": "大幅削减",
            "ex": "They had to slash prices to sell the goods.",
            "tr": "他们不得不大幅降价来销售商品。",
            "match": [
              "Slash"
            ]
          },
          {
            "word": "pastime",
            "ph": "/ˈpæstaɪm/",
            "pos": "n",
            "mean": "消遣；娱乐",
            "ex": "Gardening is a popular pastime.",
            "tr": "园艺是一种流行的消遣。",
            "match": [
              "pastime"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "Congratulations. You're approved for $500,000? But we make $40,000 a year. Not a problem. Adjustable rate. Balloon payment. Ninja loan. Wait, what's a ninja loan? No Income. No Job. No Assets. No problem. See, back in the early 2000s, home ownership wasn't just a roof and four walls. It was the American dream. Immense stability. Status. Suburban bliss.",
        "cn": "恭喜。你获批了50万美元贷款？但我们年收入只有4万美元。没问题。可调利率。气球式付款（期末大额偿还）。忍者贷款。等等，什么是忍者贷款？无收入。无工作。无资产。没问题。你看，在21世纪初，拥有住房不仅仅是拥有屋顶和四面墙。它是美国梦。巨大的稳定性。地位。郊区的幸福。",
        "vocab": [
          {
            "word": "adjustable rate",
            "ph": "/əˈdʒʌstəbl reɪt/",
            "pos": "n phr",
            "mean": "可调利率（通常指浮动利率抵押贷款）",
            "ex": "Adjustable rate mortgages can be risky if interest rates rise.",
            "tr": "如果利率上升，可调利率抵押贷款可能会有风险。",
            "match": [
              "Adjustable rate"
            ]
          },
          {
            "word": "balloon payment",
            "ph": "/bəˈluːn ˈpeɪmənt/",
            "pos": "n phr",
            "mean": "气球式付款（贷款期末的一次性大额还款）",
            "ex": "He couldn't afford the balloon payment at the end of the loan term.",
            "tr": "他付不起贷款期末的那笔大额款项。",
            "match": [
              "Balloon payment"
            ]
          },
          {
            "word": "Ninja loan",
            "ph": "/ˈnɪndʒə loʊn/",
            "pos": "n phr",
            "mean": "忍者贷款（No Income, No Job, No Assets）",
            "ex": "Ninja loans were a hallmark of the subprime crisis.",
            "tr": "忍者贷款是次贷危机的一个标志。",
            "match": [
              "Ninja loan"
            ]
          },
          {
            "word": "immense",
            "ph": "/ɪˈmens/",
            "pos": "adj",
            "mean": "巨大的；极大的",
            "ex": "They made an immense amount of money.",
            "tr": "他们赚了巨额的钱。",
            "match": [
              "Imment"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "And the message being pumped through every ad, billboard and mortgage seminar was loud and clear. \"Why rent when you can own?\" Banks agreed. In fact, they agreed so hard they started throwing money at people like it was a game show and everyone was winning. Enter the subprime mortgage. Translation: Loans for people with bad credit? Unstable income or a vague idea of what money even is.",
        "cn": "每一个广告、广告牌和抵押贷款研讨会都在大声而清晰地灌输这个信息：“既然可以拥有，为什么要租房？”银行同意了。事实上，他们非常同意，以至于开始像游戏节目一样把钱扔给人们，每个人都在赢。次级抵押贷款登场了。翻译一下：给信用不良的人的贷款？收入不稳定或者对金钱概念模糊的人。",
        "vocab": [
          {
            "word": "subprime mortgage",
            "ph": "/ˌsʌbˈpraɪm ˈmɔːrɡɪdʒ/",
            "pos": "n phr",
            "mean": "次级抵押贷款",
            "ex": "Subprime mortgages carry higher interest rates due to higher risk.",
            "tr": "次级抵押贷款由于风险较高，利率也较高。",
            "match": [
              "subprime mortgage"
            ]
          },
          {
            "word": "vague",
            "ph": "/veɪɡ/",
            "pos": "adj",
            "mean": "模糊的",
            "ex": "He had only a vague idea of how to proceed.",
            "tr": "他对如何继续只有一个模糊的想法。",
            "match": [
              "vague"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Bad credit? No credit? Living in a van? You, sir, qualify for a luxury condo. Should I be worried about paying this back? Not your problem. If you default, we just sell the house for more. It was a housing gold rush. A frenzy. Everyone was buying. Prices skyrocketed. Your neighbor's house doubled in value in six months? Normal.",
        "cn": "信用差？没信用？住在货车里？先生，你有资格买豪华公寓。我应该担心还钱的事吗？不是你的问题。如果你违约，我们就把房子卖个更高的价钱。这是一场房地产淘金热。一种狂热。每个人都在买。价格飙升。你邻居的房子六个月内价值翻倍？很正常。",
        "vocab": [
          {
            "word": "qualify for",
            "ph": "/ˈkwɑːlɪfaɪ fɔːr/",
            "pos": "phr v",
            "mean": "有资格；符合条件",
            "ex": "You qualify for a lower interest rate.",
            "tr": "你有资格获得更低的利率。",
            "match": [
              "qualify for"
            ]
          },
          {
            "word": "default",
            "ph": "/dɪˈfɔːlt/",
            "pos": "v",
            "mean": "违约（不履行还款义务）",
            "ex": "If borrowers default, the bank seizes the property.",
            "tr": "如果借款人违约，银行会扣押财产。",
            "match": [
              "default"
            ]
          },
          {
            "word": "frenzy",
            "ph": "/ˈfrenzi/",
            "pos": "n",
            "mean": "狂热；疯狂",
            "ex": "The sale created a buying frenzy.",
            "tr": "这次促销引发了抢购狂潮。",
            "match": [
              "frenzy"
            ]
          },
          {
            "word": "skyrocket",
            "ph": "/ˈskaɪrɑːkɪt/",
            "pos": "v",
            "mean": "猛涨；剧增",
            "ex": "Housing prices skyrocketed during the bubble.",
            "tr": "泡沫期间房价猛涨。",
            "match": [
              "skyrocketed"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Even McDonald's part-timers and baristas with $5 in savings are approved for mortgages. Just a normal day in the 2000s. And the rules? Oh, those got launched straight out the window. Traditional lending standards? Too slow. Risk assessments? Too boring. Down payments? Optional. If you had a pulse, you had a mortgage.",
        "cn": "就连麦当劳的兼职员工和只有5美元存款的咖啡师也获批了抵押贷款。这只是21世纪初平常的一天。规则呢？哦，那些早就被抛到九霄云外了。传统的贷款标准？太慢了。风险评估？太无聊了。首付？可有可无。如果你有脉搏，你就能拿到抵押贷款。",
        "vocab": [
          {
            "word": "launch out the window",
            "ph": "/lɔːntʃ aʊt ðə ˈwɪndoʊ/",
            "pos": "idiom",
            "mean": "抛之脑后；完全无视（通常用 throw out the window）",
            "ex": "Common sense was launched out the window.",
            "tr": "常识被完全抛在脑后。",
            "match": [
              "launched straight out the window"
            ]
          },
          {
            "word": "risk assessment",
            "ph": "/rɪsk əˈsesmənt/",
            "pos": "n phr",
            "mean": "风险评估",
            "ex": "Banks failed to do proper risk assessments.",
            "tr": "银行未能进行适当的风险评估。",
            "match": [
              "Risk assessments"
            ]
          },
          {
            "word": "down payment",
            "ph": "/daʊn ˈpeɪmənt/",
            "pos": "n phr",
            "mean": "首付",
            "ex": "They made a small down payment on the car.",
            "tr": "他们为这辆车付了一小笔首付。",
            "match": [
              "Down payments"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "People bought houses like ramen noodles. Lenders printed loans like monopoly money. Mortgage brokers made commissions faster than they could say bubble. Behind all the buzz was a blind faith that housing prices would always go up because they always had, until now. But beneath the open houses and granite countertops, a question lingered. What could possibly go wrong? Spoiler. Everything.",
        "cn": "人们买房像买方便面一样随意。贷款机构像印大富翁纸币一样发放贷款。抵押贷款经纪人赚取佣金的速度比说出“泡沫”这个词还要快。在所有这些喧嚣背后，是一种盲目的信念：房价总是会上涨，因为它们一直如此，直到现在。但在开放日和花岗岩台面之下，一个问题挥之不去。究竟会出什么错？剧透一下。一切都会出错。",
        "vocab": [
          {
            "word": "monopoly money",
            "ph": "/məˈnɑːpəli ˈmʌni/",
            "pos": "idiom",
            "mean": "（像大富翁游戏里的）假钱；不值钱的钱",
            "ex": "They were spending cash like it was monopoly money.",
            "tr": "他们花钱如流水，好像那是假钱一样。",
            "match": [
              "monopoly money"
            ]
          },
          {
            "word": "commission",
            "ph": "/kəˈmɪʃn/",
            "pos": "n",
            "mean": "佣金",
            "ex": "Brokers earn a commission on every sale.",
            "tr": "经纪人从每笔销售中赚取佣金。",
            "match": [
              "commissions"
            ]
          },
          {
            "word": "blind faith",
            "ph": "/blaɪnd feɪθ/",
            "pos": "n phr",
            "mean": "盲目信仰",
            "ex": "Investors put blind faith in the market.",
            "tr": "投资者对市场盲目信任。",
            "match": [
              "blind faith"
            ]
          },
          {
            "word": "linger",
            "ph": "/ˈlɪŋɡər/",
            "pos": "v",
            "mean": "徘徊；挥之不去",
            "ex": "The smell of smoke lingered in the room.",
            "tr": "房间里弥漫着烟味挥之不去。",
            "match": [
              "lingered"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "But we're just getting started. By 2005, buying a house wasn't about stability anymore. It was about flipping it like a pancake and hoping the next buyer paid double. Real estate wasn't shelter. It was a lottery ticket. \"I teach phonics during the day and buy condos at night. I just bought my third house with zero down. I don't even live in any of them.\"",
        "cn": "但我们才刚刚开始。到了2005年，买房不再是为了稳定。而是像翻煎饼一样转手倒卖，并希望下一个买家付双倍的价钱。房地产不是住所。它是彩票。“我白天教自然拼读，晚上买公寓。我刚零首付买了第三套房子。我甚至不住在里面。”",
        "vocab": [
          {
            "word": "flip",
            "ph": "/flɪp/",
            "pos": "v",
            "mean": "（快速买进卖出）炒作；倒卖",
            "ex": "House flipping became a popular way to get rich quick.",
            "tr": "炒房成为了一种快速致富的流行方式。",
            "match": [
              "flipping"
            ]
          },
          {
            "word": "lottery ticket",
            "ph": "/ˈlɑːtəri ˈtɪkɪt/",
            "pos": "n phr",
            "mean": "彩票（比喻投机）",
            "ex": "Buying that stock was like buying a lottery ticket.",
            "tr": "买那只股票就像买彩票一样。",
            "match": [
              "lottery ticket"
            ]
          },
          {
            "word": "zero down",
            "ph": "/ˈzɪroʊ daʊn/",
            "pos": "phr",
            "mean": "零首付",
            "ex": "You can drive this car away for zero down.",
            "tr": "你可以零首付把这辆车开走。",
            "match": [
              "zero down"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "This wasn't investing. It was a national obsession. Buy, flip, profit, repeat. And the more people joined in, the higher prices soared. The higher they soared, the more people rushed in. It was like trying to put out a fire by throwing gasoline at it and everyone had a match.",
        "cn": "这不是投资。这是全民痴迷。买入，倒手，获利，重复。参与的人越多，价格涨得越高。价格涨得越高，涌入的人就越多。这就像试图用汽油去灭火，而每个人手里都拿着一根火柴。",
        "vocab": [
          {
            "word": "obsession",
            "ph": "/əbˈseʃn/",
            "pos": "n",
            "mean": "痴迷；着魔",
            "ex": "Football is a national obsession in that country.",
            "tr": "足球是那个国家的全民痴迷。",
            "match": [
              "obsession"
            ]
          },
          {
            "word": "soar",
            "ph": "/sɔːr/",
            "pos": "v",
            "mean": "飙升；高飞",
            "ex": "Eagle soared high above the mountains.",
            "tr": "鹰在群山之上高飞。（此处指价格飙升）",
            "match": [
              "soared"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "But beneath the red-hot exterior, rot? Those subprime mortgages everyone was gorging on? They were bad. Like actually bad. High risk, low doc, barely verified debt. But Wall Street had a magic trick. They bundled all that junk together, slapped a label on it and sold it to investors as safe. Introducing mortgage-backed securities. Now with 80% more lies.",
        "cn": "但在火热的外表之下，是腐烂？每个人都在狼吞虎咽的那些次级抵押贷款？它们很糟糕。真的很糟糕。高风险，低文件要求（无需提供充分证明），几乎未经核实的债务。但华尔街有一个魔术。他们把所有那些垃圾捆绑在一起，贴上标签，然后作为安全资产卖给投资者。隆重介绍：抵押贷款支持证券。现在谎言含量增加了80%。",
        "vocab": [
          {
            "word": "rot",
            "ph": "/rɑːt/",
            "pos": "n",
            "mean": "腐烂；腐败",
            "ex": "There was a lot of rot beneath the surface of the company.",
            "tr": "公司表面之下有很多腐败。",
            "match": [
              "rot"
            ]
          },
          {
            "word": "gorge on",
            "ph": "/ɡɔːrdʒ ɒn/",
            "pos": "phr v",
            "mean": "狼吞虎咽；贪婪地吞食",
            "ex": "The market gorged on cheap debt.",
            "tr": "市场贪婪地吞噬着廉价债务。",
            "match": [
              "gorging on"
            ]
          },
          {
            "word": "low doc",
            "ph": "/loʊ dɑːk/",
            "pos": "adj phr",
            "mean": "低文件要求（指不需要借款人提供太多收入证明的贷款）",
            "ex": "Low doc loans are very risky for lenders.",
            "tr": "低文件要求贷款对贷款人来说风险很大。",
            "match": [
              "low dock"
            ]
          },
          {
            "word": "mortgage-backed securities",
            "ph": "/ˈmɔːrɡɪdʒ bækt sɪˈkjʊrətiz/",
            "pos": "n phr",
            "mean": "抵押贷款支持证券 (MBS)",
            "ex": "MBS are investment products backed by a pool of mortgages.",
            "tr": "MBS是由抵押贷款池支持的投资产品。",
            "match": [
              "mortgage-backed securities"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "How do you make toxic loans look like gold? Easy. You get the ratings agencies to call them triple A. \"This one's got bankrupt baristas and unemployed gym bros.\" \"Ah, seems alright.\" Here's the part they don't put on the brochure. The ratings agencies were getting paid by the banks they were rating. It's like hiring a food critic, then telling them they won't get paid unless they call your raw chicken Michelin Starred.",
        "cn": "如何让有毒贷款看起来像金子？很简单。你让评级机构把它们评为AAA级。“这个里面有破产的咖啡师和失业的健身房兄弟。”“啊，看起来没问题。”这是他们没有写在宣传册上的部分。评级机构是由他们正在评级的银行支付费用的。这就像雇佣一个美食评论家，然后告诉他们，除非他们把你生的鸡肉称为米其林星级，否则他们就拿不到钱。",
        "vocab": [
          {
            "word": "toxic",
            "ph": "/ˈtɑːksɪk/",
            "pos": "adj",
            "mean": "有毒的（指不良资产）",
            "ex": "The bank held billions in toxic assets.",
            "tr": "银行持有数十亿的不良资产。",
            "match": [
              "toxic"
            ]
          },
          {
            "word": "Triple A",
            "ph": "/ˈtrɪpl eɪ/",
            "pos": "n",
            "mean": "AAA级（最高信用评级）",
            "ex": "Only the safest bonds get a Triple A rating.",
            "tr": "只有最安全的债券才能获得AAA评级。",
            "match": [
              "triple A"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 12,
        "en": "Behind closed doors, the traders knew. This bundle is a sack of shit. But Wall Street wasn't done cooking. They took those shaky mortgage bundles and blended them into something even more complicated. Collateralized debt obligations. CDOs. Through financial alchemy, garbage loans became investment grade assets.",
        "cn": "在紧闭的门后，交易员们知道。这一捆就是一袋垃圾。但华尔街还没烹饪完。他们拿着那些摇摇欲坠的抵押贷款包，把它们混合成更复杂的东西。债务担保证券。CDO。通过金融炼金术，垃圾贷款变成了投资级资产。",
        "vocab": [
          {
            "word": "shaky",
            "ph": "/ˈʃeɪki/",
            "pos": "adj",
            "mean": "不稳固的；不可靠的",
            "ex": "The business plan looks a bit shaky.",
            "tr": "这个商业计划看起来有点不可靠。",
            "match": [
              "shaky"
            ]
          },
          {
            "word": "Collateralized Debt Obligations",
            "ph": "/kəˈlætərəlaɪzd det ˌɑːblɪˈɡeɪʃnz/",
            "pos": "n phr",
            "mean": "债务担保证券 (CDO)",
            "ex": "CDOs were a major instrument in the financial crash.",
            "tr": "CDO是金融崩溃中的主要工具。",
            "match": [
              "Collateralized debt obligations",
              "CDOs"
            ]
          },
          {
            "word": "alchemy",
            "ph": "/ˈælkəmi/",
            "pos": "n",
            "mean": "炼金术（比喻化腐朽为神奇）",
            "ex": "It was pure financial alchemy.",
            "tr": "这纯粹是金融炼金术。",
            "match": [
              "alchemy"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 13,
        "en": "Actually, not everyone was fooled. A handful of investors, oddballs, skeptics, troublemakers, read the fine print. They saw the rot inside the boom. And instead of buying in, they asked a bold question. \"What if we bet against it?\" The problem? There was no product that lets you do that. So they marched into Wall Street's marble fortresses and said, \"These loans are garbage. We want to short them. Can you build something that pays us if they go bust?\"",
        "cn": "实际上，并非所有人都被愚弄了。少数投资者，那些怪人、怀疑论者、麻烦制造者，阅读了细则。他们看到了繁荣内部的腐烂。他们没有买入，而是提出了一个大胆的问题。“如果我们赌它输呢？”问题是？没有产品能让你那样做。所以他们走进华尔街的大理石堡垒说：“这些贷款是垃圾。我们要看空它们。你能造出一个如果它们破产就付钱给我们的东西吗？”",
        "vocab": [
          {
            "word": "oddball",
            "ph": "/ˈɑːdbɔːl/",
            "pos": "n",
            "mean": "怪人",
            "ex": "He's a bit of an oddball, but he's a genius.",
            "tr": "他有点怪，但他是个天才。",
            "match": [
              "oddballs"
            ]
          },
          {
            "word": "fine print",
            "ph": "/faɪn prɪnt/",
            "pos": "n",
            "mean": "附属细则（通常包含不利条款的小字）",
            "ex": "Always read the fine print before signing a contract.",
            "tr": "签合同前一定要阅读细则。",
            "match": [
              "fine print"
            ]
          },
          {
            "word": "short",
            "ph": "/ʃɔːrt/",
            "pos": "v",
            "mean": "做空（卖空）",
            "ex": "He decided to short the stock market.",
            "tr": "他决定做空股票市场。",
            "match": [
              "short"
            ]
          },
          {
            "word": "go bust",
            "ph": "/ɡoʊ bʌst/",
            "pos": "idiom",
            "mean": "破产",
            "ex": "If the business goes bust, we lose everything.",
            "tr": "如果生意破产，我们就失去了一切。",
            "match": [
              "go bust"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 14,
        "en": "Wall Street smelled easy money. They didn't believe the investors. But they loved the idea of collecting steady fees on something they thought could never fail. So they got to work and cooked up the thing that would eventually blow up the world economy. Credit default swaps. Insurance contracts that paid out if those mortgage-backed investments went bad.",
        "cn": "华尔街闻到了快钱的味道。他们不相信那些投资者。但他们喜欢这种可以从他们认为永远不会失败的东西上收取稳定费用的主意。于是他们开始工作，炮制出了最终将炸毁世界经济的东西。信用违约互换。一种如果那些抵押贷款支持的投资变坏就会赔付的保险合同。",
        "vocab": [
          {
            "word": "cook up",
            "ph": "/kʊk ʌp/",
            "pos": "phr v",
            "mean": "炮制；编造",
            "ex": "They cooked up a scheme to avoid taxes.",
            "tr": "他们炮制了一个避税的计划。",
            "match": [
              "cooked up"
            ]
          },
          {
            "word": "Credit default swaps",
            "ph": "/ˈkredɪt dɪˈfɔːlt swɑːps/",
            "pos": "n phr",
            "mean": "信用违约互换 (CDS)",
            "ex": "Credit default swaps act like insurance policies for bonds.",
            "tr": "信用违约互换就像债券的保险单。",
            "match": [
              "Credit default swaps"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 15,
        "en": "The weird thing is, you didn't have to own the investment to buy the insurance. It was like buying life insurance on your neighbor's grandma and rooting for her to slip down the stairs tomorrow. The whole system was a Jenga tower made of lies and leverage. Every block, a bad mortgage. Every layer, bigger, riskier bet. And at the very top? Cheers to another record bonus.",
        "cn": "奇怪的是，你不必拥有该投资就可以购买保险。这就像为你邻居的奶奶买人寿保险，然后期待她明天滑下楼梯。整个系统是一个由谎言和杠杆堆砌而成的叠叠乐塔。每一块积木，都是一笔坏账抵押贷款。每一层，都是更大、风险更高的赌注。而在最顶端？为又一次创纪录的奖金干杯。",
        "vocab": [
          {
            "word": "root for",
            "ph": "/ruːt fɔːr/",
            "pos": "phr v",
            "mean": "支持；为…加油（此处指希望某事发生）",
            "ex": "I'm rooting for the underdog team.",
            "tr": "我支持那支不被看好的队伍。",
            "match": [
              "rooting for"
            ]
          },
          {
            "word": "Jenga tower",
            "ph": "/ˈdʒeŋɡə taʊər/",
            "pos": "n phr",
            "mean": "叠叠乐塔（比喻摇摇欲坠的结构）",
            "ex": "The economy was a Jenga tower waiting to fall.",
            "tr": "经济就像一座等待倒塌的叠叠乐塔。",
            "match": [
              "Jenga tower"
            ]
          },
          {
            "word": "leverage",
            "ph": "/ˈlevərɪdʒ/",
            "pos": "n",
            "mean": "杠杆作用（借贷投资）",
            "ex": "Too much leverage caused the bank to fail.",
            "tr": "过高的杠杆导致银行倒闭。",
            "match": [
              "leverage"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 16,
        "en": "Who needs ethics when easy money is flowing? Whistleblowers were ignored. Regulators were dozing off. And the people in charge? Too rich to care. Too greedy to stop? The party raged on while the floor quietly cracked beneath them. At first it was a whisper. A missed mortgage here. A foreclosure there. A condo in Vegas sitting empty. But then came the wave.",
        "cn": "当快钱源源不断时，谁还需要道德？举报人被无视。监管机构在打瞌睡。而掌权的人呢？太有钱了不在乎。太贪婪了停不下来？派对狂欢继续，而地板在他们脚下悄悄裂开。起初只是耳语。这里有一笔抵押贷款断供。那里有一个止赎。维加斯的一间公寓空置着。但随后浪潮来了。",
        "vocab": [
          {
            "word": "whistleblower",
            "ph": "/ˈwɪslbloʊər/",
            "pos": "n",
            "mean": "举报人；吹哨人",
            "ex": "The whistleblower revealed the company's illegal activities.",
            "tr": "举报人揭露了公司的非法活动。",
            "match": [
              "Whistleblowers"
            ]
          },
          {
            "word": "doze off",
            "ph": "/doʊz ɔːf/",
            "pos": "phr v",
            "mean": "打瞌睡",
            "ex": "He dozed off during the boring lecture.",
            "tr": "他在无聊的讲座中打瞌睡了。",
            "match": [
              "dozing off"
            ]
          },
          {
            "word": "foreclosure",
            "ph": "/fɔːrˈkloʊʒər/",
            "pos": "n",
            "mean": "止赎（因无法还贷而被银行收回房产）",
            "ex": "Foreclosure rates spiked during the crisis.",
            "tr": "危机期间止赎率飙升。",
            "match": [
              "foreclosure"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 17,
        "en": "And suddenly, the unthinkable became the headline. \"Home prices are falling.\" \"Housing always goes up. It's basic economics.\" \"That's not supposed to happen.\" For years, the housing market had been a Jenga tower made of lies, leverage, and wild optimism. But in 2007, someone pulled the wrong block. The subprime loans, those risky rotten deals wrapped in financial tinsel, started to implode.",
        "cn": "突然间，不可思议的事情成了头条新闻。“房价在下跌。”“房价总是会上涨。这是基本经济学。”“这不应该发生。”多年来，房地产市场一直是一座由谎言、杠杆和狂野乐观主义堆砌而成的叠叠乐塔。但在2007年，有人抽错了积木。次级贷款，那些包裹在金融金属箔中的风险极高的腐烂交易，开始内爆。",
        "vocab": [
          {
            "word": "unthinkable",
            "ph": "/ʌnˈθɪŋkəbl/",
            "pos": "adj",
            "mean": "不可想象的",
            "ex": "The unthinkable happened: they lost the game.",
            "tr": "不可想象的事情发生了：他们输掉了比赛。",
            "match": [
              "unthinkable"
            ]
          },
          {
            "word": "tinsel",
            "ph": "/ˈtɪnsl/",
            "pos": "n",
            "mean": "金属箔（装饰物）；（比喻）华而不实的东西",
            "ex": "Beneath the tinsel of Hollywood lies a tough industry.",
            "tr": "在好莱坞华丽的外表下是一个残酷的行业。",
            "match": [
              "tinsel"
            ]
          },
          {
            "word": "implode",
            "ph": "/ɪmˈploʊd/",
            "pos": "v",
            "mean": "内爆；（比喻）自行崩溃",
            "ex": "The corrupt regime finally imploded.",
            "tr": "腐败政权最终崩溃了。",
            "match": [
              "implode"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 18,
        "en": "And the mortgage-backed securities built on them? Yeah, they were ticking time bombs. And they exploded. Banks that had stuffed their portfolios with safe assets suddenly realized they were holding radioactive garbage. The AAA rated bundles? Actually, financial plutonium. \"We can't sell this junk.\" \"Mark it to zero.\" But that means... \"Yeah, we're screwed.\"",
        "cn": "那些建立在它们之上的抵押贷款支持证券呢？是的，它们是定时炸弹。而且它们爆炸了。那些用“安全”资产填满投资组合的银行突然意识到他们手里拿的是放射性垃圾。那些AAA评级的捆绑包？实际上是金融钚。“我们卖不掉这些垃圾。”“把它记为零。”但那就意味着……“是的，我们完蛋了。”",
        "vocab": [
          {
            "word": "portfolio",
            "ph": "/pɔːrtˈfoʊlioʊ/",
            "pos": "n",
            "mean": "投资组合",
            "ex": "He has a diversified investment portfolio.",
            "tr": "他有一个多元化的投资组合。",
            "match": [
              "portfolios"
            ]
          },
          {
            "word": "radioactive",
            "ph": "/ˌreɪdioʊˈæktɪv/",
            "pos": "adj",
            "mean": "有放射性的（比喻极其危险、无人敢碰）",
            "ex": "That asset is radioactive; no one wants to buy it.",
            "tr": "那项资产有毒，没人想买它。",
            "match": [
              "radioactive"
            ]
          },
          {
            "word": "Mark it to zero",
            "ph": "/mɑːrk ɪt tuː ˈzɪroʊ/",
            "pos": "phr",
            "mean": "（估值）归零",
            "ex": "The asset is worthless, mark it to zero.",
            "tr": "这项资产一文不值，把它估值为零。",
            "match": [
              "Then market to zero",
              "Mark it to zero"
            ]
          },
          {
            "word": "screwed",
            "ph": "/skruːd/",
            "pos": "adj",
            "mean": "完蛋了；搞砸了（俚语）",
            "ex": "If we miss this deadline, we are screwed.",
            "tr": "如果我们错过了这个截止日期，我们就完蛋了。",
            "match": [
              "screwed"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 19,
        "en": "Panic spread like wildfire. Hedge funds, bleeding; investment banks, slashing billions in losses. And then, boom. Lehman Brothers, a 158-year-old institution, gone. No bailout, no hero. Just a $600 billion crater in the middle of Wall Street. The message was clear. If Lehman can die, anyone can.",
        "cn": "恐慌像野火一样蔓延。对冲基金在流血；投资银行削减数十亿的损失。然后，轰。雷曼兄弟，一家拥有158年历史的机构，没了。没有救助，没有英雄。只有华尔街中心一个6000亿美元的弹坑。信息很明确。如果雷曼能死，任何人都能。",
        "vocab": [
          {
            "word": "spread like wildfire",
            "ph": "/spred laɪk ˈwaɪərf aɪər/",
            "pos": "idiom",
            "mean": "像野火一样蔓延（迅速传播）",
            "ex": "The rumor spread like wildfire.",
            "tr": "谣言像野火一样迅速传播。",
            "match": [
              "spread like wildfire"
            ]
          },
          {
            "word": "crater",
            "ph": "/ˈkreɪtər/",
            "pos": "n",
            "mean": "弹坑；大坑",
            "ex": "The explosion left a huge crater in the ground.",
            "tr": "爆炸在地上留下了一个巨大的坑。",
            "match": [
              "crater"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 20,
        "en": "Overnight, banks stopped lending to each other. Credit markets froze solid. It was like someone yanked the power cord on the global economy. \"I need a loan to make payroll.\" \"Sorry? No liquidity?\" \"What does that even mean?\" \"It means we're closed. Good luck.\"",
        "cn": "一夜之间，银行停止了相互借贷。信贷市场完全冻结。就像有人拔掉了全球经济的电源线。“我需要贷款来发工资。”“抱歉？没有流动性？”“那到底是什么意思？”“意思是我们要关门了。祝你好运。”",
        "vocab": [
          {
            "word": "yank",
            "ph": "/jæŋk/",
            "pos": "v",
            "mean": "猛拉；猛拔",
            "ex": "He yanked the door open.",
            "tr": "他猛地把门拉开。",
            "match": [
              "yanked"
            ]
          },
          {
            "word": "liquidity",
            "ph": "/lɪˈkwɪdəti/",
            "pos": "n",
            "mean": "流动性（资产变现的能力或可用资金）",
            "ex": "The company faced a liquidity crisis.",
            "tr": "公司面临流动性危机。",
            "match": [
              "liquidity"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 21,
        "en": "Everything jammed. Families couldn't get mortgages? Businesses couldn't make payroll. Investors couldn't cash out. Retirees watched their pensions evaporate in real time. 401Ks, toast, life savings, gone, job market vaporized. By late 2008, it was full collapse mode. Millions unemployed. Foreclosures through the roof.",
        "cn": "一切都卡住了。家庭拿不到抵押贷款？企业无法发放工资。投资者无法套现。退休人员看着他们的养老金实时蒸发。401K（退休计划），完蛋了，毕生积蓄，没了，就业市场汽化了。到了2008年底，进入了全面崩溃模式。数百万人失业。止赎率冲破屋顶（极高）。",
        "vocab": [
          {
            "word": "evaporate",
            "ph": "/ɪˈvæpəreɪt/",
            "pos": "v",
            "mean": "蒸发（消失）",
            "ex": "His confidence evaporated when he saw the test.",
            "tr": "当他看到试卷时，他的信心消失了。",
            "match": [
              "evaporate"
            ]
          },
          {
            "word": "toast",
            "ph": "/toʊst/",
            "pos": "adj",
            "mean": "完蛋了；毁了（俚语）",
            "ex": "If he finds out, I'm toast.",
            "tr": "如果他发现了，我就完蛋了。",
            "match": [
              "toast"
            ]
          },
          {
            "word": "through the roof",
            "ph": "/θruː ðə ruːf/",
            "pos": "idiom",
            "mean": "冲破屋顶；极高",
            "ex": "Prices went through the roof.",
            "tr": "价格涨得离谱。",
            "match": [
              "through the roof"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 22,
        "en": "Eviction notices stacked like junk mail. Soup kitchens, a place where food is offered to hungry and homeless people, couldn't keep up. Unemployment offices looked like disaster relief camps. This wasn't just Wall Street burning. This was Main Street in Freefall. And it didn't stop at the U.S. border.",
        "cn": "驱逐通知像垃圾邮件一样堆积如山。施粥处——一个为饥饿和无家可归者提供食物的地方——供不应求。失业办公室看起来像救灾营地。这不仅仅是华尔街在燃烧。这是普通民众的生活在自由落体。而且这并没有停留在美国边境。",
        "vocab": [
          {
            "word": "eviction notice",
            "ph": "/ɪˈvɪkʃn ˈnoʊtɪs/",
            "pos": "n phr",
            "mean": "驱逐通知（要求搬离住所）",
            "ex": "They received an eviction notice yesterday.",
            "tr": "他们昨天收到了驱逐通知。",
            "match": [
              "Eviction notices"
            ]
          },
          {
            "word": "keep up",
            "ph": "/kiːp ʌp/",
            "pos": "phr v",
            "mean": "跟上；维持",
            "ex": "Supply couldn't keep up with demand.",
            "tr": "供应跟不上需求。",
            "match": [
              "keep up"
            ]
          },
          {
            "word": "Main Street",
            "ph": "/meɪn striːt/",
            "pos": "n",
            "mean": "大街（代指普通民众或实体经济，相对于华尔街）",
            "ex": "The policy helps Wall Street but hurts Main Street.",
            "tr": "这项政策帮助了华尔街但伤害了普通民众。",
            "match": [
              "Main Street"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 23,
        "en": "Iceland's major banks collapse. Tokyo stocks plummet. European leaders scrambled to respond. From London to Reykjavik, Tokyo to Sao Paulo, markets crashed. Banks buckled. Global economies spiraled. The question was no longer, who's next? It was, is the entire system broken? The Great Recession had officially begun.",
        "cn": "冰岛的主要银行倒闭。东京股市暴跌。欧洲领导人争先恐后地做出回应。从伦敦到雷克雅未克，从东京到圣保罗，市场崩盘。银行垮塌。全球经济螺旋式下降。问题不再是谁是下一个？而是，整个系统坏了吗？大萧条正式开始了。",
        "vocab": [
          {
            "word": "plummet",
            "ph": "/ˈplʌmɪt/",
            "pos": "v",
            "mean": "暴跌；垂直落下",
            "ex": "Temperatures plummeted overnight.",
            "tr": "气温一夜之间骤降。",
            "match": [
              "plummet"
            ]
          },
          {
            "word": "scramble",
            "ph": "/ˈskræmbl/",
            "pos": "v",
            "mean": "仓促行动；争抢",
            "ex": "They scrambled to finish the project on time.",
            "tr": "他们仓促赶工以按时完成项目。",
            "match": [
              "scrambled"
            ]
          },
          {
            "word": "buckle",
            "ph": "/ˈbʌkl/",
            "pos": "v",
            "mean": "垮塌；屈服",
            "ex": "The bridge buckled under the weight.",
            "tr": "桥在重压下垮塌了。",
            "match": [
              "buckled"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 24,
        "en": "The U.S. government had one impossible choice. Let it all burn or throw billions of taxpayer dollars to the very guys who lit the match. October 2008, they picked the latter. \"I need $700 billion.\" \"For what?\" \"To shovel into burning banks before the whole thing explodes.\" Enter TARP, the Troubled Asset Relief Program.",
        "cn": "美国政府面临一个不可能的选择。让一切烧毁，还是把数十亿纳税人的钱扔给那些点火的人。2008年10月，他们选择了后者。“我需要7000亿美元。”“干什么？”“在整个事情爆炸之前铲进燃烧的银行。”不良资产救助计划（TARP）登场。",
        "vocab": [
          {
            "word": "taxpayer",
            "ph": "/ˈtækspeɪər/",
            "pos": "n",
            "mean": "纳税人",
            "ex": "Taxpayers were angry about the bailout.",
            "tr": "纳税人对救助计划感到愤怒。",
            "match": [
              "taxpayer"
            ]
          },
          {
            "word": "shovel",
            "ph": "/ˈʃʌvl/",
            "pos": "v",
            "mean": "铲；（大量地）投入",
            "ex": "They shoveled money into the project.",
            "tr": "他们往这个项目里砸了大量的钱。",
            "match": [
              "shovel"
            ]
          },
          {
            "word": "TARP",
            "ph": "/tɑːrp/",
            "pos": "abbr",
            "mean": "不良资产救助计划 (Troubled Asset Relief Program)",
            "ex": "TARP was controversial but stabilized the banks.",
            "tr": "TARP备受争议，但稳定了银行。",
            "match": [
              "TARP"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 25,
        "en": "Basically, they were giving Wall Street a $700 billion pillow to fall on. Why? Because the banks were too big to fail. Let them collapse, and they'd take down the global economy. So the government did what it had to do. They started chucking money out of helicopters. Seriously. Loans, bailouts, stock purchases? It didn't matter what form it took. If your balance sheet had smoke coming out of it, Uncle Sam brought the fire hose.",
        "cn": "基本上，他们给了华尔街一个7000亿美元的枕头作为缓冲。为什么？因为银行大到不能倒。让它们倒闭，它们会拖垮全球经济。所以政府做了必须做的事。他们开始从直升机上撒钱。认真的。贷款、救助、股票购买？采取什么形式并不重要。如果你的资产负债表冒烟了，山姆大叔就带着消防水管来了。",
        "vocab": [
          {
            "word": "too big to fail",
            "ph": "/tuː bɪɡ tuː feɪl/",
            "pos": "adj phr",
            "mean": "大到不能倒（指规模巨大，一旦倒闭会引发系统性风险）",
            "ex": "The concept of 'too big to fail' encourages risky behavior.",
            "tr": "“大到不能倒”的概念助长了冒险行为。",
            "match": [
              "too big to fail"
            ]
          },
          {
            "word": "balance sheet",
            "ph": "/ˈbæləns ʃiːt/",
            "pos": "n phr",
            "mean": "资产负债表",
            "ex": "The company has a strong balance sheet.",
            "tr": "该公司拥有稳健的资产负债表。",
            "match": [
              "balance sheet"
            ]
          },
          {
            "word": "Uncle Sam",
            "ph": "/ˈʌŋkl sæm/",
            "pos": "n",
            "mean": "山姆大叔（美国政府的绰号）",
            "ex": "Uncle Sam wants you for the army.",
            "tr": "山姆大叔征召你入伍。",
            "match": [
              "Uncle Sam"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 26,
        "en": "But it wasn't just banks getting the golden treatment. AIG, the insurance giant that bet trillions on garbage, got over $180 billion in aid. In GM and Chrysler, car companies got $80 billion. It was triage on a scale no one had seen since the Great Depression. Meanwhile, over at the Fed, Ben Bernanke was busy rewriting the rules of economics with a money cannon.",
        "cn": "但不只是银行得到了黄金待遇。AIG，那家在垃圾上押注了数万亿美元的保险巨头，获得了超过1800亿美元的援助。通用汽车和克莱斯勒，汽车公司获得了800亿美元。这是自大萧条以来从未见过的规模的伤员分类救治（紧急救援）。与此同时，在美联储，本·伯南克正忙着用金钱大炮改写经济学规则。",
        "vocab": [
          {
            "word": "triage",
            "ph": "/ˈtriːɑːʒ/",
            "pos": "n",
            "mean": "伤员分类；（资源的）紧急分配",
            "ex": "Doctors performed triage on the accident victims.",
            "tr": "医生对事故受害者进行了伤情分类。",
            "match": [
              "triage"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 27,
        "en": "Interest rates sliced to near zero, borrowing, basically free, and then came the big one, quantitative easing, which means the Fed started printing money out of thin air to buy bonds and mortgage junk. Think of it as patching the Titanic with $100 bills. \"Don't worry. Let me cook.\" And guess what? It kind of worked. Markets calmed down. Banks unclenched.",
        "cn": "利率被削减至接近零，借贷基本上是免费的，然后大招来了，量化宽松，这意味着美联储开始凭空印钞来购买债券和抵押贷款垃圾。把它想象成用100美元的钞票修补泰坦尼克号。“别担心。让我来操作。”你猜怎么着？它还真有点用。市场平静下来。银行放松了紧咬的牙关。",
        "vocab": [
          {
            "word": "quantitative easing",
            "ph": "/ˈkwɑːntɪteɪtɪv ˈiːzɪŋ/",
            "pos": "n phr",
            "mean": "量化宽松（央行通过购买资产增加货币供应）",
            "ex": "The central bank announced a new round of quantitative easing.",
            "tr": "央行宣布了新一轮的量化宽松政策。",
            "match": [
              "quantitative easing"
            ]
          },
          {
            "word": "out of thin air",
            "ph": "/aʊt əv θɪn er/",
            "pos": "idiom",
            "mean": "凭空（创造）",
            "ex": "He can't just create jobs out of thin air.",
            "tr": "他不能凭空创造就业机会。",
            "match": [
              "out of thin air"
            ]
          },
          {
            "word": "Let me cook",
            "ph": "/let miː kʊk/",
            "pos": "idiom",
            "mean": "让我来发挥；让我搞定（网络流行语）",
            "ex": "Hold on, let him cook, he might have a good idea.",
            "tr": "等等，让他发挥，他可能有个好主意。",
            "match": [
              "Let me cook"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 28,
        "en": "The stock market bottomed out in March 2009 and started crawling back. Wall Street exhaled. But Main Street? Still choking on smoke. The aftermath was brutal. Unemployment hit 10%. 8 million jobs. Gone. Four million homes foreclosed. $19 trillion in household wealth vanished. Families that had never missed a payment suddenly owed more on their homes than the homes were worth, and people were pissed.",
        "cn": "股市在2009年3月触底并开始爬升。华尔街长舒了一口气。但普通民众呢？仍然被烟呛得喘不过气。后果是残酷的。失业率达到10%。800万个工作岗位。没了。400万套房屋被止赎。19万亿美元的家庭财富消失。从未从断供的家庭突然发现他们的房贷比房子本身还贵，人们愤怒了。",
        "vocab": [
          {
            "word": "bottom out",
            "ph": "/ˈbɑːtəm aʊt/",
            "pos": "phr v",
            "mean": "触底",
            "ex": "The recession seems to have bottomed out.",
            "tr": "衰退似乎已经触底。",
            "match": [
              "bottomed out"
            ]
          },
          {
            "word": "aftermath",
            "ph": "/ˈæftərmæθ/",
            "pos": "n",
            "mean": "后果；余波",
            "ex": "The country is dealing with the aftermath of the war.",
            "tr": "这个国家正在处理战争的后果。",
            "match": [
              "aftermath"
            ]
          },
          {
            "word": "pissed",
            "ph": "/pɪst/",
            "pos": "adj",
            "mean": "愤怒的（俚语）",
            "ex": "He was really pissed about the delay.",
            "tr": "他对延误感到非常愤怒。",
            "match": [
              "pissed"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 29,
        "en": "\"Wall Street bonuses are back.\" \"I just got evicted.\" \"And they get a bonus.\" The people who caused the collapse got bailed out. The people who lived through it got pink slips and food stamps. Wall Street popped champagne. Main Street stood in line for soup. And then came the rage.",
        "cn": "“华尔街奖金回来了。”“我刚被驱逐。”“而他们拿到了奖金。”造成崩溃的人得到了救助。经历崩溃的人得到了解雇通知书和食品券。华尔街开香槟庆祝。普通民众排队领救济汤。然后愤怒随之而来。",
        "vocab": [
          {
            "word": "pink slip",
            "ph": "/pɪŋk slɪp/",
            "pos": "n phr",
            "mean": "解雇通知书",
            "ex": "He received a pink slip on Friday.",
            "tr": "他在周五收到了解雇通知书。",
            "match": [
              "pink slips"
            ]
          },
          {
            "word": "food stamp",
            "ph": "/fuːd stæmp/",
            "pos": "n phr",
            "mean": "食品券（政府发给低收入者的食品补贴）",
            "ex": "Many families had to rely on food stamps.",
            "tr": "许多家庭不得不依靠食品券生活。",
            "match": [
              "food stamps"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 30,
        "en": "2011. Zuccotti Park, New York City. Thousands gather, tents, drums, cardboard signs. One reads, \"We are the 99%.\" It wasn't just about bailouts anymore. It was about a system rigged to protect the powerful. Privatized profits, socialized losses, and a total absence of justice. No major Wall Street CEO went to jail. No handcuffs. No perp walks.",
        "cn": "2011年。纽约市祖科蒂公园。成千上万的人聚集在一起，帐篷，鼓声，纸板标语。其中一个写着，“我们是99%。”这不再仅仅关于救助。这是关于一个被操纵以保护权贵的系统。利润私有化，损失社会化，以及正义的完全缺失。没有一位主要的华尔街CEO入狱。没有手铐。没有游街示众。",
        "vocab": [
          {
            "word": "rig",
            "ph": "/rɪɡ/",
            "pos": "v",
            "mean": "操纵；舞弊",
            "ex": "The election was rigged.",
            "tr": "选举被操纵了。",
            "match": [
              "rigged"
            ]
          },
          {
            "word": "privatize",
            "ph": "/ˈpraɪvətaɪz/",
            "pos": "v",
            "mean": "私有化",
            "ex": "Profits were privatized while risks were shared.",
            "tr": "利润被私有化，而风险被分担。",
            "match": [
              "Privatized"
            ]
          },
          {
            "word": "socialize",
            "ph": "/ˈsoʊʃəlaɪz/",
            "pos": "v",
            "mean": "社会化（由全社会共同承担）",
            "ex": "They socialized the debt.",
            "tr": "他们将债务社会化了。",
            "match": [
              "socialized"
            ]
          },
          {
            "word": "perp walk",
            "ph": "/pɜːrp wɔːk/",
            "pos": "n",
            "mean": "（嫌疑人被警察押送供媒体拍照的）游街示众",
            "ex": "The media waited for the perp walk.",
            "tr": "媒体等待拍摄嫌疑人被押送的画面。",
            "match": [
              "perp walks"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 31,
        "en": "Just golden parachutes and quiet retirements. The system survived. But trust burned to the ground. A generation grew up knowing: When the banks mess up, they get rescued. When you mess up, you get wrecked. Because if 2008 taught us anything, it's that the next crisis doesn't look like the last one. It looks harmless, profitable, inevitable, until it isn't.",
        "cn": "只有黄金降落伞（高额离职费）和安静的退休。系统幸存了下来。但信任化为灰烬。一代人长大了，他们知道：当银行搞砸时，它们会获救。当你搞砸时，你会完蛋。因为如果2008年教会了我们什么，那就是下一次危机看起来不会像上一次。它看起来无害、有利可图、不可避免，直到它不再如此。",
        "vocab": [
          {
            "word": "golden parachute",
            "ph": "/ˌɡoʊldən ˈpærəʃuːt/",
            "pos": "n phr",
            "mean": "黄金降落伞（高管离职时获得的丰厚补偿）",
            "ex": "He left the company with a massive golden parachute.",
            "tr": "他带着巨额的黄金降落伞离开了公司。",
            "match": [
              "golden parachutes"
            ]
          },
          {
            "word": "burn to the ground",
            "ph": "/bɜːrn tuː ðə ɡraʊnd/",
            "pos": "idiom",
            "mean": "烧成平地；彻底毁灭",
            "ex": "The house burned to the ground.",
            "tr": "房子被烧成了平地。",
            "match": [
              "burned to the ground"
            ]
          },
          {
            "word": "inevitable",
            "ph": "/ɪnˈevɪtəbl/",
            "pos": "adj",
            "mean": "不可避免的",
            "ex": "Change is inevitable.",
            "tr": "改变是不可避免的。",
            "match": [
              "inevitable"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      },
      "abbr": {
        "en": "abbreviation",
        "cn": "缩写"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "comprehension_lawnmower_analogy",
    "title": "To Understand More, Don't Try To Understand Too Much",
    "info": {
      "author": "Steve Kaufmann",
      "source": "Video Transcript",
      "level": "B2",
      "tags": [
        "language learning",
        "comprehension",
        "study tips",
        "psychology",
        "metaphor"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "Experienced language learners accept uncertainty, accept that they don't fully understand, and yet they keep going. Hi there, Steve Kaufmann here today, and today I want to talk about comprehension. To understand more, don't try to understand too much, and I'll explain. But first of all, if you enjoy my videos, please subscribe, click on the bell for notifications, and if you follow me on a podcast, please leave a review. I do appreciate it.",
        "cn": "经验丰富的语言学习者接受不确定性，接受他们不能完全理解的事实，但他们仍然继续前进。大家好，我是 Steve Kaufmann，今天我想谈谈理解力。为了理解更多，不要试图理解太多，我会解释为什么。但首先，如果你喜欢我的视频，请订阅，点击铃铛接收通知，如果你在播客上关注我，请留下评论。我非常感激。",
        "vocab": [
          {
            "word": "uncertainty",
            "ph": "/ʌnˈsɜːrtnti/",
            "pos": "n",
            "mean": "不确定性",
            "ex": "Learning a new skill often involves a period of uncertainty.",
            "tr": "学习一项新技能通常涉及一段不确定的时期。",
            "match": [
              "uncertainty"
            ]
          },
          {
            "word": "comprehension",
            "ph": "/ˌkɑːmprɪˈhenʃn/",
            "pos": "n",
            "mean": "理解（力）",
            "ex": "Reading comprehension is essential for academic success.",
            "tr": "阅读理解对于学业成功至关重要。",
            "match": [
              "comprehension"
            ]
          },
          {
            "word": "appreciate",
            "ph": "/əˈpriːʃieɪt/",
            "pos": "v",
            "mean": "感激；欣赏",
            "ex": "I appreciate your help with this project.",
            "tr": "我感激你对这个项目的帮助。",
            "match": [
              "appreciate"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "So, I mean, listening comprehension, reading comprehension, comprehension to me is the most important goal in language learning. If we understand well, we will eventually speak well, eventually, as we have more opportunity to speak. If we don't understand very well, we can't have meaningful conversations, we can't enjoy movies, we can't enjoy books, we can't do all of the things that are going to improve our skills in the language. Of course, we all want to speak well, but we need to speak a lot in order to speak well, but that comprehension is so key, and I know a lot of people struggle with comprehension.",
        "cn": "所以，我是指听力理解，阅读理解，理解力对我来说是语言学习中最重要的目标。如果我们理解得好，我们最终也会说得好，最终，当我们有更多机会说话时。如果我们理解得不好，我们就无法进行有意义的对话，无法欣赏电影，无法享受书籍，无法做所有那些能提高我们语言技能的事情。当然，我们都想说得好，但我们需要多说才能说得好，但理解力是如此关键，我知道很多人都在理解力上挣扎。",
        "vocab": [
          {
            "word": "eventually",
            "ph": "/ɪˈventʃuəli/",
            "pos": "adv",
            "mean": "最终；终于",
            "ex": "Keep practicing, and eventually you will succeed.",
            "tr": "坚持练习，最终你会成功的。",
            "match": [
              "eventually"
            ]
          },
          {
            "word": "meaningful",
            "ph": "/ˈmiːnɪŋfl/",
            "pos": "adj",
            "mean": "有意义的",
            "ex": "They had a meaningful discussion about their future.",
            "tr": "他们就未来进行了一次有意义的讨论。",
            "match": [
              "meaningful"
            ]
          },
          {
            "word": "struggle with",
            "ph": "/ˈstrʌɡl wɪθ/",
            "pos": "phr v",
            "mean": "与…斗争；在…方面感到吃力",
            "ex": "Many students struggle with mathematics.",
            "tr": "许多学生在数学方面感到吃力。",
            "match": [
              "struggle with"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "So, I want to give you a hint, a tip about comprehension, and that is don't try too hard to understand. In other words, accept the fact that as you are progressing in the language, there are a lot of times when you are not going to understand, and you still have to keep going. And don't try to nail down what it is you're studying, say a lesson. Accept the fact that it's 60%, 40% comprehension, and move on to the next. And I often mentioned Manfred Spitzer, the German Neuroscientist who said, the brain needs repetition, but the brain needs novelty.",
        "cn": "所以，我想给你们一个提示，一个关于理解的建议，那就是不要太费劲去理解。换句话说，接受这样一个事实：当你在语言学习中进步时，有很多时候你是不会理解的，但你仍然必须继续前进。不要试图彻底搞懂你在学习的内容，比如一节课。接受只有60%或40%理解率的事实，然后继续下一个。我经常提到 Manfred Spitzer，这位德国神经科学家曾说，大脑需要重复，但大脑也需要新奇感。",
        "vocab": [
          {
            "word": "hint",
            "ph": "/hɪnt/",
            "pos": "n",
            "mean": "提示；暗示",
            "ex": "He gave me a hint about the surprise party.",
            "tr": "他给了我关于惊喜派对的提示。",
            "match": [
              "hint"
            ]
          },
          {
            "word": "nail down",
            "ph": "/neɪl daʊn/",
            "pos": "phr v",
            "mean": "确定；彻底弄清楚",
            "ex": "We need to nail down the details of the contract.",
            "tr": "我们需要敲定合同的细节。",
            "match": [
              "nail down"
            ]
          },
          {
            "word": "neuroscientist",
            "ph": "/ˈnʊroʊsaɪəntɪst/",
            "pos": "n",
            "mean": "神经科学家",
            "ex": "The neuroscientist studies how the brain processes information.",
            "tr": "这位神经科学家研究大脑如何处理信息。",
            "match": [
              "Neuroscientist"
            ]
          },
          {
            "word": "novelty",
            "ph": "/ˈnɑːvlti/",
            "pos": "n",
            "mean": "新奇事物；新颖",
            "ex": "Tourists are often attracted by the novelty of the local customs.",
            "tr": "游客经常被当地风俗的新奇感所吸引。",
            "match": [
              "novelty"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "And I was talking to my brother, who I gave an iPad to and who's working on LingQ, and he says, \"I always forget, I study this sentence and I keep on forgetting.\" And I thought to myself, yeah, you're not supposed to try to totally understand and remember that sentence, you're supposed to just allow the language to kind of enter your brain and let the brain get used to it. And so my brother said, it's a bit like mowing a lawn. If the grass is high, then you have to set the lawnmower at a higher level in order to have an easier first pass through mowing the lawn. The second time through, you can set the blades a little lower. If you try to force yourself to push that lawnmower into very high grass, you're not going to get there. It's going to be very hard work and you won't be able to get the job done depending on how long the grass is.",
        "cn": "我和我哥哥聊天，我送了他一台iPad，他正在使用LingQ学习，他说：“我总是忘记，我学习这个句子，然后我一直忘。”我心想，是的，你不应该试图完全理解并记住那个句子，你应该只是允许语言进入你的大脑，让大脑适应它。于是我哥哥说，这有点像割草坪。如果草很高，你必须把割草机设置在较高的档位，以便第一遍割草时更容易通过。第二遍时，你可以把刀片调低一点。如果你试图强迫自己把割草机推入很高的草丛中，你是推不动的。这将会是非常辛苦的工作，而且你可能无法完成工作，这取决于草有多长。",
        "vocab": [
          {
            "word": "mow a lawn",
            "ph": "/moʊ ə lɔːn/",
            "pos": "phr",
            "mean": "割草坪",
            "ex": "It's his chore to mow the lawn every Saturday.",
            "tr": "每个星期六割草坪是他的家务。",
            "match": [
              "mowing a lawn",
              "mowing the lawn"
            ]
          },
          {
            "word": "lawnmower",
            "ph": "/ˈlɔːnmoʊər/",
            "pos": "n",
            "mean": "割草机",
            "ex": "The lawnmower ran out of gas halfway through.",
            "tr": "割草机割到一半没油了。",
            "match": [
              "lawnmower"
            ]
          },
          {
            "word": "first pass",
            "ph": "/fɜːrst pæs/",
            "pos": "n phr",
            "mean": "第一遍（处理或检查）",
            "ex": "On the first pass, just scan the text for keywords.",
            "tr": "第一遍时，只需浏览文本中的关键词。",
            "match": [
              "first pass"
            ]
          },
          {
            "word": "blade",
            "ph": "/bleɪd/",
            "pos": "n",
            "mean": "刀片",
            "ex": "Be careful, the knife blade is very sharp.",
            "tr": "小心，刀片非常锋利。",
            "match": [
              "blades"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Now, in theory, if you have to mow the lawn twice, you would think it's going to take you twice as long. But if in fact, there's just too much resistance and you can't mow the lawn, you're not going to get the job done. So it's far easier and I've had this experience and I'll show you the picture of my lawn and my lawnmower and how I adjust it. And it's much easier for me, particularly we've had a lot of rain. I haven't been able to mow the lawn. And so when I go in there, I have a first pass at a higher level and then I have a second pass at a lower level.",
        "cn": "现在，理论上，如果你必须割两次草，你会认为这将花费你两倍的时间。但事实上，如果阻力太大，你根本割不动，你就无法完成工作。所以那样做要容易得多，我有过这种经历，我会给你们看我的草坪和割草机的照片，以及我是如何调整它的。对我来说容易多了，尤其是我们最近雨水很多。我一直没法割草。所以当我进去割的时候，我先调高档位割第一遍，然后再调低档位割第二遍。",
        "vocab": [
          {
            "word": "in theory",
            "ph": "/ɪn ˈθɪri/",
            "pos": "phr",
            "mean": "理论上",
            "ex": "In theory, the plan should work, but in practice, it might be difficult.",
            "tr": "理论上这个计划应该行得通，但在实践中可能会很困难。",
            "match": [
              "in theory"
            ]
          },
          {
            "word": "resistance",
            "ph": "/rɪˈzɪstəns/",
            "pos": "n",
            "mean": "阻力",
            "ex": "The car faced a lot of wind resistance.",
            "tr": "这辆车面临很大的风阻。",
            "match": [
              "resistance"
            ]
          },
          {
            "word": "adjust",
            "ph": "/əˈdʒʌst/",
            "pos": "v",
            "mean": "调整",
            "ex": "You need to adjust the seat before driving.",
            "tr": "开车前你需要调整座位。",
            "match": [
              "adjust"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Every pass, I pick up a little bit more. It's the same with the content that I learned from, listen to, read. First time I go through, I don't fully understand that I may listen the second time, I may move on to other lessons. Then I come back and even on something as basic as the mini stories, I always pick up something the second, third, fourth time through. So every time I mow that lawn, even I'm flowing through it, I'm pushing the mower through it easily, but I'm getting a few more blades of grass. And in that way, we will gradually enable our brains to get used to the language.",
        "cn": "每一遍，我都会多收获一点。我学习、收听、阅读的内容也是如此。第一次过的时候，我没有完全理解，我可能会听第二遍，我也可能会继续学习其他课程。然后我回来，即使是像迷你故事这样基础的内容，我在第二、第三、第四遍时总能学到一些东西。所以每次我割草坪时，即使我很流畅地通过，我很轻松地推着割草机，但我又能多割到几根草。通过这种方式，我们将逐渐使我们的大脑适应这门语言。",
        "vocab": [
          {
            "word": "pick up",
            "ph": "/pɪk ʌp/",
            "pos": "phr v",
            "mean": "获得；学会（非正式）",
            "ex": "She picked up a few Spanish phrases during her trip.",
            "tr": "她在旅行期间学会了几句西班牙语。",
            "match": [
              "pick up"
            ]
          },
          {
            "word": "flow through",
            "ph": "/floʊ θruː/",
            "pos": "phr v",
            "mean": "流畅地通过",
            "ex": "Water should flow through the pipes without obstruction.",
            "tr": "水应该毫无阻碍地流过管道。",
            "match": [
              "flowing through"
            ]
          },
          {
            "word": "gradually",
            "ph": "/ˈɡrædʒuəli/",
            "pos": "adv",
            "mean": "逐渐地",
            "ex": "The weather gradually improved over the week.",
            "tr": "这周天气逐渐好转。",
            "match": [
              "gradually"
            ]
          },
          {
            "word": "enable",
            "ph": "/ɪˈneɪbl/",
            "pos": "v",
            "mean": "使能够",
            "ex": "The scholarship enabled him to study abroad.",
            "tr": "奖学金使他能够出国留学。",
            "match": [
              "enable"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "Don't force yourself to try to understand if you can't understand. Move on to new material, bringing in new words, bringing in new context, some of which again, which you will understand, some of which you won't understand. And I think it's very important that we have that sort of an attitude I've said in other videos, experienced language learners accept uncertainty, accept that they don't fully understand. And yet they keep going. Push yourself forward, and then you can come back again for a second pass with the lawn mower. But I think very often the attempt to nail things down to fully understand is a major obstacle to comprehension, whether it be listening comprehension or reading comprehension, and the two do reinforce each other as does the study of vocabulary.",
        "cn": "如果你听不懂，不要强迫自己去听懂。继续学习新材料，引入新单词，引入新语境，其中一些你会再次理解，一些你不会理解。我认为拥有那种态度非常重要，我在其他视频中也说过，经验丰富的语言学习者接受不确定性，接受他们不能完全理解的事实。但他们仍然继续前进。推动自己向前，然后你可以带着割草机回来割第二遍。但我认为，通常情况下，试图彻底搞定、完全理解是理解的主要障碍，无论是听力理解还是阅读理解，而这两者确实相互加强，词汇学习也是如此。",
        "vocab": [
          {
            "word": "force oneself",
            "ph": "/fɔːrs wʌnˈself/",
            "pos": "phr",
            "mean": "强迫自己",
            "ex": "He had to force himself to get out of bed.",
            "tr": "他不得不强迫自己起床。",
            "match": [
              "force yourself"
            ]
          },
          {
            "word": "context",
            "ph": "/ˈkɑːntekst/",
            "pos": "n",
            "mean": "语境；背景",
            "ex": "You need to look at the sentence in context to understand its meaning.",
            "tr": "你需要结合语境看这个句子才能理解它的意思。",
            "match": [
              "context"
            ]
          },
          {
            "word": "obstacle",
            "ph": "/ˈɑːbstəkl/",
            "pos": "n",
            "mean": "障碍",
            "ex": "Fear of failure is a major obstacle to success.",
            "tr": "对失败的恐惧是成功的主要障碍。",
            "match": [
              "obstacle"
            ]
          },
          {
            "word": "reinforce",
            "ph": "/ˌriːɪnˈfɔːrs/",
            "pos": "v",
            "mean": "加强；强化",
            "ex": "Practical experience reinforces theoretical knowledge.",
            "tr": "实践经验加强了理论知识。",
            "match": [
              "reinforce"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "The goal, of course, is to understand everything or as much as possible. But before we get to that perfectly mown lawn, we have to make quite a few passes. And so we should be easy on ourselves and not be too demanding, you know, not expect perfect comprehension. And if we keep moving forward, we will eventually have better comprehension, understand more. And if we have good comprehension, we will eventually have good speaking skills. So thank you for listening. And I have spoken before about comprehension. So I'm going to leave a couple of videos here that I did earlier on the same subject. Bye for now.",
        "cn": "当然，目标是理解所有内容或尽可能多地理解。但在我们得到那片修剪完美的草坪之前，我们必须进行相当多次的修剪。所以我们应该对自己宽容一点，不要太苛求，你知道的，不要期望完美的理解。如果我们继续前进，我们最终会有更好的理解力，理解更多。如果我们有好的理解力，我们最终会有好的口语技能。谢谢收听。我以前也谈过理解力。所以我会在这个话题上留下几个我之前做过的视频。再见。",
        "vocab": [
          {
            "word": "mown",
            "ph": "/moʊn/",
            "pos": "adj",
            "mean": "已割过的（mow的过去分词）",
            "ex": "The smell of freshly mown grass fills the air.",
            "tr": "空气中弥漫着刚割过的青草味。",
            "match": [
              "mown"
            ]
          },
          {
            "word": "be easy on oneself",
            "ph": "/biː ˈiːzi ɒn wʌnˈself/",
            "pos": "idiom",
            "mean": "对自己宽容点",
            "ex": "You made a mistake, but be easy on yourself; you're learning.",
            "tr": "你犯了个错，但对自己宽容点；你在学习。",
            "match": [
              "be easy on ourselves"
            ]
          },
          {
            "word": "demanding",
            "ph": "/dɪˈmændɪŋ/",
            "pos": "adj",
            "mean": "苛求的；要求高的",
            "ex": "The boss is very demanding of his employees.",
            "tr": "老板对员工的要求非常高。",
            "match": [
              "demanding"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      },
      "abbr": {
        "en": "abbreviation",
        "cn": "缩写"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "how_to_learn_faster_science",
    "title": "The Science of Learning Faster",
    "info": {
      "author": "ASAPScience",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "learning",
        "neuroscience",
        "study tips",
        "psychology",
        "self-improvement"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "This episode is supported by Brilliant.org. Whether you're headed back to school or just wanting to pick up a new skill like a language or an instrument, learning new things is amazing. But is there a better way to learn something quickly and retain that knowledge?",
        "cn": "本期节目由 Brilliant.org 赞助。无论你是要重返校园，还是只想掌握一项新技能，比如一门语言或一种乐器，学习新事物都是很棒的。但是，有没有更好的方法可以快速学习并记住这些知识呢？",
        "vocab": [
          {
            "word": "retain",
            "ph": "/rɪˈteɪn/",
            "pos": "v",
            "mean": "保持；记住",
            "ex": "The best way to retain information is to practice regularly.",
            "tr": "记住信息的最好方法是定期练习。",
            "match": [
              "retain"
            ]
          },
          {
            "word": "pick up",
            "ph": "/pɪk ʌp/",
            "pos": "phr v",
            "mean": "（通过练习或经验）学会，掌握",
            "ex": "She managed to pick up a few phrases of Italian.",
            "tr": "她设法学会了几句意大利语。",
            "match": [
              "pick up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "First step is, skip the laptop. Though you might be quicker at typing, writing with pen and paper is the way to go when taking notes. Not only are there oodles of distractions online, but researchers have found that those who type process the information at a shallower level. As opposed to simply transcribing verbatim, reframing the information into your own words while writing out physically leads to better performance on tests.",
        "cn": "第一步是，扔掉笔记本电脑。虽然你打字可能更快，但做笔记时，用笔和纸书写才是正道。网上不仅有大量的干扰，而且研究人员发现，打字的人对信息的处理层次较浅。与简单地逐字转录相比，在书写时用自己的话重构信息能让你在考试中表现更好。",
        "vocab": [
          {
            "word": "oodles of",
            "ph": "/ˈuːdlz əv/",
            "pos": "n phr",
            "mean": "大量的（非正式）",
            "ex": "We have oodles of time to finish the project.",
            "tr": "我们有大量的时间来完成这个项目。",
            "match": [
              "oodles of"
            ]
          },
          {
            "word": "shallow",
            "ph": "/ˈʃæloʊ/",
            "pos": "adj",
            "mean": "浅的；（呼吸、思考等）表层的",
            "ex": "Shallow processing of information leads to poor memory retention.",
            "tr": "对信息的浅层处理导致记忆保持力差。",
            "match": [
              "shallower"
            ]
          },
          {
            "word": "transcribe",
            "ph": "/trænˈskraɪb/",
            "pos": "v",
            "mean": "转录；抄写",
            "ex": "He transcribed the lecture notes onto his computer.",
            "tr": "他把讲座笔记转录到了电脑上。",
            "match": [
              "transcribing"
            ]
          },
          {
            "word": "verbatim",
            "ph": "/vɜːrˈbeɪtɪm/",
            "pos": "adv",
            "mean": "逐字地；一字不差地",
            "ex": "She repeated the instructions verbatim.",
            "tr": "她一字不差地重复了指示。",
            "match": [
              "verbatim"
            ]
          },
          {
            "word": "reframe",
            "ph": "/ˌriːˈfreɪm/",
            "pos": "v",
            "mean": "重构；重新表达",
            "ex": "Try to reframe the problem as an opportunity.",
            "tr": "试着把这个问题重新看作是一个机会。",
            "match": [
              "reframing"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "And to retain those notes, study, sleep, study. In a French experiment, two groups were taught the Swahili translation for 16 French words over two sessions. Group one studied in the morning, then took a break, and studied again in the evening. But group two studied in the evening, slept for the night, and then resumed studying in the morning. Though there was the same amount of time between the two study sessions, the sleep group could recall 10 of the 16 words while the no-sleep group could only get 7.5.",
        "cn": "为了记住这些笔记，要遵循“学习、睡觉、学习”的模式。在法国的一项实验中，两组人分两个阶段学习16个法语单词的斯瓦希里语翻译。第一组在早上学习，然后休息，晚上再学习。但第二组在晚上学习，睡了一晚，然后在早上继续学习。虽然两次学习之间的时间间隔相同，但在不睡觉组只能回忆起7.5个单词的情况下，睡眠组可以回忆起16个单词中的10个。",
        "vocab": [
          {
            "word": "resume",
            "ph": "/rɪˈzuːm/",
            "pos": "v",
            "mean": "（中断后）继续，重新开始",
            "ex": "We will resume the meeting after lunch.",
            "tr": "午饭后我们将继续会议。",
            "match": [
              "resumed"
            ]
          },
          {
            "word": "recall",
            "ph": "/rɪˈkɔːl/",
            "pos": "v",
            "mean": "回忆；回想起",
            "ex": "I can't recall meeting him before.",
            "tr": "我想不起来以前见过他。",
            "match": [
              "recall"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "Learning a new motor skill, try modifying your practice slightly. A study of 86 healthy volunteers were asked to learn a computer-based motor skill over two training sessions. One group's second training session had them learn the task in a slightly altered way, while the other repeated the task with the exact same practice. Those who used two different strategies nearly doubled the speed of accuracy of the task compared to the control group.",
        "cn": "学习新的运动技能时，试着稍微改变一下你的练习方式。在一项研究中，86名健康志愿者被要求在两个训练阶段学习一项基于计算机的运动技能。其中一组的第二个训练阶段让他们以稍微改变的方式学习该任务，而另一组则以完全相同的练习重复该任务。与对照组相比，使用两种不同策略的小组在任务的准确速度上几乎翻了一番。",
        "vocab": [
          {
            "word": "motor skill",
            "ph": "/ˈmoʊtər skɪl/",
            "pos": "n phr",
            "mean": "运动技能",
            "ex": "Drawing and writing require fine motor skills.",
            "tr": "绘画和写作需要精细的运动技能。",
            "match": [
              "motor skill"
            ]
          },
          {
            "word": "alter",
            "ph": "/ˈɔːltər/",
            "pos": "v",
            "mean": "改变；修改",
            "ex": "We had to alter our travel plans.",
            "tr": "我们不得不改变我们的旅行计划。",
            "match": [
              "altered"
            ]
          },
          {
            "word": "control group",
            "ph": "/kənˈtroʊl ɡruːp/",
            "pos": "n phr",
            "mean": "（实验中的）对照组",
            "ex": "The control group received a placebo instead of the drug.",
            "tr": "对照组接受的是安慰剂而不是药物。",
            "match": [
              "control group"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "What does this look like in the real world? Say you're perfecting your tennis game, try switching between rackets with slightly different weights between sessions. However, researchers suggest you don't make the modification too big. For example, switching between tennis and badminton shows no increased success in tennis.",
        "cn": "这在现实世界中是什么样子的？假设你正在完善你的网球技术，试着在训练之间换用重量稍有不同的球拍。然而，研究人员建议不要做太大的改动。例如，在网球和羽毛球之间切换并不会增加网球方面的成功率。",
        "vocab": [
          {
            "word": "modification",
            "ph": "/ˌmɑːdɪfɪˈkeɪʃn/",
            "pos": "n",
            "mean": "修改；改变",
            "ex": "The design required some minor modifications.",
            "tr": "设计需要一些小的修改。",
            "match": [
              "modification"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Can't focus? Get some exercise. A study found that those who worked out for 15 minutes on a stationary bike and then completed a memory task completed the task significantly faster than the group that didn't exercise. Even a quick walk around the block can clear up your mind.",
        "cn": "无法集中注意力？去锻炼一下吧。一项研究发现，那些在固定自行车上锻炼15分钟然后完成记忆任务的人，比不锻炼的那组完成任务的速度要快得多。即使是绕着街区快走一圈也能让你的头脑清醒。",
        "vocab": [
          {
            "word": "stationary bike",
            "ph": "/ˈsteɪʃəneri baɪk/",
            "pos": "n phr",
            "mean": "固定自行车；动感单车",
            "ex": "She rides a stationary bike at the gym every morning.",
            "tr": "她每天早上在健身房骑动感单车。",
            "match": [
              "stationary bike"
            ]
          },
          {
            "word": "clear up",
            "ph": "/klɪr ʌp/",
            "pos": "phr v",
            "mean": "清理；使（头脑）清醒",
            "ex": "A walk in the fresh air helped clear up his mind.",
            "tr": "在新鲜空气中散步有助于让他头脑清醒。",
            "match": [
              "clear up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "Try to memorize the electromagnetic spectrum in order of increasing frequency? Who isn't? Try a mnemonic device such as an acronym sentence like, Raging Martians Invaded Venus Using X-Ray Guns. This method has been proven in several studies as a way of committing information to memory. Why? Theories suggest that adults can only hold a limited number of items in our short-term memory. By grouping items into an mnemonic, it allows your brain to hold on to larger amounts of information which can eventually aid into the creation of long-term memories. And the weirder the sentence is, the better, as unique sentences have a higher chance of sticking than boring ones.",
        "cn": "试图按频率递增的顺序背诵电磁波谱？谁不是呢？试试助记手段，比如首字母缩写句，像“Raging Martians Invaded Venus Using X-Ray Guns”（狂暴的火星人用X射线枪入侵金星）。这种方法已被多项研究证明是记忆信息的一种方式。为什么？理论表明，成年人的短期记忆只能容纳有限数量的项目。通过将项目分组为助记符，它允许你的大脑以此保留更大量的信息，这最终有助于长期记忆的形成。句子越奇怪越好，因为独特的句子比无聊的句子更有可能被记住。",
        "vocab": [
          {
            "word": "mnemonic",
            "ph": "/nɪˈmɑːnɪk/",
            "pos": "adj",
            "mean": "助记的；记忆的",
            "ex": "Using a mnemonic device can make learning lists easier.",
            "tr": "使用助记手段可以让学习列表变得更容易。",
            "match": [
              "mnemonic"
            ]
          },
          {
            "word": "acronym",
            "ph": "/ˈækrənɪm/",
            "pos": "n",
            "mean": "首字母缩略词",
            "ex": "NASA is an acronym for National Aeronautics and Space Administration.",
            "tr": "NASA 是美国国家航空航天局的首字母缩略词。",
            "match": [
              "acronym"
            ]
          },
          {
            "word": "stick",
            "ph": "/stɪk/",
            "pos": "v",
            "mean": "被记住；粘住",
            "ex": "That catchy tune really sticks in your head.",
            "tr": "那首朗朗上口的曲子真的让人过耳不忘。",
            "match": [
              "sticking"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "And say it out loud. Test individuals were given a list of words where half were read silently and the other half were read out loud. When given a new list of words and asked to identify which ones they had already read previously, they were able to recall the words read out loud with significantly more frequency than those read silently.",
        "cn": "把它大声说出来。测试对象得到了一份单词清单，其中一半是默读的，另一半是大声朗读的。当给出一份新的单词清单并要求识别哪些是他们之前读过的单词时，他们能够回忆起大声朗读的单词的频率明显高于默读的单词。",
        "vocab": [
          {
            "word": "identify",
            "ph": "/aɪˈdentɪfaɪ/",
            "pos": "v",
            "mean": "识别；认出",
            "ex": "She could not identify the man in the photo.",
            "tr": "她认不出照片里的那个男人。",
            "match": [
              "identify"
            ]
          },
          {
            "word": "silently",
            "ph": "/ˈsaɪləntli/",
            "pos": "adv",
            "mean": "默默地；无声地",
            "ex": "He read the letter silently to himself.",
            "tr": "他默默地读了那封信。",
            "match": [
              "silently"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "Here's a no-brainer. Make sure you're hydrated. In a study where participants fasted and abstained from fluid since the previous evening, they were asked to perform on a reaction test. One group was given 500 milliliters of water right before the test, while the other group wasn't. The group that was able to hydrate before the test obviously performed significantly better. This is because water helps improve overall mental processing and learning.",
        "cn": "这是一个显而易见的道理。确保你水分充足。在一项研究中，参与者从前一天晚上开始禁食禁水，然后被要求进行反应测试。一组在测试前喝了500毫升水，而另一组没有。在测试前能够补水的那一组表现明显更好。这是因为水有助于改善整体的心理处理和学习能力。",
        "vocab": [
          {
            "word": "no-brainer",
            "ph": "/ˈnoʊ breɪnər/",
            "pos": "n",
            "mean": "无需用脑的事；显而易见的事",
            "ex": "Accepting that job offer was a no-brainer.",
            "tr": "接受那份工作邀请是不用脑子想都知道的好事。",
            "match": [
              "no-brainer"
            ]
          },
          {
            "word": "hydrate",
            "ph": "/ˈhaɪdreɪt/",
            "pos": "v",
            "mean": "补充水分",
            "ex": "It's important to hydrate after exercising.",
            "tr": "运动后补充水分很重要。",
            "match": [
              "hydrated",
              "hydrate"
            ]
          },
          {
            "word": "abstain",
            "ph": "/əbˈsteɪn/",
            "pos": "v",
            "mean": "戒绝；放弃；避免",
            "ex": "He decided to abstain from alcohol.",
            "tr": "他决定戒酒。",
            "match": [
              "abstained"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "And after all that hard work, give yourself a reward. One study found that reward-motivated learning in this particular study was monetary compensation, led to increased memory formation, and this effect even increased when the reward was of higher value. This finding highlights how reward motivation promotes memory formation via the release of feel-good neurotransmitter dopamine in the hippocampus prior to learning.",
        "cn": "在所有这些努力工作之后，给自己一个奖励。一项研究发现，奖励驱动的学习（在这项特定研究中是金钱补偿）导致了记忆形成的增加，而且当奖励价值更高时，这种效果甚至会增强。这一发现强调了奖励动机是如何通过在学习前海马体中释放“感觉良好”的神经递质多巴胺来促进记忆形成的。",
        "vocab": [
          {
            "word": "monetary",
            "ph": "/ˈmɑːnɪteri/",
            "pos": "adj",
            "mean": "金钱的；货币的",
            "ex": "The antique vase has great monetary value.",
            "tr": "这个古董花瓶具有很高的金钱价值。",
            "match": [
              "monetary"
            ]
          },
          {
            "word": "compensation",
            "ph": "/ˌkɑːmpenˈseɪʃn/",
            "pos": "n",
            "mean": "补偿；报酬",
            "ex": "He received compensation for his injuries.",
            "tr": "他因伤获得了赔偿。",
            "match": [
              "compensation"
            ]
          },
          {
            "word": "neurotransmitter",
            "ph": "/ˌnʊroʊtrænsˈmɪtər/",
            "pos": "n",
            "mean": "神经递质",
            "ex": "Dopamine is a key neurotransmitter in the brain.",
            "tr": "多巴胺是大脑中关键的神经递质。",
            "match": [
              "neurotransmitter"
            ]
          },
          {
            "word": "hippocampus",
            "ph": "/ˌhɪpəˈkæmpəs/",
            "pos": "n",
            "mean": "海马体（大脑中与记忆有关的区域）",
            "ex": "The hippocampus plays a major role in learning and memory.",
            "tr": "海马体在学习和记忆中起着主要作用。",
            "match": [
              "hippocampus"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "If you're really keen to learn faster, check out Brilliant.org, who sponsored this episode and is one of the best places to do just that. Like us, they believe that if you're excited, you'll learn quickly. That act of learning is best, and that questions that spark curiosity are so important. Whenever we want to build up our logical thinking powers or break down the physics of everyday experiences around us, we check out Brilliant. It's a great way to challenge your mind on the go, and you can master foundational concepts through guided, in-depth problem-solving quizzes. Check them out at Brilliant.org slash ASAPScience to sign up for free now, and let us know how it's helped you learn faster. And subscribe for more weekly videos every Thursday.",
        "cn": "如果你真的渴望学得更快，去看看 Brilliant.org 吧，他们赞助了本期节目，也是实现这一目标的最佳去处之一。像我们一样，他们相信如果你感到兴奋，你就会学得很快。主动学习是最好的，激发好奇心的问题非常重要。每当我们想建立逻辑思维能力或剖析周围日常体验的物理原理时，我们都会去 Brilliant 看看。这是一种随时随地挑战大脑的好方法，你可以通过指导性的、深入的问题解决测验来掌握基础概念。现在就去 Brilliant.org/ASAPScience 免费注册，并告诉我们它是如何帮助你学得更快的。订阅以获取每周四更多的视频。",
        "vocab": [
          {
            "word": "keen",
            "ph": "/kiːn/",
            "pos": "adj",
            "mean": "渴望的；热衷的",
            "ex": "She is keen to learn a new language.",
            "tr": "她渴望学习一门新语言。",
            "match": [
              "keen"
            ]
          },
          {
            "word": "spark",
            "ph": "/spɑːrk/",
            "pos": "v",
            "mean": "引发；触发；点燃",
            "ex": "The question sparked a lively debate.",
            "tr": "这个问题引发了一场激烈的辩论。",
            "match": [
              "spark"
            ]
          },
          {
            "word": "foundational",
            "ph": "/faʊnˈdeɪʃənl/",
            "pos": "adj",
            "mean": "基础的；基本的",
            "ex": "Math skills are foundational for physics.",
            "tr": "数学技能是物理学的基础。",
            "match": [
              "foundational"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "specialization_vs_sampling",
    "title": "Why Generalists Triumph in a Specialized World",
    "info": {
      "author": "David Epstein",
      "source": "TED Talk",
      "level": "C1",
      "tags": [
        "education",
        "psychology",
        "career",
        "personal growth",
        "skill development"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "Many of you here have probably heard of the 10,000 hours rule. It's the idea that to become great in anything takes 10,000 hours of focused practice, so you'd better get started as early as possible. The poster child for this story is Tiger Woods. His father famously gave him a putter when he was seven months old. He's the greatest golfer in the world, quintessential 10,000 hour story. Another is that of the three Polgar sisters, whose father decided to teach them chess in a very technical manner from a very early age. Two of his daughters went on to become grandmaster chess players.",
        "cn": "你们中的许多人可能都听说过“一万小时定律”。这个观点认为，要在任何领域变得伟大，都需要一万小时的专注练习，所以你最好尽早开始。这个故事的典型代表是泰格·伍兹。众所周知，他在七个月大时父亲就给了他一根推杆。他是世界上最伟大的高尔夫球手，是一万小时定律的典型案例。另一个例子是波尔加三姐妹，她们的父亲决定从小就以非常技术性的方式教她们下棋。他的两个女儿后来都成为了国际象棋特级大师。",
        "vocab": [
          {
            "word": "poster child",
            "ph": "/ˈpoʊstər tʃaɪld/",
            "pos": "n",
            "mean": "典型代表；模范人物",
            "ex": "He is the poster child for healthy living.",
            "tr": "他是健康生活的典型代表。",
            "match": [
              "poster child"
            ]
          },
          {
            "word": "quintessential",
            "ph": "/ˌkwɪntɪˈsenʃl/",
            "pos": "adj",
            "mean": "典型的；完美的",
            "ex": "This is the quintessential English country cottage.",
            "tr": "这是典型的英式乡村小屋。",
            "match": [
              "quintessential"
            ]
          },
          {
            "word": "grandmaster",
            "ph": "/ˈɡrændmæstər/",
            "pos": "n",
            "mean": "（国际象棋）特级大师",
            "ex": "Becoming a chess grandmaster requires years of dedication.",
            "tr": "成为国际象棋特级大师需要多年的投入。",
            "match": [
              "grandmaster"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "I got curious. If this 10,000 hours rule is correct, then we should see that elite athletes get a headstart in so-called deliberate practice. And in fact, when scientists study elite athletes, they see that they spend more time in deliberate practice. Not a big surprise. When they actually track athletes over the course of their development, the pattern looks like this. The future elites tend to have what scientists call a sampling period, where they try a variety of physical activities, they gain broad general skills, and delay specializing until later than peers who plateau at lower levels.",
        "cn": "我很好奇。如果这个一万小时定律是正确的，那么我们应该看到精英运动员在所谓的刻意练习上起步更早。事实上，当科学家研究精英运动员时，他们发现这些人确实在刻意练习上花费了更多时间。这并不令人惊讶。但当他们真正追踪运动员的发展过程时，模式是这样的：未来的精英往往有一段科学家所说的“采样期”，他们尝试各种体育活动，获得广泛的一般技能，并比那些在较低水平停滞不前的同龄人更晚进行专业化。",
        "vocab": [
          {
            "word": "headstart",
            "ph": "/ˈhedstɑːrt/",
            "pos": "n",
            "mean": "领先优势；起步优势",
            "ex": "A good education gives children a headstart in life.",
            "tr": "良好的教育给孩子的人生意一个领先优势。",
            "match": [
              "headstart"
            ]
          },
          {
            "word": "deliberate practice",
            "ph": "/dɪˈlɪbərət ˈpræktɪs/",
            "pos": "n phr",
            "mean": "刻意练习",
            "ex": "Deliberate practice involves focused attention and immediate feedback.",
            "tr": "刻意练习涉及集中的注意力和即时的反馈。",
            "match": [
              "deliberate practice"
            ]
          },
          {
            "word": "plateau",
            "ph": "/plæˈtoʊ/",
            "pos": "v",
            "mean": "（在一段时期的发展后）停滞不前；进入平稳期",
            "ex": "His career plateaued after he reached middle management.",
            "tr": "他在达到中层管理职位后职业生涯停滞不前。",
            "match": [
              "plateau"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "That doesn't really comport with what the 10,000 hours rule does it? So I started to wonder about other domains that we associate with obligatory early specialization, like music. Turns out the pattern's often similar. The exceptional musicians didn't start spending more time in deliberate practice than the average musicians until their third instrument. They too tended to have a sampling period. Even musicians we think of as famously precocious, like Yo-Yo Ma.",
        "cn": "这并不真的符合一万小时定律，对吧？所以我开始思考其他我们认为必须尽早专业化的领域，比如音乐。结果发现模式通常是相似的。杰出的音乐家直到学习第三种乐器时，才开始比普通音乐家在刻意练习上花费更多时间。他们也往往有一个采样期。即使是我们认为出名早熟的音乐家，比如马友友，也是如此。",
        "vocab": [
          {
            "word": "comport with",
            "ph": "/kəmˈpɔːrt wɪð/",
            "pos": "phr v",
            "mean": "与…相符；与…一致",
            "ex": "Her actions did not comport with her stated principles.",
            "tr": "她的行为与她所宣称的原则不符。",
            "match": [
              "comport"
            ]
          },
          {
            "word": "obligatory",
            "ph": "/əˈblɪɡətɔːri/",
            "pos": "adj",
            "mean": "强制性的；必须的；习惯性的",
            "ex": "Attendance at the meeting is obligatory.",
            "tr": "出席会议是强制性的。",
            "match": [
              "obligatory"
            ]
          },
          {
            "word": "precocious",
            "ph": "/prɪˈkoʊʃəs/",
            "pos": "adj",
            "mean": "早熟的；（儿童）超常的",
            "ex": "She was a precocious child who learned to read at age three.",
            "tr": "她是个早熟的孩子，三岁就学会了阅读。",
            "match": [
              "precocious"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "So this got me interested in exploring the developmental backgrounds of people whose work I had long admired. Duke Ellington shunned music lessons as a kid to focus on baseball and painting and drawing. Mariam Mirzakhani wasn't interested in math as a girl, dreamed of becoming a novelist, and went on to become the first and so far only woman to win the Fields Medal, the most prestigious prize in the world in math. Vincent Van Gogh had five different careers before flaming out spectacularly, and in his late 20s picked up a book called The Guide to the ABCs of Drawing.",
        "cn": "这让我有兴趣去探索那些我长期仰慕其作品的人的成长背景。艾灵顿公爵（Duke Ellington）小时候避开音乐课，专注于棒球、绘画和素描。玛利亚姆·米尔扎哈尼（Mariam Mirzakhani）小时候对数学不感兴趣，梦想成为小说家，后来却成为了第一位也是目前唯一一位获得菲尔兹奖（世界上最负盛名的数学奖项）的女性。文森特·梵高在彻底失败之前从事过五种不同的职业，直到快30岁时才拿起一本名为《绘画入门指南》的书。",
        "vocab": [
          {
            "word": "shun",
            "ph": "/ʃʌn/",
            "pos": "v",
            "mean": "避开；回避",
            "ex": "He shunned publicity after his retirement.",
            "tr": "退休后他避开公众关注。",
            "match": [
              "shunned"
            ]
          },
          {
            "word": "prestigious",
            "ph": "/preˈstiːdʒəs/",
            "pos": "adj",
            "mean": "享有声望的；著名的",
            "ex": "Harvard is one of the most prestigious universities in the world.",
            "tr": "哈佛是世界上最负盛名的大学之一。",
            "match": [
              "prestigious"
            ]
          },
          {
            "word": "flame out",
            "ph": "/fleɪm aʊt/",
            "pos": "phr v",
            "mean": "（因过度劳累或失败而）突然中止；燃尽；彻底失败",
            "ex": "Many child stars flame out before they reach adulthood.",
            "tr": "许多童星在成年之前就陨落了。",
            "match": [
              "flaming out"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Claude Shannon was an electrical engineer at the University of Michigan who took a philosophy course just to fulfill a requirement. And in it he learned about a near century old system of logic by which true and false statements could be coded as ones and zeros and solved, like math problems. This led to the development of binary code, which underlies all of our digital computers today. Frances Hesselbein took her first professional job at the age of 54 and went on to become the CEO of the Girl Scouts.",
        "cn": "克劳德·香农（Claude Shannon）是密歇根大学的一名电气工程师，他选修哲学课只是为了满足学分要求。在课上，他了解到了一个近百年前的逻辑系统，通过这个系统，真假陈述可以被编码为1和0，并像数学题一样被解决。这导致了二进制代码的发展，它是今天我们所有数字计算机的基础。弗朗西斯·赫塞尔拜恩（Frances Hesselbein）在54岁时才开始她的第一份职业工作，后来成为了女童子军的首席执行官。",
        "vocab": [
          {
            "word": "underlie",
            "ph": "/ˌʌndərˈlaɪ/",
            "pos": "v",
            "mean": "构成…的基础（或起因）；位于…之下",
            "ex": "Basic principles underlie all scientific research.",
            "tr": "基本原则构成了所有科学研究的基础。",
            "match": [
              "underlies"
            ]
          },
          {
            "word": "fulfill a requirement",
            "ph": "/fʊlˈfɪl ə rɪˈkwaɪərmənt/",
            "pos": "idiom",
            "mean": "满足要求",
            "ex": "Students must take this course to fulfill the graduation requirement.",
            "tr": "学生必须修这门课以满足毕业要求。",
            "match": [
              "fulfill a requirement"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "Here's an athlete I've followed. He tried some tennis, some skiing, wrestling. His mother was actually a tennis coach but she declined to coach him because he wouldn't return balls normally. And he kept trying more sports, handball, volleyball, soccer, badminton, skateboarding. So who is this dabbler? This is Roger Federer. Every bit as famous as an adult as Tiger Woods and yet even tennis enthusiasts don't usually know anything about his developmental story. Why is that?",
        "cn": "这是我关注的一位运动员。他尝试过网球、滑雪、摔跤。他的母亲实际上是一名网球教练，但她拒绝教他，因为他不按常规回球。他继续尝试更多的运动，手球、排球、足球、羽毛球、滑板。那么这个“涉猎者”是谁呢？这就是罗杰·费德勒。成年后的名气丝毫不亚于泰格·伍兹，然而即使是网球爱好者通常也不知道他的成长故事。这是为什么呢？",
        "vocab": [
          {
            "word": "decline",
            "ph": "/dɪˈklaɪn/",
            "pos": "v",
            "mean": "婉言拒绝；谢绝",
            "ex": "She declined the invitation to the party.",
            "tr": "她婉拒了派对的邀请。",
            "match": [
              "declined"
            ]
          },
          {
            "word": "dabbler",
            "ph": "/ˈdæblər/",
            "pos": "n",
            "mean": "涉猎者；浅尝辄止的人",
            "ex": "He is just a dabbler in politics, not a serious candidate.",
            "tr": "他只是个政治涉猎者，不是认真的候选人。",
            "match": [
              "dabbler"
            ]
          },
          {
            "word": "every bit as",
            "ph": "/ˈevri bɪt æz/",
            "pos": "idiom",
            "mean": "完全一样；同样地",
            "ex": "She is every bit as smart as her brother.",
            "tr": "她和她哥哥一样聪明。",
            "match": [
              "Every bit as"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "Well, I think it's partly because the Tiger story is very dramatic, but also because it seems like this tidy narrative that we can extrapolate to anything that we want to be good at in our own lives. But it turns out that in many ways golf is a uniquely horrible model of almost everything that humans want to learn. Golf is the epitome of what the psychologist Robin Hogarth called a kind learning environment. Next steps and goals are clear. Rules are clear and never change. When you do something you get feedback that is quick and accurate.",
        "cn": "嗯，我认为部分原因是泰格的故事非常具有戏剧性，但也因为它看起来像是一个整洁的叙事，我们可以将其推演到我们生活中想要擅长的任何事情上。但事实证明，在许多方面，高尔夫是人类想要学习的几乎所有事物的独特糟糕模型。高尔夫是心理学家罗宾·霍加斯所说的“友好学习环境”的缩影。下一步和目标都很明确。规则清晰且永不改变。当你做某事时，你会得到快速而准确的反馈。",
        "vocab": [
          {
            "word": "extrapolate",
            "ph": "/ɪkˈstræpəleɪt/",
            "pos": "v",
            "mean": "推断；推知；外推",
            "ex": "You can't simply extrapolate these results to the general population.",
            "tr": "你不能简单地将这些结果推断到整个人群。",
            "match": [
              "extrapolate"
            ]
          },
          {
            "word": "epitome",
            "ph": "/ɪˈpɪtəmi/",
            "pos": "n",
            "mean": "典范；缩影",
            "ex": "She is the epitome of elegance.",
            "tr": "她是优雅的典范。",
            "match": [
              "epitome"
            ]
          },
          {
            "word": "kind learning environment",
            "ph": "/kaɪnd ˈlɜːrnɪŋ ɪnˈvaɪrənmənt/",
            "pos": "n phr",
            "mean": "友好学习环境（规则明确、反馈即时的环境）",
            "ex": "Chess is considered a kind learning environment because the rules are fixed.",
            "tr": "国际象棋被认为是一个友好的学习环境，因为规则是固定的。",
            "match": [
              "kind learning environment"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "Chess. Also a kind learning environment. On the other end of the spectrum are wicked learning environments where next steps and goals may not be clear. Rules may change. You may or may not get feedback when you do something. It may be delayed. It may be inaccurate. Which one of these sounds like the world we're increasingly living in? So if hyper-specialization isn't always the trick in a wicked world, what is? That can be difficult to talk about because sometimes it looks like meandering or zig-zagging or keeping a broader view. It can look like getting behind.",
        "cn": "国际象棋。也是一个友好的学习环境。在光谱的另一端是“邪恶学习环境”，在那里的下一步和目标可能不明确。规则可能会改变。当你做某事时，你可能得到反馈，也可能得不到。反馈可能会延迟。反馈可能不准确。这其中哪一个听起来像我们日益生活的世界？那么，如果在邪恶的世界里，过度专业化并不总是诀窍，那什么才是呢？这可能很难谈论，因为有时它看起来像是在漫游、曲折前行或保持更广阔的视野。它看起来可能像是落后了。",
        "vocab": [
          {
            "word": "spectrum",
            "ph": "/ˈspektrəm/",
            "pos": "n",
            "mean": "光谱；范围",
            "ex": "The survey covered a wide spectrum of opinions.",
            "tr": "这项调查涵盖了广泛的意见。",
            "match": [
              "spectrum"
            ]
          },
          {
            "word": "wicked",
            "ph": "/ˈwɪkɪd/",
            "pos": "adj",
            "mean": "邪恶的；（此处指）复杂的、棘手的、不可预测的",
            "ex": "Climate change is a wicked problem with no easy solution.",
            "tr": "气候变化是一个没有简单解决方案的棘手问题。",
            "match": [
              "wicked"
            ]
          },
          {
            "word": "meander",
            "ph": "/miˈændər/",
            "pos": "v",
            "mean": "漫游；蜿蜒而行；闲逛",
            "ex": "They meandered through the park for hours.",
            "tr": "他们在公园里闲逛了几个小时。",
            "match": [
              "meandering"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "But if we look at research on technological innovation, it shows that increasingly the most impactful patents are authored by teams that include individuals who have worked across a large number of different technology classes and often merge things from different domains. Someone whose work I've admired who is sort of on the forefront of this, a Japanese man named Gunpei Yokoi. Yokoi didn't score well in his electronics exams at school. So he had to settle for a low-tier job as a machine maintenance worker at a playing card company in Kyoto.",
        "cn": "但如果我们看看关于技术创新的研究，它表明越来越具有影响力的专利是由团队撰写的，这些团队包含了在大量不同技术类别中工作过的个人，并且经常融合来自不同领域的东西。我一直很钦佩一个人的工作，他算是这方面的前沿人物，一个名叫横井军平（Gunpei Yokoi）的日本人。横井在学校的电子考试中成绩不佳。所以他不得不满足于在京都一家扑克牌公司做一份低层的机器维修工工作。",
        "vocab": [
          {
            "word": "forefront",
            "ph": "/ˈfɔːrfrʌnt/",
            "pos": "n",
            "mean": "最前线；先锋",
            "ex": "This company is at the forefront of medical research.",
            "tr": "这家公司处于医学研究的最前沿。",
            "match": [
              "forefront"
            ]
          },
          {
            "word": "settle for",
            "ph": "/ˈsetl fɔːr/",
            "pos": "phr v",
            "mean": "勉强接受；将就",
            "ex": "Don't settle for less than you deserve.",
            "tr": "不要接受低于你应得的待遇。",
            "match": [
              "settle for"
            ]
          },
          {
            "word": "low-tier",
            "ph": "/loʊ tɪr/",
            "pos": "adj",
            "mean": "低层的；低级的",
            "ex": "He started in a low-tier position and worked his way up.",
            "tr": "他从一个低层职位开始，一路晋升。",
            "match": [
              "low-tier"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "He combined some well-known technology from the calculator industry, with some well-known technology from the credit card industry, and made handheld games. And it turned this playing card company, which was founded in a wooden storefront in the 19th century, into a toy and game operation. You may have heard of it. It's called Nintendo. His magnum opus was the Game Boy. We probably don't make as many of those people as we could because we don't tend to incentivize anything that doesn't look like a head start or specialization.",
        "cn": "他结合了计算器行业的一些知名技术和信用卡行业的一些知名技术，制作了手持游戏机。这使得这家成立于19世纪一个木制店面的扑克牌公司转变成了一家玩具和游戏公司。你可能听说过它。它叫任天堂。他的代表作是Game Boy。我们可能没有培养出尽可能多的那样的人，因为我们倾向于不激励任何看起来不像起步优势或专业化的东西。",
        "vocab": [
          {
            "word": "magnum opus",
            "ph": "/ˌmæɡnəm ˈoʊpəs/",
            "pos": "n",
            "mean": "代表作；杰作",
            "ex": "The novel is considered his magnum opus.",
            "tr": "这部小说被认为是他的代表作。",
            "match": [
              "magnum opus"
            ]
          },
          {
            "word": "incentivize",
            "ph": "/ɪnˈsentɪvaɪz/",
            "pos": "v",
            "mean": "激励；给…以动力",
            "ex": "The government wants to incentivize companies to invest in green energy.",
            "tr": "政府希望激励公司投资绿色能源。",
            "match": [
              "incentivize"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "And naturally, I think there are as many ways to succeed as there are people. But I think we tend only to incentivize and encourage the Tiger path. When increasingly in a wicked world, we need people who travel the Roger path as well. Whereas the eminent physicists and mathematician and writer Freeman Dyson put it, for a healthy ecosystem we need both birds and frogs. Frogs are down in the mud seeing all the granular details. The birds are soaring up above not seeing those details but integrating the knowledge of the frogs.",
        "cn": "当然，我认为有多少人就有多少种成功的方式。但我认为我们往往只激励和鼓励“泰格·伍兹之路”。而在一个日益“邪恶”（复杂）的世界里，我们也需要走“罗杰·费德勒之路”的人。正如杰出的物理学家、数学家和作家弗里曼·戴森所说，为了一个健康的生态系统，我们既需要鸟也需要青蛙。青蛙在泥里看到所有的微小细节。鸟儿在上方翱翔，看不到那些细节，但能整合青蛙的知识。",
        "vocab": [
          {
            "word": "eminent",
            "ph": "/ˈemɪnənt/",
            "pos": "adj",
            "mean": "杰出的；显赫的",
            "ex": "He is an eminent scholar in his field.",
            "tr": "他是该领域的一位杰出学者。",
            "match": [
              "eminent"
            ]
          },
          {
            "word": "granular",
            "ph": "/ˈɡrænjələr/",
            "pos": "adj",
            "mean": "颗粒状的；（比喻）极细致的、微小的",
            "ex": "We need a more granular analysis of the data.",
            "tr": "我们需要对数据进行更细致的分析。",
            "match": [
              "granular"
            ]
          },
          {
            "word": "soar",
            "ph": "/sɔːr/",
            "pos": "v",
            "mean": "翱翔；高飞",
            "ex": "The eagle soared high above the valley.",
            "tr": "老鹰在山谷上空高高翱翔。",
            "match": [
              "soaring"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 12,
        "en": "And we need both. The problem, Dyson said, is that we're telling everyone to become frogs. And I think in a wicked world that's increasingly short-sighted. Education is the ultimate idea worth spreading. That's why we have a channel dedicated exclusively to celebrating and elevating the ideas of educators. Visit our Educator Talks channel where you can also learn more about our educator programs. Or watch the unabbreviated version of this talk here.",
        "cn": "我们需要两者兼备。戴森说，问题在于我们告诉每个人都要成为青蛙。我认为在一个复杂的世界里，这是日益短视的。教育是值得传播的终极理念。这就是为什么我们有一个专门致力于庆祝和提升教育者思想的频道。访问我们的“教育者访谈”频道，你也可以在那里了解更多关于我们教育者项目的信息。或者在这里观看本次演讲的完整版本。",
        "vocab": [
          {
            "word": "short-sighted",
            "ph": "/ˌʃɔːrt ˈsaɪtɪd/",
            "pos": "adj",
            "mean": "目光短浅的；近视的",
            "ex": "Cutting the research budget is a short-sighted decision.",
            "tr": "削减研究预算是一个目光短浅的决定。",
            "match": [
              "short-sighted"
            ]
          },
          {
            "word": "unabbreviated",
            "ph": "/ˌʌnəˈbriːvieɪtɪd/",
            "pos": "adj",
            "mean": "未删节的；完整的",
            "ex": "Please read the unabbreviated text.",
            "tr": "请阅读未删节的文本。",
            "match": [
              "unabbreviated"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "history_of_kola_nut",
    "title": "The Dark History of the Kola Nut",
    "info": {
      "author": "TED-Ed",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "history",
        "culture",
        "food",
        "commerce",
        "medicine"
      ],
      "link": "",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "In 1910, the Antarctic Nimrod expedition was in trouble. Led by Ernest Shackleton, the team had set the record for the southernmost point ever reached. But after miscalculating how long it would take to return to the nearest supply depot, the crew had run out of food. Fatigued and desperate, they turned to their medical kit. It contained a drug called \"Forced March\" tablets, which promised to mitigate hunger and prolong endurance thanks to the powerful combination of its two ingredients, cocaine and the extract of the African Kola nut. After taking the pills, the team was able to push through and reach safety. So how did the Kola nut, a sacred ingredient from West Africa, end up in Shackleton's emergency kit? And how did this same combination of Kola nut and cocaine make its way into the original recipe of a drink that billions of people consume every day?",
        "cn": "1910年，南极尼姆罗德探险队陷入了困境。在欧内斯特·沙克尔顿的带领下，该团队创下了到达最南端的记录。但在错误计算了返回最近补给站所需的时间后，船员们的食物耗尽了。疲惫不堪、绝望的他们求助于医疗包。里面含有一种名为“强行军”药片的药物，这种药片承诺可以缓解饥饿并延长耐力，这要归功于其两种成分的强力组合：可卡因和非洲可乐果的提取物。服用药丸后，团队得以挺过去并抵达安全地带。那么，可乐果这种来自西非的神圣成分，是如何出现在沙克尔顿的急救包里的呢？这种可乐果和可卡因的组合又是如何进入数十亿人每天饮用的饮料的原始配方中的呢？",
        "vocab": [
          {
            "word": "expedition",
            "ph": "/ˌekspəˈdɪʃn/",
            "pos": "n",
            "mean": "探险；远征",
            "ex": "He led an expedition to the North Pole.",
            "tr": "他率领了一支去北极的探险队。",
            "match": [
              "expedition"
            ]
          },
          {
            "word": "depot",
            "ph": "/ˈdiːpoʊ/",
            "pos": "n",
            "mean": "仓库；补给站",
            "ex": "They stored their supplies in a hidden depot.",
            "tr": "他们把物资储存在一个隐蔽的仓库里。",
            "match": [
              "depot"
            ]
          },
          {
            "word": "fatigued",
            "ph": "/fəˈtiːɡd/",
            "pos": "adj",
            "mean": "疲惫的；筋疲力尽的",
            "ex": "The fatigued soldiers needed rest.",
            "tr": "疲惫的士兵需要休息。",
            "match": [
              "Fatigued"
            ]
          },
          {
            "word": "mitigate",
            "ph": "/ˈmɪtɪɡeɪt/",
            "pos": "v",
            "mean": "减轻；缓解",
            "ex": "They tried to mitigate the effects of the drought.",
            "tr": "他们试图减轻干旱的影响。",
            "match": [
              "mitigate"
            ]
          },
          {
            "word": "endurance",
            "ph": "/ɪnˈdʊrəns/",
            "pos": "n",
            "mean": "耐力；持久力",
            "ex": "Long-distance running requires great endurance.",
            "tr": "长跑需要极大的耐力。",
            "match": [
              "endurance"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "The Kola nut is the seed of the Kola tree, a small evergreen native to the tropical forests of West Africa, where it's long been integral to the cultural fabric of many communities. Among the Igbo, the bitter nut is known as the food of the gods. In Igbo homes, it's custom to greet and honor guests by breaking a seed and sharing the lobes. Within Yoruba communities, Kola plays a central role in many religious ceremonies, such as weddings, funerals and divination. Kola nuts can contain up to 2.5% caffeine, or about twice the concentration found in coffee beans, along with trace amounts of theobromine, a structurally similar compound. Both molecules stimulate the central nervous system, causing effects like alertness and increased blood flow to the muscles and lungs. And it's these properties that likely led to Kola's long-standing use in traditional West African medicine.",
        "cn": "可乐果是可乐树的种子，这是一种原产于西非热带森林的小型常绿乔木，长期以来，它一直是许多社区文化结构中不可或缺的一部分。在伊博人中，这种苦涩的坚果被称为众神的食物。在伊博人的家中，通过掰开种子并分享其瓣来迎接和尊敬客人是一种习俗。在约鲁巴社区，可乐果在许多宗教仪式中扮演着核心角色，如婚礼、葬礼和占卜。可乐果含有高达2.5%的咖啡因，大约是咖啡豆中浓度的两倍，以及微量的可可碱，一种结构相似的化合物。这两种分子都会刺激中枢神经系统，产生诸如警觉性和增加流向肌肉和肺部的血液等效果。正是这些特性可能导致了可乐果在西非传统医学中的长期使用。",
        "vocab": [
          {
            "word": "integral",
            "ph": "/ˈɪntɪɡrəl/",
            "pos": "adj",
            "mean": "不可或缺的；构成整体所必需的",
            "ex": "Trust is integral to any good relationship.",
            "tr": "信任对于任何良好的关系都是不可或缺的。",
            "match": [
              "integral"
            ]
          },
          {
            "word": "fabric",
            "ph": "/ˈfæbrɪk/",
            "pos": "n",
            "mean": "（社会的）结构；组织",
            "ex": "Tradition is part of the fabric of society.",
            "tr": "传统是社会结构的一部分。",
            "match": [
              "fabric"
            ]
          },
          {
            "word": "divination",
            "ph": "/ˌdɪvɪˈneɪʃn/",
            "pos": "n",
            "mean": "占卜；预测",
            "ex": "Ancient cultures used various methods of divination.",
            "tr": "古代文化使用各种占卜方法。",
            "match": [
              "divination"
            ]
          },
          {
            "word": "stimulate",
            "ph": "/ˈstɪmjuleɪt/",
            "pos": "v",
            "mean": "刺激；激励",
            "ex": "Caffeine stimulates the heart rate.",
            "tr": "咖啡因会刺激心率。",
            "match": [
              "stimulate"
            ]
          },
          {
            "word": "alertness",
            "ph": "/əˈlɜːrtnəs/",
            "pos": "n",
            "mean": "警觉；机敏",
            "ex": "Coffee helps maintain alertness during long drives.",
            "tr": "咖啡有助于在长途驾驶中保持清醒。",
            "match": [
              "alertness"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "But there's also a bitter side to the Kola nut's history. As early as the 10th century, it was used by various groups in West Africa as currency to purchase captives across the Sahara. And in the 16th century, Portuguese and Afro-Portuguese traders in the region similarly exchanged the seeds for people whom they then sold into transatlantic slavery. By the 17th century, the Kola nut had made its way to the Americas. Brazilian oral narratives tell of enslaved peoples smuggling the seeds across the Atlantic in their clothing and hair. Enslavers who learned of the nut's energizing properties often weaponized it, supplying it to subjugated workers to induce more backbreaking labor. However, in places like Jamaica, Cuba and Brazil, many enslaved communities managed to cultivate Kola on their own, allowing them to preserve and continue practicing their cultural and religious traditions.",
        "cn": "但可乐果的历史也有苦涩的一面。早在10世纪，西非的各个群体就将其作为货币，在撒哈拉沙漠购买俘虏。在16世纪，该地区的葡萄牙和非裔葡萄牙商人同样用种子交换人口，然后将这些人卖到跨大西洋的奴隶贸易中。到了17世纪，可乐果已经传到了美洲。巴西的口述历史讲述了被奴役的人们将种子藏在衣服和头发里偷运过大西洋的故事。得知这种坚果具有提神作用的奴隶主经常将其武器化，提供给受压迫的工人，以诱导他们进行更繁重的劳动。然而，在牙买加、古巴和巴西等地，许多被奴役的社区设法自己种植可乐果，使他们能够保存并继续实践他们的文化和宗教传统。",
        "vocab": [
          {
            "word": "transatlantic",
            "ph": "/ˌtrænzətˈlæntɪk/",
            "pos": "adj",
            "mean": "横跨大西洋的",
            "ex": "The transatlantic slave trade was a tragedy.",
            "tr": "跨大西洋奴隶贸易是一场悲剧。",
            "match": [
              "transatlantic"
            ]
          },
          {
            "word": "smuggle",
            "ph": "/ˈsmʌɡl/",
            "pos": "v",
            "mean": "走私；偷运",
            "ex": "They tried to smuggle goods across the border.",
            "tr": "他们试图走私货物过境。",
            "match": [
              "smuggling"
            ]
          },
          {
            "word": "subjugated",
            "ph": "/ˈsʌbdʒuɡeɪtɪd/",
            "pos": "adj",
            "mean": "被征服的；受压迫的",
            "ex": "The subjugated people fought for their freedom.",
            "tr": "受压迫的人民为自由而战。",
            "match": [
              "subjugated"
            ]
          },
          {
            "word": "induce",
            "ph": "/ɪnˈduːs/",
            "pos": "v",
            "mean": "引诱；引起；催产",
            "ex": "The drug was used to induce sleep.",
            "tr": "这种药物被用来诱导睡眠。",
            "match": [
              "induce"
            ]
          },
          {
            "word": "backbreaking",
            "ph": "/ˈbækbreɪkɪŋ/",
            "pos": "adj",
            "mean": "极度繁重的；非常辛苦的",
            "ex": "Farming used to be backbreaking work.",
            "tr": "务农过去是一项极度繁重的工作。",
            "match": [
              "backbreaking"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "In the late 19th century, the Kola nut gained the attention of pharmacists in Europe and North America. Many claimed, without much evidence, that the nut contained countless medicinal and even mind-altering properties. Soon, Kola containing tonics, chocolates and lozenges lined pharmacy shelves. It was combined with extracts from the coca leaf, the source of cocaine, to create Shackleton's \"Forced March\" tablets, which were also supplied to British soldiers during World War I. In 1886, Atlanta pharmacist John Pemberton used this same potent combo to create the original recipe for Coca-Cola, which he claimed could treat ailments like headaches, indigestion and impotence. By the 1920s, African export of the Kola nut slowed, thanks in part to the introduction of another energizing seed from the region, the cocoa bean. Around this time, the Coca-Cola company is also said to have significantly reduced the Kola nut in its recipe. But no one knows for sure. The exact ingredients remain a closely guarded trade secret. However, we do know that the company removed all traces of cocaine by 1903.",
        "cn": "19世纪末，可乐果引起了欧洲和北美药剂师的注意。许多人声称（虽然没有太多证据），这种坚果含有无数的药用甚至改变精神的特性。很快，含有可乐果的补品、巧克力和润喉糖就摆满了药房的货架。它与可卡因的来源——古柯叶的提取物结合，创造了沙克尔顿的“强行军”药片，这种药片在一战期间也供应给英国士兵。1886年，亚特兰大药剂师约翰·彭伯顿使用这种相同的强效组合创造了可口可乐的原始配方，他声称这可以治疗头痛、消化不良和阳痿等疾病。到了20世纪20年代，非洲可乐果的出口放缓，部分原因是该地区引入了另一种提神种子——可可豆。大约在这个时候，据说可口可乐公司也大大减少了配方中可乐果的含量。但没人能确定。确切的成分仍然是严格保守的商业机密。然而，我们确实知道该公司在1903年之前去除了所有的可卡因痕迹。",
        "vocab": [
          {
            "word": "lozenge",
            "ph": "/ˈlɑːzɪndʒ/",
            "pos": "n",
            "mean": "润喉糖；锭剂",
            "ex": "She sucked on a lozenge to soothe her sore throat.",
            "tr": "她含着一颗润喉糖来缓解喉咙痛。",
            "match": [
              "lozenges"
            ]
          },
          {
            "word": "potent",
            "ph": "/ˈpoʊtnt/",
            "pos": "adj",
            "mean": "强效的；有力的",
            "ex": "This is a very potent medicine.",
            "tr": "这是一种非常强效的药。",
            "match": [
              "potent"
            ]
          },
          {
            "word": "ailment",
            "ph": "/ˈeɪlmənt/",
            "pos": "n",
            "mean": "小病；疾病",
            "ex": "He treated minor ailments with herbal remedies.",
            "tr": "他用草药疗法治疗小病。",
            "match": [
              "ailments"
            ]
          },
          {
            "word": "impotence",
            "ph": "/ˈɪmpətəns/",
            "pos": "n",
            "mean": "阳痿；无能",
            "ex": "The drug was marketed as a cure for impotence.",
            "tr": "这种药被推销为治疗阳痿的良药。",
            "match": [
              "impotence"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Today, the Kola nut can still be found in various drinks and supplements, like Bissy tea, a staple in many Jamaican homes. Believed to have been first brought to the region on slave ships in the 17th century, this tea is just one example of how the Kola nut, despite its bitter past, continues to serve as a powerful symbol of cultural preservation and remembrance. Thank you.",
        "cn": "如今，在各种饮料和补品中仍然可以找到可乐果，比如Bissy茶，这是许多牙买加家庭的主食。人们认为这种茶最早是在17世纪通过奴隶船带到该地区的，它只是可乐果尽管有着痛苦的过去，却继续作为文化保存和记忆的有力象征的一个例子。谢谢。",
        "vocab": [
          {
            "word": "supplement",
            "ph": "/ˈsʌplɪmənt/",
            "pos": "n",
            "mean": "补充剂；增补",
            "ex": "He takes vitamin supplements every day.",
            "tr": "他每天服用维生素补充剂。",
            "match": [
              "supplements"
            ]
          },
          {
            "word": "staple",
            "ph": "/ˈsteɪpl/",
            "pos": "n",
            "mean": "主食；主要产品",
            "ex": "Rice is a staple in many Asian countries.",
            "tr": "米饭是许多亚洲国家的主食。",
            "match": [
              "staple"
            ]
          },
          {
            "word": "preservation",
            "ph": "/ˌprezərˈveɪʃn/",
            "pos": "n",
            "mean": "保存；保护",
            "ex": "The preservation of historical sites is important.",
            "tr": "历史遗迹的保护很重要。",
            "match": [
              "preservation"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      },
      "abbr": {
        "en": "abbreviation",
        "cn": "缩写"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  },
  {
    "id": "tip_of_the_tongue_science",
    "title": "The Science Behind 'Tip of the Tongue' Moments",
    "info": {
      "author": "TED-Ed",
      "source": "Video Transcript",
      "level": "C1",
      "tags": [
        "psychology",
        "neuroscience",
        "memory",
        "language",
        "brain"
      ],
      "link": "https://www.ted.com/",
      "variants": null
    },
    "paras": [
      {
        "id": 1,
        "en": "You're sure you know your third grade teacher's name. It's like you're hovering over it in your mind, but it just won't materialize. Researchers call this tantalizing torment a tip of the tongue state, and it's something everyone experiences. But what's actually happening when a word gets caught here? And how can you best get it unstuck?",
        "cn": "你确信你知道你三年级老师的名字。就好像你在脑海中盘旋在这个名字上方，但它就是不肯显现出来。研究人员将这种诱人的折磨称为“舌尖现象”（话在嘴边），这是每个人都会经历的事情。但是，当一个词卡在这里时，究竟发生了什么？你又该如何最好地让它脱口而出呢？",
        "vocab": [
          {
            "word": "materialize",
            "ph": "/məˈtɪriəlaɪz/",
            "pos": "v",
            "mean": "显现；实现",
            "ex": "The ghost appeared to materialize out of thin air.",
            "tr": "那个鬼魂似乎凭空显现了出来。",
            "match": [
              "materialize"
            ]
          },
          {
            "word": "tantalizing",
            "ph": "/ˈtæntəlaɪzɪŋ/",
            "pos": "adj",
            "mean": "诱人的；逗弄人的（却得不到的）",
            "ex": "The tantalizing smell of fresh coffee wafted through the room.",
            "tr": "新鲜咖啡诱人的香味飘荡在房间里。",
            "match": [
              "tantalizing"
            ]
          },
          {
            "word": "torment",
            "ph": "/ˈtɔːrment/",
            "pos": "n",
            "mean": "折磨；痛苦",
            "ex": "Waiting for the results was pure torment.",
            "tr": "等待结果纯粹是一种折磨。",
            "match": [
              "torment"
            ]
          },
          {
            "word": "unstuck",
            "ph": "/ˌʌnˈstʌk/",
            "pos": "adj",
            "mean": "松动的；不再粘着的",
            "ex": "I need to get this zipper unstuck.",
            "tr": "我得把这个拉链弄松开。",
            "match": [
              "unstuck"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 2,
        "en": "Most of the time, our brains seamlessly summon words from vast stores of knowledge, pairing their meaning and sounds and stringing them into sentences. But in a tip of the tongue moment, this retrieval process derails, and there's the sensation of remembering the word, but the struggle to recall it. In these moments, on top of the usual brain activity associated with word retrieval, we also see other brain regions light up, like the conflict-detecting anterior cingulate, which generates that urgently frustrating feeling.",
        "cn": "大多数时候，我们的大脑会从海量的知识库中无缝地唤起词汇，将它们的含义和发音配对，并串连成句子。但在“舌尖现象”时刻，这个检索过程脱轨了，你会有一种记得那个词的感觉，但却难以回忆起来。在这些时刻，除了与词汇检索相关的常规大脑活动外，我们还看到其他大脑区域亮起来，比如负责冲突检测的前扣带皮层，正是它产生了那种急切的挫败感。",
        "vocab": [
          {
            "word": "seamlessly",
            "ph": "/ˈsiːmləsli/",
            "pos": "adv",
            "mean": "无缝地；流畅地",
            "ex": "The software integrates seamlessly with your existing apps.",
            "tr": "该软件与你现有的应用程序无缝集成。",
            "match": [
              "seamlessly"
            ]
          },
          {
            "word": "summon",
            "ph": "/ˈsʌmən/",
            "pos": "v",
            "mean": "召唤；唤起（勇气、记忆等）",
            "ex": "He managed to summon the courage to ask her out.",
            "tr": "他设法鼓起勇气约她出去。",
            "match": [
              "summon"
            ]
          },
          {
            "word": "retrieval",
            "ph": "/rɪˈtriːvl/",
            "pos": "n",
            "mean": "检索；取回",
            "ex": "The system allows for quick data retrieval.",
            "tr": "该系统允许快速的数据检索。",
            "match": [
              "retrieval"
            ]
          },
          {
            "word": "derail",
            "ph": "/diːˈreɪl/",
            "pos": "v",
            "mean": "（使）脱轨；（使）进程中断",
            "ex": "Bad weather threatened to derail their travel plans.",
            "tr": "恶劣的天气威胁要打乱他们的旅行计划。",
            "match": [
              "derails"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 3,
        "en": "It's unclear whether the target word is directly detected and just not successfully recalled, or associations are simply helping the brain infer that it has the word. The reality could also be some combination of these hypotheses. But the experience is pretty consistent with how psycholinguistic theorists think we mentally organize language-related information, going from the word's meaning and associations to how it sounds. Some researchers think that the last layer of information, sound, might be the most vulnerable to glitches.",
        "cn": "目前尚不清楚是目标词被直接检测到但未能成功回忆，还是联想仅仅在帮助大脑推断它知道这个词。现实也可能是这些假设的某种组合。但这种体验与心理语言学理论家认为我们如何在心理上组织语言相关信息非常一致：从词的含义和联想开始，到它的发音。一些研究人员认为，最后一层信息——声音，可能是最容易出现故障的。",
        "vocab": [
          {
            "word": "infer",
            "ph": "/ɪnˈfɜːr/",
            "pos": "v",
            "mean": "推断；推论",
            "ex": "We can infer the meaning of the word from the context.",
            "tr": "我们可以从上下文中推断出这个词的意思。",
            "match": [
              "infer"
            ]
          },
          {
            "word": "hypothesis",
            "ph": "/haɪˈpɑːθəsɪs/",
            "pos": "n",
            "mean": "假说；假设",
            "ex": "Scientists are testing the hypothesis.",
            "tr": "科学家们正在测试这个假说。",
            "match": [
              "hypotheses"
            ]
          },
          {
            "word": "vulnerable",
            "ph": "/ˈvʌlnərəbl/",
            "pos": "adj",
            "mean": "易受影响的；脆弱的",
            "ex": "Small businesses are vulnerable to economic downturns.",
            "tr": "小企业容易受到经济衰退的影响。",
            "match": [
              "vulnerable"
            ]
          },
          {
            "word": "glitch",
            "ph": "/ɡlɪtʃ/",
            "pos": "n",
            "mean": "小故障；失灵",
            "ex": "A technical glitch caused the website to crash.",
            "tr": "一个技术故障导致网站崩溃。",
            "match": [
              "glitches"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 4,
        "en": "Lots of things seem to influence how likely you are to enter a tip of the tongue state, all the way from what kinds of words are involved to your experiences and environment. For example, tip of the tongue states occur most frequently with proper nouns, infrequently used words, and ones that are more abstract and less visual, like idiosyncrasy or revelation.",
        "cn": "很多因素似乎都会影响你进入“舌尖现象”状态的可能性，从涉及什么样的词到你的经历和环境。例如，“舌尖现象”最常发生在专有名词、不常用的词，以及那些更抽象、视觉化程度较低的词上，比如“特质”（idiosyncrasy）或“启示”（revelation）。",
        "vocab": [
          {
            "word": "proper noun",
            "ph": "/ˌprɑːpər ˈnaʊn/",
            "pos": "n phr",
            "mean": "专有名词",
            "ex": "\"London\" and \"Mary\" are proper nouns.",
            "tr": "“伦敦”和“玛丽”是专有名词。",
            "match": [
              "proper nouns"
            ]
          },
          {
            "word": "abstract",
            "ph": "/ˈæbstrækt/",
            "pos": "adj",
            "mean": "抽象的",
            "ex": "Truth and justice are abstract concepts.",
            "tr": "真理和正义是抽象的概念。",
            "match": [
              "abstract"
            ]
          },
          {
            "word": "idiosyncrasy",
            "ph": "/ˌɪdiəˈsɪŋkrəsi/",
            "pos": "n",
            "mean": "（个人的）特质；怪癖",
            "ex": "One of his idiosyncrasies is talking to his plants.",
            "tr": "他的怪癖之一是和他的植物说话。",
            "match": [
              "idiosyncrasy"
            ]
          },
          {
            "word": "revelation",
            "ph": "/ˌrevəˈleɪʃn/",
            "pos": "n",
            "mean": "启示；被揭示的真相",
            "ex": "The book contained several shocking revelations.",
            "tr": "这本书包含了一些令人震惊的揭露。",
            "match": [
              "revelation"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 5,
        "en": "Cognitively, recognizing a face and associating it with general information, like someone's profession, is often easy, while names tend to trip us up. And retrieval of unintended words is also a common problem, like if you're trying to summon the star of the Wizard of Oz's name and keep getting stuck on Dorothy instead of Judy Garland.",
        "cn": "在认知上，认出一张脸并将其与一般信息（如某人的职业）联系起来通常很容易，而名字往往会让我们犯错。检索到非预期的词也是一个常见问题，比如当你试图回忆《绿野仙踪》主演的名字时，一直卡在“多萝西”上，而不是“朱迪·嘉兰”。",
        "vocab": [
          {
            "word": "cognitively",
            "ph": "/ˈkɑːɡnətɪvli/",
            "pos": "adv",
            "mean": "认知上地",
            "ex": "The puzzle was cognitively challenging.",
            "tr": "这个谜题在认知上具有挑战性。",
            "match": [
              "Cognitively"
            ]
          },
          {
            "word": "trip up",
            "ph": "/trɪp ʌp/",
            "pos": "phr v",
            "mean": "使犯错；绊倒",
            "ex": "The tricky question was designed to trip him up.",
            "tr": "那个刁钻的问题旨在让他犯错。",
            "match": [
              "trip us up"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 6,
        "en": "In these situations, the words seem to work as distracting, red herring-like blockers in the retrieval pathway. One study found that stressful test conditions made participants report more tip of the tongue experiences, suggesting that environmental conditions, including stress, can exacerbate them.",
        "cn": "在这些情况下，这些词似乎在检索路径中起到了分散注意力、像红鲱鱼（转移注意力的事物）一样的阻碍作用。一项研究发现，紧张的测试环境使参与者报告了更多的“舌尖现象”，这表明包括压力在内的环境条件会加剧这种情况。",
        "vocab": [
          {
            "word": "red herring",
            "ph": "/ˌred ˈherɪŋ/",
            "pos": "n phr",
            "mean": "转移注意力的事物",
            "ex": "The clue turned out to be a red herring.",
            "tr": "那条线索结果是个转移注意力的东西。",
            "match": [
              "red herring"
            ]
          },
          {
            "word": "blocker",
            "ph": "/ˈblɑːkər/",
            "pos": "n",
            "mean": "阻滞物；拦截者",
            "ex": "This medication acts as a beta blocker.",
            "tr": "这种药物起β受体阻滞剂的作用。",
            "match": [
              "blockers"
            ]
          },
          {
            "word": "exacerbate",
            "ph": "/ɪɡˈzæsərbeɪt/",
            "pos": "v",
            "mean": "加剧；恶化",
            "ex": "Scratching will only exacerbate the itch.",
            "tr": "抓挠只会加剧瘙痒。",
            "match": [
              "exacerbate"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 7,
        "en": "But some people tend to have more tip of the tongue moments than others. This seems to be true for people who speak multiple languages, perhaps because they know more than one word to describe the same thing. So, a word in one language might become an interfering blocker for the target word in another.",
        "cn": "但有些人比其他人更容易出现“舌尖现象”。这对于说多种语言的人来说似乎是真的，可能是因为他们知道不止一个词来描述同一件事。因此，一种语言中的词可能会成为另一种语言中目标词的干扰阻碍。",
        "vocab": [
          {
            "word": "interfering",
            "ph": "/ˌɪntərˈfɪrɪŋ/",
            "pos": "adj",
            "mean": "干扰的；爱管闲事的",
            "ex": "She has an interfering mother-in-law.",
            "tr": "她有个爱管闲事的婆婆。",
            "match": [
              "interfering"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 8,
        "en": "This seems to be especially true when someone's switching between languages, but it might also depend on their fluency. One study suggested that people who learned their second language before age five had fewer tip of the tongue stumbles. And sometimes even just hearing a language participant didn't know has proven to be enough to increase their tip of the tongue incidents. They also seem to rise with age, perhaps from a cognitive decline in speech-related brain areas, greater accumulation of knowledge to search through, or a combination of both.",
        "cn": "当人们在语言之间切换时尤其如此，但这可能也取决于他们的流利程度。一项研究表明，在五岁之前学习第二语言的人出现“舌尖现象”磕巴的情况较少。有时，即使只是听到参与者不懂的语言，也足以增加他们发生“舌尖现象”的频率。这种情况似乎也会随着年龄的增长而增加，这可能是由于言语相关大脑区域的认知衰退，需要搜索的知识积累更多，或者是两者的结合。",
        "vocab": [
          {
            "word": "fluency",
            "ph": "/ˈfluːənsi/",
            "pos": "n",
            "mean": "流利度",
            "ex": "He achieved fluency in Spanish after living in Madrid.",
            "tr": "在马德里生活后，他的西班牙语达到了流利水平。",
            "match": [
              "fluency"
            ]
          },
          {
            "word": "stumble",
            "ph": "/ˈstʌmbl/",
            "pos": "n",
            "mean": "磕巴；差错；绊倒",
            "ex": "He read the text without a single stumble.",
            "tr": "他毫无磕巴地读完了课文。",
            "match": [
              "stumbles"
            ]
          },
          {
            "word": "accumulation",
            "ph": "/əˌkjuːmjəˈleɪʃn/",
            "pos": "n",
            "mean": "积累；堆积物",
            "ex": "The accumulation of dust was visible.",
            "tr": "灰尘的堆积清晰可见。",
            "match": [
              "accumulation"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 9,
        "en": "But while tip of the tongue states may feel like the brain is failing, they seem to have a positive function. Words don't usually go past the point of no return and get permanently forgotten, so much as they tend to get tougher to access. That tough-to-shake tip of the tongue feeling of impending success just around the corner may help motivate us and make us more likely to remember. And researchers have observed that participants in tip of the tongue states are more likely to spend more time and effort searching for answers.",
        "cn": "虽然“舌尖现象”让人感觉像是大脑失灵了，但它们似乎有一个积极的功能。词汇通常不会越过“不归点”而被永久遗忘，更多时候只是变得更难获取。那种难以摆脱的、成功近在咫尺的“话在嘴边”的感觉，可能会帮助激励我们，让我们更有可能记起来。研究人员观察到，处于“舌尖现象”状态的参与者更有可能花更多的时间和精力去寻找答案。",
        "vocab": [
          {
            "word": "point of no return",
            "ph": "/ˌpɔɪnt əv noʊ rɪˈtɜːrn/",
            "pos": "idiom",
            "mean": "不归点；无法挽回的地步",
            "ex": "We've reached the point of no return with this project.",
            "tr": "这个项目我们已经到了无法回头的地步。",
            "match": [
              "point of no return"
            ]
          },
          {
            "word": "tough-to-shake",
            "ph": "/tʌf tuː ʃeɪk/",
            "pos": "adj",
            "mean": "难以摆脱的",
            "ex": "It was a tough-to-shake habit.",
            "tr": "那是一个难以改掉的习惯。",
            "match": [
              "tough-to-shake"
            ]
          },
          {
            "word": "impending",
            "ph": "/ɪmˈpendɪŋ/",
            "pos": "adj",
            "mean": "即将发生的；迫在眉睫的",
            "ex": "She had a sense of impending doom.",
            "tr": "她有一种大难临头的感觉。",
            "match": [
              "impending"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 10,
        "en": "One method for getting something off the tip of your tongue is cueing. This means leaning into the clues your brain surfaces, like associated memories and letters. For example, if you're trying to remember the name of the ancient city with the legendary hanging gardens, you might recall they're one of the seven wonders of the ancient world and run through the alphabet to see if any letters stand out. Because tip of the tongue moments don't seem to be just your brain babbling, but perhaps trying to jog its own extensive memory, where your third grade teacher's name is surely stored somewhere.",
        "cn": "解决“舌尖现象”的一种方法是“线索提示”（Cueing）。这意味着利用你大脑浮现出的线索，比如相关的记忆和字母。例如，如果你试图记住那座拥有传说中空中花园的古城的名字，你可能会回想起它们是古代世界七大奇迹之一，并在脑海中过一遍字母表，看看是否有哪个字母跳出来。因为“舌尖现象”似乎不仅仅是你大脑的胡言乱语，也许是它在试图唤起自己庞大的记忆库，你三年级老师的名字肯定储存在那里的某个地方。",
        "vocab": [
          {
            "word": "cueing",
            "ph": "/ˈkjuːɪŋ/",
            "pos": "n",
            "mean": "提示；暗示",
            "ex": "The actor needed some cueing to remember his lines.",
            "tr": "那个演员需要一些提示才能记起台词。",
            "match": [
              "queuing"
            ]
          },
          {
            "word": "surface",
            "ph": "/ˈsɜːrfɪs/",
            "pos": "v",
            "mean": "浮现；显露",
            "ex": "New evidence surfaced during the trial.",
            "tr": "在审判期间浮现了新的证据。",
            "match": [
              "surfaces"
            ]
          },
          {
            "word": "babble",
            "ph": "/ˈbæbl/",
            "pos": "v",
            "mean": "胡言乱语；牙牙学语",
            "ex": "The baby started to babble.",
            "tr": "婴儿开始牙牙学语。",
            "match": [
              "babbling"
            ]
          },
          {
            "word": "jog",
            "ph": "/dʒɑːɡ/",
            "pos": "v",
            "mean": "唤起（记忆）；轻推",
            "ex": "The photo helped jog his memory.",
            "tr": "这张照片帮助唤起了他的记忆。",
            "match": [
              "jog"
            ]
          }
        ],
        "gram": []
      },
      {
        "id": 11,
        "en": "The ability to express yourself with clarity and confidence can have a major impact on your life. That's why we've partnered with Immersed Education to create TED Summer School, a global program experienced in person or virtually that empowers young people to develop their voice, build confidence, and communicate their ideas with impact. Learn more and apply today at ted.com.",
        "cn": "清晰而自信地表达自己的能力会对你的人生通过产生重大影响。这就是为什么我们与 Immersed Education 合作创办了 TED 暑期学校，这是一个可以面对面或通过虚拟方式体验的全球项目，旨在赋能年轻人发展自己的声音，建立自信，并有影响力地交流他们的想法。立即在 ted.com 上了解更多信息并申请。",
        "vocab": [
          {
            "word": "clarity",
            "ph": "/ˈklærəti/",
            "pos": "n",
            "mean": "清晰；清楚",
            "ex": "She explained the complex topic with great clarity.",
            "tr": "她非常清晰地解释了这个复杂的话题。",
            "match": [
              "clarity"
            ]
          },
          {
            "word": "empower",
            "ph": "/ɪmˈpaʊər/",
            "pos": "v",
            "mean": "授权；赋能；使能够",
            "ex": "Education empowers people to change their lives.",
            "tr": "教育赋能人们改变他们的生活。",
            "match": [
              "empowers"
            ]
          }
        ],
        "gram": []
      }
    ],
    "pos_types": {
      "n": {
        "en": "noun",
        "cn": "名词"
      },
      "v": {
        "en": "verb",
        "cn": "动词"
      },
      "adj": {
        "en": "adjective",
        "cn": "形容词"
      },
      "adv": {
        "en": "adverb",
        "cn": "副词"
      },
      "prep": {
        "en": "preposition",
        "cn": "介词"
      },
      "conj": {
        "en": "conjunction",
        "cn": "连词"
      },
      "pron": {
        "en": "pronoun",
        "cn": "代词"
      },
      "det": {
        "en": "determiner",
        "cn": "限定词"
      },
      "int": {
        "en": "interjection",
        "cn": "感叹词"
      },
      "phr": {
        "en": "phrase",
        "cn": "短语"
      },
      "phr v": {
        "en": "phrasal verb",
        "cn": "动词短语"
      },
      "n phr": {
        "en": "noun phrase",
        "cn": "名词短语"
      },
      "adj phr": {
        "en": "adjective phrase",
        "cn": "形容词短语"
      },
      "modal v": {
        "en": "modal verb",
        "cn": "情态动词"
      },
      "idiom": {
        "en": "idiom",
        "cn": "习语"
      },
      "S": {
        "en": "sentence",
        "cn": "句子"
      }
    },
    "gram_types": {
      "S": {
        "en": "Sentence Structure",
        "cn": "句子结构"
      },
      "T": {
        "en": "Tense",
        "cn": "时态"
      },
      "C": {
        "en": "Clause",
        "cn": "从句"
      },
      "P": {
        "en": "Punctuation",
        "cn": "标点"
      },
      "W": {
        "en": "Word Form / Morphology",
        "cn": "词形变化"
      },
      "O": {
        "en": "Others",
        "cn": "其他"
      }
    }
  }
]