import React, { Fragment, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import { CgMenuGridO } from "react-icons/cg"
export default function ImgLayout(props) {

    const [image, setImage] = useState(false)

    const handleImage = () =>{
      setImage(!image)
    }
    //image for page
    var img = []
    for (let i = 0; i < 5; i++) {
        if (i === 0) { img.push(props.hotel.photos[i].pictureUrl) }
        else {
            let x = props.hotel.photos[i].thumbnailUrl
            x = x.split("=")
            x[1] = "medium"
            x = x.join("=")
            img.push(x)
        }
    }

    //image for model
    var imglist = []
    for (let i = 0; i < props.hotel.photos.length; i++) {
        if (i === props.hotel.photos.length - 1) {
            if ((i + 1) % 3 === 1) {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
            else if (i % 3 === 0 || i % 3 === 1) {
                let x = props.hotel.photos[i].thumbnailUrl
                x = x.split("=")
                x[1] = "medium"
                x = x.join("=")
                imglist.push(x)
            }
            else if ((i) % 3 === 2) {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
        }
        else {
            if (i % 3 === 0 || i % 3 === 1) {
                let x = props.hotel.photos[i].thumbnailUrl
                x = x.split("=")
                x[1] = "medium"
                x = x.join("=")
                imglist.push(x)
            }
            else {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
        }
    }
    console.log(imglist)

    return (
        <Fragment>
            <Container>
            <div className="d-flex m-1">
            <div className='me-1 mt-2'><img height={407} width={550} style={{"height":407,"width":550}} src={img[0]} alt='none'></img> </div>
            <div className='m-1'>
                <div className='d-flex '>
                    <div className='m-1'><img style={{"height":200,"width":275}} src={img[1]} alt='none'></img></div>
                    <div className='m-1'><img style={{"height":200,"width":275}} src={img[2]} alt='none'></img></div>
                </div>
                <div className='d-flex '>
                    <div className='m-1'><img style={{"height":200,"width":275}} src={img[3]} alt='none'></img></div>
                    <div className='m-1'><img style={{"height":200,"width":275}} src={img[4]} alt='none'></img></div>
                </div>
            </div>
            <Button variant="light" className="more-photos" onClick={() => handleImage()}>
              <span className="d-flex">
                <span><CgMenuGridO className="mt-1 me-1"/></span><span>Show all photos</span>
              </span>
            </Button>
            </div>

            </Container>
              <Modal
                dialogClassName="modal-90w"
                show={image}
                scrollable={true}
                size="fullscreen"
          >
              <Modal.Header>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => handleImage()}></button>
              </Modal.Header>
              <Modal.Body className="d-flex flex-wrap">
                {
                  imglist.map((i)=>{
                    console.log(i)
                    let m = i.split("=")
                    if(m[1]=='medium')
                    {
                      return(
                        <img style={{"height":200,"width":307}} className='m-1' src={i} alt='none'/>
                        )
                    }
                    else
                    {
                      return(
                        <img style={{"height":407,"width":650}} className='m-1' src={i} alt='none'/>
                      )
                    }
                   
                  })
                }
              </Modal.Body>

          </Modal>
        </Fragment>
    )
}