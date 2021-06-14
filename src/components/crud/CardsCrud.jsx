import { Box, Button, FormControl, FormLabel, HStack, Icon, Img, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdClose, MdUpdate } from 'react-icons/md'
import { db } from '../../firebase/firebase-config'
import {useSelector, useDispatch} from "react-redux"
import { fileUpload } from '../../helpers/fileUpload'
import {crudSearch} from "../../actions/crudActions"
import Swal from "sweetalert2"


const CardsCrud = () => {

    const [cards, setCards] = useState([])
    const [change, setChange] = useState(true)
    const searchCrud = useSelector(state => state.crud.search)
    const dispatch = useDispatch()


    // const auth = async ( )=>{
        
    //     const apiKey = "dvifpaPG0mjH0GVByWcxhy0nfltmawPpodjgF9g4s6F"
    //     const objectKey ={
    //         "apiKey": apiKey
    //     }
    //     const videoId = "vi4WYBRq0TLtekerHex0dURh"        
    //     let resp = await axios.post(`https://sandbox.api.video/auth/api-key`,objectKey)
    //     let resp = await axios.get(`https://ws.api.video/videos/${videoId}`)
    //     console.log(resp);
    // }


    const handleDelete = async (movie)=>{
        let hola = await db.doc(`movies/${movie.id}`).delete()
        Swal.fire({
            icon: 'success',
            title: '!Genial¡',
            text: 'Ha sido eliminada correctamente'
          })
        dispatch(crudSearch([]))
    }

    const handleUpdate = async (e,movie)=>{
        let genre = e.target.parentElement.parentElement.parentElement
        let area = genre.querySelector("#update-description-area")
        let image = genre.querySelector("#update-image")
        let inputs = genre.querySelectorAll("input")
        for (const input of inputs) {
            input.disabled = false
            input.style.border = "1px solid white"
            if(input.name === "update"){
                input.style.backgroundColor = "teal"
            }

        }
        area.disabled = false
        area.style.border = "1px solid white"
        image.style.display = "block"

    }

    const handleUpdateSubmit = async (e,movie) =>{
        e.preventDefault()
        let form = e.target
        let area = document.getElementById("update-description-area")
        let image = document.getElementById("image-element")
        let inputs = form.querySelectorAll("input")
        let updatedMovie = {}
        for (const input of inputs) {
            if(input.name === "update" || input.name === "update-image-input" ){
                
                continue
            }
            if(input.name === "calification" || input.name === "year" || input.name === "duration"){
                updatedMovie[input.name] = +input.value
            }else if(input.name === "nameMovie"){
                updatedMovie[input.name] = input.value.toUpperCase()
            }else{
                updatedMovie[input.name] = input.value
            }
        }
        updatedMovie[area.name] = area.value
        updatedMovie.imageUrl = image.src
        let resp = await db.doc(`movies/${movie.id}`).update(updatedMovie)
        Swal.fire({
            icon: 'success',
            title: '!Bien!',
            text: 'Ha sido actualizado'
          })
        dispatch(crudSearch([]))
    }


    const handleChangeImage = () =>{
        let inputFile = document.getElementById("update-image-input")
        inputFile.click()
    }

    const handleNewImage = async (e) =>{
        let file = e.target.files[0]
        let secureUrl = await fileUpload(file)
        let image = document.getElementById("image-element")
        image.src = secureUrl
        console.log(secureUrl);
    }

    return (
        <Box>
            {
                !searchCrud.length
                ?<Text></Text>
                :searchCrud.map(movie =>
                <Box id="update-form" as="form" m="10px" key={movie.id} onSubmit={(e)=>handleUpdateSubmit(e,movie)} >
                    <HStack spacing={10} px="10px" bgColor="whiteAlpha.300" height="250px" >
                    <VStack width="250px" >
                    <FormControl id="update-name-movie" display="flex" alignItems="baseline" >
                        <Input textAlign="center"  name="nameMovie" disabled border="none" defaultValue={movie.nameMovie} type="text" />
                        </FormControl>
                    <Img id="image-element" name="image" height="120px" src={movie.imageUrl} />
                    <Button id="update-image" display="none" colorScheme="teal" onClick={handleChangeImage} >Cambiar foto</Button>
                    <Input id="update-image-input" display="none" name="update-image-input" onChange={handleNewImage} type="file" />
                    </VStack>
                    <FormControl  id="update-description"   >
                        <FormLabel>{`Descripción: `}</FormLabel>
                        <Textarea id="update-description-area" h="100px" wordBreak="break-word"  name="description" disabled border="none" defaultValue={movie.description}  />
                    </FormControl>
                    
                    <VStack alignItems="start" width="400px" >

                        <FormControl id="update-calification" display="flex" alignItems="baseline" >
                        <FormLabel>{`Calification: `}</FormLabel>
                        <Input  name="calification" disabled border="none" step="0.1" defaultValue={movie.calification} type="number" />
                        </FormControl>
                        <FormControl id="update-year" display="flex" alignItems="baseline" >
                        <FormLabel>{`Año: `}</FormLabel>
                        <Input  name="year" disabled border="none" defaultValue={movie.year} type="number" />
                        </FormControl>
                        <FormControl id="update-genre" display="flex" alignItems="baseline" >
                        <FormLabel>{`Género: `}</FormLabel>
                        <Input px={1} name="genre" disabled border="none" defaultValue={movie.genre} type="text" />
                        </FormControl>
                        <FormControl id="update-duration" display="flex" alignItems="baseline" >
                        <FormLabel>{`Duración: `}</FormLabel>
                        <Input  name="duration" disabled border="none"  defaultValue={movie.duration} type="number" />
                        </FormControl>
                        
                    </VStack>
                    <VStack>
                        <Icon cursor="pointer" width="30px" h="30px" borderRadius="4px" bgColor="red" as={MdClose} onClick={()=>handleDelete(movie)} />
                        <Icon cursor="pointer" borderRadius="4px" width="30px" h="30px"  bgColor="teal.400" as={MdUpdate} onClick={(e)=>handleUpdate(e,movie)} />
                        <Input value="Actualizar" cursor="pointer" name="update" disabled type="submit" />
                    </VStack>
                    </HStack>
                    
                </Box>)
            }
        </Box>
    )
}

export default CardsCrud
