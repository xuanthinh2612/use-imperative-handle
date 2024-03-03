
// de nhan duoc ref tu component cha truyen xuong cho component con thi su dung: forwarRef

// de private noi dung cua element cua ref tranh khong cho component ben ngoai chinh sua thi dung: useImperativeHandle
import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './video1.mp4'


// nhan ref tu cha qua doi so thu 2: ref
function Video(props, ref) {

    // tao 1 refVideo cuc bo
    const videoRef = useRef()

    // chi dinh ben ngoai dung ref co the su dung method nao trong ham useImperativeHandle(ref, callback())
    useImperativeHandle(ref, ()=> ({
        playVideo() {
            videoRef.current.play()
        },
        pauseVideo() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            width={300}
        />
    )
}

// dung forwarRef de nhan ref tu component cha va truyen xuong component con qua doi so thu 2
export default forwardRef(Video) 