好的，我帮你整理成一份完整的 README.md 文档，保留你的原文风格，同时格式清晰，图片引用也做了 Markdown 处理：


# Schala's Magic Book

Sup, bro, this is Schala's Magic Book. You can click the links below to visit the pages:

- **version 1:** [https://english.ge32.site/mb/b1](https://english.ge32.site/mb/b1)
- **version 2:** [https://english.ge32.site/mb/b2](https://english.ge32.site/mb/b2)
- **version 2-1:** [https://english.ge32.site/mb/b21](https://english.ge32.site/mb/b21)

---

## What is it?

Basically, this is a tool to help you improve your English. There is some data already included, but it doesn't matter—you can switch it whenever you want.  

The main focus is on the JSON data. If you follow the format rules, everything will work. Here's an example you can follow:



- ok this is chinse version:

```json
[
    {
        "id": "example_article",
        "title": "文章标题（可自定义）",
        "info": {
            "author": "作者名（可选）",
            "source": "来源（可选）",
            "level": "难度等级，例如 A1/B2/C1",
            "tags": ["标签1", "标签2"],  // 用于分类和筛选
            "link": "[原文链接](https://example.com)",  // 原文来源或参考
            "variants": null  // 可选，用于存放文章的变体或不同版本
        },
        "paras": [
            {
                "id": 1,  // 段落编号
                "en": "这里放英文句子或段落。",  // 段落英文内容
                "cn": "这里放中文翻译或解释。",  // 对应中文翻译
                "vocab": [  // 词汇解析
                    {
                        "word": "单词或短语",
                        "ph": "/发音/",  // 国际音标
                        "pos": "词性，如 n/v/adj/phr",
                        "mean": "词义",
                        "ex": "例句"
                    }
                ],
                "gram": [  // 语法点解析
                    {
                        "id": "语法ID（唯一标识）",
                        "name": "语法点名称",
                        "category": "S（句子结构）、P（短语）、W（单词）等",
                        "level": "适合的语言等级",
                        "pattern": "语法结构模板，例如 SUBJ + be + not + X + but + Y",
                        "components": [  // 结构组成说明
                            { "slot": "位置名称", "role": "作用", "pos": ["词性列表"] }
                        ],
                        "function": "语法点作用说明",
                        "example": { "en": "示例英文", "cn": "示例中文" },
                        "variants": ["可选的语法变体"],
                        "constraints": "使用限制或注意事项"
                    }
                ]
            }
        ]
    }
]

```

- english version( as you see, now this version 翻译字段暂时是cn do not suppost anoter 字段名)

  ```json
  [
      {
          "id": "example_article",
          "title": "Article Title (customizable)",
          "info": {
              "author": "Author Name (optional)",
              "source": "Source (optional)",
              "level": "Difficulty level, e.g., A1/B2/C1",
              "tags": ["tag1", "tag2"],  // For categorization and filtering
              "link": "[Original link](https://example.com)",  // Reference or source
              "variants": null  // Optional, for storing article variants or different versions
          },
          "paras": [
              {
                  "id": 1,  // Paragraph number
                  "en": "Place the English sentence or paragraph here.",  // English content
                  "cn": "Place the corresponding translation or explanation here.",  // Translation or explanation
                  "vocab": [  // Vocabulary explanations
                      {
                          "word": "Word or phrase",
                          "ph": "/pronunciation/",  // IPA pronunciation
                          "pos": "Part of speech, e.g., n/v/adj/phr",
                          "mean": "Meaning",
                          "ex": "Example sentence"
                      }
                  ],
                  "gram": [  // Grammar points
                      {
                          "id": "unique_grammar_id",
                          "name": "Grammar point name",
                          "category": "S (sentence), P (phrase), W (word), etc.",
                          "level": "Recommended language level",
                          "pattern": "Grammar pattern template, e.g., SUBJ + be + not + X + but + Y",
                          "components": [  // Component breakdown
                              { "slot": "Position name", "role": "Function", "pos": ["list of possible POS"] }
                          ],
                          "function": "Explanation of what this grammar point does",
                          "example": { "en": "Example in English", "cn": "Example translation" },
                          "variants": ["Optional grammar variants"],
                          "constraints": "Usage constraints or notes"
                      }
                  ]
              }
          ]
      }
  ]
  
  ```

  



## How to use

1. Create a JSON file following the above structure.
2. Open the page (`index.html`) in the corresponding version folder (`b1`, `b2`, `b21`).
3. import file to this tool.
4. The page will automatically render the JSON data as articles.

---

## Example render

![Schala Magic Book Example](README.assets/image-20251120193109172.png)

---

Focus on the **JSON data** and follow the format rules—everything else is handled by the page automatically.




````

````