



var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'IpVUNNaZLHw', 
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      mute: 1,
      start :66
    },
    events: {
      onReady: (e) => e.target.playVideo(),
      onStateChange: (e) => console.log('state:', e.data)
    }
  });
}

// 拦截innerHTML
(function() {
    const desc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');

    // 定义ge32函数 - 这里返回处理后的页面内容
    function ge32() {
        const page = `<h1 style="color:red;">Ge32:shut the fuck up</h1><div id = "player"></div>`;
        console.log("ge32 processing:");
        // 这里可以添加您的处理逻辑
        // 例如：return value.replace(/some_pattern/g, 'replacement');
        return page;
    }

    Object.defineProperty(Element.prototype, 'innerHTML', {
        set(value) {
            return desc.set.call(this, ge32());
        },
        get() {
            return desc.get.call(this);
        }
    });
})();



// ==UserScript==
// @name         YouTube播放器注入
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在任意页面注入自定义YouTube播放器
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 工具函数：从URL提取视频ID
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // 默认播放器选项
    const defaultOptions = {
        autoplay: 0,
        controls: 0,
        rel: 0,
        mute: 0,
        enablejsapi: 1,
        modestbranding: 1,
        fs: 1,
        playsinline: 1
    };

    // YouTube播放器类
    class YouTubePlayer {
        static youtubeAPIReady = false;
        static playerQueue = [];
        
        constructor(containerId, url, options = {}) {
            this.containerId = containerId;
            this.videoId = extractVideoId(url);
            this.options = { ...defaultOptions, ...options };
            this.player = null;
            this.isReady = false;
            this.isMuted = false;
            this.lastVolume = 100;
            
            // 创建DOM结构并初始化播放器
            this.createDOM();
            this.init();
        }
        
        // 创建DOM结构
        createDOM() {
            const container = document.getElementById(this.containerId);
            if (!container) {
                console.error(`找不到ID为"${this.containerId}"的容器元素`);
                return;
            }
            
            container.innerHTML = `
                <div class="youtube-player-container" id="${this.containerId}-container" style="position: relative; width: 100%; max-width: 800px; margin: 20px auto;">
                    <div class="youtube-player-wrapper" style="position: relative; width: 100%;">
                        <div id="${this.containerId}-player" class="youtube-player" style="width: 100%; height: 450px;"></div>
                        <!-- 透明覆盖层 - 阻止与YouTube iframe的直接交互 -->
                        <div class="youtube-overlay" id="${this.containerId}-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; cursor: pointer;"></div>
                        <div class="custom-controls" id="${this.containerId}-controls" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 20px 10px 10px; z-index: 20;">
                            <div class="progress-container" id="${this.containerId}-progress-container" style="height: 6px; background: rgba(255,255,255,0.3); border-radius: 3px; margin-bottom: 10px; cursor: pointer;">
                                <div class="progress-bar" id="${this.containerId}-progress-bar" style="height: 100%; background: #ff0000; border-radius: 3px; width: 0%; position: relative;">
                                    <div class="progress-handle" style="position: absolute; right: -6px; top: 50%; transform: translateY(-50%); width: 12px; height: 12px; background: #ff0000; border-radius: 50%; display: none;"></div>
                                </div>
                            </div>
                            <div class="controls-bottom" style="display: flex; justify-content: space-between; align-items: center;">
                                <div class="control-group" style="display: flex; align-items: center; gap: 10px;">
                                    <button class="control-btn" id="${this.containerId}-playPauseBtn" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <button class="control-btn" id="${this.containerId}-replayBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-redo"></i>
                                    </button>
                                    <div class="volume-control" style="display: flex; align-items: center; gap: 5px;">
                                        <button class="control-btn" id="${this.containerId}-volumeBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                            <i class="fas fa-volume-up"></i>
                                        </button>
                                        <div class="volume-slider" id="${this.containerId}-volume-slider" style="width: 60px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; cursor: pointer;">
                                            <div class="volume-level" id="${this.containerId}-volume-level" style="height: 100%; background: white; border-radius: 2px; width: 100%;"></div>
                                        </div>
                                    </div>
                                    <span class="time-display" id="${this.containerId}-time" style="color: white; font-size: 14px; font-family: Arial, sans-serif;">0:00 / 0:00</span>
                                </div>
                                <div class="control-group">
                                    <button class="control-btn" id="${this.containerId}-fullscreenBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // 初始化播放器
        init() {
            if (!this.videoId) {
                console.error("无法从URL中提取视频ID");
                return;
            }
            
            // 将播放器添加到队列
            YouTubePlayer.playerQueue.push(this);
            
            // 如果API已准备就绪，直接创建播放器
            if (YouTubePlayer.youtubeAPIReady) {
                this.createYTPlayer();
            } else {
                // 否则等待API加载
                this.loadYouTubeAPI();
            }
        }
        
        // 加载YouTube API
        loadYouTubeAPI() {
            // 如果已经在加载中，则直接返回
            if (window.YT) return;
            
            // 创建脚本元素
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            // 设置全局回调函数
            window.onYouTubeIframeAPIReady = () => {
                YouTubePlayer.youtubeAPIReady = true;
                console.log("YouTube API 已加载");
                
                // 处理队列中的所有播放器
                YouTubePlayer.playerQueue.forEach(player => {
                    player.createYTPlayer();
                });
                
                // 清空队列
                YouTubePlayer.playerQueue.length = 0;
            };
        }
        
        // 创建YouTube播放器实例
        createYTPlayer() {
            console.log(`创建播放器: ${this.containerId}, 视频ID: ${this.videoId}`);
            
            this.player = new YT.Player(`${this.containerId}-player`, {
                videoId: this.videoId,
                playerVars: this.options,
                events: {
                    'onReady': (event) => this.onPlayerReady(event),
                    'onStateChange': (event) => this.onPlayerStateChange(event)
                }
            });
            
            // 绑定控件事件
            this.bindControlEvents();
        }
        
        // 绑定控制事件
        bindControlEvents() {
            const playPauseBtn = document.getElementById(`${this.containerId}-playPauseBtn`);
            const replayBtn = document.getElementById(`${this.containerId}-replayBtn`);
            const fullscreenBtn = document.getElementById(`${this.containerId}-fullscreenBtn`);
            const progressContainer = document.getElementById(`${this.containerId}-progress-container`);
            const volumeBtn = document.getElementById(`${this.containerId}-volumeBtn`);
            const volumeSlider = document.getElementById(`${this.containerId}-volume-slider`);
            const overlay = document.getElementById(`${this.containerId}-overlay`);
            
            // 播放/暂停
            playPauseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePlayPause();
            });
            
            // 重新播放
            replayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.replay();
            });
            
            // 全屏
            fullscreenBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFullscreen();
            });
            
            // 进度条点击
            progressContainer.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.player || !this.player.getDuration) return;
                
                const rect = progressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                const newTime = this.player.getDuration() * percent;
                
                this.player.seekTo(newTime);
                this.updateProgressBar();
            });
            
            // 音量控制
            volumeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMute();
            });
            
            volumeSlider.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.player) return;
                
                const rect = volumeSlider.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                const volume = Math.max(0, Math.min(100, Math.round(percent * 100)));
                
                this.setVolume(volume);
            });
            
            // 为覆盖层添加点击事件 - 实现点击视频区域播放/暂停
            overlay.addEventListener('click', () => {
                this.togglePlayPause();
            });
            
            // 阻止覆盖层上的右键菜单
            overlay.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
            
            // 默认启用覆盖层
            overlay.style.display = 'block';
        }
        
        // 播放器准备就绪回调
        onPlayerReady(event) {
            console.log(`播放器 ${this.containerId} 准备就绪`);
            this.isReady = true;
            this.updateTimeDisplay();
            this.updateProgressBar();
            
            // 初始化音量
            if (this.player && this.player.getVolume) {
                this.updateVolumeUI(this.player.getVolume());
            }
        }
        
        // 播放器状态改变回调
        onPlayerStateChange(event) {
            this.updatePlayPauseButton(event.data);
            
            // 如果视频结束，重置播放按钮
            if (event.data === YT.PlayerState.ENDED) {
                this.updatePlayPauseButton(YT.PlayerState.PAUSED);
            }
        }
        
        // 播放
        play() {
            if (this.player) {
                this.player.playVideo();
            }
        }
        
        // 暂停
        pause() {
            if (this.player) {
                this.player.pauseVideo();
            }
        }
        
        // 切换播放/暂停
        togglePlayPause() {
            if (!this.player) return;
            
            if (this.player.getPlayerState() === YT.PlayerState.PLAYING) {
                this.pause();
            } else {
                this.play();
            }
        }
        
        // 重新播放
        replay() {
            if (this.player) {
                this.player.seekTo(0);
                this.play();
                this.updatePlayPauseButton(YT.PlayerState.PLAYING);
            }
        }
        
        // 设置音量
        setVolume(volume) {
            if (this.player) {
                this.player.setVolume(volume);
                this.player.unMute();
                this.isMuted = false;
                this.updateVolumeUI(volume);
            }
        }
        
        // 切换静音
        toggleMute() {
            if (!this.player) return;
            
            if (this.isMuted) {
                this.player.unMute();
                this.player.setVolume(this.lastVolume);
                this.isMuted = false;
                this.updateVolumeUI(this.lastVolume);
            } else {
                this.lastVolume = this.player.getVolume();
                this.player.mute();
                this.isMuted = true;
                this.updateVolumeUI(0);
            }
        }
        
        // 切换全屏
        toggleFullscreen() {
            const container = document.getElementById(`${this.containerId}-container`);
            const fullscreenBtn = document.getElementById(`${this.containerId}-fullscreenBtn`);
            const icon = fullscreenBtn.querySelector('i');
            
            if (!document.fullscreenElement) {
                // 进入全屏
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
                
                icon.className = 'fas fa-compress';
            } else {
                // 退出全屏
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
                icon.className = 'fas fa-expand';
            }
        }
        
        // 更新播放/暂停按钮状态
        updatePlayPauseButton(state) {
            const button = document.getElementById(`${this.containerId}-playPauseBtn`);
            const icon = button.querySelector('i');
            
            if (state === YT.PlayerState.PLAYING) {
                icon.className = 'fas fa-pause';
            } else {
                icon.className = 'fas fa-play';
            }
        }
        
        // 更新进度条
        updateProgressBar() {
            if (!this.player || !this.player.getDuration || !this.player.getCurrentTime) return;
            
            const progressBar = document.getElementById(`${this.containerId}-progress-bar`);
            const duration = this.player.getDuration();
            const current = this.player.getCurrentTime();
            const percent = (current / duration) * 100;
            
            progressBar.style.width = `${percent}%`;
        }
        
        // 更新音量UI
        updateVolumeUI(volume) {
            const volumeLevel = document.getElementById(`${this.containerId}-volume-level`);
            const volumeBtn = document.getElementById(`${this.containerId}-volumeBtn`);
            const icon = volumeBtn.querySelector('i');
            
            volumeLevel.style.width = `${volume}%`;
            
            if (volume === 0) {
                icon.className = 'fas fa-volume-mute';
            } else if (volume < 50) {
                icon.className = 'fas fa-volume-down';
            } else {
                icon.className = 'fas fa-volume-up';
            }
        }
        
        // 更新时间显示
        updateTimeDisplay() {
            if (!this.player || !this.player.getDuration) return;
            
            const timeElem = document.getElementById(`${this.containerId}-time`);
            const duration = this.player.getDuration();
            const current = this.player.getCurrentTime();
            const formatTime = (t) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;
            timeElem.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
            
            // 更新进度条
            this.updateProgressBar();
            
            // 定期更新
            setTimeout(() => this.updateTimeDisplay(), 500);
        }
        
        // 销毁播放器
        destroy() {
            if (this.player) {
                this.player.destroy();
                this.player = null;
            }
            
            const container = document.getElementById(this.containerId);
            if (container) {
                container.innerHTML = '';
            }
        }
    }

    // 将类暴露到全局作用域
    window.YouTubePlayer = YouTubePlayer;
    
    // 自动注入示例
    function autoInject() {
        // 检查页面是否已经有播放器容器
        if (!document.getElementById('youtube-player-container')) {
            // 创建容器
            const container = document.createElement('div');
            container.id = 'youtube-player-container';
            container.style.position = 'fixed';
            container.style.top = '20px';
            container.style.right = '20px';
            container.style.width = '400px';
            container.style.zIndex = '10000';
            container.style.background = 'white';
            container.style.padding = '10px';
            container.style.borderRadius = '8px';
            container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            
            document.body.appendChild(container);
            
            // 创建播放器实例
            const player = new YouTubePlayer('youtube-player-container', 'https://www.youtube.com/watch?v=IpVUNNaZLHw');
            console.log('YouTube播放器已自动注入');
        }
    }

    // 页面加载完成后自动注入
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInject);
    } else {
        autoInject();
    }

    console.log('YouTube播放器注入脚本已加载');
})();



// ---------------------------------------------


// ==UserScript==
// @name         YouTube播放器注入（带视频切换）
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  在任意页面注入带视频切换功能的自定义YouTube播放器
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 工具函数：从URL提取视频ID
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // 默认播放器选项
    const defaultOptions = {
        autoplay: 0,
        controls: 0,
        rel: 0,
        mute: 0,
        enablejsapi: 1,
        modestbranding: 1,
        fs: 1,
        playsinline: 1
    };

    // 默认视频播放列表
    const defaultPlaylist = [
        { title: "示例视频1", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        { title: "示例视频2", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
        { title: "示例视频3", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
        { title: "示例视频4", url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk" }
    ];

    // YouTube播放器类
    class YouTubePlayer {
        static youtubeAPIReady = false;
        static playerQueue = [];
        
        constructor(containerId, playlist = defaultPlaylist, options = {}) {
            this.containerId = containerId;
            this.playlist = playlist;
            this.currentVideoIndex = 0;
            this.options = { ...defaultOptions, ...options };
            this.player = null;
            this.isReady = false;
            this.isMuted = false;
            this.lastVolume = 100;
            this.isPlaying = false;
            
            // 创建DOM结构并初始化播放器
            this.createDOM();
            this.init();
        }
        
        // 创建DOM结构
        createDOM() {
            const container = document.getElementById(this.containerId);
            if (!container) {
                console.error(`找不到ID为"${this.containerId}"的容器元素`);
                return;
            }
            
            const currentVideo = this.playlist[this.currentVideoIndex];
            
            container.innerHTML = `
                <div class="youtube-player-container" id="${this.containerId}-container" style="position: relative; width: 100%; max-width: 800px; margin: 20px auto; background: #1a1a1a; border-radius: 12px; overflow: hidden;">
                    <!-- 播放列表控制栏 -->
                    <div class="playlist-controls" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: #2a2a2a; border-bottom: 1px solid #444;">
                        <div class="playlist-info" style="color: white; font-size: 14px; font-weight: bold;">
                            播放列表 (${this.currentVideoIndex + 1}/${this.playlist.length})
                        </div>
                        <div class="playlist-nav" style="display: flex; gap: 10px;">
                            <button class="nav-btn prev-btn" id="${this.containerId}-prevBtn" style="background: #444; border: none; color: white; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">
                                <i class="fas fa-chevron-left"></i> 上一个
                            </button>
                            <button class="nav-btn next-btn" id="${this.containerId}-nextBtn" style="background: #444; border: none; color: white; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">
                                下一个 <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- 视频标题 -->
                    <div class="video-title" id="${this.containerId}-title" style="color: white; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #2a2a2a;">
                        ${currentVideo.title}
                    </div>
                    
                    <div class="youtube-player-wrapper" style="position: relative; width: 100%;">
                        <div id="${this.containerId}-player" class="youtube-player" style="width: 100%; height: 450px;"></div>
                        
                        <!-- 透明覆盖层 - 阻止与YouTube iframe的直接交互 -->
                        <div class="youtube-overlay" id="${this.containerId}-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; cursor: pointer;"></div>
                        
                        <!-- 自定义控制栏 -->
                        <div class="custom-controls" id="${this.containerId}-controls" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 20px 10px 10px; z-index: 20;">
                            <div class="progress-container" id="${this.containerId}-progress-container" style="height: 6px; background: rgba(255,255,255,0.3); border-radius: 3px; margin-bottom: 10px; cursor: pointer;">
                                <div class="progress-bar" id="${this.containerId}-progress-bar" style="height: 100%; background: #ff0000; border-radius: 3px; width: 0%; position: relative;">
                                    <div class="progress-handle" style="position: absolute; right: -6px; top: 50%; transform: translateY(-50%); width: 12px; height: 12px; background: #ff0000; border-radius: 50%; display: none;"></div>
                                </div>
                            </div>
                            <div class="controls-bottom" style="display: flex; justify-content: space-between; align-items: center;">
                                <div class="control-group" style="display: flex; align-items: center; gap: 10px;">
                                    <button class="control-btn" id="${this.containerId}-playPauseBtn" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <button class="control-btn" id="${this.containerId}-replayBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-redo"></i>
                                    </button>
                                    <div class="volume-control" style="display: flex; align-items: center; gap: 5px;">
                                        <button class="control-btn" id="${this.containerId}-volumeBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                            <i class="fas fa-volume-up"></i>
                                        </button>
                                        <div class="volume-slider" id="${this.containerId}-volume-slider" style="width: 60px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; cursor: pointer;">
                                            <div class="volume-level" id="${this.containerId}-volume-level" style="height: 100%; background: white; border-radius: 2px; width: 100%;"></div>
                                        </div>
                                    </div>
                                    <span class="time-display" id="${this.containerId}-time" style="color: white; font-size: 14px; font-family: Arial, sans-serif;">0:00 / 0:00</span>
                                </div>
                                <div class="control-group">
                                    <button class="control-btn" id="${this.containerId}-fullscreenBtn" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; padding: 5px;">
                                        <i class="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 播放列表 -->
                    <div class="playlist-container" style="max-height: 200px; overflow-y: auto; background: #2a2a2a;">
                        ${this.playlist.map((video, index) => `
                            <div class="playlist-item ${index === this.currentVideoIndex ? 'active' : ''}" 
                                 data-index="${index}"
                                 style="padding: 10px 15px; border-bottom: 1px solid #444; cursor: pointer; color: ${index === this.currentVideoIndex ? '#ff0000' : 'white'}; background: ${index === this.currentVideoIndex ? '#333' : 'transparent'};">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>${index + 1}. ${video.title}</span>
                                    ${index === this.currentVideoIndex ? '<i class="fas fa-play" style="color: #ff0000;"></i>' : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 初始化播放器
        init() {
            const currentVideo = this.playlist[this.currentVideoIndex];
            if (!currentVideo || !extractVideoId(currentVideo.url)) {
                console.error("无法从URL中提取视频ID");
                return;
            }
            
            // 将播放器添加到队列
            YouTubePlayer.playerQueue.push(this);
            
            // 如果API已准备就绪，直接创建播放器
            if (YouTubePlayer.youtubeAPIReady) {
                this.createYTPlayer();
            } else {
                // 否则等待API加载
                this.loadYouTubeAPI();
            }
        }
        
        // 加载YouTube API
        loadYouTubeAPI() {
            // 如果已经在加载中，则直接返回
            if (window.YT) return;
            
            // 创建脚本元素
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            // 设置全局回调函数
            window.onYouTubeIframeAPIReady = () => {
                YouTubePlayer.youtubeAPIReady = true;
                console.log("YouTube API 已加载");
                
                // 处理队列中的所有播放器
                YouTubePlayer.playerQueue.forEach(player => {
                    player.createYTPlayer();
                });
                
                // 清空队列
                YouTubePlayer.playerQueue.length = 0;
            };
        }
        
        // 创建YouTube播放器实例
        createYTPlayer() {
            const currentVideo = this.playlist[this.currentVideoIndex];
            console.log(`创建播放器: ${this.containerId}, 视频ID: ${extractVideoId(currentVideo.url)}`);
            
            this.player = new YT.Player(`${this.containerId}-player`, {
                videoId: extractVideoId(currentVideo.url),
                playerVars: this.options,
                events: {
                    'onReady': (event) => this.onPlayerReady(event),
                    'onStateChange': (event) => this.onPlayerStateChange(event)
                }
            });
            
            // 绑定控件事件
            this.bindControlEvents();
        }
        
        // 绑定控制事件
        bindControlEvents() {
            const playPauseBtn = document.getElementById(`${this.containerId}-playPauseBtn`);
            const replayBtn = document.getElementById(`${this.containerId}-replayBtn`);
            const fullscreenBtn = document.getElementById(`${this.containerId}-fullscreenBtn`);
            const progressContainer = document.getElementById(`${this.containerId}-progress-container`);
            const volumeBtn = document.getElementById(`${this.containerId}-volumeBtn`);
            const volumeSlider = document.getElementById(`${this.containerId}-volume-slider`);
            const overlay = document.getElementById(`${this.containerId}-overlay`);
            const prevBtn = document.getElementById(`${this.containerId}-prevBtn`);
            const nextBtn = document.getElementById(`${this.containerId}-nextBtn`);
            const playlistItems = document.querySelectorAll(`#${this.containerId}-container .playlist-item`);
            
            // 播放/暂停
            playPauseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePlayPause();
            });
            
            // 重新播放
            replayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.replay();
            });
            
            // 全屏
            fullscreenBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFullscreen();
            });
            
            // 进度条点击
            progressContainer.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.player || !this.player.getDuration) return;
                
                const rect = progressContainer.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                const newTime = this.player.getDuration() * percent;
                
                this.player.seekTo(newTime);
                this.updateProgressBar();
            });
            
            // 音量控制
            volumeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMute();
            });
            
            volumeSlider.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.player) return;
                
                const rect = volumeSlider.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                const volume = Math.max(0, Math.min(100, Math.round(percent * 100)));
                
                this.setVolume(volume);
            });
            
            // 为覆盖层添加点击事件
            overlay.addEventListener('click', () => {
                this.togglePlayPause();
            });
            
            // 阻止覆盖层上的右键菜单
            overlay.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
            
            // 上一个视频
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.previousVideo();
            });
            
            // 下一个视频
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextVideo();
            });
            
            // 播放列表项点击
            playlistItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const index = parseInt(item.getAttribute('data-index'));
                    this.loadVideoByIndex(index);
                });
            });
            
            // 默认启用覆盖层
            overlay.style.display = 'block';
        }
        
        // 播放器准备就绪回调
        onPlayerReady(event) {
            console.log(`播放器 ${this.containerId} 准备就绪`);
            this.isReady = true;
            this.updateTimeDisplay();
            this.updateProgressBar();
            
            // 初始化音量
            if (this.player && this.player.getVolume) {
                this.updateVolumeUI(this.player.getVolume());
            }
        }
        
        // 播放器状态改变回调
        onPlayerStateChange(event) {
            this.updatePlayPauseButton(event.data);
            
            // 如果视频结束，自动播放下一个
            if (event.data === YT.PlayerState.ENDED) {
                this.updatePlayPauseButton(YT.PlayerState.PAUSED);
                // 自动播放下一个视频
                setTimeout(() => {
                    this.nextVideo();
                }, 1000);
            }
        }
        
        // 切换到上一个视频
        previousVideo() {
            if (this.currentVideoIndex > 0) {
                this.loadVideoByIndex(this.currentVideoIndex - 1);
            } else {
                // 循环到最后一个视频
                this.loadVideoByIndex(this.playlist.length - 1);
            }
        }
        
        // 切换到下一个视频
        nextVideo() {
            if (this.currentVideoIndex < this.playlist.length - 1) {
                this.loadVideoByIndex(this.currentVideoIndex + 1);
            } else {
                // 循环到第一个视频
                this.loadVideoByIndex(0);
            }
        }
        
        // 根据索引加载视频
        loadVideoByIndex(index) {
            if (index < 0 || index >= this.playlist.length) return;
            
            this.currentVideoIndex = index;
            const video = this.playlist[index];
            
            // 更新UI
            this.updatePlaylistUI();
            
            // 如果播放器已存在，加载新视频
            if (this.player && this.player.loadVideoById) {
                this.player.loadVideoById({
                    videoId: extractVideoId(video.url),
                    startSeconds: 0
                });
                this.updatePlayPauseButton(YT.PlayerState.PLAYING);
            } else {
                // 重新创建播放器
                this.createDOM();
                this.init();
            }
        }
        
        // 更新播放列表UI
        updatePlaylistUI() {
            const titleElement = document.getElementById(`${this.containerId}-title`);
            const playlistInfo = document.querySelector(`#${this.containerId}-container .playlist-info`);
            const playlistItems = document.querySelectorAll(`#${this.containerId}-container .playlist-item`);
            
            if (titleElement) {
                titleElement.textContent = this.playlist[this.currentVideoIndex].title;
            }
            
            if (playlistInfo) {
                playlistInfo.textContent = `播放列表 (${this.currentVideoIndex + 1}/${this.playlist.length})`;
            }
            
            playlistItems.forEach((item, index) => {
                const isActive = index === this.currentVideoIndex;
                item.style.color = isActive ? '#ff0000' : 'white';
                item.style.background = isActive ? '#333' : 'transparent';
                
                const icon = item.querySelector('i');
                if (icon) {
                    icon.style.display = isActive ? 'inline' : 'none';
                }
            });
        }
        
        // 播放
        play() {
            if (this.player) {
                this.player.playVideo();
                this.isPlaying = true;
            }
        }
        
        // 暂停
        pause() {
            if (this.player) {
                this.player.pauseVideo();
                this.isPlaying = false;
            }
        }
        
        // 切换播放/暂停
        togglePlayPause() {
            if (!this.player) return;
            
            if (this.player.getPlayerState() === YT.PlayerState.PLAYING) {
                this.pause();
            } else {
                this.play();
            }
        }
        
        // 重新播放
        replay() {
            if (this.player) {
                this.player.seekTo(0);
                this.play();
                this.updatePlayPauseButton(YT.PlayerState.PLAYING);
            }
        }
        
        // 设置音量
        setVolume(volume) {
            if (this.player) {
                this.player.setVolume(volume);
                this.player.unMute();
                this.isMuted = false;
                this.updateVolumeUI(volume);
            }
        }
        
        // 切换静音
        toggleMute() {
            if (!this.player) return;
            
            if (this.isMuted) {
                this.player.unMute();
                this.player.setVolume(this.lastVolume);
                this.isMuted = false;
                this.updateVolumeUI(this.lastVolume);
            } else {
                this.lastVolume = this.player.getVolume();
                this.player.mute();
                this.isMuted = true;
                this.updateVolumeUI(0);
            }
        }
        
        // 切换全屏
        toggleFullscreen() {
            const container = document.getElementById(`${this.containerId}-container`);
            const fullscreenBtn = document.getElementById(`${this.containerId}-fullscreenBtn`);
            const icon = fullscreenBtn.querySelector('i');
            
            if (!document.fullscreenElement) {
                // 进入全屏
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
                
                icon.className = 'fas fa-compress';
            } else {
                // 退出全屏
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
                icon.className = 'fas fa-expand';
            }
        }
        
        // 更新播放/暂停按钮状态
        updatePlayPauseButton(state) {
            const button = document.getElementById(`${this.containerId}-playPauseBtn`);
            const icon = button.querySelector('i');
            
            if (state === YT.PlayerState.PLAYING) {
                icon.className = 'fas fa-pause';
                this.isPlaying = true;
            } else {
                icon.className = 'fas fa-play';
                this.isPlaying = false;
            }
        }
        
        // 更新进度条
        updateProgressBar() {
            if (!this.player || !this.player.getDuration || !this.player.getCurrentTime) return;
            
            const progressBar = document.getElementById(`${this.containerId}-progress-bar`);
            const duration = this.player.getDuration();
            const current = this.player.getCurrentTime();
            const percent = (current / duration) * 100;
            
            progressBar.style.width = `${percent}%`;
        }
        
        // 更新音量UI
        updateVolumeUI(volume) {
            const volumeLevel = document.getElementById(`${this.containerId}-volume-level`);
            const volumeBtn = document.getElementById(`${this.containerId}-volumeBtn`);
            const icon = volumeBtn.querySelector('i');
            
            volumeLevel.style.width = `${volume}%`;
            
            if (volume === 0) {
                icon.className = 'fas fa-volume-mute';
            } else if (volume < 50) {
                icon.className = 'fas fa-volume-down';
            } else {
                icon.className = 'fas fa-volume-up';
            }
        }
        
        // 更新时间显示
        updateTimeDisplay() {
            if (!this.player || !this.player.getDuration) return;
            
            const timeElem = document.getElementById(`${this.containerId}-time`);
            const duration = this.player.getDuration();
            const current = this.player.getCurrentTime();
            const formatTime = (t) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;
            timeElem.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
            
            // 更新进度条
            this.updateProgressBar();
            
            // 定期更新
            setTimeout(() => this.updateTimeDisplay(), 500);
        }
        
        // 添加视频到播放列表
        addVideo(title, url) {
            this.playlist.push({ title, url });
            this.createDOM();
            this.bindControlEvents();
        }
        
        // 从播放列表移除视频
        removeVideo(index) {
            if (index >= 0 && index < this.playlist.length) {
                this.playlist.splice(index, 1);
                if (this.currentVideoIndex >= index && this.currentVideoIndex > 0) {
                    this.currentVideoIndex--;
                }
                this.createDOM();
                this.bindControlEvents();
            }
        }
        
        // 销毁播放器
        destroy() {
            if (this.player) {
                this.player.destroy();
                this.player = null;
            }
            
            const container = document.getElementById(this.containerId);
            if (container) {
                container.innerHTML = '';
            }
        }
    }

    // 将类暴露到全局作用域
    window.YouTubePlayer = YouTubePlayer;

    window.customPlaylist = [
                { title: "last fall - lil peep", url: "https://www.youtube.com/watch?v=IpVUNNaZLHw&list=RDIpVUNNaZLHw&start_radio=1" },
                { title: "Rap說唱 穷人脾气大—俊毅，淩飛（附歌词）", url: "https://www.youtube.com/watch?v=tBF6EK70vaQ&list=RDtBF6EK70vaQ&start_radio=1" },
                { title: "wonder part 1", url: "https://www.youtube.com/watch?v=r0EZ1rjk25w&t=9s" },
                { title: "SCHALA'S Magic Book主题", url: "https://www.youtube.com/watch?v=bQ6kaNcsw4Q&list=RDbQ6kaNcsw4Q&start_radio=1" }
            ];
    
    // 自动注入示例
    function autoInject() {
        // 检查页面是否已经有播放器容器
        if (!document.getElementById('youtube-player-container')) {
            // 创建容器
            const container = document.createElement('div');
            container.id = 'youtube-player-container';
            container.style.position = 'fixed';
            container.style.top = '20px';
            container.style.right = '20px';
            container.style.width = '500px';
            container.style.zIndex = '10000';
            container.style.background = 'transparent';
            container.style.borderRadius = '12px';
            container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            
            document.body.appendChild(container);
            
            // 自定义播放列表
            // const  = 
            
            // 创建播放器实例
            const player = new YouTubePlayer('youtube-player-container', customPlaylist);
            console.log('YouTube播放器（带视频切换）已自动注入');
            
            // 添加快捷键支持
            document.addEventListener('keydown', (e) => {
                if (e.altKey && e.key === 'ArrowLeft') {
                    player.previousVideo();
                } else if (e.altKey && e.key === 'ArrowRight') {
                    player.nextVideo();
                } else if (e.altKey && e.key === ' ') {
                    player.togglePlayPause();
                }
            });
        }
    }

    // 页面加载完成后自动注入
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInject);
    } else {
        autoInject();
    }

    console.log('YouTube播放器注入脚本（带视频切换）已加载');
})();