import{R as e,p as t,T as s}from"./vendor.6559ff3a.js";import{P as i}from"./index.8f07a56f.js";function a({subscriptions:a,setSubscriptions:n,activeEpisode:c,setActiveEpisode:o,isPlaying:r,setIsPlaying:p,playbackStates:l}){return a.length>0?e.createElement(t,{container:!0,spacing:3,direction:"column",alignItems:"stretch"},a.map((s=>e.createElement(t,{item:!0,key:s.id},e.createElement(i,{podcastId:s.id,subscriptions:a,setSubscriptions:n,playbackStates:l,activeEpisode:c,setActiveEpisode:o,isPlaying:r,setIsPlaying:p}))))):e.createElement(s,null,"No Active Subscriptions")}export{a as default};
