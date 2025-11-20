
import { gramTypes,posTypes } from "./data.js";

// 文章数据初始化函数
export function initArtcleData(currentArticle) {
    // 确保文章对象存在
    if (!currentArticle) return currentArticle;

    // 设置默认的语法类型
    if (!currentArticle.gram_types) {
        currentArticle.gram_types = gramTypes;
    }

    // 设置默认的词性类型
    if (!currentArticle.pos_types) {
        currentArticle.pos_types = posTypes;
    }

    // 确保文章有ID（如果没有，使用标题作为ID）
    if (!currentArticle.id && currentArticle.title) {
        currentArticle.id = currentArticle.title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }

    // 确保段落数据存在且是数组
    if (!currentArticle.paras || !Array.isArray(currentArticle.paras)) {
        currentArticle.paras = [];
    }

    // 初始化每个段落
    currentArticle.paras.forEach((para, index) => {
        // 确保段落有ID
        if (!para.id) {
            para.id = index + 1;
        }

        // 确保词汇表存在
        if (!para.vocab) {
            para.vocab = [];
        }

        // 确保语法点存在
        if (!para.gram) {
            para.gram = [];
        }

        // 初始化每个词汇项
        para.vocab.forEach(vocab => {
            if (!vocab.ph) vocab.ph = "";
            if (!vocab.pos) vocab.pos = "n";
            if (!vocab.mean) vocab.mean = "";
            if (!vocab.ex) vocab.ex = "";
        });

        // 初始化每个语法项
        para.gram.forEach(gram => {
            if (!gram.category) gram.category = "O";
        });
    });

    return currentArticle;
}

