import React from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'

const unityContent = new UnityContent(
  'Undark/Build/Undark.json',
  'Undark/Build/UnityLoader.js'
)

const Playable = () => {
  return (
    <div className="view-container" id="playable">
      <Unity unityContent={unityContent} />
    </div>
  )
}

export default Playable
