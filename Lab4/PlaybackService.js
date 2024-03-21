import TrackPlayer, {Event} from "react-native-track-player";

module.exports = async function(){
    TrackPlayer.addEventListener(Event.RemotePause, ()=>{
        console.log('remote paused')
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
        console.log('remote played')
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, ()=>{
        console.log('remote next')
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{
        console.log('remote prev')
        TrackPlayer.skipToPrevious()
    })
    TrackPlayer.addEventListener(Event.RemoteSeek, (event)=>{
        console.log('remote seek '+event.position)
        TrackPlayer.seekTo(event.position)
        
    })
}