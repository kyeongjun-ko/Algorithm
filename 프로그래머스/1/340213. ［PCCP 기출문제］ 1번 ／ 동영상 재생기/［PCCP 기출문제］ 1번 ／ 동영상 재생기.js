function solution(video_len, pos, op_start, op_end, commands) {
    const stringToSeconds = (timeString) => {
        const [minutes, seconds]  = timeString.split(":").map(Number);
        
        return minutes * 60 + seconds;
    }
    
    const secondsToString = (seconds) => {
        const minString = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secString = (seconds % 60).toString().padStart(2, "0");
        
        return `${minString}:${secString}`;
    }
    
    const videoTime = stringToSeconds(video_len);
    const startOpenningTime = stringToSeconds(op_start);
    const endOpenningTime = stringToSeconds(op_end);

    const getCurrentTime = (time) => {
        const posTime = stringToSeconds(pos);
        
        if (posTime >= startOpenningTime &&
            posTime <= endOpenningTime) {
            return endOpenningTime;
        }
        
        return posTime;
    }
    
    let currentTime = getCurrentTime(pos);
    
    const prevTime = (time) => {
        if (time < 10) {
            return 0;
        }
        
        return time - 10;
    }
    
    const nextTime = (time) => {
        const restTime = videoTime - time;
        
        if (restTime < 10) {
            return videoTime;
        }
        
        return time + 10;
    }
    
    const skipOpenning = (time) => {
        if (time >= startOpenningTime &&
            time <= endOpenningTime) {
            return endOpenningTime;
        }
        
        return time;
    }
    
    commands.forEach(task => {
        if (task === "next") {
            currentTime = skipOpenning(nextTime(currentTime));
        }
        
        if (task === "prev") {
            currentTime = skipOpenning(prevTime(currentTime));
        }
    })
    
    return secondsToString(skipOpenning(currentTime));
}