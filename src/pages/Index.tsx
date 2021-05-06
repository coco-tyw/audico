import './Index.sass'
import Footer from '../components/Footer/Index'

function Index() {
  const audioCtx = new AudioContext()
  console.log(audioCtx.destination)
  
  const onChange = (e: any) => {
    const target = e.target as HTMLInputElement
    const file = target!.files![0]
    file.arrayBuffer()
        .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          const bufferSrc = audioCtx.createBufferSource()
          bufferSrc.buffer = audioBuffer
          bufferSrc.connect(audioCtx.destination)
          bufferSrc.start()
        })
  }

  return (
    <div className="Index">
      <input type="file" onChange={onChange} />
      <Footer />
    </div>
  )
}

export default Index
