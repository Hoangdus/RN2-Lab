import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import TrackPlayer, { State, AppKilledPlaybackBehavior, Capability } from 'react-native-track-player'

const Bai3 = () => {

    const [isSetup, setSetup] = useState(false)

    const trackList = [
      track1={
        url:require('./music/Fantasy.mp3'),
        title:'cloudfield - Fantasy (ft. Reichuu)'
      },
      track2={
        url:require('./music/Hover.mp3'),
        title:'Icehunt - Hover (feat. Helen Tess) [NCS Release]'
      },
      track3={
        url:require('./music/LightsOut.mp3'),
        title:'PSYRUS - Lights Out (Official Lyrics Video)'
      },
      track4={
        url:require('./music/Sunrise.mp3'),
        title:'Rubika - Sunrise (ft. Tom Bradley) - Lyric Video - ESL Soundtrack'
      },
      track5={
        url:require('./music/Shiawase.mp3'),
        title:'Dion Timmer - Shiawase (VIP) [Monstercat Release]'
      }
    ]

    const setupPlayer = async ()=>{
      if (!isSetup){
        await TrackPlayer.setupPlayer().then(()=>{setSetup(true); console.log('player done setup')})
      }
      if(isSetup){
        await TrackPlayer.updateOptions({
          android:{
            appKilledPlaybackBehavior:AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
          },
          capabilities:[
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo,
          ],
          compactCapabilities:[
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo,
          ],
          progressUpdateEventInterval:1,
          
        })
        await TrackPlayer.reset().then(()=>{console.log('player done reset')})
        await TrackPlayer.add(trackList).then(()=>{console.log('Added playlist')})
      }
    }
    setupPlayer()

    return (
      <View style={styles.container}>
        <View style={styles.butonView}>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.play(); TrackPlayer.getActiveTrackIndex().then((track)=>{console.log('Playing track: '+track)})}}>
            <Text style={styles.text}>
              Play
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.pause(); TrackPlayer.getActiveTrackIndex().then((track)=>{console.log('Pausing track: '+track)})}}>
            <Text style={styles.text}>
              Pause
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butonView}>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.seekBy(-5).then(()=>{console.log('back 5s')})}}>
            <Text style={styles.text}>
              Skip -5s
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.seekBy(5).then(()=>{console.log('FF by 5s')})}}>
            <Text style={styles.text}>
              Skip 5s
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butonView}>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.skipToPrevious(); TrackPlayer.getActiveTrackIndex().then((index)=>{console.log('Skipped to track: '+index)})}}>
            <Text style={styles.text}>
              Prev
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{TrackPlayer.skipToNext(); TrackPlayer.getActiveTrackIndex().then((track)=>{console.log('Skipped to track: '+track)})}}>
            <Text style={styles.text}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <Text>
          PH40935
        </Text>
      </View>
    )
}

export default Bai3

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'orange',
    borderRadius:15,
    margin:10
  },
  butonView:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontSize:20
  },
})