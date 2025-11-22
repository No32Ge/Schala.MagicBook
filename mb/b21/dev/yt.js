
// 默认播放器选项
const defaultOptions = {
    controls: 0,           // 隐藏YouTube原生控件
    modestbranding: 1,     // 隐藏YouTube logo
    rel: 0,                // 不显示相关视频
    fs: 0,                 // 隐藏全屏按钮（使用自定义的）
    iv_load_policy: 3,     // 隐藏视频注释
    autoplay: 0,
    showinfo: 0,
    disablekb: 1           // 禁用键盘控制
};

// 从URL中提取视频ID
function extractVideoId(url) {
    // 处理各种YouTube URL格式
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}

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
                    <div class="youtube-player-container" id="${this.containerId}-container">
                        <div class="youtube-player-wrapper">
                            <div id="${this.containerId}-player" class="youtube-player"></div>
                            <!-- 透明覆盖层 - 阻止与YouTube iframe的直接交互 -->
                            <div class="youtube-overlay" id="${this.containerId}-overlay"></div>
                            <div class="custom-controls" id="${this.containerId}-controls">
                                <div class="progress-container" id="${this.containerId}-progress-container">
                                    <div class="progress-bar" id="${this.containerId}-progress-bar">
                                        <div class="progress-handle"></div>
                                    </div>
                                </div>
                                <div class="controls-bottom">
                                    <div class="control-group">
                                        <button class="control-btn" id="${this.containerId}-playPauseBtn">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button class="control-btn" id="${this.containerId}-replayBtn">
                                            <i class="fas fa-redo"></i>
                                        </button>
                                        <div class="volume-control">
                                            <button class="control-btn" id="${this.containerId}-volumeBtn">
                                                <i class="fas fa-volume-up"></i>
                                            </button>
                                            <div class="volume-slider" id="${this.containerId}-volume-slider">
                                                <div class="volume-level" id="${this.containerId}-volume-level"></div>
                                            </div>
                                        </div>
                                        <span class="time-display" id="${this.containerId}-time">0:00 / 0:00</span>
                                    </div>
                                    <div class="control-group">
                                        <button class="control-btn" id="${this.containerId}-fullscreenBtn">
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
        const overlayToggle = document.getElementById(`${this.containerId}-overlay-toggle`);

        // 播放/暂停
        playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });

        // 重新播放
        replayBtn.addEventListener('click', () => {
            this.replay();
        });

        // 全屏
        fullscreenBtn.addEventListener('click', () => {
            this.toggleFullscreen();
        });

        // 进度条点击
        progressContainer.addEventListener('click', (e) => {
            if (!this.player || !this.player.getDuration) return;

            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newTime = this.player.getDuration() * percent;

            this.player.seekTo(newTime);
            this.updateProgressBar();
        });

        // 音量控制
        volumeBtn.addEventListener('click', () => {
            this.toggleMute();
        });

        volumeSlider.addEventListener('click', (e) => {
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

        // 覆盖层开关控制
        if (overlayToggle) {
            overlayToggle.addEventListener('change', (e) => {
                if (e.target.checked) {
                    overlay.classList.add('active');
                } else {
                    overlay.classList.remove('active');
                }
            });

            // 默认启用覆盖层
            overlay.classList.add('active');
        }
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

// 页面加载完成后初始化播放器
window.addEventListener('DOMContentLoaded', () => {
    // 示例：创建两个播放器实例
    const player1 = new YouTubePlayer(
        "player1",
        "https://www.youtube.com/watch?v=WSETfNmy8o8"
    );

    const player2 = new YouTubePlayer(
        "player2",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );

    // 监听全屏变化事件
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    function handleFullscreenChange() {
        // 更新所有播放器的全屏按钮状态
        document.querySelectorAll('.fullscreenBtn').forEach(btn => {
            const icon = btn.querySelector('i');
            if (!document.fullscreenElement) {
                icon.className = 'fas fa-expand';
            }
        });
    }
});