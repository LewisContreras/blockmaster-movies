import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { db } from '../../firebase/firebase-config'
import { fileUpload } from '../../helpers/fileUpload'
import Swal from "sweetalert2"

const FormCrud = () => {

    const formik = useFormik({
        initialValues:{
            nameMovie : "",
            description:"",
            genre:"",
            year: 0,
            calification:0,
            duration:0,
            imageUrl:""
        },
        validationSchema: Yup.object({
            nameMovie: Yup.string()
              .min(1, "Debe tener al menos 1 caracter")
              .required('Este campo es requerido'),
            description: Yup.string()
            .max(300, "Puede tener como máximo 300 caracteres")
            .min(50,"Debe tener como minimo 50 caracteres")
            .required("Este campo es requerido"),
            genre: Yup.string()
              .max(15, 'Debe tener 15 caracteres o menos')
              .min(1, "Debe tener al menos 1 caracter")
              .required('Este campo es requerido'),
            imageUrl: Yup.string().min(1,"Debe elegir una imagen").required("requerido"),
            year: Yup.number()
            .min(1800,"Debe ser amyor a 1800")
            .max(2022,"Debe ser menor a 2023")
            .required("Requerido"),
            calification: Yup.number()
            .min(0,"Debe ser mayor a 0")
            .max(10,"Debe ser menor a 10")
            .required("Requerido"),
            duration: Yup.number()
            .min(20,"Debe ser mayor a 20")
            .max(600,"Debe ser menor a 600")
            .required("Requerido")
        }),
        validateOnChange: values =>{
            console.log(values);
        },
        onSubmit: values =>{
            values.nameMovie = values.nameMovie.toUpperCase()
            db.collection("movies").add(values)
            Swal.fire({
                icon: 'success',
                title: '!Genial!',
                text: 'Se ha agregado la película'
              })
        }
    })

    const handleImage = async  (e)=>{
        let file = e.target.files[0]
        if(file){
            let secureUrl = await fileUpload(file)
            console.log(secureUrl);
            formik.values.imageUrl = secureUrl
        }
        
        
    }

   const handleReset = (e) =>{
       e.preventDefault()
       e.target.reset()
   }

    return (
        <Flex mt="20px" justifyContent="center" >
            <Box maxWidth="500px" mb="20px" borderRadius="10px" p="20px" bgColor="whiteAlpha.300" >
                <Box as="form" onSubmit={(e)=>{
                    formik.handleSubmit()
                    handleReset(e)
                }} >
                    <Text textAlign="center" fontSize="2xl" color="brand.primary" >Agrega una nueva película</Text>
                    <VStack spacing="20px" >
                        <FormControl id="movie-name" >
                            <FormLabel>Nombre *</FormLabel>
                            <Input type="text" name="nameMovie" value={formik.values.nameMovie} onChange={formik.handleChange} />
                            {formik.errors.nameMovie ? <Box>{formik.errors.nameMovie}</Box>:null}
                        </FormControl>
                        <FormControl id="movie-description" >
                            <FormLabel>Descripción *</FormLabel>
                            <Textarea height="fit-content" name="description" value={formik.values.description} onChange={formik.handleChange} ></Textarea>
                            {formik.errors.description ? <Box>{formik.errors.description}</Box>:null}
                        </FormControl>
                        <FormControl id="movie-genre" >
                            <FormLabel>Género *</FormLabel>
                            <Input type="text" name="genre" value={formik.values.genre} onChange={formik.handleChange} />
                            {formik.errors.genre ? <Box>{formik.errors.genre}</Box>:null}
                        </FormControl>
                        <FormControl id="movie-image" >
                            <FormLabel  >Imagen *</FormLabel>
                            <Input type="file" name="duration"  onChange={handleImage} />
                            {formik.errors.imageUrl ? <Box>{formik.errors.imageUrl}</Box>:null}
                        </FormControl>
                        <HStack alignItems="start" spacing="20px" >
                        <FormControl id="movie-year" >
                            <FormLabel>Año *</FormLabel>
                            <Input type="number" name="year" value={formik.values.year} onChange={formik.handleChange} />
                            {formik.errors.year ? <Box>{formik.errors.year}</Box>:null}
                        </FormControl>
                        
                        <FormControl id="movie-calification" >
                            <FormLabel>Calificación *</FormLabel>
                            <Input type="number" step="0.1" name="calification" value={formik.values.calification} onChange={formik.handleChange} />
                            {formik.errors.calification ? <Box>{formik.errors.calification}</Box>:null}
                        </FormControl>
                        <FormControl id="movie-duration" >
                            <FormLabel  >Duración *</FormLabel>
                            <Input type="number" name="duration" value={formik.values.duration} onChange={formik.handleChange} />
                            {formik.errors.duration ? <Box>{formik.errors.duration}</Box>:null}
                        </FormControl>
                        
                        </HStack>
                        
                        <Button type="submit" bgColor="blackAlpha.600" width="60%" >Enviar</Button>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default FormCrud
