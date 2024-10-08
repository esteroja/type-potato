import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import React, { FormEvent, useEffect } from "react"
import { useState } from "react"

export default function MyForm() {
  const [form, setForm] = useState({ username: "", password: "" })
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)

    // console.log({username, password});
  }

  /*     useEffect(()=>{
        console.log("Renders every time");
    });

    useEffect(()=>{
        console.log("Renders first time");
    }, []);

    useEffect(()=>{
        console.log("Renders every time username changes");
    }, [username]); */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    /*         setForm(prevForm => {
            return{

            }
        }) */
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "50px"
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h6"
            gutterBottom
            align="center"
          >
            Sisselogimine
          </Typography>
          <TextField
            name="username"
            id="outlined-basic"
            label="kasutajanimi"
            variant="outlined"
            // onChange={(event)=> setUsername(event.target.value)}/>
            onChange={handleChange}
          ></TextField>
          <TextField
            name="password"
            id="outlined-basic"
            label="parool"
            //onChange={(event)=> setPassword(event.target.value)}/>
            onChange={handleChange}
          ></TextField>

          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "lightcoral" }}
          >
            Logi sisse
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
