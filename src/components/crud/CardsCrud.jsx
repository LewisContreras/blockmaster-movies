import { Box, Button, Center, FormControl, FormLabel, HStack, Icon, Img, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { MdClose, MdUpdate } from 'react-icons/md'
import { db } from '../../firebase/firebase-config'
import {useSelector, useDispatch} from "react-redux"
import { fileUpload } from '../../helpers/fileUpload'
import {crudSearch} from "../../actions/crudActions"
import Swal from "sweetalert2"
import "../../styles/animations.css"


const CardsCrud = () => {

    const [cards, setCards] = useState([])
    const [change, setChange] = useState(true)
    const searchCrud = useSelector(state => state.crud.search)
    const dispatch = useDispatch()


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
                input.style.backgroundColor = "#00A300"
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
        dispatch(crudSearch(""))
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
        <Box >
            {
                !searchCrud.length
                ?<Text></Text>
                :searchCrud.map(movie =>
                <Center className="scene_element scene_element--fadein" position="fixed" zIndex="100" w="100vw" h="100vh" top="0"  id="update-form" as="form" bgColor="rgba(15,14,23,0.9)"  p="10px" key={movie.id} onSubmit={(e)=>handleUpdateSubmit(e,movie)} >
                    <Box position="relative" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px"   bgColor="brand.background" border="4px solid" borderColor="brand.primary" height="500px" >
                        <Box position="absolute" top="20px" cursor="pointer" borderRadius="4px" bgColor="red" right="20px" onClick={()=>dispatch(crudSearch(""))}><Icon  color="white" fontSize="30px" as={MdClose} /></Box>
                        <HStack className="scene_element scene_element--fadeinright" px="10px" spacing={10} >
                    <VStack width="250px" >
                    <FormControl id="update-name-movie" display="flex" alignItems="baseline" >
                        <Input textAlign="center"  name="nameMovie" disabled border="none" defaultValue={movie.nameMovie} type="text" />
                        </FormControl>
                    <Img id="image-element" name="image" height="240px" src={movie.imageUrl} />
                    <Button id="update-image" display="none" colorScheme="teal" onClick={handleChangeImage} >Cambiar foto</Button>
                    <Input id="update-image-input" display="none" name="update-image-input" onChange={handleNewImage} type="file" />
                    </VStack>
                    
                    
                    <VStack alignItems="start" width="400px" >
                        <FormControl  id="update-description"   >
                            <FormLabel>{`Descripción: `}</FormLabel>
                            <Textarea id="update-description-area" h="160px" wordBreak="break-word"  name="description" disabled border="none" defaultValue={movie.description}  />
                        </FormControl>
                        <HStack spacing={10} >
                        <FormControl id="update-calification" display="flex" alignItems="baseline" >
                        <FormLabel>{`Calification: `}</FormLabel>
                        <Input h="30px" width="60px" name="calification" disabled border="none" step="0.1" defaultValue={movie.calification} type="number" />
                        </FormControl>
                        <FormControl id="update-year" display="flex" alignItems="baseline" >
                        <FormLabel>{`Año: `}</FormLabel>
                        <Input h="30px" width="80px" name="year" disabled border="none" defaultValue={movie.year} type="number" />
                        </FormControl>
                        </HStack>
                        <HStack spacing={8}>
                        <FormControl id="update-genre" display="flex" alignItems="baseline" >
                        <FormLabel>{`Género: `}</FormLabel>
                        <Input px={1} w="100px" name="genre" disabled border="none" defaultValue={movie.genre} type="text" />
                        </FormControl>
                        <FormControl id="update-duration" display="flex" alignItems="baseline" >
                        <FormLabel>{`Duración: `}</FormLabel>
                        <Input  name="duration" width="80px" disabled border="none"  defaultValue={movie.duration} type="number" />
                        </FormControl>
                        </HStack>
                        
                        
                    </VStack>
                    </HStack  >
                    <HStack mt="20px" className="scene_element scene_element--fadeinleft" >
                        <HStack px="10px" cursor="pointer"  h="40px" borderRadius="4px" bgColor="red" onClick={()=>handleDelete(movie)} ><Text fontWeight="600" >Eliminar </Text><Icon fontSize
                        ="20px" as={MdClose}  /></HStack>
                        <HStack px="10px" cursor="pointer"  h="40px" borderRadius="4px" bgColor="teal.600" onClick={(e)=>handleUpdate(e,movie)} ><Text fontWeight="600" >Modificar </Text><Icon fontSize
                        ="20px"  as={MdUpdate}  /></HStack>
                        <Input value="Actualizar" cursor="pointer" name="update" disabled type="submit" />
                    </HStack>
                    </Box>
                    
                </Center>)
            }
        </Box>
    )
}

export default CardsCrud
