import {loadResFromUrl} from './res.js';

// 示例1: 基本加载
export async function loadBasicSVG(url) {
    try {
        const result = await loadResFromUrl(url, {
            responseType: 'text'
        });
        console.log('SVG加载成功:', result.data);
        return result.data;
    } catch (error) {
        console.error('SVG加载失败:', error.message);
    }
}

// 示例2: 带重试机制的加载
export async function loadSVGWithRetry(url) {
    try {
        const result = await loadResFromUrl(`${url}`, {
            responseType: 'text',
            retries: 3,           // 失败时重试3次
            retryDelay: 500,      // 重试间隔500ms
            timeout: 5000         // 5秒超时
        });
        return result.data;
    } catch (error) {
        console.error(`图标 ${iconName} 加载失败:`, error.message);
        return '<svg><text>加载失败</text></svg>'; // 返回降级内容
    }
}

// 示例3: 验证SVG内容
export async function loadValidSVG(url) {
    try {
        const result = await loadResFromUrl(url, {
            responseType: 'text',
            validate: (response) => {
                // 验证内容类型
                const contentType = response.headers.get('content-type');
                return contentType.includes('svg') || contentType.includes('text');
            }
        });

        // 进一步验证SVG内容
        if (!result.data.includes('<svg')) {
            throw new Error('返回内容不是有效的SVG');
        }

        return result.data;
    } catch (error) {
        console.error('SVG验证失败:', error);
        return null;
    }
}

// 示例4: 带进度显示的加载（适用于大文件）
export async function loadLargeSVGWithProgress(url, progressElement) {
    try {
        const result = await loadResFromUrl(url, {
            responseType: 'text',
            onProgress: (loaded, total) => {
                const percent = Math.round((loaded / total) * 100);
                progressElement.textContent = `加载中: ${percent}%`;
                progressElement.style.width = `${percent}%`;
            }
        });

        progressElement.textContent = '加载完成!';
        return result.data;
    } catch (error) {
        progressElement.textContent = '加载失败';
        console.error('加载失败:', error);
        return null;
    }
}

// 批量加载多个SVG图标

export async function loadMultipleSVGs(iconUrls) {
    const promises = iconUrls.map(url =>
        loadResFromUrl(url, {
            responseType: 'text',
            retries: 1
        }).catch(error => {
            console.warn(`加载 ${url} 失败:`, error.message);
            return null;
        })
    );

    const results = await Promise.all(promises);
    return results
        .filter(result => result !== null)
        .map(result => result.data);
}


/**
 * 批量加载 SVG 文件并按指定尺寸注入宽高。
 *
 * @async
 * @param {string} from - SVG 文件所在目录路径（不带结尾的 `/`）。
 * @param {string[]} [importIcons=[]] - 需要加载的所有图标名称（不含 `.svg`）。
 * @param {string[]} [filter=[]] - 已存在或无需加载的图标名称列表，将从 importIcons 中排除。
 * @param {number} [width=16] - 注入到 <svg> 标签的宽度。
 * @param {number} [height=16] - 注入到 <svg> 标签的高度。
 *
 * @returns {Promise<Object<string,string>|undefined>}  
 * 返回一个以图标名称为键、SVG 字符串为值的对象。  
 * 若没有需要加载的图标（全都在 filter 中），则返回 undefined。
 *
 * @description
 * - 会自动过滤掉已存在的图标，只加载缺失部分。
 * - 使用 Promise.all 并行加载所有缺失的 SVG。
 * - 会使用正则将原始 SVG 的 <svg> 标签替换为带 width/height 的版本。
 */
export async function importSVGs(from, importIcons = [], filter = [], width = 16, height = 16) {
    const svgs = {};
    const missingIcons = importIcons.filter(name => !filter.includes(name));
    if (missingIcons.length === 0) return svgs;
    await Promise.all(
        missingIcons.map(async (name) => {
            const rawSVG = await loadSVGWithRetry(`${from}/${name}.svg`);
            const svg = rawSVG.replace(/<svg(\s)/, `<svg width="${width}" height="${height}"$1`);
            svgs[name] = svg;
        })
    );

    return svgs;
}



// 使用方法

// const icons = await loadMultipleSVGs([
//     '/icons/home.svg',
//     '/icons/user.svg',
//     '/icons/settings.svg'
// ]);